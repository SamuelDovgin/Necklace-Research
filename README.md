# Jewelry Research Hub

A running research notebook for sourcing diamonds and jewelry, investigating suppliers and manufacturers, comparing offers, and recording what changed my mind. The original necklace sourcing package is the first project in the archive.

## Start here

| I want to… | Open |
| --- | --- |
| Browse the whole archive | [Research hub](index.html) |
| See what I studied or decided recently | [Research journal](research/journal.md) |
| Look up loose-diamond inventory and stone details | [Diamond sourcing](research/diamond-sourcing.md) |
| Research a seller or manufacturer | [Searchable supplier directory](research/supplier-directory.html) and [reusable sourcing workflow](research/suppliers-and-manufacturers.md) |
| Get comparable quotes from district workshops | [China district shortlist and bilingual messages](research/district-sourcing.html) |
| Compare listings, quotes, and landed value | [Deals and value](research/deals-and-value.md), [2 ct oval pendant comparison](research/oval-pendant-sourcing.md), and [Tonglin pricing review](research/tonglin-pendant-pricing-review.md) |
| Check wholesale lab diamond prices | [Q3 2026 price chart](research/wholesale-diamond-prices.html) |
| Source an adjustable marquise tennis necklace | [Buying brief](research/marquise-tennis-necklace.md) |
| Inspect the November reports, originals, and sources | [Source archive](research/archive.html) and [web verification](research/verification-2026-11-15.md) |
| Pick up the original necklace project | [Interactive dashboard](necklace-rfq-package/dashboard/index.html?document=start) and [project files](necklace-rfq-package/README.md) |
| Find original catalogs and inventory files | [Supplier catalog archive](supplier-catalogs/README.md) |

## Keep the record going

When a research session produces a finding, a promising lead, or a decision, add a dated entry to [research/journal.md](research/journal.md). Link the underlying evidence or longer note and record the next open question. The homepage reads the latest three entries from that file.

Put longer notes under `research/` or with the project they belong to. Link new topics from the homepage and this README. Keep original quotes, catalogs, inventory sheets, or screenshots with their source and capture date. The existing [catalog manifest](supplier-catalogs/manifest.json) shows how the saved files were documented.

The [necklace dashboard](necklace-rfq-package/dashboard/index.html) stores editor changes in the browser. Use its **Export .md** action to save a durable copy, then add that file to the repo and link it from the journal.

## Preview locally

Run this from the repository root, then open [the local hub](http://127.0.0.1:8000/).

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

The existing GitHub Pages setup serves this repository's root on `main`.

## November 2026 source archive

The [four supplied originals](research/archive.html) are byte-for-byte copies in `research/source_docs/2026-11-15/`. They include private supplier conversations, quotes and payment evidence. Keep this working archive local or behind private access when sharing it.

The searchable transcripts and research registers are generated from the DOCX snapshots and linked supplemental records. Run `python3 scripts/build-research-archive.py --check` to verify them. For a later study, save a dated source alongside the earlier material and link the new decision or price from the journal. Use a new record for revised terms so the history stays auditable.

The [Tonglin pricing import](research/archive.html#tonglin-pricing-source) preserves the supplied Markdown, with the Nov 13 pendant quote indexed separately as [Q035](research/supplier-directory.html?view=quotes&q=Q035).

The [China district import](research/archive.html#district-sources) adds an unchanged XLSX and Markdown in `research/source_docs/2026-11-15/district-sourcing/`. Its eight searchable views and source audit can be verified with `python3 scripts/build-district-research.py --check`.
