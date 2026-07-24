import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const PACKAGE_DIR = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.join(PACKAGE_DIR, "data");
const DOCS_DIR = path.join(PACKAGE_DIR, "docs");
const DASHBOARD_DIR = path.join(PACKAGE_DIR, "dashboard");
const ASSETS_DIR = path.join(PACKAGE_DIR, "assets");
const OUTPUT_DIR = path.join(PACKAGE_DIR, "outputs", "necklace-rfq");
const PREVIEW_DIR = path.join(OUTPUT_DIR, "previews");
const SOURCE_IMAGE =
  "/var/folders/7s/1b8rkp392c73bhx29zqyk_9r0000gn/T/codex-clipboard-9106269b-d5af-4f8b-9c5b-29ed565d3969.png";
const REFERENCE_IMAGE = path.join(ASSETS_DIR, "reference-necklace.png");
const PREPARED_DATE = "2026-07-07";

const referenceUrl =
  "https://starsgemmall.com/#/detail?=25751_14K+Yellow+Gold+Lab+Diamond+Necklace+1.095ct+AuDP0000190Y-P2.html";

const sourceLinks = [
  {
    name: "StarsGem reference listing",
    url: referenceUrl,
    note: "Reference design URL supplied by user; pasted listing said the product abstract/certificate status was none certified.",
  },
  {
    name: "StarsGem 10K yellow 1.105 ct round solitaire",
    url: "https://starsgemmall.com/#/detail?=21313_10K+Yellow+Lab+Diamond+Necklace+1.105ct+AuDP1033281Y-12.html",
    note: "Live supplier benchmark with printed IGI report number 19J161052602; verify the report before purchase.",
  },
  {
    name: "StarsGem 10K white 0.487 ct pear solitaire",
    url: "https://starsgemmall.com/#/detail?=23401_10K+White+Gold+Lab+Diamond+Necklace+0.487ct+AuDP0003441-1.html",
    note: "Live smaller-pear benchmark with printed IGI report number 77J062772510.",
  },
  {
    name: "StarsGem 10K yellow 0.647 ct floating pear",
    url: "https://starsgemmall.com/#/detail?=22908_10K+Yellow+Gold+Lab+Diamond+Necklace++0.647ct+AuDP0003421-5.html",
    note: "Live drilled floating-diamond benchmark with printed IGI report number 59J521952508.",
  },
  {
    name: "StarsGem 18K white 1.12 ct pear-and-round necklace",
    url: "https://starsgemmall.com/#/detail?=22081_18K+White+Gold+Lab+Diamond+Necklace+1.12ct+AuDP4011413(p1).html",
    note: "Closest heavier two-stone construction benchmark; no report is stated.",
  },
  {
    name: "r/Moissanite vendor list",
    url: "https://www.reddit.com/r/Moissanite/wiki/list/",
    note: "Community vendor directory used to validate which overseas/custom vendors are commonly tracked by buyers.",
  },
  {
    name: "r/Moissanite FAQ",
    url: "https://www.reddit.com/r/Moissanite/wiki/index/",
    note: "Community guidance and overseas-vendor context; use as directional sentiment, not a guarantee.",
  },
  {
    name: "Tianyu Gems",
    url: "https://www.tygems.net/",
    note: "Custom jewelry and lab-grown gemstone/jewelry manufacturer reference.",
  },
  {
    name: "Paston Jewelry Alibaba",
    url: "https://pastonjewelry.en.alibaba.com/",
    note: "Alibaba storefront for Trade Assurance-oriented quote path.",
  },
  {
    name: "Fiorese Jewelry",
    url: "https://fioresejewelry.com/",
    note: "Custom lab diamond/fine jewelry supplier; useful comparison for certified lab diamond options.",
  },
  {
    name: "LGG Jewelry",
    url: "https://www.lggjewelry.com/",
    note: "Lab diamond and custom jewelry supplier to include in first quote wave.",
  },
  {
    name: "Provence Gems Alibaba",
    url: "https://gzprovence.en.alibaba.com/",
    note: "Alibaba-facing quote candidate for price pressure and volume-factory comparison.",
  },
  {
    name: "Alibaba Trade Assurance",
    url: "https://tradeassurance.alibaba.com/",
    note: "Payment protection and order-contract structure for supplier quotes.",
  },
  {
    name: "IGI lab-grown diamond reports",
    url: "https://www.igi.org/reports/",
    note: "Reference for verifying report numbers and grading/report details before approval.",
  },
  {
    name: "CBP internet purchases guidance",
    url: "https://www.cbp.gov/trade/basic-import-export/internet-purchases",
    note: "Import duty/tax/shipping compliance context for personal U.S. purchases.",
  },
];

const suppliers = [
  {
    rank: 1,
    supplier: "Tianyu Gems",
    shortlist: "Yes",
    type: "Wuzhou custom factory",
    quoteRole: "Quality baseline",
    bestUse:
      "Custom 14k/18k fine jewelry when cut quality, CAD discipline, and finish matter.",
    expectedPrice: "Medium-high",
    sentiment: 4.4,
    certificateConfidence: 4.2,
    paymentProtection: 4,
    tradeAssurance: "Likely; confirm order channel",
    risk:
      "Can cost more than budget factories; confirm chain weight and pear video before deposit.",
    firstAsk:
      "Quote certified and uncertified pear options; request CAD, stone video, finished gold weight, and payment via Alibaba if available.",
    source: "https://www.tygems.net/",
  },
  {
    rank: 2,
    supplier: "Paston Jewelry",
    shortlist: "Yes",
    type: "Alibaba-first custom jewelry supplier",
    quoteRole: "Best Alibaba quote candidate",
    bestUse:
      "Apples-to-apples Alibaba RFQ with Trade Assurance, custom necklace build, and written specs.",
    expectedPrice: "Medium",
    sentiment: 4.2,
    certificateConfidence: 3.9,
    paymentProtection: 4.5,
    tradeAssurance: "Yes; confirm the specific order is covered",
    risk:
      "Get stone details in writing; do not accept generic certificate images.",
    firstAsk:
      "Use Alibaba RFQ; ask for line-item quote with IGI add-on, chain specs, lead time, and QC milestones.",
    source: "https://pastonjewelry.en.alibaba.com/",
  },
  {
    rank: 3,
    supplier: "Fiorese Jewelry",
    shortlist: "Yes",
    type: "Custom lab diamond jewelry seller",
    quoteRole: "Certification/transparency baseline",
    bestUse:
      "Lab-diamond-forward custom work where IGI report numbers and stone control are important.",
    expectedPrice: "Medium-high",
    sentiment: 4.1,
    certificateConfidence: 4.5,
    paymentProtection: 3.5,
    tradeAssurance: "Confirm; may be direct-site or invoice workflow",
    risk:
      "Potentially higher quote; make sure payment protection terms are explicit.",
    firstAsk:
      "Ask for pear options with IGI report number, laser inscription proof, and no-stone-substitution language.",
    source: "https://fioresejewelry.com/",
  },
  {
    rank: 4,
    supplier: "LGG Jewelry / Igg Jewelry",
    shortlist: "Yes",
    type: "Lab diamond and custom jewelry supplier",
    quoteRole: "Lab-diamond-specific candidate",
    bestUse:
      "Quote candidate if you want lab diamond sourcing to be central rather than an add-on.",
    expectedPrice: "Medium",
    sentiment: 4.0,
    certificateConfidence: 4.0,
    paymentProtection: 3.5,
    tradeAssurance: "Confirm",
    risk:
      "Less price history in this exact necklace category; verify channel, terms, and QC process.",
    firstAsk:
      "Ask for certified pear options, CAD timing, finished gold weight, and whether payment can be done with buyer protection.",
    source: "https://www.lggjewelry.com/",
  },
  {
    rank: 5,
    supplier: "Provence Gems",
    shortlist: "Yes",
    type: "Wuzhou volume custom jewelry vendor",
    quoteRole: "Price pressure / volume benchmark",
    bestUse:
      "Competitive quote to test the floor price for a 14k custom lab diamond pendant.",
    expectedPrice: "Low-medium",
    sentiment: 3.5,
    certificateConfidence: 3.5,
    paymentProtection: 4.5,
    tradeAssurance: "Yes; confirm the specific order is covered",
    risk:
      "Mixed community sentiment; use tight written specs, CAD signoff, and pre-shipment checks.",
    firstAsk:
      "Ask for the same spec as Tianyu/Paston and require stone videos before any final payment.",
    source: "https://gzprovence.en.alibaba.com/",
  },
  {
    rank: 6,
    supplier: "StarsGem",
    shortlist: "Yes",
    type: "Reference seller and Wuzhou custom factory",
    quoteRole: "Reference design / price baseline",
    bestUse:
      "Baseline for the exact visual design; useful if they can customize certificate and chain specs.",
    expectedPrice: "Low-medium",
    sentiment: 3.7,
    certificateConfidence: 3.0,
    paymentProtection: 4,
    tradeAssurance: "Confirm; mall listing may not equal Alibaba order",
    risk:
      "The supplied listing text says none certified; do not assume IGI unless they provide a report number.",
    firstAsk:
      "Ask if this exact design can be remade with an IGI pear and a heavier/confirmed 14k chain.",
    source: referenceUrl,
  },
  {
    rank: 7,
    supplier: "Mona Fine Jewelry",
    shortlist: "Backup",
    type: "Small custom jeweler / direct rep",
    quoteRole: "Personal-service backup",
    bestUse:
      "More individual custom workflow if you value rep taste and handholding over Alibaba process.",
    expectedPrice: "Medium-high",
    sentiment: 3.6,
    certificateConfidence: 3.4,
    paymentProtection: 2.8,
    tradeAssurance: "Usually not Alibaba-first; confirm",
    risk:
      "Harder to compare factory-level terms; buyer protection and timeline need extra clarity.",
    firstAsk:
      "Ask for a written invoice, stone sourcing process, and exact refund/remake policy before proceeding.",
    source: "https://www.reddit.com/r/Moissanite/wiki/list/",
  },
  {
    rank: 8,
    supplier: "Kuololit",
    shortlist: "Backup",
    type: "Catalog/value seller with some custom work",
    quoteRole: "Budget backup",
    bestUse:
      "Simple stock-style 14k pieces; only use for this if quote is much cheaper and specs are nailed down.",
    expectedPrice: "Low",
    sentiment: 3.0,
    certificateConfidence: 2.8,
    paymentProtection: 3.2,
    tradeAssurance: "Confirm; often AliExpress-style flow",
    risk:
      "Less natural fit for a custom IGI pear pendant; communication/QC can be more variable.",
    firstAsk:
      "Ask whether they can do original CAD and certified pear sourcing, not only adapt a stock listing.",
    source: "https://www.reddit.com/r/Moissanite/wiki/list/",
  },
  {
    rank: 9,
    supplier: "Messi Gems",
    shortlist: "Watchlist",
    type: "Wuzhou custom jewelry supplier",
    quoteRole: "Optional comparison",
    bestUse:
      "Maybe quote only if first-wave options disappoint or you need another Wuzhou price point.",
    expectedPrice: "Low-medium",
    sentiment: 2.8,
    certificateConfidence: 3.0,
    paymentProtection: 3.8,
    tradeAssurance: "Confirm",
    risk:
      "Community evidence is thinner and includes serious certificate/stone-substitution concerns; verify hard.",
    firstAsk:
      "If quoted, require IGI number before deposit and no-substitution language on the order.",
    source: "https://www.alibaba.com/showroom/messi-gems.html",
  },
  {
    rank: 10,
    supplier: "Ouros / Goldenbird",
    shortlist: "Skip unless compelling",
    type: "India-based custom/lab diamond seller",
    quoteRole: "Not first-wave",
    bestUse:
      "Use only if you already like a specific listing or want an India-based comparison.",
    expectedPrice: "Medium",
    sentiment: 2.5,
    certificateConfidence: 3.2,
    paymentProtection: 2.8,
    tradeAssurance: "Not Alibaba-first; confirm",
    risk:
      "Recent community caution signals mean it should not be the first choice for a sentimental custom piece.",
    firstAsk:
      "Ask for written stone sourcing, certification, refund, and inspection process before quote comparison.",
    source: "https://www.goldenbirdjewels.com/",
  },
];

