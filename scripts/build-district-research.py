#!/usr/bin/env python3
"""Transcribe the eight district workbook sheets and link every audited source."""
import argparse
import json
import posixpath
import re
from pathlib import Path
from xml.etree import ElementTree as ET
from zipfile import ZipFile

RESEARCH = Path(__file__).resolve().parents[1] / "research"
ARCHIVE = RESEARCH / "source_docs/2026-11-15/district-sourcing"
WORKBOOK = ARCHIVE / "China_Jewelry_District_Sourcing_Master_List_2026-11-15.xlsx"
NOTES = ARCHIVE / "China_Jewelry_District_Sourcing_Research_Notes_2026-11-15.md"
OUTPUT = RESEARCH / "data/district-registers.json"
XML = {"x": "http://schemas.openxmlformats.org/spreadsheetml/2006/main"}
REL_ID = "{http://schemas.openxmlformats.org/officeDocument/2006/relationships}id"

SHEETS = {
    "START HERE": ("district-start", "District workbook overview", 12),
    "SUPPLIER LEADS": ("district-leads", "District supplier leads", 41),
    "MARKETS DISTRICTS": ("district-markets", "Markets and districts", 19),
    "QUOTE BENCHMARKS": ("district-prices", "District quote benchmarks", 12),
    "VISITOR EXPERIENCES": ("district-visits", "District visitor reports", 7),
    "SOURCE LIBRARY": ("district-library", "Workbook source library", 20),
    "RFQ & CHECKLIST": ("district-checklist", "District RFQ checklist", 14),
    "TARGET FIRST": ("district-original-shortlist", "Workbook shortlist", 11),
}

LEAD_NOTES = {
    "CN-001": "Company contact and lab-diamond range match. Written MOQ, exact-stone stock, 14K and insured Illinois freight open.",
    "CN-002": "Firsthand delivery post matches the 2020 moissanite purchase. Current lab-diamond capability and contact authority open.",
    "CN-003": "Marketplace record matches this legal name and published phone. Moissanite emphasis. Relationship to other Provence entities open.",
    "CN-004": "Public phone, name and gold/platinum categories match. Foreign trade, lab diamonds and custom CAD lack support on the cited page.",
    "CN-005": "Indexed contact matches company site. Own FAQ gives design-dependent MOQ. Ask for registered entity, 1 piece and insured shipment.",
    "CN-006": "Association profile indexed at company_218.html. Public phone matches. Customer-material work listed. Export and shipping open.",
    "CN-014": "Association article supports jewelry processing identity. Workbook phone, one-piece terms and present export open.",
    "CN-016": "Association profile indexed at company_1.html. Phone matches and public email found. Customer-material K-gold work listed.",
    "CN-017": "No published contact in the workbook. Keep as a discovery lead.",
    "CN-023": "Indexed company-specific association profile supports name. Confirm 14K and one-piece order. Check exact current contact.",
    "CN-024": "Indexed company-specific association profile supports phone and jewelry capability. One-piece service unverified.",
    "CN-025": "Indexed association directory supports name, Shawan location and phone. One-piece lab work and export open.",
    "CN-027": "Readable association listing matches the trade name, phone, and K-gold and K-silver setting specialties.",
    "CN-033": "Trade-show listing matches business email and names a Panyu production base. Ask about sample MOQ and lab-grown stones.",
    "CN-035": "Listed specialty is diamond processing. Screen as a possible stone lead.",
    "CN-036": "Freight lead. Confirm carrier acceptance, diamond coverage and one-piece scope directly.",
    "CN-037": "Freight and customs lead. Indexed directory supports the archived phone and freight role.",
    "CN-038": "Existing tracked supplier V017. Marketplace verification page is readable. $412 was before freight, exact report open.",
    "CN-039": "Existing tracked supplier V005. Company site and Panyu identity as advertised. Invoice payee, weight and freight remain open.",
    "CN-040": "Existing tracked supplier V004. Good Century-branded listings appear under Hanchen. Separate contact V014 remains distinct.",
    "CN-041": "Existing tracked supplier V020. Readable Qianao platform profile. The $235 offer still lacks exact stone and alloy weight.",
}

PANYU_UNCONFIRMED = "Archived association lead. Current contact and one-piece export terms remain unverified."


def all_text(node):
    return "".join(element.text or "" for element in node.findall(".//x:t", XML))


def column_index(reference):
    number = 0
    for letter in re.match(r"^[A-Z]+", reference)[0]:
        number = number * 26 + ord(letter) - ord("A") + 1
    return number - 1


