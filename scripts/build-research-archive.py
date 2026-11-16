#!/usr/bin/env python3
"""Build the searchable 2026-11-15 research snapshots from the archived DOCX files."""
import argparse
import html
import json
import re
from collections import Counter, defaultdict
from pathlib import Path
from urllib.parse import quote
from xml.etree import ElementTree as ET
from zipfile import ZipFile

ROOT = Path(__file__).resolve().parents[1]
RESEARCH = ROOT / "research"
ORIGINALS = RESEARCH / "source_docs/2026-11-15"
REPORTS = {
    "sourcing": "Chinese_Jewelry_Sourcing_Complete_Research_Record_2026-11-15.docx",
    "wholesale": "Diamond_Wholesale_Market_Complete_Research_Report_Nov_2026.docx",
    "marquise": "Marquise_Tennis_Necklace_Research_and_Custom_Buying_Guide.docx",
}
FIGURE_ALTS = {
    "marquise": (
        "Near-continuous horizontal marquise links worn close to the collarbone",
        "Kay reference with alternating marquise and rounds, adjustable rings and a plain cable-chain back",
    ),
    "wholesale": (
        "Archived wholesale price series for 2 ct E–F VS fancy lab-grown diamonds",
        "Comparison of wholesale and retail figures for roughly 2 ct lab-grown diamonds",
        "Estimated global 2025 values at successive stages of the lab diamond supply chain",
        "Indian polished lab diamond export value per carat for August 2023 through 2026",
    ),
}
NS = {
    "w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main",
    "r": "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
    "a": "http://schemas.openxmlformats.org/drawingml/2006/main",
}


def qualified(prefix, name):
    return f"{{{NS[prefix]}}}{name}"


def slug(text):
    return re.sub(r"[^a-z0-9]+", "-", text.lower()).strip("-")


def record_anchor(title):
    match = re.match(r"^([VQ]\d{3}|D\d{3}|Product #\d+)\b", title)
    return slug(match[1]) if match else slug(title)


def read_document(path):
    """Read in document order. Preserve table cells, links and image locations."""
    with ZipFile(path) as package:
        relationships = {
            item.get("Id"): item.get("Target")
            for item in ET.fromstring(package.read("word/_rels/document.xml.rels"))
        }
        root = ET.fromstring(package.read("word/document.xml"))

    def paragraph(element):
        plain, markup, urls, images = [], [], [], []
        for node in element:
            kind = node.tag.rsplit("}", 1)[-1]
            if kind not in {"r", "hyperlink"}:
                continue
            parts = []
            for child in node.iter():
                if child.tag == qualified("w", "t"):
                    parts.append(child.text or "")
                elif child.tag in {qualified("w", "tab"), qualified("w", "br")}:
                    parts.append(" ")
                elif child.tag == qualified("a", "blip"):
                    images.append(relationships.get(child.get(qualified("r", "embed")), ""))
            text = "".join(parts)
            url = relationships.get(node.get(qualified("r", "id")), "")
            if url.startswith(("https://", "http://")):
                urls.append(url)
                markup.append(f'<a href="{html.escape(url)}">{html.escape(text or url)}</a>')
            else:
                markup.append(html.escape(text))
            plain.append(text)
        style = element.find("w:pPr/w:pStyle", NS)
        return {
            "text": "".join(plain).strip(),
            "html": "".join(markup).strip(),
            "urls": urls,
            "images": images,
            "style": style.get(qualified("w", "val")) if style is not None else "",
        }

    blocks = []
    anchors = Counter()
    for child in root.find("w:body", NS):
        if child.tag == qualified("w", "p"):
            block = paragraph(child)
            if not block["text"] and not block["images"]:
                continue
            if block["style"].startswith("Heading"):
                base = record_anchor(block["text"])
                anchors[base] += 1
                block["anchor"] = base if anchors[base] == 1 else f"{base}-{anchors[base]}"
            blocks.append(block)
        elif child.tag == qualified("w", "tbl"):
            rows = [
                [[paragraph(p) for p in cell.findall("w:p", NS)] for cell in row.findall("w:tc", NS)]
                for row in child.findall("w:tr", NS)
            ]
            blocks.append({"rows": rows})
    return blocks