const trackerRows = suppliers.map((s) => ({
  supplier: s.supplier,
  contact: "",
  channel:
    s.supplier === "Paston Jewelry" || s.supplier === "Provence Gems"
      ? "Alibaba"
      : s.supplier === "StarsGem"
        ? "StarsGem mall / Alibaba follow-up"
        : "Website / WhatsApp / Alibaba if available",
  status: s.shortlist === "Yes" ? "Target" : "Backup",
  priority: s.rank,
  rfqSent: "",
  responseDue: "",
  lastContact: "",
  followUpDue: "",
  baseQuote: "",
  igiFee: "",
  cadFee: "",
  shipping: "",
  dutyReserve: 0.08,
  landed: "",
  leadTime: "",
  priceScore: "",
  qualityScore: s.sentiment,
  specScore: "",
  certScore: s.certificateConfidence,
  commScore: "",
  paymentScore: s.paymentProtection,
  timelineScore: "",
  weightedScore: "",
  certRequired: "Yes",
  igiReport: "",
  certVerified: "No",
  cadReceived: "No",
  stoneVideo: "No",
  qcPassed: "No",
  riskFlags: s.risk,
  notes: s.firstAsk,
  conversationLog: "",
  source: s.source,
}));

const reviewRows = [
  {
    supplier: "Tianyu Gems",
    platform: "Reddit/community + supplier site",
    sentiment: "Positive",
    score: 4.4,
    note:
      "Frequently treated as a higher-quality overseas custom option; include as quality baseline.",
    source: "https://www.reddit.com/r/Moissanite/wiki/list/",
  },
  {
    supplier: "Paston Jewelry",
    platform: "Reddit/community + Alibaba",
    sentiment: "Positive",
    score: 4.2,
    note:
      "Strong fit for Alibaba quote workflow; useful for Trade Assurance and direct factory comparison.",
    source: "https://pastonjewelry.en.alibaba.com/",
  },
  {
    supplier: "Fiorese Jewelry",
    platform: "Reddit/community + supplier site",
    sentiment: "Positive",
    score: 4.1,
    note:
      "Good candidate when IGI report number, laser inscription proof, and stone transparency matter.",
    source: "https://fioresejewelry.com/",
  },
  {
    supplier: "LGG Jewelry / Igg Jewelry",
    platform: "Reddit/community + supplier site",
    sentiment: "Positive/limited",
    score: 4.0,
    note:
      "Promising lab-diamond-specific quote candidate; validate process and payment channel.",
    source: "https://www.lggjewelry.com/",
  },
  {
    supplier: "Provence Gems",
    platform: "Reddit/community + Alibaba",
    sentiment: "Mixed",
    score: 3.5,
    note:
      "Large known vendor with competitive pricing, but use strict spec control and QC checkpoints.",
    source: "https://gzprovence.en.alibaba.com/",
  },
  {
    supplier: "StarsGem",
    platform: "Reference listing + community",
    sentiment: "Mixed/known",
    score: 3.7,
    note:
      "Exact reference design is useful, but pasted listing indicated no certificate for that item.",
    source: referenceUrl,
  },
  {
    supplier: "Mona Fine Jewelry",
    platform: "Reddit/community",
    sentiment: "Positive but less Alibaba-oriented",
    score: 3.6,
    note:
      "Legit community name, but less ideal if Alibaba Trade Assurance is a hard requirement.",
    source: "https://www.reddit.com/r/Moissanite/wiki/list/",
  },
  {
    supplier: "Kuololit",
    platform: "Reddit/community",
    sentiment: "Mixed/value",
    score: 3.0,
    note:
      "Value-oriented; fine for simple stock-style builds, less natural for certified custom pear pendant.",
    source: "https://www.reddit.com/r/Moissanite/wiki/list/",
  },
  {
    supplier: "Messi Gems",
    platform: "Alibaba/community",
    sentiment: "Caution",
    score: 2.8,
    note:
      "Real supplier profile, but verify certificate and stone identity before any deposit.",
    source: "https://www.alibaba.com/showroom/messi-gems.html",
  },
  {
    supplier: "Ouros / Goldenbird",
    platform: "Community/direct site",
    sentiment: "Caution",
    score: 2.5,
    note:
      "Known name but not first-wave for this Alibaba-oriented sourcing flow.",
    source: "https://www.goldenbirdjewels.com/",
  },
];

const questions = [
  {
    stage: "Opening RFQ",
    priority: "Required",
    question:
      "Can you make this necklace in solid 14k yellow gold or higher, not plated, vermeil, or gold-filled?",
    why: "Confirms metal floor and prevents accidental plated quotes.",
  },
  {
    stage: "Opening RFQ",
    priority: "Required",
    question:
      "Please quote a 40+5 cm chain and also state the chain type, width/thickness, clasp type, and finished gold weight in grams.",
    why: "Most price/quality gaps hide in chain gauge and total gold weight.",
  },
  {
    stage: "Stone sourcing",
    priority: "Required",
    question:
      "Please quote the pear lab diamond around 0.90-1.00 ct, about 5.3 x 8.3 mm, D-F color, VS or better, with and without IGI.",
    why: "Creates the core apples-to-apples comparison.",
  },
  {
    stage: "Stone sourcing",
    priority: "Required",
    question:
      "If certified, please provide the IGI report number before deposit and a photo/video of the laser inscription before final payment.",
    why: "Prevents relying on generic certificate images.",
  },
  {
    stage: "Stone sourcing",
    priority: "Preferred",
    question:
      "Please send a tweezer video of the pear in daylight and office light, plus measurements, depth/table if available, and growth method.",
    why: "Pear stones can show bow-tie, windowing, or shape issues that specs alone miss.",
  },
  {
    stage: "Design/CAD",
    priority: "Required",
    question:
      "Please provide CAD/rendering for approval before production, showing bail, prongs, stone measurements, chain connection, and finished pendant dimensions.",
    why: "Locks the design before gold and stone setting work begins.",
  },
  {
    stage: "Design/CAD",
    priority: "Preferred",
    question:
      "Can you match the reference layout: small round diamond above a pear drop, minimal yellow-gold bail, delicate oval-link/cable chain, and low visual bulk?",
    why: "Keeps the piece close to the reference photo.",
  },
  {
    stage: "Commercial",
    priority: "Required",
    question:
      "Please itemize base necklace price, IGI certificate fee, CAD fee if any, shipping, payment terms, production time, and any Alibaba Trade Assurance coverage.",
    why: "Separates true price differences from add-ons.",
  },
  {
    stage: "Commercial",
    priority: "Required",
    question:
      "Please state refund/remake policy if the finished piece does not match approved CAD/specs or if the stone differs from the approved certificate.",
    why: "Creates leverage before the order exists.",
  },
  {
    stage: "Pre-shipment QC",
    priority: "Required",
    question:
      "Before final payment/shipment, please send photos/video of the finished necklace, scale weight, chain length on ruler, 585 stamp, stone close-ups, and clasp.",
    why: "Final checkpoint before the piece leaves the supplier.",
  },
];

const qcRows = [
  ["Spec", "Reference design matches two-stone vertical drop", "CAD/render/photo", "Required before production"],
  ["Metal", "Solid 14k yellow gold or higher; 585 stamp visible", "Macro photo/video", "Required before final payment"],
  ["Metal", "Finished gold weight provided in grams", "Scale photo or written QC sheet", "Required before final payment"],
  ["Chain", "40+5 cm length or chosen length confirmed", "Ruler photo", "Required before final payment"],
  ["Chain", "Chain type and width/thickness match order", "Macro photo + written measurement", "Required before final payment"],
  ["Main stone", "Pear lab diamond 0.90-1.00 ct, D-F, VS+, approved dimensions", "Stone video/spec sheet", "Required before deposit"],
  ["Main stone", "IGI report number verified if certified option is chosen", "IGI report link + inscription photo/video", "Required before final payment"],
  ["Accent stone", "Round 0.15-0.20 ct lab diamond, D-F, VS+ or agreed equivalent", "Written specs/photo", "Required before production"],
  ["Setting", "Prongs secure, no crooked pear, no tilted accent, clean bail alignment", "360 finished video", "Required before shipment"],
  ["Commercial", "Alibaba Trade Assurance/order contract matches spec and add-ons", "Order page screenshot/PDF", "Required before deposit"],
  ["Shipping", "Carrier, tracking, declared description/value, and insurance terms known", "Shipping quote/invoice", "Required before shipment"],
];