def workbook_rows():
    with ZipFile(WORKBOOK) as package:
        def read(path):
            return ET.fromstring(package.read(path))

        strings = [all_text(node) for node in read("xl/sharedStrings.xml")]
        links = {
            node.attrib["Id"]: node.attrib["Target"]
            for node in read("xl/_rels/workbook.xml.rels")
        }
        for sheet in read("xl/workbook.xml").findall("x:sheets/x:sheet", XML):
            target = links[sheet.attrib[REL_ID]]
            path = posixpath.normpath(posixpath.join("xl", target)).lstrip("/")
            rows = []
            for row in read(path).findall("x:sheetData/x:row", XML):
                values = []
                for cell in row.findall("x:c", XML):
                    index = column_index(cell.attrib["r"])
                    values.extend([""] * (index + 1 - len(values)))
                    value = cell.findtext("x:v", default="", namespaces=XML)
                    if cell.get("t") == "s":
                        value = strings[int(value)]
                    elif cell.get("t") == "inlineStr":
                        value = all_text(cell)
                    if cell.find("x:f", XML) is not None:
                        raise ValueError("Workbook has a formula. Review cached values before archiving.")
                    values[index] = value
                rows.append(values)
            yield sheet.attrib["name"], rows


def source_link(url):
    return {"text": url, "href": url}


def build():
    book = dict(workbook_rows())
    assert book.keys() == SHEETS.keys()
    register = {}
    workbook_urls = set()
    for name, (key, label, count) in SHEETS.items():
        if name == "START HERE":
            columns, rows = ["Field", "Workbook value"], book[name]
        else:
            columns, *rows = book[name]
        assert len(rows) == count, (name, len(rows))
        titles = list(columns)
        if key in {"district-leads", "district-original-shortlist"}:
            titles.insert(1, "November 15 evidence check")
        records = []
        for row in rows:
            row = row + [""] * (len(columns) - len(row))
            assert len(row) == len(columns), (name, row)
            values = []
            for value in row:
                if value.startswith(("http://", "https://")):
                    workbook_urls.add(value)
                    values.append(source_link(value))
                else:
                    values.append(value)
            if key in {"district-leads", "district-original-shortlist"}:
                values.insert(1, LEAD_NOTES.get(row[0], PANYU_UNCONFIRMED))
            records.append(values)
        note = f"Original workbook tab {name}. Blank fields reflect the source."
        if key in {"district-leads", "district-original-shortlist"}:
            note += " The evidence check records where the later review qualified a claim."
        register[key] = {"label": label, "columns": titles, "note": note, "rows": records}

    notes_urls = {
        url.rstrip(".")
        for url in re.findall(r"https?://[^\s)>]+", NOTES.read_text())
    }
    supplied = workbook_urls | notes_urls
    source_checks = {}
    for line in (ARCHIVE / "source-checks.tsv").read_text().splitlines():
        if not line or line.startswith("#"):
            continue
        url, kind, status, note = line.split("\t")
        assert url not in source_checks, url
        source_checks[url] = [kind, status, note]
    missing = supplied - source_checks.keys()
    assert not missing, sorted(missing)
    register["district-audit"] = {
        "label": "District source checks",
        "columns": ["Source", "Origin", "Class", "Access result", "Finding and evidence limit"],
        "note": f"Checked November 15, 2026. Covers all {len(supplied)} distinct URLs from the workbook and companion notes, plus added sources.",
        "rows": [
            [source_link(url), "Supplied" if url in supplied else "Added during review", *result]
            for url, result in source_checks.items()
        ],
    }
    register["district-new-leads"] = {
        "label": "New leads from the review",
        "columns": ["Supplier", "Location", "Ask for", "Evidence and gap", "Contact"],
        "note": "Two newly identified quote routes. Published one-piece terms need an order-specific confirmation.",
        "rows": [
            [
                {"text": "Alpha Jewelry / Guangzhou Guya", "href": "district-sourcing.html#alpha"},
                "JuYing, Panyu",
                "One finished 14K or 18K IGI lab-diamond pendant and a semi-mount price",
                "Company advertises one-piece MOQ, certified center stones and express shipping. Exact price and consumer shipment unconfirmed.",
                {"text": "Company contact", "href": "https://www.alphajewelry.com/contact/"},
            ],
            [
                {"text": "Peishang / 广州市尚饰有限公司", "href": "district-sourcing.html#peishang"},
                "Daluotang, Panyu",
                "Solid 585 and 750 mounting, customer-stone setting, and sample fees",
                "Company advertises one-piece solid-gold MOQ. Published contact matches a prior assessment. Product scope and consumer shipment unconfirmed.",
                {"text": "Company contact", "href": "https://psjewelrymanufacturer.com/contact-us/"},
            ],
        ],
    }
    return json.dumps(register, ensure_ascii=False, indent=2) + "\n", len(supplied)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--check", action="store_true")
    args = parser.parse_args()
    text, sources = build()
    if args.check:
        if not OUTPUT.exists() or OUTPUT.read_text() != text:
            raise SystemExit(f"Out of date: {OUTPUT}")
    else:
        OUTPUT.write_text(text)
    print(f"{len(SHEETS)} workbook tabs and {sources} distinct supplied URLs accounted for.")


if __name__ == "__main__":
    main()