def cell_text(cell):
    return " / ".join(p["text"] for p in cell if p["text"])


def find_table(blocks, first_cells):
    return next(
        block["rows"] for block in blocks if "rows" in block
        and tuple(cell_text(cell) for cell in block["rows"][0]) == first_cells
    )[1:]


def numbered_records(blocks, pattern):
    result = []
    for index, block in enumerate(blocks):
        if block.get("style") != "Heading2":
            continue
        match = re.fullmatch(pattern, block["text"])
        if not match:
            continue
        body = []
        for following in blocks[index + 1:]:
            if following.get("style", "").startswith("Heading"):
                break
            body.append(following)
        fields = dict(
            field["text"].split("  ", 1)
            for field in body if "  " in field.get("text", "")
        )
        urls = tuple(dict.fromkeys(url for field in body for url in field.get("urls", [])))
        result.append((match.groups(), block["anchor"], fields, urls))
    return result


def link(label, href):
    return {"text": label, "href": href}


def sourcing_link(label, anchor):
    return link(label, f"records/sourcing.html#{anchor}")


def section_link(label, key, title):
    return link(label, f"records/{key}.html#{slug(title)}")


def section_blocks(blocks, title):
    index = next(index for index, block in enumerate(blocks) if block.get("text") == title)
    end = next(
        (i for i in range(index + 1, len(blocks)) if blocks[i].get("style", "").startswith("Heading")),
        len(blocks),
    )
    return blocks[index + 1:end]