const specRows = [
  ["Reference style", "Two-stone drop necklace: small round lab diamond above pear lab diamond"],
  ["Reference URL", referenceUrl],
  ["Known StarsGem listing title", "14K Yellow Gold Lab Diamond Necklace 1.095ct AuDP0000190Y-P2"],
  ["Certificate status from pasted listing", "Product Abstract: None Certified / 无证书"],
  ["Metal floor", "Solid 14k yellow gold minimum; 18k yellow gold acceptable as upgrade quote"],
  ["Chain target", "40+5 cm adjustable chain, delicate oval-link/cable look, lobster clasp preferred"],
  ["Main stone target", "Pear lab diamond around 0.90-1.00 ct; reference 0.935 ct, about 5.3 x 8.3 mm"],
  ["Main stone quality target", "D-F color, VS or better, eye-clean, no obvious bow-tie/windowing"],
  ["Accent stone target", "Round lab diamond around 0.15-0.20 ct; reference 0.16 ct, about 3.4 mm"],
  ["Certification preference", "Ask every supplier for two quotes: uncertified pear and IGI-certified pear"],
  ["Non-negotiables", "Written spec, CAD approval, real stone video, report number if certified, pre-shipment QC"],
  ["Nice-to-have", "Laser inscription video, caliper measurements, scale weight, no-substitution language"],
];

const scoringRows = [
  ["Metric", "Weight", "What a 5 means", "What a 1 means"],
  ["Price", 0.2, "Lowest landed price among comparable offers", "Highest or unclear landed price"],
  ["Quality sentiment", 0.2, "Strong reviewer/community history for custom jewelry", "Thin or concerning public signal"],
  ["Spec match", 0.2, "Matches design, gold, chain, stones, and CAD exactly", "Generic or materially different build"],
  ["Certificate transparency", 0.15, "IGI report number and inscription proof before final payment", "Certificate vague, generic, or unavailable"],
  ["Communication", 0.1, "Fast, specific, written answers to every question", "Slow, evasive, or inconsistent answers"],
  ["Payment protection", 0.1, "Alibaba Trade Assurance or similarly clear buyer protection", "Direct transfer with weak protection"],
  ["Timeline", 0.05, "Clear timeline and on-time progress updates", "Unclear or risky timing"],
];

const statuses = [
  "Target",
  "Backup",
  "RFQ sent",
  "Quoted",
  "Clarifying",
  "CAD pending",
  "Deposit ready",
  "Paid deposit",
  "In production",
  "QC review",
  "Approved",
  "Shipped",
  "Received",
  "Rejected",
  "Paused",
];

const yesNo = ["Yes", "No", "Partial", "N/A"];