def table_data(sourcing, marquise):
    head = lambda *names: find_table(sourcing, names)
    vendors = numbered_records(sourcing, r"(V\d{3})\s{2,}(.+?)")
    vendor_names = {keys[0]: keys[1] for keys, _, _, _ in vendors}

    quote_rows, quote_amounts = [], defaultdict(list)
    quotes = numbered_records(sourcing, r'(Q\d{3})\s+(V\d{3}) / (.+?)\s*\|\s*(\$[\d,.]+)')
    for (qid, vid, rep, amount), anchor, fields, _ in quotes:
        stage = re.search(r"stage (.*?);", fields["Record"])[1]
        quote_rows.append([
            sourcing_link(qid, anchor), f"{vendor_names[vid]} / {rep} ({vid})",
            fields["Product"], amount, stage,
            fields["Record"].split("; stage", 1)[0], fields["Pricing"], fields["Open item"],
        ])
        quote_amounts[vid].append((qid, amount))
    extras = head("VENDOR", "PRODUCT", "PRICE", "EVIDENCE / QUALIFICATION")
    extra_ids = ["V017", "V007", "V007", "V012", "V012", "V006", "V006", "", "V002", "V001"]
    assert len(extras) == len(extra_ids)
    for index, (row, vid) in enumerate(zip(extras, extra_ids), 1):
        name, product, price, notes = map(cell_text, row)
        qid = f"Add. {index:02}"
        if vid:
            quote_amounts[vid].append((qid, price))
        quote_rows.append([
            sourcing_link(qid, "quotes-and-updates-not-present-in-the-nov-11-v4-quote-rows"),
            f"{name} ({vid})" if vid else name, product, price,
            "Prior payment report" if index == 10 else "Supplemental record", "See source notes", notes, "",
        ])

    qid, vid, amount = "Q035", "V005", "$474.49"
    quote_rows.append([
        link(qid, "../markdown-viewer.html?file=research/tonglin-pendant-pricing-review.md"),
        f"{vendor_names[vid]} / Fannie ({vid})",
        "2.04 ct E/VS1 lab-grown oval, solid 14K YG, visible-bail four-prong pendant, no chain",
        amount, "PI summarized in supplied note", "2026-11-13 · pendant subtotal",
        "CAD/wax $20 included. $45 DAP freight brings the quote to $519.49 before buyer charges.",
        "Original PI, exact IGI report and video, gold-only weight and price cap, deposit credit, insured freight.",
    ])
    quote_amounts[vid].append((qid, amount))

    supplier_rows = []
    for (vid, name), anchor, fields, _ in vendors:
        brand, reps = fields["Brand / rep(s)"].split("|", 1)
        stage, priority, confidence = map(str.strip, fields["Stage / priority / confidence"].split("|", 2))
        if vid == "V017":
            stage += " → $412 supplemental quote"
        offers = quote_amounts[vid]
        price_cell = link(
            " · ".join(dict.fromkeys(amount for _, amount in offers)) if offers else "—",
            f"?view=quotes&q={vid}",
        ) if offers else "—"
        supplier_rows.append([
            sourcing_link(f"{name} ({vid})", anchor),
            f"{brand.strip()} · {reps.strip()}",
            f"{stage} · {priority}",
            price_cell,
            fields.get("Later conversations / corrected details", fields["Identity / notes"]),
            f'{fields["Location / established"]} · {confidence} · {fields["Snapshot / next action"]}',
        ])

    listings = numbered_records(sourcing, r"Product #(\d+) / (.+)")
    product_rows = []
    listing_amounts = defaultdict(list)
    listing_titles = defaultdict(list)
    for (product_id, supplier), anchor, fields, urls in listings:
        details = fields["Displayed range / MOQ"]
        listing_amounts[slug(supplier)].append(details.split(";")[0])
        listing_titles[slug(supplier)].append(fields["Advertised name"])
        product_rows.append([
            sourcing_link(product_id, anchor), supplier, fields["Advertised name"], details,
            fields["Variants / notes"], fields["Next check"], link("Marketplace", urls[0]) if urls else "",
        ])

    market_rows = []
    market_links = {}
    for block in sourcing:
        match = re.match(r"^(\d{2}) .+: Alibaba source$", block.get("text", ""))
        if match and block["urls"]:
            market_links[int(match[1])] = block["urls"][0]
    for row in head("#", "SUPPLIER / LEGAL STRING", "SNAPSHOT RATING", "GROUP", "KNOWN CONTACT"):
        number, name, rating, group, contact = map(cell_text, row)
        offers = listing_amounts[slug(name)]
        amount = ", ".join(dict.fromkeys(offers)) or "—"
        market_link = link("Archived storefront / search", market_links[int(number)]) if int(number) in market_links else ""
        market_rows.append([
            sourcing_link(name, "10-earlier-market-scan-all-73-supplier-records"),
            f"Market scan #{number}", f"Group {group}", amount, rating, contact, market_link,
        ])
        supplier_rows.append([
            name, contact, f"Marketplace lead · Group {group}", amount,
            " · ".join([rating, *listing_titles[slug(name)]]),
            link("Listings and variant notes", f"?view=listings&q={quote(name)}") if offers else market_link,
        ])

    review_rows = []
    first_index = "Firsthand review index"
    reviews = section_blocks(sourcing, first_index)
    assert len(reviews) == 58
    for review, source in zip(reviews[::2], reviews[1::2]):
        date, name, signal, notes = review["text"].split(" | ", 3)
        review_rows.append([name, date, signal, notes, link("Archived post", source["urls"][0])])
    later_index = "Additional high-relevance Reddit accounts discussed after Nov 4"
    for review in section_blocks(sourcing, later_index):
        name, notes = review["text"].split(" - ", 1) if " - " in review["text"] else review["text"].split(" (", 1)
        review_rows.append([name, "Later archive", "Buyer or community account", notes, link("Archived post", review["urls"][0])])

    pink_rows = []
    for row in head("SUPPLIER", "PRODUCT / MATERIAL", "CATALOG PRICE", "CAVEAT"):
        name, product, price, caveat = map(cell_text, row)
        pink_rows.append([name, product, price, caveat])

    tennis_rows = []
    for headers, title in (
        (("Case / status", "Specifications", "Reported amount"), "6  Verified Reddit price benchmarks: purchased versus advertised"),
        (("Seller / period", "Product and posted range", "Relevance / limitation"), "7  Reddit group-buy archive: closest offerings"),
    ):
        for row in find_table(marquise, headers):
            name, product, price = map(cell_text, row)
            tennis_rows.append([section_link(name, "marquise", title), product, price])

    # These names occur outside the tracked profile and market-prospect tables.
    additional = [
        ("Kuololit", "Sam", "Stock and custom benchmarks", "$750 (historical); $1,900 (buyer quote)",
         "Round-stone quote and uncertain 18K configuration", "records/marquise.html"),
        ("Hida Hitanda", "Buyer report", "Tennis necklace", "AUD $6,000",
         "21 ctw marquise, 10K white gold", "?view=tennis&q=Hida"),
        ("AK Gems", "Seller post", "Half-marquise necklace", "USD $4,850",
         "6.2 ctw, 16.5 g of 14K gold; asking price", "?view=tennis&q=AK%20Gems"),
        ("TTB Jewelry", "Buyer report", "Marquise bracelet", "USD $4,500 before tax",
         "6.5 in, 8 × 4 mm angled marquise, 10K yellow gold", "?view=tennis&q=TTB"),
        ("Julysnow", "Group buy", "Tennis bracelet", "From $655 + $35 worldwide shipping",
         "Broad group-buy starting price; exact marquise variant unconfirmed", "?view=tennis&q=Julysnow"),
        ("Kay", "Retail reference", "Adjustable mixed-cut necklace", "USD $4,999.99 on check",
         "14K white gold, 4 ctw, marquise and round, 18 in adjustable", "records/marquise.html#4-the-kay-adjustable-back-reference"),
        ("Blue Nile", "Retail reference", "Marquise bezel size examples", "See dated product listings",
         "18 in, 14K white gold, 7 / 15 / 20 ctw", "records/marquise.html#5-stone-size-benchmarks-with-published-dimensions"),
        ("Ouros / Golden Bird", "Prior buyer discussions", "Custom jewelry reference", "—",
         "Mixed comments in the archived review index", "records/sourcing.html#13-customer-review-reddit-research-index"),
        ("Xingyao Gems", "Prior buyer discussions", "Loose-stone lead", "—",
         "Limited independent review evidence in the dossier", "records/sourcing.html#13-customer-review-reddit-research-index"),
        ("Ritani", "Retail reference", "Loose oval lab diamond", "USD $716 in the dossier",
         "Retail listing snapshot and self-reported cost components", "records/wholesale.html#5-wholesale-versus-consumer-retail"),
        ("Guangzhou Mishang Jewelry", "Inventory filename", "Loose lab diamonds", "Pink halo $50–$510 display range",
         "May inventory plus separate catalog lead", "../markdown-viewer.html?file=research/diamond-sourcing.md"),
        ("Henan Eco Superhard", "Inventory filename", "Loose lab diamonds", "—",
         "Inventory filename indicates 197 stones", "../markdown-viewer.html?file=research/diamond-sourcing.md"),
        ("Guangxi Wuzhou Lanphear", "Pink pear market scan", "Pink pear halo", "USD $1,220 display",
         "1 ct, advertised 14K or 18K", "?view=pink&q=Lanphear"),
        ("Wuzhou Zhanhao", "Pink pear market scan", "Pink pear halo", "USD $1,126 display",
         "1.05 ct and 18K advertised; certification conflict", "?view=pink&q=Zhanhao"),
        ("Shenzhen Hong Yun Fu", "Two-stone RFQ shortlist", "Custom gold jewelry", "—",
         "Legacy project lead", "../markdown-viewer.html?file=necklace-rfq-package/docs/02_ranked_suppliers.md"),
        ("Mona Fine Jewelry", "Two-stone RFQ shortlist", "Custom gold jewelry", "—",
         "Legacy project lead", "../markdown-viewer.html?file=necklace-rfq-package/docs/02_ranked_suppliers.md"),
    ]
    for name, rep, scope, price, note, href in additional:
        supplier_rows.append([link(name, href), rep, scope, price, note, "Related research"])
    variants = head("#", "PRODUCT ID", "SUPPLIER", "CAPTURED VARIANT", "DISPLAY RANGE", "CONFLICT")
    assert (len(vendors), len(quotes), len(market_rows), len(listings), len(variants)) == (31, 34, 73, 28, 94)
    return {
        "suppliers": {
            "label": "Suppliers", "columns": ["Company / profile", "Brand / rep", "Stage or specialty", "Recorded figures", "Notes", "Evidence and next check"],
            "note": "31 tracked profiles, 73 marketplace leads, and related references. Repeated names reflect separate records or legal strings. Figures can cover different items, stages, currencies, or fee terms.",
            "rows": supplier_rows,
        },
        "quotes": {
            "label": "Quote register", "columns": ["Record", "Company / rep", "Configuration", "Recorded amount", "Stage", "Date and basis", "Fees, freight and terms", "Still to verify"],
            "note": "34 workbook quotes, 10 supplemental records, and the Nov 13 Tonglin update. Exact quotes, superseded quotes, and unconfirmed extras retain their original terms. Check the fee and freight column for the basis of each recorded amount.",
            "rows": quote_rows,
        },
        "market": {
            "label": "Market leads", "columns": ["Company", "Record", "Priority", "Advertised ranges", "Rating snapshot", "Archived contact", "Marketplace link"],
            "note": "73 November 4 marketplace leads. Names and groups are as captured. Ranges are attached by matching the legal string in the product listings. Missing prices reflect the evidence available.",
            "rows": market_rows,
        },
        "listings": {
            "label": "Catalog listings", "columns": ["Product ID", "Company", "Advertised name", "Displayed range and MOQ", "Variant caveats", "Next check", "Link"],
            "note": "28 distinct listings. The scan captured no configured SKU prices. Use the metal and variant notes to screen leads.",
            "rows": product_rows,
        },
        "variants": {
            "label": "Listing variants", "columns": ["Capture", "Product ID", "Company", "Variant", "Display range", "Conflict"],
            "note": "94 raw combinations, with intentional repeats of product IDs. Catalog endpoints can refer to silver, plating, different stones, or a bulk tier.",
            "rows": [[cell_text(cell) for cell in row] for row in variants],
        },
        "reviews": {
            "label": "Buyer feedback", "columns": ["Company or thread", "Archived date", "Reported experience", "Piece, price and context", "Source"],
            "note": "Archived buyer and community reports in the sourcing dossier. Gold, silver, moissanite and lab-diamond projects each retain their original descriptions.",
            "rows": review_rows,
        },
        "tennis": {
            "label": "Tennis jewelry", "columns": ["Seller / case", "Configuration / offer", "Amount or limitation"],
            "note": "Eight purchase, quote, and retail examples plus seven group-buy leads. Bracelet, necklace, dated promotion, USD, and AUD records each keep their original context.",
            "rows": tennis_rows,
        },
        "pink": {
            "label": "Pink pear halo", "columns": ["Company", "Configuration", "Catalog price", "Caveat"],
            "note": "Five leads for the separate pink pear double-halo design. These are catalog prices.",
            "rows": pink_rows,
        },
    }