function csvEscape(value) {
  if (value === null || value === undefined) return "";
  const text = String(value);
  if (/[",\n]/.test(text)) return `"${text.replace(/"/g, '""')}"`;
  return text;
}

function toCsv(headers, rows) {
  return [
    headers.map(csvEscape).join(","),
    ...rows.map((row) => headers.map((header) => csvEscape(row[header])).join(",")),
  ].join("\n");
}

async function writeCsvFiles() {
  const supplierHeaders = [
    "rank",
    "supplier",
    "shortlist",
    "type",
    "quoteRole",
    "bestUse",
    "expectedPrice",
    "sentiment",
    "certificateConfidence",
    "paymentProtection",
    "tradeAssurance",
    "risk",
    "firstAsk",
    "source",
  ];
  await fs.writeFile(
    path.join(DATA_DIR, "suppliers.csv"),
    toCsv(supplierHeaders, suppliers),
  );

  const trackerHeaders = [
    "supplier",
    "contact",
    "channel",
    "status",
    "priority",
    "rfqSent",
    "responseDue",
    "lastContact",
    "followUpDue",
    "baseQuote",
    "igiFee",
    "cadFee",
    "shipping",
    "dutyReserve",
    "landed",
    "leadTime",
    "priceScore",
    "qualityScore",
    "specScore",
    "certScore",
    "commScore",
    "paymentScore",
    "timelineScore",
    "weightedScore",
    "certRequired",
    "igiReport",
    "certVerified",
    "cadReceived",
    "stoneVideo",
    "qcPassed",
    "riskFlags",
    "notes",
    "conversationLog",
    "source",
  ];
  await fs.writeFile(
    path.join(DATA_DIR, "rfq_tracker.csv"),
    toCsv(trackerHeaders, trackerRows),
  );

  const reviewHeaders = ["supplier", "platform", "sentiment", "score", "note", "source"];
  await fs.writeFile(
    path.join(DATA_DIR, "review_sentiment.csv"),
    toCsv(reviewHeaders, reviewRows),
  );

  const questionHeaders = ["stage", "priority", "question", "why"];
  await fs.writeFile(path.join(DATA_DIR, "question_bank.csv"), toCsv(questionHeaders, questions));

  await fs.writeFile(
    path.join(DATA_DIR, "qc_checklist.csv"),
    toCsv(["Category", "Check", "Proof to request", "Gate"], qcRows.map((row) => ({
      Category: row[0],
      Check: row[1],
      "Proof to request": row[2],
      Gate: row[3],
    }))),
  );
}

function sourceListMarkdown() {
  return sourceLinks
    .map((source) => `- [${source.name}](${source.url}) - ${source.note}`)
    .join("\n");
}

async function writeDocs() {
  const readme = `# Necklace RFQ Research Package

Prepared: ${PREPARED_DATE}

This package is for sourcing a solid 14k yellow gold two-stone lab diamond necklace inspired by the StarsGem reference design.

## Start here

1. Read [docs/01_reference_spec.md](docs/01_reference_spec.md) and adjust any preferences, especially chain length, clasp, IGI requirement, and budget ceiling.
2. Compare the five live StarsGem options in [docs/07_starsgem_listing_comparison.md](docs/07_starsgem_listing_comparison.md).
3. Use [docs/08_gold_alloy_color_guide.md](docs/08_gold_alloy_color_guide.md) to choose 14K vs 18K and yellow vs white gold.
4. Send the message in [docs/03_rfq_message_templates.md](docs/03_rfq_message_templates.md) to the first-wave suppliers: Tianyu, Paston, Fiorese, LGG, Provence, and StarsGem.
5. Track replies in [outputs/necklace-rfq/Necklace_RFQ_Tracker.xlsx](outputs/necklace-rfq/Necklace_RFQ_Tracker.xlsx).
6. Use [dashboard/index.html](dashboard/index.html) for quick browser-side status, quote, notes, and supplier conversation tracking. It saves to this browser's localStorage and can export a CSV backup.
7. Do not pay a deposit until the order contract, CAD/CAD timing, stone sourcing process, and certificate language are written down.

## First-wave supplier shortlist

1. Tianyu Gems - quality baseline.
2. Paston Jewelry - Alibaba-first quote candidate.
3. Fiorese Jewelry - certification/transparency baseline.
4. LGG Jewelry / Igg Jewelry - lab-diamond-specific quote candidate.
5. Provence Gems - price-pressure benchmark.
6. StarsGem - exact design/reference baseline; the pasted listing indicated no certificate.

## Files

- \`docs/\` - Markdown research and sourcing workflow.
- \`docs/07_starsgem_listing_comparison.md\` - five-listing StarsGem specification and currency comparison.
- \`docs/08_gold_alloy_color_guide.md\` - short 14K/18K and yellow/white gold decision guide.
- \`data/\` - editable CSV source tables.
- \`data/starsgem_listings.csv\` - machine-readable five-listing specifications and currency calculations.
- \`dashboard/\` - local HTML tracker with browser-saved RFQ state, notes, conversation logs, and CSV export.
- \`outputs/necklace-rfq/Necklace_RFQ_Tracker.xlsx\` - main workbook with scoring formulas.

## Source posture

Reddit/community sentiment is useful as a screening signal, not proof of current quality. The purchase decision should be based on written supplier answers, comparable quotes, CAD, stone videos, certificate verification, and pre-shipment QC.
`;

  const spec = `# 01 - Reference Spec

## Design target

Create a delicate two-stone drop necklace in solid yellow gold:

- Small round lab diamond accent above a pear lab diamond.
- Minimal vertical yellow-gold bail and prong setting.
- Delicate oval-link/cable chain, visually similar to the reference photo.
- Solid 14k yellow gold minimum; 18k yellow gold can be quoted as an upgrade.

## Reference details captured from the supplied StarsGem listing text

| Item | Target |
|---|---|
| Reference URL | ${referenceUrl} |
| Listing title | 14K Yellow Gold Lab Diamond Necklace 1.095ct AuDP0000190Y-P2 |
| Certificate status in pasted listing | None Certified / 无证书 |
| Main stone | Pear lab diamond, reference 5.3 x 8.3 mm, 0.935 ct |
| Main stone claimed grade | DEF, CVD, VS |
| Accent stone | Round lab diamond, reference 3.4 mm, 0.16 ct |
| Accent claimed grade | DEF, VS |
| Total diamond weight | 1.095 ctw |

## Direct StarsGem comparison set

Four additional live StarsGem listings provide certified 10K solitaire benchmarks and a heavier 18K two-stone comparator. See [07 - StarsGem Listing Comparison and Currency Audit](07_starsgem_listing_comparison.md) for complete live specifications, CNY and USD conversion analysis, certificate-number notes, and quote implications.

Metal decision guide: [08 - 14K vs 18K and Yellow vs White Gold](08_gold_alloy_color_guide.md).

## Quote spec to send

Use this as the exact target unless you decide to change it:

- Solid 14k yellow gold necklace, stamped 585.
- 40+5 cm adjustable chain, delicate oval-link/cable style, lobster clasp preferred.
- Pear lab diamond around 0.90-1.00 ct, about 5.3 x 8.3 mm, D-F color, VS or better.
- Round lab diamond around 0.15-0.20 ct, about 3.4 mm, D-F color, VS or better.
- Quote both uncertified and IGI-certified pear options.
- Include CAD, stone videos, finished gold weight, chain width/thickness, lead time, shipping, and payment terms.

## Must not be vague

- "14k gold" must mean solid 14k gold, not gold plated, vermeil, filled, or "K gold color."
- "IGI" must mean an actual report number for the chosen pear stone, not a generic certificate image.
- "Same as photo" must still be backed by CAD dimensions and stone measurements.
`;

  const ranked = `# 02 - Ranked Supplier List

This ranking is tuned for a custom 14k yellow gold lab diamond necklace, not loose stones alone.

| Rank | Supplier | Role | Why quote them | Risk control |
|---:|---|---|---|---|
${suppliers
  .map(
    (s) =>
      `| ${s.rank} | ${s.supplier} | ${s.quoteRole} | ${s.bestUse} | ${s.risk} |`,
  )
  .join("\n")}

## Narrow first wave

Send the same RFQ to Tianyu, Paston, Fiorese, LGG, Provence, and StarsGem first. Keep the other four as backups or caution/watchlist entries.

## How to interpret sentiment

- 4.0-5.0: strong enough to quote early, assuming written terms are clear.
- 3.0-3.9: real candidate but needs extra QC and buyer-protection checks.
- Under 3.0: quote only for comparison or if you have a specific reason.

## Source links

${sourceListMarkdown()}
`;

  const rfq = `# 03 - RFQ Message Templates

## Initial message

Hello, I am looking for a custom necklace quote. Please quote this exact style as closely as possible:

Solid 14k yellow gold two-stone lab diamond necklace, 40+5 cm adjustable chain, delicate oval-link/cable chain, lobster clasp preferred. Pendant has one round lab diamond above one pear lab diamond, similar to this reference: ${referenceUrl}

Target stones:

- Pear lab diamond around 0.90-1.00 ct, about 5.3 x 8.3 mm, D-F color, VS or better.
- Round lab diamond around 0.15-0.20 ct, about 3.4 mm, D-F color, VS or better.

Please quote two versions:

1. Pear stone without IGI certificate.
2. Pear stone with IGI certificate.

Please include:

- Base necklace price.
- IGI certificate added cost and timing.
- CAD fee if any.
- Shipping cost to the United States.
- Production time.
- Finished gold weight in grams.
- Chain type, width/thickness, and clasp.
- Whether Alibaba Trade Assurance can cover the order.
- Payment terms.
- Refund/remake policy if the finished necklace does not match approved CAD/specs.

Before deposit, I would like a stone video and written stone specs. Before final payment/shipment, I would like finished photos/video, chain length on ruler, scale weight, 585 stamp photo, and IGI laser inscription proof if I choose the certified pear.

Thank you.

## Follow-up if they say "yes, same design"

Thank you. Can you please confirm these exact details in writing:

- Solid 14k yellow gold, stamped 585.
- Approximate finished gold weight.
- Chain length and chain width/thickness.
- Pear diamond measurements, carat, color, clarity, growth method, and certification status.
- Round diamond measurements, carat, color, and clarity.
- CAD will be sent for approval before production.
- The stone used in production will be the same stone approved in video/certificate.

## Follow-up for IGI certificate

Please send the IGI report number for the pear stone before I approve the stone. If I choose this stone, please also send a laser inscription photo/video before final payment.

## Follow-up when price is unusually low

Thank you. The price is lower than other quotes, so I want to confirm what is included:

- Is the gold solid 14k or plated/filled?
- What is the finished gold weight?
- What is the chain width/thickness?
- Is the pear natural diamond, lab diamond, moissanite, or another stone?
- Is the pear certified? If yes, which report number?
- Are CAD, stone video, pre-shipment photos, and shipping included?

## Follow-up before deposit

Before I pay the deposit, please send the Alibaba order/spec sheet or invoice showing the full agreed spec, price, fees, payment terms, timeline, refund/remake policy, and QC deliverables.

## StarsGem multi-listing and currency follow-up

I am comparing StarsGem SKUs AuDP0000190Y-P2, AuDP1033281Y-12, AuDP0003441-1, AuDP0003421-5, and AuDP4011413(p1). Please quote each available piece in both CNY and USD, state the exchange rate used, and confirm which currency will actually be charged.

For my preferred two-stone design, please also quote AuDP4011413(p1)'s heavier construction in unplated solid 14k yellow gold, using a 0.935-1.02 ct pear near 5.3 x 8.3 to 5.5 x 9 mm and the original 0.16 ct / 3.4 mm round. Please keep at least 2.79 g gross finished weight and confirm the chain's measured width, thickness, chain-only weight, and clasp.

For listings that state IGI 19J161052602, 77J062772510, or 59J521952508, please send the matching digital report and confirm that the report belongs to the exact stone that will ship. Please also translate the listing notes “方1.0mm,” “圆O 1.0mm,” “方0.95mm,” and “圆1.2mm” into the factory chain code and measured dimensions.
`;

  const workflow = `# 04 - Negotiation and QC Flow

## Phase 1 - Quote collection

Send the same RFQ to all first-wave suppliers. Do not negotiate deeply until you have at least three comparable replies.

Track:

- Base price.
- IGI add-on.
- CAD fee.
- Shipping.
- Finished gold weight.
- Chain dimensions.
- Production time.
- Trade Assurance or buyer protection.
- Clarity of answers.

## Phase 2 - Shortlist to two or three

Advance suppliers that:

- Answer every required question directly.
- Provide a realistic quote with line-item costs.
- Agree to CAD approval before production.
- Agree to stone video before deposit or before stone approval.
- Give a clear certificate path for the pear stone.

Pause suppliers that:

- Avoid saying solid 14k.
- Cannot state gold weight.
- Only send generic photos/certificate images.
- Push for payment before written spec.
- Refuse pre-shipment photos or videos.

## Phase 3 - Stone approval

For the pear stone, request:

- 360 video in tweezers.
- Dimensions and carat weight.
- Color and clarity.
- Growth method if available.
- IGI report number if certified.
- Laser inscription proof before final payment if certified.

For the round accent, an IGI report is usually not worth paying for at around 0.16 ct. Ask for written specs and a close-up.

## Phase 4 - CAD approval

Check:

- Pear orientation and proportion.
- Accent size relative to pear.
- Bail shape and chain connection.
- Prong count and placement.
- Pendant height/width.
- Chain length and clasp.
- Any sharp edges or bulky metal.

## Phase 5 - Payment and order protection

Prefer Alibaba Trade Assurance or another written buyer-protected order path. If paying direct, get all specs, refund/remake language, and QC gates in writing before payment.

## Phase 6 - Pre-shipment approval

Do not approve shipment until you have:

- Finished necklace photos and video.
- Scale weight.
- Chain length on ruler.
- Chain/clasp close-ups.
- 585 stamp photo.
- Stone close-ups.
- IGI report number and laser inscription proof if applicable.
- Confirmation that the order contract/spec matches what was made.
`;

  const scoring = `# 05 - Scoring Rubric

The workbook uses a 1-5 score and weighted average. Price is formula-driven once landed estimates are entered; the other categories are judgment scores.

| Metric | Weight | How to score |
|---|---:|---|
| Price | 20% | 5 for the lowest comparable landed quote; lower scores for higher or unclear prices. |
| Quality sentiment | 20% | Reviewer/community signal, prior custom quality, and supplier fit. |
| Spec match | 20% | Exactness on 14k gold, chain, stones, CAD, and reference design. |
| Certificate transparency | 15% | IGI report number, inscription proof, and no-substitution clarity. |
| Communication | 10% | Speed, specificity, and consistency. |
| Payment protection | 10% | Alibaba Trade Assurance or clear buyer-protected equivalent. |
| Timeline | 5% | Clear, believable production and shipping schedule. |

## Recommended decision rule

Pick the supplier that is strongest on weighted score, not simply the cheapest. For a sentimental necklace, a 10-20% higher quote can be reasonable if it buys better CAD, stone proof, certificate transparency, and payment protection.
`;

  const purchase = `# 06 - Purchase Checklist

## Before deposit

- You have at least three comparable quotes.
- The chosen quote includes base price, IGI fee, CAD fee, shipping, and payment terms.
- The order states solid 14k yellow gold or higher.
- The supplier states finished gold weight and chain dimensions.
- You have stone video/specs for the pear.
- If certified, you have an IGI report number for the pear.
- The supplier agrees to CAD approval before production.
- The supplier agrees to pre-shipment QC photos/video.
- Payment protection is clear.

## Before production approval

- CAD matches the reference design.
- Pendant dimensions are proportional.
- Round accent is not too large or too small.
- Bail and chain connection look clean.
- Prongs are secure but not bulky.

## Before final payment or shipment

- Finished necklace matches approved CAD.
- Chain length and clasp are correct.
- 585 stamp is visible.
- Scale weight is provided.
- Stones are aligned and cleanly set.
- IGI laser inscription is shown if certified.
- Shipping carrier, insurance, and tracking terms are known.

## U.S. import note

Assume duties, taxes, brokerage fees, or tariff-related costs may apply. The workbook includes a manual duty/tax reserve field for comparison only. Confirm the current import treatment and carrier fee behavior before purchase.
`;

  await fs.writeFile(path.join(PACKAGE_DIR, "README.md"), readme);
  await fs.writeFile(path.join(DOCS_DIR, "01_reference_spec.md"), spec);
  await fs.writeFile(path.join(DOCS_DIR, "02_ranked_suppliers.md"), ranked);
  await fs.writeFile(path.join(DOCS_DIR, "03_rfq_message_templates.md"), rfq);
  await fs.writeFile(path.join(DOCS_DIR, "04_negotiation_qc_flow.md"), workflow);
  await fs.writeFile(path.join(DOCS_DIR, "05_scoring_rubric.md"), scoring);
  await fs.writeFile(path.join(DOCS_DIR, "06_purchase_checklist.md"), purchase);
}

async function writeDashboard() {
  // The dashboard is maintained as a hand-edited Markdown research notebook in
  // dashboard/*. Keep future workbook rebuilds from overwriting its behavior.
  return;

  const index = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Necklace RFQ Dashboard</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <main class="shell">
      <section class="topbar" aria-label="Project header">
        <div class="title-block">
          <p class="eyebrow">Necklace RFQ</p>
          <h1>14k Yellow Gold Lab Diamond Drop</h1>
        </div>
        <img class="reference-img" src="../assets/reference-necklace.png" alt="Reference necklace">
      </section>

      <section class="metrics" aria-label="RFQ summary">
        <div class="metric">
          <span>Tracked</span>
          <strong id="metricTracked">0</strong>
        </div>
        <div class="metric">
          <span>Quotes</span>
          <strong id="metricQuotes">0</strong>
        </div>
        <div class="metric">
          <span>Best Score</span>
          <strong id="metricBestScore">-</strong>
        </div>
        <div class="metric">
          <span>Lowest Landed</span>
          <strong id="metricLowest">-</strong>
        </div>
      </section>

      <section class="controls" aria-label="Dashboard controls">
        <div class="segments" role="tablist" aria-label="Supplier filter">
          <button class="segment active" data-filter="all" type="button">All</button>
          <button class="segment" data-filter="first" type="button">First Wave</button>
          <button class="segment" data-filter="quoted" type="button">Quoted</button>
          <button class="segment" data-filter="active" type="button">Active</button>
        </div>
        <div class="actions">
          <button id="exportCsv" class="icon-btn" type="button" title="Export CSV">
            <span aria-hidden="true">↓</span><span>CSV</span>
          </button>
          <button id="resetData" class="icon-btn secondary" type="button" title="Reset data">
            <span aria-hidden="true">↺</span><span>Reset</span>
          </button>
        </div>
      </section>

      <section class="analysis-grid" aria-label="Supplier analysis">
        <div class="panel">
          <div class="panel-head">
            <h2>Score Ranking</h2>
            <span id="bestSupplier">-</span>
          </div>
          <div id="scoreChart" class="bar-chart"></div>
        </div>
        <div class="panel">
          <div class="panel-head">
            <h2>Quote Comparison</h2>
            <span id="quoteSpread">-</span>
          </div>
          <div id="priceChart" class="bar-chart price"></div>
        </div>
      </section>

      <section class="table-section" aria-label="Editable RFQ tracker">
        <div class="table-wrap">
          <table>
            <colgroup>
              <col class="col-supplier">
              <col class="col-contact">
              <col class="col-status">
              <col class="col-money">
              <col class="col-money">
              <col class="col-money">
              <col class="col-landed">
              <col class="col-score">
              <col class="col-score">
              <col class="col-score">
              <col class="col-score">
              <col class="col-score-pill">
              <col class="col-notes">
              <col class="col-conversation">
              <col class="col-risk">
            </colgroup>
            <thead>
              <tr>
                <th>Supplier</th>
                <th>Contact / Rep</th>
                <th>Status</th>
                <th>Quote</th>
                <th>IGI</th>
                <th>Ship</th>
                <th>Landed</th>
                <th>Quality</th>
                <th>Spec</th>
                <th>Cert</th>
                <th>Comm</th>
                <th>Score</th>
                <th>Notes</th>
                <th>Conversation Log</th>
                <th>Risk / Next Ask</th>
              </tr>
            </thead>
            <tbody id="supplierRows"></tbody>
          </table>
        </div>
      </section>
    </main>
    <script src="app.js"></script>
  </body>
</html>
`;

  const styles = `:root {
  --bg: #f7f5f0;
  --paper: #ffffff;
  --ink: #202124;
  --muted: #667085;
  --line: #ddd7ca;
  --gold: #b88728;
  --teal: #24736f;
  --coral: #bd5542;
  --soft-gold: #f3e3bf;
  --soft-teal: #d8ece9;
  --soft-coral: #f4ddd8;
  --shadow: 0 10px 30px rgba(32, 33, 36, 0.08);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

* {
  box-sizing: border-box;
}

html {
  overflow-x: hidden;
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--ink);
  overflow-x: hidden;
}

button,
input,
select {
  font: inherit;
}

.shell {
  width: min(1440px, calc(100vw - 32px));
  margin: 0 auto;
  padding: 24px 0 42px;
}

.topbar {
  display: grid;
  grid-template-columns: 1fr 156px;
  gap: 20px;
  align-items: center;
  padding: 18px 0 24px;
  border-bottom: 1px solid var(--line);
}

.eyebrow {
  margin: 0 0 8px;
  color: var(--teal);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0;
  text-transform: uppercase;
}

h1,
h2 {
  margin: 0;
  letter-spacing: 0;
}

h1 {
  font-size: clamp(1.7rem, 2.6vw, 2.7rem);
  line-height: 1.06;
}

h2 {
  font-size: 1rem;
}

.reference-img {
  width: 156px;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: #fff;
}

.metrics {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
  margin: 18px 0;
}

.metric {
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 14px 16px;
  box-shadow: var(--shadow);
}

.metric span {
  display: block;
  color: var(--muted);
  font-size: 0.78rem;
}

.metric strong {
  display: block;
  margin-top: 6px;
  font-size: 1.55rem;
  line-height: 1;
}

.controls {
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
}

.segments,
.actions {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.segment,
.icon-btn {
  min-height: 38px;
  border: 1px solid var(--line);
  background: var(--paper);
  color: var(--ink);
  border-radius: 8px;
  padding: 0 13px;
  cursor: pointer;
}

.segment.active {
  background: var(--teal);
  border-color: var(--teal);
  color: #fff;
}

.icon-btn {
  display: inline-flex;
  align-items: center;
  gap: 7px;
}

.icon-btn.secondary {
  background: transparent;
}

.analysis-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 14px;
  margin-bottom: 18px;
}

.panel,
.table-section {
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: 8px;
  box-shadow: var(--shadow);
  min-width: 0;
}

.panel {
  padding: 16px;
}

.panel-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 14px;
}

.panel-head span {
  color: var(--muted);
  font-size: 0.84rem;
  text-align: right;
}

.bar-chart {
  display: grid;
  gap: 10px;
}

.bar-row {
  display: grid;
  grid-template-columns: minmax(115px, 0.8fr) minmax(140px, 2fr) 64px;
  gap: 10px;
  align-items: center;
  min-height: 28px;
}

.bar-label,
.bar-value {
  font-size: 0.82rem;
  color: var(--muted);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.bar-track {
  height: 12px;
  background: #ebe6da;
  border-radius: 999px;
  overflow: hidden;
}

.bar-fill {
  height: 100%;
  min-width: 2px;
  background: var(--teal);
}

.price .bar-fill {
  background: var(--gold);
}

.table-section {
  overflow: hidden;
}

.table-wrap {
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
}

table {
  width: 100%;
  min-width: 2140px;
  border-collapse: collapse;
  table-layout: fixed;
}

.col-supplier {
  width: 190px;
}

.col-contact {
  width: 170px;
}

.col-status {
  width: 132px;
}

.col-money,
.col-score {
  width: 82px;
}

.col-landed {
  width: 100px;
}

.col-score-pill {
  width: 84px;
}

.col-notes {
  width: 300px;
}

.col-conversation {
  width: 390px;
}

.col-risk {
  width: 310px;
}

th,
td {
  border-bottom: 1px solid #ece7dc;
  padding: 10px 9px;
  vertical-align: top;
  text-align: left;
}

th {
  background: #fbfaf7;
  color: #4f4f4f;
  font-size: 0.75rem;
  font-weight: 700;
}

td {
  font-size: 0.82rem;
}

td.supplier {
  font-weight: 700;
}

.risk-note {
  color: var(--muted);
  line-height: 1.35;
}

.status {
  width: 128px;
}

.money,
.score-input {
  width: 74px;
}

select,
input,
textarea {
  width: 100%;
  min-height: 32px;
  border: 1px solid var(--line);
  border-radius: 6px;
  background: #fff;
  color: var(--ink);
  padding: 5px 7px;
}

textarea {
  min-height: 82px;
  resize: vertical;
  line-height: 1.35;
}

.conversation-area {
  min-height: 124px;
}

.score-pill {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 46px;
  min-height: 30px;
  border-radius: 999px;
  background: var(--soft-teal);
  color: #0f4f4a;
  font-weight: 700;
}

.score-pill.low {
  background: var(--soft-coral);
  color: #8f3323;
}

.score-pill.mid {
  background: var(--soft-gold);
  color: #73510e;
}

@media (max-width: 860px) {
  .shell {
    width: min(100vw - 22px, 720px);
    padding-top: 12px;
  }

  .topbar {
    grid-template-columns: 1fr 92px;
  }

  .reference-img {
    width: 92px;
  }

  .metrics,
  .analysis-grid {
    grid-template-columns: 1fr;
  }

  .controls {
    align-items: stretch;
    flex-direction: column;
  }
}
`;

  const app = `const INITIAL_ROWS = ${JSON.stringify(trackerRows, null, 2)};
const STATUS_OPTIONS = ${JSON.stringify(statuses)};
const FIRST_WAVE = new Set(["Tianyu Gems", "Paston Jewelry", "Fiorese Jewelry", "LGG Jewelry / Igg Jewelry", "Provence Gems", "StarsGem"]);
const STORAGE_KEY = "necklace-rfq-dashboard-v1";
const WEIGHTS = {
  priceScore: 0.20,
  qualityScore: 0.20,
  specScore: 0.20,
  certScore: 0.15,
  commScore: 0.10,
  paymentScore: 0.10,
  timelineScore: 0.05
};
const RERENDER_FIELDS = new Set(["baseQuote", "igiFee", "cadFee", "shipping", "dutyReserve", "qualityScore", "specScore", "certScore", "commScore", "paymentScore", "timelineScore"]);

let rows = loadRows();
let activeFilter = "all";

function loadRows() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? normalizeRows(JSON.parse(saved)) : seedRows();
  } catch {
    return seedRows();
  }
}

function seedRows() {
  return structuredClone(INITIAL_ROWS).map((row) => ({
    ...row,
    conversationLog: row.conversationLog || ""
  }));
}

function normalizeRows(savedRows) {
  if (!Array.isArray(savedRows)) return seedRows();
  return INITIAL_ROWS.map((initialRow) => ({
    ...initialRow,
    conversationLog: "",
    ...(savedRows.find((row) => row.supplier === initialRow.supplier) || {})
  }));
}

function saveRows() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(rows));
}

function numberValue(value) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function optionalNumber(value) {
  if (value === "" || value === null || value === undefined) return null;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

function landed(row) {
  const base = optionalNumber(row.baseQuote);
  if (base === null) return null;
  const fees = base + numberValue(row.igiFee) + numberValue(row.cadFee) + numberValue(row.shipping);
  return Math.round(fees * (1 + numberValue(row.dutyReserve)));
}

function priceScores() {
  const landedValues = rows.map(landed).filter((value) => value !== null);
  if (landedValues.length === 0) return new Map();
  const min = Math.min(...landedValues);
  const max = Math.max(...landedValues);
  return new Map(rows.map((row) => {
    const value = landed(row);
    if (value === null) return [row.supplier, null];
    if (min === max) return [row.supplier, 3];
    const score = 6 - ((value - min) / (max - min)) * 4;
    return [row.supplier, Math.max(1, Math.min(5, score))];
  }));
}

function weightedScore(row, priceMap) {
  const values = {
    priceScore: priceMap.get(row.supplier),
    qualityScore: optionalNumber(row.qualityScore),
    specScore: optionalNumber(row.specScore),
    certScore: optionalNumber(row.certScore),
    commScore: optionalNumber(row.commScore),
    paymentScore: optionalNumber(row.paymentScore),
    timelineScore: optionalNumber(row.timelineScore)
  };
  let total = 0;
  let weight = 0;
  for (const key of Object.keys(WEIGHTS)) {
    if (values[key] !== null && values[key] !== undefined) {
      total += values[key] * WEIGHTS[key];
      weight += WEIGHTS[key];
    }
  }
  return weight ? total / weight : null;
}

function currency(value) {
  return value === null || value === undefined || value === "" ? "-" : "$" + Math.round(value).toLocaleString();
}

function scoreText(value) {
  return value === null || value === undefined ? "-" : value.toFixed(2);
}

function filteredRows() {
  return rows.filter((row) => {
    if (activeFilter === "first") return FIRST_WAVE.has(row.supplier);
    if (activeFilter === "quoted") return landed(row) !== null;
    if (activeFilter === "active") return !["Backup", "Paused", "Rejected", "Received"].includes(row.status);
    return true;
  });
}

function renderMetrics(priceMap) {
  const quoted = rows.map(landed).filter((value) => value !== null);
  const scored = rows
    .map((row) => ({ row, score: weightedScore(row, priceMap) }))
    .filter((item) => item.score !== null)
    .sort((a, b) => b.score - a.score);
  document.getElementById("metricTracked").textContent = rows.length;
  document.getElementById("metricQuotes").textContent = quoted.length;
  document.getElementById("metricBestScore").textContent = scored[0] ? scored[0].score.toFixed(2) : "-";
  document.getElementById("metricLowest").textContent = quoted.length ? currency(Math.min(...quoted)) : "-";
  document.getElementById("bestSupplier").textContent = scored[0] ? scored[0].row.supplier : "-";
  if (quoted.length > 1) {
    document.getElementById("quoteSpread").textContent = currency(Math.min(...quoted)) + " to " + currency(Math.max(...quoted));
  } else {
    document.getElementById("quoteSpread").textContent = quoted.length ? currency(quoted[0]) : "-";
  }
}

function renderCharts(priceMap) {
  const scoreHost = document.getElementById("scoreChart");
  const priceHost = document.getElementById("priceChart");
  const scoreRows = filteredRows()
    .map((row) => ({ row, value: weightedScore(row, priceMap) }))
    .filter((item) => item.value !== null)
    .sort((a, b) => b.value - a.value)
    .slice(0, 10);
  const priceRows = filteredRows()
    .map((row) => ({ row, value: landed(row) }))
    .filter((item) => item.value !== null)
    .sort((a, b) => a.value - b.value)
    .slice(0, 10);
  scoreHost.innerHTML = chartRows(scoreRows, 5, (value) => value.toFixed(2));
  const maxPrice = priceRows.length ? Math.max(...priceRows.map((item) => item.value)) : 1;
  priceHost.innerHTML = chartRows(priceRows, maxPrice, currency);
}

function chartRows(items, max, formatter) {
  if (!items.length) return '<p class="risk-note">No matching quote data yet.</p>';
  return items.map((item) => {
    const width = Math.max(4, Math.round((item.value / max) * 100));
    return '<div class="bar-row"><div class="bar-label" title="' + escapeHtml(item.row.supplier) + '">' +
      escapeHtml(item.row.supplier) + '</div><div class="bar-track"><div class="bar-fill" style="width:' +
      width + '%"></div></div><div class="bar-value">' + formatter(item.value) + '</div></div>';
  }).join("");
}

function renderTable(priceMap) {
  const body = document.getElementById("supplierRows");
  body.innerHTML = filteredRows().map((row) => {
    const score = weightedScore(row, priceMap);
    const scoreClass = score === null ? "" : score < 3.2 ? " low" : score < 4 ? " mid" : "";
    return '<tr>' +
      '<td class="supplier">' + escapeHtml(row.supplier) + '</td>' +
      '<td>' + textInput(row, "contact", "Contact, WhatsApp, Alibaba rep") + '</td>' +
      '<td>' + statusSelect(row) + '</td>' +
      '<td>' + moneyInput(row, "baseQuote") + '</td>' +
      '<td>' + moneyInput(row, "igiFee") + '</td>' +
      '<td>' + moneyInput(row, "shipping") + '</td>' +
      '<td>' + currency(landed(row)) + '</td>' +
      '<td>' + scoreInput(row, "qualityScore") + '</td>' +
      '<td>' + scoreInput(row, "specScore") + '</td>' +
      '<td>' + scoreInput(row, "certScore") + '</td>' +
      '<td>' + scoreInput(row, "commScore") + '</td>' +
      '<td><span class="score-pill' + scoreClass + '">' + scoreText(score) + '</span></td>' +
      '<td>' + textArea(row, "notes", "Next ask, quote caveats, decision notes") + '</td>' +
      '<td>' + textArea(row, "conversationLog", "Paste dated supplier messages and your replies here") + '</td>' +
      '<td><div class="risk-note">' + escapeHtml(row.riskFlags || row.notes || "") + '</div></td>' +
      '</tr>';
  }).join("");
}

function statusSelect(row) {
  const options = STATUS_OPTIONS.map((status) => '<option value="' + escapeAttr(status) + '"' + (row.status === status ? " selected" : "") + '>' + escapeHtml(status) + '</option>').join("");
  return '<select class="status" data-supplier="' + escapeAttr(row.supplier) + '" data-field="status">' + options + '</select>';
}

function moneyInput(row, field) {
  return '<input class="money" type="number" min="0" step="1" inputmode="decimal" data-supplier="' + escapeAttr(row.supplier) + '" data-field="' + field + '" value="' + escapeAttr(row[field]) + '">';
}

function scoreInput(row, field) {
  return '<input class="score-input" type="number" min="1" max="5" step="0.1" inputmode="decimal" data-supplier="' + escapeAttr(row.supplier) + '" data-field="' + field + '" value="' + escapeAttr(row[field]) + '">';
}

function textInput(row, field, placeholder) {
  return '<input class="text-input" type="text" data-supplier="' + escapeAttr(row.supplier) + '" data-field="' + field + '" placeholder="' + escapeAttr(placeholder) + '" value="' + escapeAttr(row[field]) + '">';
}

function textArea(row, field, placeholder) {
  const className = field === "conversationLog" ? "conversation-area" : "note-area";
  return '<textarea class="' + className + '" data-supplier="' + escapeAttr(row.supplier) + '" data-field="' + field + '" placeholder="' + escapeAttr(placeholder) + '">' + escapeHtml(row[field]) + '</textarea>';
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[char]));
}

function escapeAttr(value) {
  return escapeHtml(value).replace(/\\n/g, " ");
}

function render() {
  const priceMap = priceScores();
  renderMetrics(priceMap);
  renderCharts(priceMap);
  renderTable(priceMap);
}

document.addEventListener("input", (event) => {
  const target = event.target;
  if (!target.dataset || !target.dataset.supplier) return;
  const row = rows.find((item) => item.supplier === target.dataset.supplier);
  if (!row) return;
  row[target.dataset.field] = target.value;
  saveRows();
  if (RERENDER_FIELDS.has(target.dataset.field)) render();
});

document.addEventListener("change", (event) => {
  const target = event.target;
  if (!target.dataset || !target.dataset.supplier) return;
  const row = rows.find((item) => item.supplier === target.dataset.supplier);
  if (!row) return;
  row[target.dataset.field] = target.value;
  saveRows();
  render();
});

document.querySelectorAll(".segment").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".segment").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    activeFilter = button.dataset.filter;
    render();
  });
});

document.getElementById("resetData").addEventListener("click", () => {
  rows = seedRows();
  saveRows();
  render();
});

document.getElementById("exportCsv").addEventListener("click", () => {
  const headers = ["supplier", "contact", "channel", "status", "baseQuote", "igiFee", "shipping", "landed", "qualityScore", "specScore", "certScore", "commScore", "weightedScore", "riskFlags", "notes", "conversationLog", "source"];
  const priceMap = priceScores();
  const csv = [headers.join(",")].concat(rows.map((row) => {
    const record = {
      ...row,
      landed: landed(row) ?? "",
      weightedScore: weightedScore(row, priceMap)?.toFixed(2) ?? ""
    };
    return headers.map((header) => csvCell(record[header])).join(",");
  })).join("\\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "necklace-rfq-dashboard-export.csv";
  link.click();
  URL.revokeObjectURL(url);
});

function csvCell(value) {
  const text = String(value ?? "");
  return /[",\\n]/.test(text) ? '"' + text.replace(/"/g, '""') + '"' : text;
}

render();
`;

  await fs.writeFile(path.join(DASHBOARD_DIR, "index.html"), index);
  await fs.writeFile(path.join(DASHBOARD_DIR, "styles.css"), styles);
  await fs.writeFile(path.join(DASHBOARD_DIR, "app.js"), app);
}

function colLetter(index) {
  let n = index;
  let result = "";
  while (n > 0) {
    const mod = (n - 1) % 26;
    result = String.fromCharCode(65 + mod) + result;
    n = Math.floor((n - mod) / 26);
  }
  return result;
}

function rangeA1(startRow, startCol, rowCount, colCount) {
  const endRow = startRow + rowCount - 1;
  const endCol = startCol + colCount - 1;
  return `${colLetter(startCol)}${startRow}:${colLetter(endCol)}${endRow}`;
}

function writeMatrix(sheet, startRow, startCol, matrix) {
  sheet
    .getRangeByIndexes(startRow - 1, startCol - 1, matrix.length, matrix[0].length)
    .values = matrix;
}

function writeFormulaColumn(sheet, startRow, col, formulas) {
  sheet
    .getRangeByIndexes(startRow - 1, col - 1, formulas.length, 1)
    .formulas = formulas.map((formula) => [formula]);
}

function styleTitle(sheet, title, subtitle, endCol) {
  const titleRange = sheet.getRange(`A1:${colLetter(endCol)}1`);
  titleRange.merge();
  titleRange.values = [[title]];
  titleRange.format.fill = { color: "#1F2933" };
  titleRange.format.font = { bold: true, color: "#FFFFFF", size: 16 };
  titleRange.format.rowHeightPx = 34;

  const subRange = sheet.getRange(`A2:${colLetter(endCol)}2`);
  subRange.merge();
  subRange.values = [[subtitle]];
  subRange.format.fill = { color: "#F3E3BF" };
  subRange.format.font = { color: "#202124", size: 10 };
  subRange.format.rowHeightPx = 28;
}

function styleHeader(range) {
  range.format.fill = { color: "#D8ECE9" };
  range.format.font = { bold: true, color: "#0F3F3C" };
  range.format.wrapText = true;
  range.format.borders = { preset: "outside", style: "thin", color: "#A9C9C5" };
}

function styleBody(range) {
  range.format.borders = {
    insideHorizontal: { style: "thin", color: "#E8E2D8" },
    top: { style: "thin", color: "#D6CFC1" },
    bottom: { style: "thin", color: "#D6CFC1" },
  };
  range.format.wrapText = true;
}

function setWidths(sheet, widths) {
  widths.forEach((width, idx) => {
    sheet.getRange(`${colLetter(idx + 1)}:${colLetter(idx + 1)}`).format.columnWidth = width;
  });
}

function weightedScoreFormula(rowNumber) {
  const scoreCols = ["Q", "R", "S", "T", "U", "V", "W"];
  const pieces = scoreCols.map((col, idx) => ({
    score: `${col}${rowNumber}`,
    weight: `'Scoring Rubric'!$B$${idx + 5}`,
  }));
  const numerator = pieces
    .map((piece) => `IF(ISNUMBER(${piece.score}),${piece.score}*${piece.weight},0)`)
    .join("+");
  const denominator = pieces
    .map((piece) => `IF(ISNUMBER(${piece.score}),${piece.weight},0)`)
    .join("+");
  return `=IF(COUNT(Q${rowNumber}:W${rowNumber})=0,"",ROUND((${numerator})/(${denominator}),2))`;
}

async function buildWorkbook() {
  const workbook = Workbook.create();
  workbook.comments.setSelf({ displayName: "User" });
  const dashboard = workbook.worksheets.add("Dashboard");
  const tracker = workbook.worksheets.add("RFQ Tracker");
  const supplierSheet = workbook.worksheets.add("Suppliers");
  const reviewSheet = workbook.worksheets.add("Review Log");
  const questionSheet = workbook.worksheets.add("Question Bank");
  const qcSheet = workbook.worksheets.add("QC Checklist");
  const specSheet = workbook.worksheets.add("Spec");
  const scoringSheet = workbook.worksheets.add("Scoring Rubric");

  [
    dashboard,
    tracker,
    supplierSheet,
    reviewSheet,
    questionSheet,
    qcSheet,
    specSheet,
    scoringSheet,
  ].forEach((sheet) => {
    sheet.showGridLines = false;
  });

  // Scoring sheet first so tracker formulas can reference it.
  styleTitle(scoringSheet, "Scoring Rubric", `Prepared ${PREPARED_DATE}`, 4);
  writeMatrix(scoringSheet, 4, 1, scoringRows);
  styleHeader(scoringSheet.getRange("A4:D4"));
  styleBody(scoringSheet.getRange(`A5:D${4 + scoringRows.length - 1}`));
  scoringSheet.getRange("B5:B11").setNumberFormat("0%");
  setWidths(scoringSheet, [24, 12, 52, 42]);
  scoringSheet.freezePanes.freezeRows(4);

  // Suppliers.
  const supplierHeaders = [
    "Rank",
    "Supplier",
    "Shortlist",
    "Type",
    "Quote Role",
    "Best Use",
    "Expected Price",
    "Sentiment",
    "Cert Confidence",
    "Payment Protection",
    "Trade Assurance",
    "Risk",
    "First Ask",
    "Source URL",
  ];
  const supplierMatrix = [
    supplierHeaders,
    ...suppliers.map((s) => [
      s.rank,
      s.supplier,
      s.shortlist,
      s.type,
      s.quoteRole,
      s.bestUse,
      s.expectedPrice,
      s.sentiment,
      s.certificateConfidence,
      s.paymentProtection,
      s.tradeAssurance,
      s.risk,
      s.firstAsk,
      s.source,
    ]),
  ];
  styleTitle(supplierSheet, "Ranked Supplier List", "Use this as the pre-RFQ shortlist and sentiment baseline.", 14);
  writeMatrix(supplierSheet, 4, 1, supplierMatrix);
  styleHeader(supplierSheet.getRange("A4:N4"));
  styleBody(supplierSheet.getRange(`A5:N${4 + suppliers.length}`));
  supplierSheet.tables.add(`A4:N${4 + suppliers.length}`, true, "SuppliersTable");
  supplierSheet.getRange("H5:J14").setNumberFormat("0.0");
  setWidths(supplierSheet, [8, 22, 12, 25, 24, 46, 16, 12, 14, 15, 22, 48, 48, 44]);
  supplierSheet.freezePanes.freezeRows(4);

  // RFQ tracker.
  const trackerHeaders = [
    "Supplier",
    "Contact / Rep",
    "Channel",
    "Status",
    "Priority",
    "RFQ Sent",
    "Response Due",
    "Last Contact",
    "Follow-up Due",
    "Base Quote",
    "IGI Fee",
    "CAD Fee",
    "Shipping",
    "Duty Reserve",
    "Landed Est.",
    "Lead Days",
    "Price Score",
    "Quality Score",
    "Spec Score",
    "Cert Score",
    "Comm Score",
    "Payment Score",
    "Timeline Score",
    "Weighted Score",
    "Cert Required",
    "IGI Report #",
    "Cert Verified",
    "CAD Received",
    "Stone Video",
    "QC Passed",
    "Risk Flags",
    "Notes",
    "Conversation Log",
    "Source URL",
  ];
  const trackerMatrix = [
    trackerHeaders,
    ...trackerRows.map((row) => [
      row.supplier,
      row.contact,
      row.channel,
      row.status,
      row.priority,
      row.rfqSent,
      row.responseDue,
      row.lastContact,
      row.followUpDue,
      row.baseQuote,
      row.igiFee,
      row.cadFee,
      row.shipping,
      row.dutyReserve,
      row.landed,
      row.leadTime,
      row.priceScore,
      row.qualityScore,
      row.specScore,
      row.certScore,
      row.commScore,
      row.paymentScore,
      row.timelineScore,
      row.weightedScore,
      row.certRequired,
      row.igiReport,
      row.certVerified,
      row.cadReceived,
      row.stoneVideo,
      row.qcPassed,
      row.riskFlags,
      row.notes,
      row.conversationLog,
      row.source,
    ]),
  ];
  styleTitle(tracker, "RFQ Tracker", "Enter quotes and supplier answers here; score and landed estimate update automatically.", 34);
  writeMatrix(tracker, 4, 1, trackerMatrix);
  styleHeader(tracker.getRange("A4:AH4"));
  styleBody(tracker.getRange(`A5:AH${4 + trackerRows.length}`));
  tracker.tables.add(`A4:AH${4 + trackerRows.length}`, true, "RFQTrackerTable");
  setWidths(tracker, [
    22, 18, 24, 16, 9, 12, 13, 13, 13, 12, 10, 10, 10, 12, 12, 10, 11, 12, 11, 11, 11, 12, 12, 13, 12, 16, 12, 12, 12, 12, 42, 42, 58, 42,
  ]);
  tracker.getRange("F5:I34").setNumberFormat("yyyy-mm-dd");
  tracker.getRange("J5:M34").setNumberFormat('"$"#,##0');
  tracker.getRange("N5:N34").setNumberFormat("0%");
  tracker.getRange("O5:O34").setNumberFormat('"$"#,##0');
  tracker.getRange("Q5:X34").setNumberFormat("0.00");
  tracker.freezePanes.freezeRows(4);
  tracker.freezePanes.freezeColumns(1);
  tracker.getRange("D5:D34").dataValidation = { rule: { type: "list", values: statuses } };
  tracker.getRange("Y5:Y34").dataValidation = { rule: { type: "list", values: yesNo } };
  tracker.getRange("AA5:AD34").dataValidation = { rule: { type: "list", values: yesNo } };
  tracker.getRange("Q5:W34").dataValidation = {
    rule: { type: "decimal", operator: "between", formula1: 1, formula2: 5 },
  };
  const dataRows = 30;
  writeFormulaColumn(
    tracker,
    5,
    9,
    Array.from({ length: dataRows }, (_, i) => {
      const r = i + 5;
      return `=IF(D${r}="Target","",IF(D${r}="Backup","",IF(H${r}="","",H${r}+3)))`;
    }),
  );
  writeFormulaColumn(
    tracker,
    5,
    15,
    Array.from({ length: dataRows }, (_, i) => {
      const r = i + 5;
      return `=IF(J${r}="","",SUM(J${r}:M${r})*(1+N${r}))`;
    }),
  );
  writeFormulaColumn(
    tracker,
    5,
    17,
    Array.from({ length: dataRows }, (_, i) => {
      const r = i + 5;
      return `=IF(O${r}="","",IF(COUNT($O$5:$O$34)<2,3,MAX(1,MIN(5,6-((O${r}-MIN($O$5:$O$34))/(MAX($O$5:$O$34)-MIN($O$5:$O$34))*4)))))`;
    }),
  );
  writeFormulaColumn(
    tracker,
    5,
    24,
    Array.from({ length: dataRows }, (_, i) => weightedScoreFormula(i + 5)),
  );

  // Review log.
  const reviewHeaders = ["Supplier", "Platform", "Sentiment", "Score", "Note", "Source URL"];
  writeMatrix(reviewSheet, 4, 1, [
    reviewHeaders,
    ...reviewRows.map((row) => [
      row.supplier,
      row.platform,
      row.sentiment,
      row.score,
      row.note,
      row.source,
    ]),
  ]);
  styleTitle(reviewSheet, "Review Sentiment Log", "Directional public/community signal to update as you find better evidence.", 6);
  styleHeader(reviewSheet.getRange("A4:F4"));
  styleBody(reviewSheet.getRange(`A5:F${4 + reviewRows.length}`));
  reviewSheet.tables.add(`A4:F${4 + reviewRows.length}`, true, "ReviewLogTable");
  reviewSheet.getRange("D5:D14").setNumberFormat("0.0");
  setWidths(reviewSheet, [24, 28, 20, 10, 62, 48]);
  reviewSheet.freezePanes.freezeRows(4);

  // Question bank.
  const questionHeaders = ["Stage", "Priority", "Question", "Why It Matters"];
  writeMatrix(questionSheet, 4, 1, [
    questionHeaders,
    ...questions.map((q) => [q.stage, q.priority, q.question, q.why]),
  ]);
  styleTitle(questionSheet, "Question Bank", "Copy these into supplier chats as the RFQ advances.", 4);
  styleHeader(questionSheet.getRange("A4:D4"));
  styleBody(questionSheet.getRange(`A5:D${4 + questions.length}`));
  questionSheet.tables.add(`A4:D${4 + questions.length}`, true, "QuestionBankTable");
  setWidths(questionSheet, [18, 14, 72, 58]);
  questionSheet.freezePanes.freezeRows(4);

  // QC checklist.
  writeMatrix(qcSheet, 4, 1, [["Category", "Check", "Proof to Request", "Gate"], ...qcRows]);
  styleTitle(qcSheet, "QC Checklist", "Use as gates before deposit, production, final payment, and shipment.", 4);
  styleHeader(qcSheet.getRange("A4:D4"));
  styleBody(qcSheet.getRange(`A5:D${4 + qcRows.length}`));
  qcSheet.tables.add(`A4:D${4 + qcRows.length}`, true, "QCChecklistTable");
  setWidths(qcSheet, [18, 58, 42, 28]);
  qcSheet.freezePanes.freezeRows(4);

  // Spec sheet.
  styleTitle(specSheet, "Reference Spec", "Reference necklace requirements and non-negotiables.", 10);
  writeMatrix(specSheet, 4, 1, [["Field", "Target / Note"], ...specRows]);
  styleHeader(specSheet.getRange("A4:B4"));
  styleBody(specSheet.getRange(`A5:B${4 + specRows.length}`));
  setWidths(specSheet, [30, 80, 4, 4, 4, 4, 4, 4, 4, 26]);
  specSheet.freezePanes.freezeRows(4);
  try {
    const img = await fs.readFile(REFERENCE_IMAGE);
    const dataUrl = `data:image/png;base64,${img.toString("base64")}`;
    specSheet.images.add({
      dataUrl,
      anchor: { from: { row: 3, col: 9 }, extent: { widthPx: 170, heightPx: 225 } },
    });
  } catch {
    // Image is optional in the workbook; the docs/dashboard still carry the spec.
  }

  // Dashboard.
  styleTitle(dashboard, "Necklace RFQ Dashboard", "Summary formulas read from RFQ Tracker and Suppliers.", 14);
  const metricRows = [
    ["Metric", "Value", "Formula / Meaning"],
    ["Total suppliers tracked", `=COUNTA('Suppliers'!$B$5:$B$14)`, "Supplier list rows"],
    ["First-wave suppliers", `=COUNTIF('Suppliers'!$C$5:$C$14,"Yes")`, "Suppliers to quote first"],
    ["Quotes with landed estimate", `=COUNT('RFQ Tracker'!$O$5:$O$34)`, "Rows with base quote entered"],
    ["Lowest landed estimate", `=IF(COUNT('RFQ Tracker'!$O$5:$O$34)=0,"",MIN('RFQ Tracker'!$O$5:$O$34))`, "Quote + fees + duty/tax reserve"],
    ["Highest weighted score", `=IFERROR(MAX('RFQ Tracker'!$X$5:$X$34),"")`, "Best current weighted score"],
    ["Best current supplier", `=IFERROR(INDEX('RFQ Tracker'!$A$5:$A$34,MATCH(MAX('RFQ Tracker'!$X$5:$X$34),'RFQ Tracker'!$X$5:$X$34,0)),"")`, "Updates as scores change"],
    ["Open certificate gaps", `=COUNTIFS('RFQ Tracker'!$Y$5:$Y$34,"Yes",'RFQ Tracker'!$AA$5:$AA$34,"<>Yes")`, "Rows needing cert verification"],
  ];
  dashboard.getRange("A4:C11").values = metricRows;
  dashboard.getRange("B5:B11").formulas = metricRows.slice(1).map((row) => [row[1]]);
  styleHeader(dashboard.getRange("A4:C4"));
  styleBody(dashboard.getRange("A5:C11"));
  dashboard.getRange("B8:B8").setNumberFormat('"$"#,##0');
  dashboard.getRange("B9:B9").setNumberFormat("0.00");
  dashboard.getRange("B5:B7").setNumberFormat("0");
  dashboard.getRange("B11:B11").setNumberFormat("0");
  setWidths(dashboard, [28, 22, 42, 4, 4, 4, 22, 16, 16, 4, 22, 16, 16, 16]);

  const chartHeaders = [["Supplier", "Weighted Score", "Landed Estimate"]];
  writeMatrix(dashboard, 14, 1, chartHeaders);
  dashboard.getRange("A15:A24").formulas = Array.from({ length: 10 }, (_, i) => [`='RFQ Tracker'!A${i + 5}`]);
  dashboard.getRange("B15:B24").formulas = Array.from({ length: 10 }, (_, i) => [`='RFQ Tracker'!X${i + 5}`]);
  dashboard.getRange("C15:C24").formulas = Array.from({ length: 10 }, (_, i) => [`='RFQ Tracker'!O${i + 5}`]);
  styleHeader(dashboard.getRange("A14:C14"));
  styleBody(dashboard.getRange("A15:C24"));
  dashboard.getRange("B15:B24").setNumberFormat("0.00");
  dashboard.getRange("C15:C24").setNumberFormat('"$"#,##0');

  const scoreChart = dashboard.charts.add("bar", dashboard.getRange("A14:B24"));
  scoreChart.setPosition("E4", "J18");
  scoreChart.title = "Weighted Supplier Score";
  scoreChart.hasLegend = false;

  const priceChart = dashboard.charts.add("bar", dashboard.getRange("A14:A24,C14:C24"));
  priceChart.setPosition("E20", "J34");
  priceChart.title = "Landed Estimate by Supplier";
  priceChart.hasLegend = false;
  dashboard.freezePanes.freezeRows(4);

  // Notes and sources.
  dashboard.getRange("L4:N10").merge(true);
  dashboard.getRange("L4:L10").values = [
    ["Decision posture: pick the best written, verified, comparable quote, not simply the cheapest."],
    ["Main control point: IGI certificate/report number matters most for the pear stone, not the small round accent."],
    ["Import reserve is an editable estimate; confirm current duty/tax/carrier fee treatment before buying."],
    ["Source posture: Reddit/community sentiment is directional and should be updated with your own quote experience."],
    ["First-wave send list: Tianyu, Paston, Fiorese, LGG, Provence, StarsGem."],
    ["Next action: send RFQ, then fill quote, lead-time, certificate, communication, and QC proof fields."],
    [""],
  ];
  dashboard.getRange("L4:N10").format.fill = { color: "#F8F1DF" };
  dashboard.getRange("L4:N10").format.wrapText = true;
  dashboard.getRange("L4:N10").format.borders = { preset: "outside", style: "thin", color: "#D8C08C" };

  // Compact source list on Spec.
  writeMatrix(specSheet, 20, 1, [
    ["Source", "URL", "Use"],
    ...sourceLinks.map((source) => [source.name, source.url, source.note]),
  ]);
  styleHeader(specSheet.getRange("A20:C20"));
  styleBody(specSheet.getRange(`A21:C${20 + sourceLinks.length}`));
  setWidths(specSheet, [30, 80, 54, 4, 4, 4, 4, 4, 4, 26]);

  // Formula and error verification.
  const formulaScan = await workbook.inspect({
    kind: "match",
    searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
    options: { useRegex: true, maxResults: 300 },
    summary: "final formula error scan",
  });
  console.log(formulaScan.ndjson);

  await fs.mkdir(PREVIEW_DIR, { recursive: true });
  for (const sheetName of [
    "Dashboard",
    "RFQ Tracker",
    "Suppliers",
    "Review Log",
    "Question Bank",
    "QC Checklist",
    "Spec",
    "Scoring Rubric",
  ]) {
    const preview = await workbook.render({ sheetName, autoCrop: "all", scale: 1, format: "png" });
    const bytes = new Uint8Array(await preview.arrayBuffer());
    await fs.writeFile(path.join(PREVIEW_DIR, `${sheetName.replace(/ /g, "_")}.png`), bytes);
  }

  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  const output = await SpreadsheetFile.exportXlsx(workbook);
  const xlsxPath = path.join(OUTPUT_DIR, "Necklace_RFQ_Tracker.xlsx");
  await output.save(xlsxPath);
  return xlsxPath;
}

async function main() {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.mkdir(DOCS_DIR, { recursive: true });
  await fs.mkdir(DASHBOARD_DIR, { recursive: true });
  await fs.mkdir(ASSETS_DIR, { recursive: true });
  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  await fs.copyFile(SOURCE_IMAGE, REFERENCE_IMAGE);

  await writeCsvFiles();
  await writeDocs();
  await writeDashboard();
  const xlsxPath = await buildWorkbook();

  console.log(JSON.stringify({
    packageDir: PACKAGE_DIR,
    workbook: xlsxPath,
    dashboard: path.join(DASHBOARD_DIR, "index.html"),
  }, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