def report_html(key, blocks):
    title = next(b["text"] for b in blocks if b.get("style") == "Title")
    toc = [b for b in blocks if b.get("style") == "Heading1"]
    originals = f'<a href="../source_docs/2026-11-15/{REPORTS[key]}">Original DOCX</a>'
    if key == "sourcing":
        originals += ' · <a href="../source_docs/2026-11-15/Chinese_Jewelry_Sourcing_Complete_Research_Record_2026-11-15.pdf">Original PDF</a>'
    body = []
    figure_number = 0
    for block in blocks:
        if "rows" in block:
            rows = block["rows"]
            if len(rows) == 1 and len(rows[0]) == 1:
                body.append(f'<blockquote>{" ".join(p["html"] for p in rows[0][0])}</blockquote>')
                continue
            output = ['<div class="table-scroll" tabindex="0" role="region" aria-label="Scrollable source table"><table><thead>']
            for i, row in enumerate(rows):
                if i == 1:
                    output.append("</thead><tbody>")
                tag = "th" if i == 0 else "td"
                attr = ' scope="col"' if i == 0 else ""
                output.append("<tr>" + "".join(
                    f'<{tag}{attr}>{"<br>".join(p["html"] for p in cell)}</{tag}>' for cell in row
                ) + "</tr>")
            output.append("</tbody></table></div>" if len(rows) > 1 else "</thead></table></div>")
            body.append("\n".join(output))
            continue
        if "anchor" in block:
            level = 2 if block["style"] == "Heading1" else 3 if block["style"] == "Heading2" else 4
            body.append(f'<h{level} id="{block["anchor"]}">{block["html"]}</h{level}>')
        elif block["style"] != "Title" and block["html"]:
            marker = "• " if block["style"].startswith("ListBullet") else ""
            body.append(f'<p>{marker}{block["html"]}</p>')
        for path in block["images"]:
            if key in FIGURE_ALTS:
                filename = f"{key}-{Path(path).name}"
                alt = html.escape(FIGURE_ALTS[key][figure_number])
                body.append(f'<img src="media/{filename}" alt="{alt}" loading="lazy">')
                figure_number += 1
            else:
                body.append(f'<p class="source-figure">Exhibit available in the {originals}.</p>')
    toc_items = "\n".join(f'<li><a href="#{b["anchor"]}">{b["html"]}</a></li>' for b in toc)
    return f'''<!doctype html>
<!-- Generated by scripts/build-research-archive.py from the archived DOCX. -->
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{html.escape(title)} · Jewelry Research Hub</title>
  <link rel="icon" href="../../necklace-rfq-package/dashboard/favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="../../markdown-viewer.css">
  <link rel="stylesheet" href="../research-tools.css">
</head>
<body>
  <header class="viewer-header"><a class="back-link" href="../archive.html">← Research archive</a><div class="viewer-actions">{originals}</div></header>
  <main class="viewer-main">
    <article class="paper markdown-body">
      <h1>{html.escape(title)}</h1>
      <p>Searchable transcription of the November 2026 source. See the original for pagination, exact layout and exhibits.</p>
      <nav class="record-toc" aria-label="Report sections"><details open><summary>Jump to a section</summary><ul>
      {toc_items}
      </ul></details></nav>
      {chr(10).join(body)}
    </article>
  </main>
  <script src="../../site-router.js"></script>
</body>
</html>
'''


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--check", action="store_true", help="Check that the generated archive is current")
    args = parser.parse_args()
    reports = {key: read_document(ORIGINALS / name) for key, name in REPORTS.items()}
    views = table_data(reports["sourcing"], reports["marquise"])
    files = {
        RESEARCH / "data" / "sourcing-registers.json": (json.dumps(views, ensure_ascii=False, indent=2) + "\n").encode(),
        **{RESEARCH / "records" / f"{key}.html": report_html(key, blocks).encode() for key, blocks in reports.items()},
    }
    for key in FIGURE_ALTS:
        with ZipFile(ORIGINALS / REPORTS[key]) as package:
            for path in (path for block in reports[key] for path in block.get("images", [])):
                files[RESEARCH / "records" / "media" / f"{key}-{Path(path).name}"] = package.read(f"word/{path}")
    for path, content in files.items():
        if args.check:
            if not path.exists() or path.read_bytes() != content:
                raise SystemExit(f"Out of date: {path.relative_to(ROOT)}")
        else:
            path.parent.mkdir(parents=True, exist_ok=True)
            path.write_bytes(content)
    print(" · ".join(f'{len(view["rows"])} {view["label"].lower()}' for view in views.values()))


if __name__ == "__main__":
    main()
