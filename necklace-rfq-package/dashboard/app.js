const MAIN_STORAGE_KEY = "chain-notes-research-v4";
const ALIBABA_STORAGE_KEY = "chain-notes-alibaba-comparisons-v1";
const PRODUCT_STORAGE_KEY = "chain-notes-product-specification-v1";
const START_STORAGE_KEY = "chain-notes-start-here-v1";
const STARSGEM_STORAGE_KEY = "chain-notes-starsgem-comparison-v1";
const GOLD_STORAGE_KEY = "chain-notes-gold-guide-v1";
const ACTIVE_DOCUMENT_KEY = "chain-notes-active-document-v3";

const STARSGEM_LISTING_GALLERY_MARKDOWN = `## Listing images

These saved listing captures keep the product, metal, and construction differences visible beside the price comparison. Select a SKU below to open its live StarsGem listing.

![AuDP0000190Y-P2 · exact 14K yellow two-stone target](../assets/starsgem/listing-AuDP0000190Y-P2-2026-07-24.png)
![AuDP1033281Y-12 · certified 10K yellow round solitaire](../assets/starsgem/listing-AuDP1033281Y-12-2026-07-24.jpg)
![AuDP0003441-1 · certified 10K white pear solitaire](../assets/starsgem/listing-AuDP0003441-1-2026-07-24.jpg)
![AuDP0003421-5 · certified 10K yellow floating pear](../assets/starsgem/listing-AuDP0003421-5-2026-07-24.jpg)
![AuDP4011413(p1) · heavier 18K white two-stone benchmark](../assets/starsgem/listing-AuDP4011413-p1-2026-07-24.jpg)

[AuDP0000190Y-P2](https://starsgemmall.com/#/detail?=25751_14K+Yellow+Gold+Lab+Diamond+Necklace+1.095ct+AuDP0000190Y-P2.html) · [AuDP1033281Y-12](https://starsgemmall.com/#/detail?=21313_10K+Yellow+Lab+Diamond+Necklace+1.105ct+AuDP1033281Y-12.html) · [AuDP0003441-1](https://starsgemmall.com/#/detail?=23401_10K+White+Gold+Lab+Diamond+Necklace+0.487ct+AuDP0003441-1.html) · [AuDP0003421-5](https://starsgemmall.com/#/detail?=22908_10K+Yellow+Gold+Lab+Diamond+Necklace++0.647ct+AuDP0003421-5.html) · [AuDP4011413(p1)](https://starsgemmall.com/#/detail?=22081_18K+White+Gold+Lab+Diamond+Necklace+1.12ct+AuDP4011413%28p1%29.html)`;

const INITIAL_START_MARKDOWN = `# Start here
The shortest path from research to a clear, comparable StarsGem quote.

> **Current recommendation:** ask StarsGem to make the heavier 2.79 g AuDP4011413(p1) architecture in **unplated solid 14K yellow gold**, restore the original 0.16 ct round diamond, and quote the final payable total in both CNY and USD.

## Your four-step path

1. **Compare the five StarsGem listings.** Use the StarsGem tab to understand which product is the exact design, which is the strongest construction, and which listings are only price benchmarks.
2. **Choose the gold.** Use the Gold choice tab. The practical default is unplated 14K yellow gold; 18K yellow is the richer-color upgrade; white gold adds rhodium-plating maintenance.
3. **Lock the measurable specification.** Confirm stone sizes, minimum finished weight, chain width and thickness, clasp, certificate identity, and QC evidence in the Product spec tab.
4. **Send one controlled RFQ.** Ask for stock, upgraded-chain, and IGI versions separately. Compare final landed totals, not headline prices.

## The decision in one table

| Decision | Working answer | Why |
|---|---|---|
| Design | Round-over-pear drop | The original StarsGem SKU already has the right proportions |
| Metal | Unplated solid 14K yellow gold, stamped 585 | Best balance of appearance, wear resistance, and cost |
| Construction | Quote at least the 2.79 g comparator architecture | Stronger benchmark than the original 2.06 g necklace |
| Main pear | About 0.935–1.02 ct; 5.3 × 8.3 to 5.5 × 9 mm | Preserves the elongated visual outline |
| Accent round | Keep 0.16 ct / about 3.4 mm | The 18K comparator's 0.10 ct round is visibly smaller |
| Certificate | Quote uncertified and actual-IGI options | Lets the certificate premium stay visible |
| Currency | Request CNY and USD totals with the applied rate | StarsGem's 6.19 conversion is about 9.37% above the latest IMF reference conversion |

## What not to compare directly

- A 10K solitaire is not equivalent to the 14K two-stone target.
- A listed IGI number is not verified until it matches the exact stone that will ship.
- Gross grams are not guaranteed net gold grams.
- White and yellow gold quotes can differ in alloy, rhodium plating, density, dimensions, and maintenance.
- A low product price is not the landed total; shipping, DAP duties, payment fees, and upgrades remain separate.

## Ready-to-send opening

> I am comparing StarsGem SKUs AuDP0000190Y-P2 and AuDP4011413(p1). Please quote the heavier AuDP4011413(p1) construction in unplated solid 14K yellow gold, with a 0.935–1.02 ct pear near the listed dimensions and the original 0.16 ct / 3.4 mm round. State minimum finished weight, chain measurements, certificate status, CNY price, USD price, exchange rate, shipping, duties, fees, lead time, and final landed total.
`;

const INITIAL_STARSGEM_MARKDOWN = `# Compare the five StarsGem necklaces
The listings are useful for different questions. Only one is the exact visual target; the others test certification cost, stone size, chain construction, or metal choice.

> **Best approach:** keep AuDP0000190Y-P2 as the visual reference, but use AuDP4011413(p1) as leverage for a heavier build. Ask for that 2.79 g architecture in unplated 14K yellow gold with the original 0.16 ct round.

${STARSGEM_LISTING_GALLERY_MARKDOWN}

## Quick comparison

| SKU | What it is | CNY retail / VIP1 | StarsGem USD | Market-rate USD estimate | Best use |
|---|---|---:|---:|---:|---|
| AuDP0000190Y-P2 | 14K yellow; 0.935 ct pear + 0.16 ct round; 2.06 g; none certified | ¥2,540.78 / ¥2,489.96 | $410.47 / $402.26 | $375.28 / $367.78 | **Exact visual target** |
| AuDP1033281Y-12 | 10K yellow; 1.105 ct certified round; 1.67 g | ¥1,978.79 / ¥1,939.21 | $319.68 / $313.28 | $292.28 / $286.43 | Certified 1 ct price benchmark |
| AuDP0003441-1 | 10K white/rhodium; 0.487 ct certified pear; 1.36 g | ¥1,450.96 / ¥1,421.94 | $234.40 / $229.72 | $214.31 / $210.03 | Small white-gold pear benchmark |
| AuDP0003421-5 | 10K yellow; 0.647 ct drilled floating pear; 1.09 g | ¥1,608.42 / ¥1,576.25 | $259.84 / $254.64 | $237.57 / $232.82 | Lightweight floating-design benchmark |
| AuDP4011413(p1) | 18K white/rhodium; 1.02 ct pear + 0.10 ct round; 2.79 g | ¥4,214.08 / ¥4,129.79 | $680.79 / $667.17 | $622.44 / $609.99 | **Best construction benchmark** |

## How to read the prices

StarsGem uses approximately **6.19 CNY per USD**. The latest available IMF representative rate used in the research was **6.7703 CNY per USD**, so the StarsGem USD view is about **9.37% higher** than a straight representative-rate conversion. The market-rate column is analytical only; a bank or card processor can apply its own spread and fees.

## What each listing proves

### AuDP0000190Y-P2 — keep the look

- The exact round-over-pear proportions and 14K yellow color.
- 0.935 ct pear at 5.3 × 8.3 mm plus a 0.16 ct / 3.4 mm round.
- Main weakness: only 2.06 g gross and no certificate.

### AuDP4011413(p1) — strengthen the build

- The closest alternate round-over-pear architecture.
- 2.79 g gross, 1.02 ct pear at 5.5 × 9 mm, and a 1.2 mm-class chain note.
- Main mismatch: 18K rhodium-plated white gold and a smaller 0.10 ct round.

### The three 10K solitaires — benchmark, do not substitute

- They show how StarsGem prices certified stones in lighter, simpler settings.
- Printed IGI numbers remain supplier-stated until matched to the exact shipping stones.
- They do not price the target's 14K two-stone setting or heavier construction.

## Questions to send StarsGem

1. Can AuDP4011413(p1) be made in unplated 14K yellow gold with the original 0.16 ct round and at least 2.79 g gross weight?
2. What are the chain's measured width, thickness, link dimensions, chain-only weight, clasp, and guaranteed finished minimum?
3. Quote the exact stock piece, heavier 14K version, and actual-IGI-pear version separately.
4. Provide each printed IGI report and confirm it belongs to the exact stone that will ship.
5. Quote CNY and USD totals, the exchange rate used, shipping, DAP duties, payment fee, and final landed price.

## Evidence boundary

Specifications and prices are supplier-stated from live listings accessed July 24, 2026. Inferred non-stone mass, market-rate conversions, and design recommendations are research calculations—not supplier guarantees.
`;

const INITIAL_GOLD_MARKDOWN = `# Choose the gold
A practical guide to 14K vs 18K and yellow vs white gold for this necklace.

> **Default choice:** unplated solid 14K yellow gold, stamped 585. It keeps the original warm appearance, avoids rhodium maintenance, and is the best balance for a delicate chain.

## 14K vs 18K

| Consideration | 14K | 18K |
|---|---|---|
| Gold content | About 58.3%; commonly marked 585 | 75%; commonly marked 750 |
| Typical wear | Generally harder; exact alloy and manufacture still matter | Generally softer and easier to scratch or deform |
| Yellow color | Lighter yellow | Richer, deeper yellow |
| Cost | Lower gold-material cost | Higher gold-material cost |
| Best use here | Daily-wear/value default | Premium color upgrade |

## Yellow vs white

| Consideration | Yellow gold | White gold |
|---|---|---|
| Appearance | Warm contrast around DEF diamonds | Cool white-on-white look |
| Plating | Usually unnecessary when ordered unplated | Often rhodium plated |
| Maintenance | No white plating to renew | Rhodium gradually wears and may need replating |
| Allergy question | Ask for the full alloy recipe | Ask whether nickel-free or palladium-based |
| Best use here | Matches the original design | Choose only if the cool color is preferred |

## What matters more than karat alone

- Guaranteed finished weight and chain-only weight.
- Chain width, thickness, link geometry, clasp, and solder quality.
- Whether any component is hollow.
- Exact alloy recipe and nickel content.
- Rhodium specification and future replating terms for white gold.

## Quote both versions correctly

Ask StarsGem for the same CAD and minimum construction in:

1. **14K yellow, unplated, 585** — recommended.
2. **18K yellow, unplated, 750** — richer-color comparison.

Do not compare the two quotes by grams alone. Alloy density, dimensions, clasp, solder, and stone weight can differ. Require the same chain measurements and construction target in both quotes.
`;

const INITIAL_MARKDOWN = `# The chain I want
A living research document for turning a reference necklace into a precise, durable, fairly priced custom piece—and keeping every supplier claim attached to the question that still needs proof.

> **Working principle:** “Same as the photo” is not a specification. The order is only ready when the stone, chain, gold weight, dimensions, CAD, payment terms, and quality-control evidence are written down.

## Design brief

The target is a delicate two-stone drop necklace in **solid 14k yellow gold**: a small round lab diamond above a pear lab diamond, joined by a minimal vertical setting and carried on a fine oval-link or cable chain.

| Detail | Working target | What must be confirmed |
|---|---|---|
| Gold | Solid 14k yellow gold, stamped 585 | Finished gold weight in grams; never plated, filled, or vermeil |
| Chain | 40 + 5 cm adjustable cable/oval-link | Width, thickness, clasp, end tab, and chain weight |
| Pear | 0.90–1.00 ct; about 5.3 × 8.3 mm; D–F; VS+ | Exact stone video, dimensions, report number if certified |
| Round | 0.15–0.20 ct; about 3.4 mm; D–F; VS+ | Close-up and written specs; individual report not necessary |
| Setting | Fine prongs; clean vertical connection | CAD dimensions, side profile, articulation, and snag points |
| Protection | Written order with QC gates | Remake/refund language and payment platform coverage |

### The reference, not the contract

The visual reference is StarsGem’s “14K Yellow Gold Lab Diamond Necklace 1.095ct AuDP0000190Y-P2.” This is an exact purchasable comparison—not just an inspiration image. The listing records **$410.47 retail**, 14k yellow gold with no plating, a 40 + 5 cm chain, 2.06 g product weight, a 0.935 ct pear measuring 5.3 × 8.3 mm, and a 0.16 ct round measuring 3.4 mm. It also says **none certified**, so an IGI report remains a separate upgrade request.

[Open the StarsGem reference listing](https://starsgemmall.com/#/detail?=25751_14K+Yellow+Gold+Lab+Diamond+Necklace+1.095ct+AuDP0000190Y-P2.html)

## Non-negotiables

- [ ] Solid 14k yellow gold is stated on the invoice as **solid**, with a 585 stamp.
- [ ] Finished gold weight and chain width/thickness are stated before deposit.
- [ ] The pear shown in the approved video is the pear used in production.
- [ ] An IGI option includes the actual report number and matching laser inscription—not a sample report.
- [ ] CAD is approved before casting and shows all critical dimensions.
- [ ] Final payment waits for finished-piece video, ruler check, scale weight, stamp, and stone close-ups.
- [ ] The written order says what happens if the piece misses the approved CAD or specifications.

## How to read supplier claims

There are three evidence levels in this notebook:

1. **Supplier-stated** — wording from a current reply, quote, listing, or invoice. Record the date and paste the exact useful sentence.
2. **Observed** — something visible in a stone video, CAD, scale photo, ruler photo, certificate lookup, or finished-piece video.
3. **Unverified research** — a capability, reputation, or risk signal gathered before contact. This helps form questions; it is not proof of this order.

For every new claim, add its source and the next verification step. A friendly answer is not the same thing as a measurable answer.

## Cost baseline

**Known exact stock price as of July 24, 2026: $410.47** from StarsGem for the 14k, 40 + 5 cm, 1.095 ctw reference necklace at 2.06 g, without certification. New Alibaba research makes the useful Chinese-factory brackets narrower: **$350–$600** for a strict uncertified stock-style comparison, and roughly **$500–$900** for an IGI-selected pear, a confirmed or heavier chain, CAD/QC, and ordinary shipping. Established custom suppliers may still quote **$700–$1,450**, but that is a service/weight/certification comparison—not the floor for reproducing this SKU.

For cross-supplier context, a July 2026 buyer compared a pear-shaped lab-diamond pendant across five of these suppliers: **StarsGem $920, Provence $1,100, Fiorese $1,245, LGG $1,260, and Paston $1,330**. The exact stone size, chain, certification, and fees were not published, so these are secondary quote signals; StarsGem’s exact $410.47 SKU is the stronger anchor for this project. [Open the comparison](https://www.reddit.com/r/Moissanite/comments/1v1h3vy/op_zoek_naar_leverancierswelke_moet_je_kiezen/)

For a U.S. retail floor check, Quince currently lists a simpler **1 ct IGI pear solitaire in 14k with an adjustable 0.8–1 mm cable chain for $698**; Nordstrom lists a 1 ct 14k pear solitaire at **$978.25 sale / $1,505 regular**. The target necklace should cost more than the Quince piece because it adds a 0.15–0.20 ct round, custom two-stone geometry, CAD iteration, and a 45 cm adjustable chain. [Quince comparator](https://www.quince.com/women/14k-gold-lab-grown-diamond-pear-necklace---1ctw) · [Nordstrom comparator](https://www.nordstrom.com/s/pear-perfection-14k-gold-lab-grown-diamond-necklace-1-ct/8583033)

| Supplier | Estimated target cost | Confidence | Strongest public signal |
|---|---:|---|---|
| Tianyu | $1,000–$1,350 | Medium | $1,100 promo for a 14k pear/round necklace |
| Paston | $1,150–$1,450 | Medium | $1,330 reported comparable quote |
| Fiorese | $1,300–$1,800 | Medium-high | $1,754.25 listed 14k/1 ct pear necklace; $1,245 reported quote |
| LGG | $950–$1,300 | Medium-high | $829–$1,089 listed larger two-stone necklace; $1,260 reported quote |
| Provence | $700–$1,100 | Medium | $654 listed 18k pear/round choker; $1,100 reported quote |
| StarsGem | $500–$750 | High | Exact necklace is $410.47 uncertified; 2.06 g and 1.095 ctw |
| Mona | $1,300–$1,900 | Low | No necklace comp; historical premium custom quote only |
| Kuololit | $700–$1,050 | Medium | $1,039 listed 14k/1.3 ctw necklace |
| Messi | $750–$1,200 | Low | Necklace capability shown, no reliable configured price |
| Ouros / Golden Bird | $700–$1,200 | Low | 1 ct IGI pear listing exists; 14k variant price not exposed |

> **How to use the ranges:** they are negotiation brackets, not appraisals or promises. Compare the landed total only after matching carat, exact stone identity, gold grams, chain gauge, certification, CAD, shipping, and buyer protection. A quote outside the range is a prompt to investigate—not automatic proof of a bargain or overcharge.

## China / Alibaba price challenge

### Bottom line

**StarsGem is currently the rational default.** It already makes the exact 1.095 ctw design for $410.47, and its separate Alibaba 1 ct pear-solitaire listing is **$395–$600 at MOQ 1**. That consistency makes the mall price believable. A different factory should win only by delivering a materially better landed value—not by showing a lower mixed-variant headline.

[StarsGem 1 ct pear solitaire on Alibaba](https://www.alibaba.com/product-detail/Starsgem-Fine-Jewelry-Solitaire-1ct-Pear_1601378797481.html) · [Alibaba China solitaire results](https://www.alibaba.com/countrysearch/CN/diamond-pendant-solitaire.html)

### Shortlist worth challenging

| China supplier / listing | Public Alibaba signal | What the price does not prove | RFQ target |
|---|---:|---|---:|
| **StarsGem** | $395–$600, 1 ct pear solitaire, MOQ 1 | Exact 14k variant, certificate, gold grams, and shipping must be selected | Keep exact SKU at $410.47; ≤$475 landed uncertified |
| **Anster Fine Jewelry** | $250–$300, 1 ct pear, 10k/14k, MOQ 1 | Range likely mixes metal/variants; listing is a solitaire, not the two-stone SKU | ≤$400 before shipping if truly 14k, 2.06 g+, and 1.095 ctw |
| **Shenzhen Hong Yun Fu** | $200–$576, 0.5/1/2 ct pear, 14k, MOQ 1 | Wide range mixes carat options; exact 1 ct/14k configuration is unknown | ≤$425 before shipping, same written specification |
| **Provence** | $759–$1,410, 1–3 ct pear, 10/14/18k, IGI | The listing states roughly 4–10 g precious metal, so it is heavier and not price-equivalent | Consider only if 14k/1 ct/4 g is ≤$800 landed |

[Anster result on Alibaba](https://www.alibaba.com/countrysearch/CN/diamond-pendant-solitaire.html) · [Hong Yun Fu pear-solitaire results](https://www.alibaba.com/showroom/price-14k-gold.html) · [Provence pear necklace on Alibaba](https://www.alibaba.com/product-detail/Fine-Jewelry-18k-14k-10k-Gold_1601581553072.html)

These are **price leads, not accepted comparables**. Alibaba ranges routinely combine 10k/14k/18k, several carat weights, certified and uncertified stones, pendant-only and necklace versions, and sometimes moissanite or plated metal. Ignore any very low result unless the order page itself says solid 14k, lab-grown diamond, exact stones, finished gold grams, chain included, and MOQ 1.

### Decision rule

1. Ask StarsGem to place **SKU AuDP0000190Y-P2** into an Alibaba-protected order with the complete specification, not merely a generic payment link.
2. Send the identical specification to Anster and Hong Yun Fu. Give them one chance to quote the finished piece, shipping, and any certificate upgrade separately.
3. **Buy StarsGem** if stock is confirmed, the finished-piece evidence is satisfactory, and the exact uncertified necklace is **$475 or less landed**.
4. For an IGI pear and/or stronger chain, **buy StarsGem at $650 or less landed** if the actual report, stone video, revised gold weight, and chain dimensions are supplied.
5. Switch factories only if the competitor is **at least $75–$100 cheaper landed** at the same 2.06 g-or-better build, or supplies a meaningful upgrade such as IGI plus 3 g+ of finished gold for approximately the StarsGem total.

### Copy-ready Alibaba RFQ

> Please quote one finished necklace matching StarsGem SKU AuDP0000190Y-P2: solid 14k yellow gold stamped 585; 40 + 5 cm chain; 0.935 ct DEF/VS pear lab diamond approximately 5.3 × 8.3 mm; 0.16 ct DEF/VS round approximately 3.4 mm; minimum 1.095 ctw; minimum 2.06 g finished product weight. State chain width and thickness, clasp, exact finished gold weight, whether the chain is included, certification status, CAD cost, production time, shipping to the United States, and total landed price. Please quote (A) uncertified and (B) an IGI pear with its actual report number. The Alibaba order must contain these specifications, selected-stone identity, CAD approval, and final QC requirements.

### Alibaba protection checklist

- [ ] Keep negotiation, specification, invoice, and payment on Alibaba.
- [ ] The order—not only the chat—states solid 14k, stone dimensions/weight, chain, finished grams, and certificate status.
- [ ] Confirm the protection applies to this customized order and the stated ship date.
- [ ] Do not pay by wire, PayPal Friends & Family, crypto, or an off-platform link to save a small fee.
- [ ] Save the approved CAD, stone video, report lookup, and final QC evidence before confirming receipt.

Alibaba product pages advertise secure payments and refunds for orders that are not shipped, are lost, or arrive with problems; those protections depend on placing and paying for the order through Alibaba. Treat that as useful recourse, not a substitute for a measurable order specification.

---

## Supplier: Tianyu Gems
<!-- meta: First wave | Quality baseline | Priority 1 | Est. $1,000–$1,350 -->

### Current record

**Unverified research:** Tianyu is the quality baseline in this comparison: a custom fine-jewelry manufacturer associated with stronger CAD discipline and finish. No current quote or order-specific promise has been recorded yet.

**Likely strength:** translating a refined reference into a balanced custom build.  
**Main risk:** a higher price can still hide an overly light chain unless finished weight and dimensions are explicit.  
**Source:** [Tianyu Gems](https://www.tygems.net/)

### Comparable pricing

**Closest public comparison:** Tianyu advertised a June 2026 14k yellow-gold pear-and-round lab-diamond necklace for **$1,100 promotional / $1,561 regular**. It used a smaller 4 × 6 mm pear plus six 3.5 mm rounds and a 45.7 cm chain, so it is design-relevant but has a different diamond layout. [See the Tianyu promotion](https://www.reddit.com/r/TianyuGemsOfficial/comments/1u4mhs4/stock_jewelry_promotion_worldwide_shipping14k/)

**Estimated target cost: $1,000–$1,350. Confidence: medium.** Expect the larger pear and custom two-stone CAD to consume some savings from having fewer accent stones. Treat anything below $900 as a reason to verify whether the pear is certified and whether the quoted chain is unusually light.

### How to approach them

Lead with the design and quality bar, not a request for their lowest price. Ask them to propose one uncertified pear and one IGI pear that preserve the reference’s elongated outline. Request a line-item quote, CAD process, expected finished gold weight, and the safest buyer-protected payment route they can offer.

**Use as leverage:** Their quote establishes what a quality-forward build costs. Later, ask whether they can match a better landed price without reducing gold weight or changing the approved stone.

**Do not advance until:** they state chain dimensions, finished gold weight, CAD timing, stone-approval process, and whether the selected stone is reserved after approval.

### Reply log

> _Add dated supplier statements here. Example: **2026-07-23 · WhatsApp · Supplier-stated:** “…”_

---

## Supplier: Paston Jewelry
<!-- meta: First wave | Alibaba-first | Priority 2 | Est. $1,150–$1,450 -->

### Current record

**Unverified research:** Paston is the strongest candidate for an apples-to-apples Alibaba quote with Trade Assurance. No current reply has yet confirmed that this particular custom order and its written specifications will be covered.

**Likely strength:** clean commercial comparison and buyer-protected ordering.  
**Main risk:** generic stone or certificate material can be substituted for stone-specific proof.  
**Source:** [Paston Jewelry on Alibaba](https://pastonjewelry.en.alibaba.com/)

### Comparable pricing

**Closest public comparison:** a July 2026 buyer reported a **$1,330 Paston quote** for the same general pear-shaped lab-diamond pendant project; in that five-vendor comparison, Paston was the highest quote. The post did not disclose the complete specification. [See the quote comparison](https://www.reddit.com/r/Moissanite/comments/1v1h3vy/op_zoek_naar_leverancierswelke_moet_je_kiezen/)

**Estimated target cost: $1,150–$1,450. Confidence: medium.** The upper half is acceptable if it buys a documented IGI pear, sturdy chain, Trade Assurance coverage, and especially clear QC. Negotiate the specification and landed total together; community reports describe Paston as good but not usually the cheapest.

### How to approach them

Send the full specification through Alibaba and ask for every cost on its own line: necklace, IGI upgrade, CAD, shipping, and any tax/duty handling. Make the Trade Assurance order mirror the agreed specification and QC gates.

**Use as leverage:** Ask them to compete on landed price and clarity of terms, not just the headline necklace price.

**Do not advance until:** the selected pear’s specs are written, the exact IGI report is provided if applicable, and the order page contains the chain and QC promises.

### Reply log

> _No supplier statements recorded yet._

---

## Supplier: Fiorese Jewelry
<!-- meta: First wave | Certification baseline | Priority 3 | Est. $1,300–$1,800 -->

### Current record

**Unverified research:** Fiorese is the certification and stone-transparency baseline. The working assumption is that they may offer stronger access to certified lab-diamond choices, but this has not been verified for this necklace.

**Likely strength:** presenting traceable pear options and discussing diamond specifications.  
**Main risk:** a premium quote without equally strong payment protection or chain construction.  
**Source:** [Fiorese Jewelry](https://fioresejewelry.com/)

### Comparable pricing

**Closest supplier listing:** Fiorese currently lists a 14k necklace with a **1 ct DEF/VS pear and 1.3 mm rolo chain for $1,754.25 sale / $2,339 regular**. A July 2026 buyer separately reported a **$1,245 direct Fiorese quote** for a comparable pear pendant, showing that bespoke/direct pricing can differ materially from storefront retail. [Supplier listing](https://fioresejewelry.com/products/pear-shaped-lab-diamond-pendant-necklace-rolo-chain) · [Reported comparison](https://www.reddit.com/r/Moissanite/comments/1v1h3vy/op_zoek_naar_leverancierswelke_moet_je_kiezen/)

**Estimated target cost: $1,300–$1,800. Confidence: medium-high.** The target adds a round accent but uses roughly the same main-stone size. A quote near $1,250 would be attractive if it includes the chain, report, CAD, and shipping; a storefront-style quote near $1,750 is plausible but should carry stronger documentation and service.

### How to approach them

Start with the pear. Ask for two or three IGI options near the target dimensions, each with report number, face-up video, price, and availability. Then have them quote the setting and chain around the chosen proportions. Include a no-stone-substitution sentence in the invoice.

**Use as leverage:** Compare their actual certified-stone selection and evidence against other vendors’ generic “DEF VS” promises.

**Do not advance until:** payment protection, stone reservation, no-substitution wording, CAD approval, and remake policy are explicit.

### Reply log

> _No supplier statements recorded yet._

---

## Supplier: LGG Jewelry / Igg Jewelry
<!-- meta: First wave | Lab-diamond specialist | Priority 4 | Est. $950–$1,300 -->

### Current record

**Unverified research:** LGG is included as a lab-diamond-specific custom candidate. There is less recorded price history for this exact necklace, so process and terms need to be learned directly.

**Likely strength:** treating the lab diamond as central to the build rather than a catalog add-on.  
**Main risk:** unclear order channel, payment terms, or quality-control workflow.  
**Source:** [LGG Jewelry](https://www.lggjewelry.com/)

### Comparable pricing

**Closest supplier listing:** LGG lists a visually close two-stone drop—1 ct round over 2 ct pear, about 3 ctw—for **$829–$1,089** across metal variants. A July 2026 buyer also reported a **$1,260 LGG quote** for a pear pendant. The listed design is larger than the target but its displayed range may begin with 10k, so the 14k configuration must be confirmed. [LGG two-stone necklace](https://www.lggjewelry.com/products/elegant-1-ct-round-cut-2-ct-pear-cut-drop-pendant-necklace) · [Reported comparison](https://www.reddit.com/r/Moissanite/comments/1v1h3vy/op_zoek_naar_leverancierswelke_moet_je_kiezen/)

**Estimated target cost: $950–$1,300. Confidence: medium-high.** This supplier has the most structurally comparable public design. Use its own larger necklace to challenge any target quote above $1,300, while checking which metal, certificate, and chain are actually included in the public price.

### How to approach them

Ask them to explain their complete process in sequence: stone selection, deposit, CAD, production, QC, balance, and shipment. Request certified and uncertified pear options plus a firm finished-gold estimate.

**Use as leverage:** Let process clarity earn the shortlist position. Ask them to match the evidence and buyer protection offered by Alibaba-based competitors.

**Do not advance until:** the selling entity, payment recipient, protection terms, certificate path, and QC checkpoints all appear on a written invoice.

### Reply log

> _No supplier statements recorded yet._

---

## Supplier: Provence Gems
<!-- meta: First wave | Price benchmark | Priority 5 | Est. $700–$1,100 -->

### Current record

**Unverified research:** Provence is the price-pressure benchmark—a volume custom vendor that may establish the lower end of the realistic price range. Community sentiment is mixed and should only determine how tightly the order is controlled.

**Likely strength:** competitive custom quote and Alibaba workflow.  
**Main risk:** variability in communication or execution if specifications and approvals are loose.  
**Source:** [Provence Gems on Alibaba](https://gzprovence.en.alibaba.com/)

### Comparable pricing

**Closest supplier evidence:** Provence lists an 18k pear-and-round lab-diamond choker for **$654**, though stone weights are not fully specified and the page warns that final details may vary. A recent Provence representative also described a 14k necklace with a 2 ct pear at about **$700**; the five-vendor pear-pendant comparison reported **$1,100**. [Provence choker listing](https://provencegems.com/product/pear-shape-lab-diamond-necklace-18k-gold-lab-diamond-choker-with-19-bead-accents/) · [Representative’s 2 ct price signal](https://www.reddit.com/r/ProvenceJewelry/comments/1suahe1/provence_jewelry_daisy_shares_pear_cut_lab/) · [Reported comparison](https://www.reddit.com/r/Moissanite/comments/1v1h3vy/op_zoek_naar_leverancierswelke_moet_je_kiezen/)

**Estimated target cost: $700–$1,100. Confidence: medium.** The wide bracket reflects incomplete storefront specifications and possible group-buy/direct pricing. Below $700, assume something important may be excluded until gold grams, certificate, chain, CAD, and shipping prove otherwise.

### How to approach them

Send exactly the same RFQ used for Tianyu and Paston. Do not simplify it for price. Ask for a line-item quote and put every measurable term into Trade Assurance. Require stone video before approval and complete finished-piece evidence before the balance.

**Use as leverage:** Their quote tests the floor price. If it is dramatically cheaper, compare gold grams, chain gauge, stone certification, fees, and shipping before calling it a saving.

**Do not advance until:** every vague “yes” has been converted into a number, document, image, or video.

### Reply log

> _No supplier statements recorded yet._

---

## Supplier: StarsGem
<!-- meta: First wave | Exact listing | Priority 6 | Est. $500–$750 -->

### Current record

**Supplier-stated in the supplied listing record:** retail price **$410.47**; 14k yellow gold with no plating; 40 + 5 cm length; 2.06 g product weight; and 1.095 ctw total. The main pear is 0.935 ct, DEF/VS CVD, 5.3 × 8.3 mm; the round is 0.16 ct, DEF/VS, 3.4 mm. Certificate status is **None Certified**. SKU: **AuDP0000190Y-P2**.

**Likely strength:** closest access to the original design and its intended proportions.  
**Main risk:** assuming the stock reference includes certification, chain weight, or customization that it does not state.  
**Source:** [StarsGem reference](https://starsgemmall.com/#/detail?=25751_14K+Yellow+Gold+Lab+Diamond+Necklace+1.095ct+AuDP0000190Y-P2.html)

### Direct StarsGem listing set — added July 24, 2026

The four additional listings are comparison evidence, not interchangeable substitutes. Prices below use the live CNY listings. StarsGem's USD selector uses **6.19 CNY/USD**; the IMF's latest available representative rate was **6.7703 CNY/USD on July 23**, so the site USD display is approximately **9.37% above** a straight representative-rate conversion.

| SKU | Build | Stones | Gross / inferred non-stone mass | Certificate shown | CNY retail / VIP1 | StarsGem USD | Market-rate USD | Decision use |
|---|---|---|---:|---|---:|---:|---:|---|
| AuDP0000190Y-P2 | 14K yellow, no plating, 40+5 cm | 0.935 ct pear + 0.160 ct round | 2.06 g / 1.841 g | None | ¥2,540.78 / ¥2,489.96 | $410.47 / $402.26 | $375.28 / $367.78 | Exact target |
| AuDP1033281Y-12 | 10K yellow, no plating, 40+5 cm | 1.105 ct CVD round, 6.5–6.7 mm | 1.67 g / 1.449 g | IGI 19J161052602 | ¥1,978.79 / ¥1,939.21 | $319.68 / $313.28 | $292.28 / $286.43 | Certified round price floor |
| AuDP0003441-1 | 10K white, rhodium, 40+5 cm | 0.487 ct pear, 4.5 × 6.5 mm | 1.36 g / 1.263 g | IGI 77J062772510 | ¥1,450.96 / ¥1,421.94 | $234.40 / $229.72 | $214.31 / $210.03 | Small certified pear benchmark |
| AuDP0003421-5 | 10K yellow, no plating, to 19 in | 0.647 ct drilled floating pear, 5 × 7 mm | 1.09 g / 0.961 g | IGI 59J521952508 | ¥1,608.42 / ¥1,576.25 | $259.84 / $254.64 | $237.57 / $232.82 | Lightweight floating-design benchmark |
| AuDP4011413(p1) | 18K white, rhodium, 40+5 cm | 1.02 ct pear + 0.10 ct round | 2.79 g / 2.566 g | None stated | ¥4,214.08 / ¥4,129.79 | $680.79 / $667.17 | $622.44 / $609.99 | Closest heavier architecture |

**Best new leverage:** ask StarsGem to make the 2.79 g AuDP4011413(p1) construction in unplated 14K yellow gold while restoring the original 0.16 ct round. The three printed IGI numbers are supplier-stated and still need to be matched on [IGI's official lookup](https://lookup.igi.org/) before purchase. “Inferred non-stone mass” is gross weight minus listed stone weight, not guaranteed net gold.

[10K yellow 1.105 ct round](https://starsgemmall.com/#/detail?=21313_10K+Yellow+Lab+Diamond+Necklace+1.105ct+AuDP1033281Y-12.html) · [10K white 0.487 ct pear](https://starsgemmall.com/#/detail?=23401_10K+White+Gold+Lab+Diamond+Necklace+0.487ct+AuDP0003441-1.html) · [10K yellow 0.647 ct floating pear](https://starsgemmall.com/#/detail?=22908_10K+Yellow+Gold+Lab+Diamond+Necklace++0.647ct+AuDP0003421-5.html) · [18K white 1.12 ct two-stone](https://starsgemmall.com/#/detail?=22081_18K+White+Gold+Lab+Diamond+Necklace+1.12ct+AuDP4011413%28p1%29.html) · [IMF July 2026 representative rates](https://www.imf.org/external/np/fin/data/rms_mth.aspx?reporttype=rep)

### Comparable pricing

**Exact supplier comparison:** the StarsGem listing matches the target design, metal, chain length, stone sizes, and total carat weight at **$410.47 retail**. It is therefore the primary price anchor. The principal gaps are explicit: no certificate, only 2.06 g total product weight, and no published chain width/thickness beyond the product-description note “方1.0mm,” whose meaning should be confirmed. The separate **$920** community-reported StarsGem quote likely reflects a different pear pendant specification and should not override this exact SKU. [Exact StarsGem listing](https://starsgemmall.com/#/detail?=25751_14K+Yellow+Gold+Lab+Diamond+Necklace+1.095ct+AuDP0000190Y-P2.html) · [Reported $920 comparison](https://www.reddit.com/r/Moissanite/comments/1v1h3vy/op_zoek_naar_leverancierswelke_moet_je_kiezen/)

**Alibaba cross-check:** StarsGem separately lists a 1 ct pear lab-diamond solitaire necklace for **$395–$600, MOQ 1**, with 10k/14k options. The design is simpler than the two-stone reference and its price range still requires variant confirmation, but it independently supports a roughly $400 factory price rather than contradicting it. [Open the Alibaba listing](https://www.alibaba.com/product-detail/Starsgem-Fine-Jewelry-Solitaire-1ct-Pear_1601378797481.html)

**Estimated desired StarsGem version: $500–$750. Confidence: high.** Start at $410.47 for the exact uncertified stock piece. Allow roughly **$90–$340** as a working—not quoted—budget for an IGI-selected pear, any CAD or substitution fee, additional gold if the chain is strengthened, and shipping. If no construction changes are needed, the certified version should be challenged if it rises far above $750 without a clearly better stone or substantially more gold.

### How to approach them

Lead with the SKU and the known facts so there is no ambiguity: “I see AuDP0000190Y-P2 at $410.47, 2.06 g, 40 + 5 cm, and none certified.” Ask them to honor that stock price through an Alibaba-protected order, then ask for only the incremental prices: (1) replace the pear with a chosen IGI stone, (2) increase chain width or finished gold weight if recommended, and (3) shipping. Ask whether the pictured stock piece is available now or must be remade.

**Use as leverage:** $410.47 is the base, not an abstract benchmark. Make StarsGem explain every dollar added above it, and use the 2.06 g weight and exact stone dimensions to force every other supplier into a truly comparable quote.

**Do not advance until:** they confirm stock availability, whether “方1.0mm” describes the chain gauge, the chain’s actual width/thickness and gold allocation, the price of the exact IGI replacement pear, whether the 0.16 ct round remains unchanged, and every component altered from SKU AuDP0000190Y-P2.

### Reply log

> _No direct conversation recorded yet._

---

## Supplier: Mona Fine Jewelry
<!-- meta: Backup | Personal service | Priority 7 | Est. $1,300–$1,900 -->

### Current record

**Unverified research:** Mona is a personal-service backup rather than a first-wave factory comparison. The value proposition would be taste, guidance, and close communication; payment protection and factory-level terms require extra scrutiny.

**Likely strength:** a more individual stone-selection and design conversation.  
**Main risk:** less standardized buyer protection and harder price comparison.  
**Research lead:** [Community vendor directory](https://www.reddit.com/r/Moissanite/wiki/list/)

### Comparable pricing

**Closest public signal:** no current like-for-like necklace price was found. An older comparison for an 18k DEF lab-diamond custom ring reported **$1,760 from Mona versus $575 from Tianyu**, although commenters questioned whether the quotes included the same center stone. This is evidence of a premium position, not a usable necklace comp. [See the historical quote discussion](https://www.reddit.com/r/LabDiamonds/comments/1bqufw8/tianyu_vs_mona_quotes/)

**Estimated target cost: $1,300–$1,900. Confidence: low.** The range assumes a personal-service premium over the Chinese factory cluster. Do not anchor to it until Mona confirms that she currently handles lab-diamond necklaces and quotes the same stone, chain, and certificate scope.

### How to approach them

Use only if first-wave replies feel impersonal or weak on design judgment. Ask for a written invoice, the legal/payment entity, stone sourcing process, revision allowance, and exact refund/remake policy before discussing a deposit.

**Use as leverage:** Evaluate the premium against the amount of genuine design guidance and accountability provided.

**Do not advance until:** the entire custom process and recourse path are documented in writing.

### Reply log

> _No supplier statements recorded yet._

---

## Supplier: Kuololit
<!-- meta: Backup | Budget check | Priority 8 | Est. $700–$1,050 -->

### Current record

**Unverified research:** Kuololit is a value/catalog backup with some custom work, but is a less natural fit for an original certified-pear commission.

**Likely strength:** value if an existing construction can be adapted without compromising the brief.  
**Main risk:** the job being treated as a light modification of stock rather than a controlled custom build.  
**Research lead:** [Community vendor directory](https://www.reddit.com/r/Moissanite/wiki/list/)

### Comparable pricing

**Closest supplier listings:** Kuololit lists a **1.3 ctw 14k lab-diamond necklace with a 40 + 5 cm chain for $1,039**. Its collection also advertises a **2 ct pear IGI necklace from $514**, though “from” pricing spans 10k/14k options and should not be read as the target 14k configuration. [1.3 ctw 14k necklace](https://www.kuololit.net/products/kuololit-1-3ctw-lab-grown-diamonds-necklace-for-women-solid-585-14k-10k-yellow-gold-d-vs1-diamond-necklace-for-anniversary-gift) · [Pear necklace collection](https://www.kuololit.net/collections/lab-grown-diamonds-necklace)

**Estimated target cost: $700–$1,050. Confidence: medium.** A stock-derived build should fall inside this band. If the quote reaches the top, require true original CAD, the exact IGI pear, and clear chain specs rather than accepting a lightly adapted catalog model.

### How to approach them

Ask first whether they will create and revise an original CAD and source the exact pear, rather than simply swap a stone into a stock model. Only request a full quote if that answer is clear.

**Use as leverage:** A meaningfully lower quote is useful only if gold weight, chain gauge, stone, and QC remain directly comparable.

**Do not advance until:** a named representative owns the custom process and confirms CAD, stone, and pre-shipment evidence.

### Reply log

> _No supplier statements recorded yet._

---

## Supplier: Messi Gems
<!-- meta: Watchlist | Extra comparison | Priority 9 | Est. $750–$1,200 -->

### Current record

**Unverified research:** Messi is an optional comparison if the first wave fails to produce three useful quotes. Existing research is thinner and includes enough certificate/stone-substitution concern to require hard verification.

**Likely strength:** another Wuzhou price point.  
**Main risk:** certificate identity or stone substitution if evidence is generic.  
**Research lead:** [Community vendor directory](https://www.reddit.com/r/Moissanite/wiki/list/)

### Comparable pricing

**Closest supplier evidence:** Messi publicly shows pear lab diamonds and a 1 ct 14k/18k necklace model, but its searchable product pages do not expose a trustworthy configured necklace price. One loose-diamond page displays **$2,300** without enough carat/grade context to compare, so it should not be used as an anchor. [Messi 1 ct necklace model](https://www.messijewelry.com/p-messi-jewelry-lab-grown-diamond-tennis-necklace-price-list.html) · [Pear-diamond page](https://www.messijewelry.com/p-lab-grown-diamond-by-messi-jewelry.html)

**Estimated target cost: $750–$1,200. Confidence: low.** This is a factory-peer bracket, not a supplier-derived quote. Contact Messi only if they will itemize the chosen stone, 14k build, chain, certification, CAD, and shipping; otherwise the range is too speculative to support a decision.

### How to approach them

Keep communication entirely evidence-led: actual report number, stone video tied to that report, inscription proof, written reservation of the approved stone, and protected payment.

**Use as leverage:** None beyond comparison; a low price is not enough to offset missing identity evidence.

**Stop immediately if:** the report, video, and selected stone cannot be tied together unambiguously.

### Reply log

> _No supplier statements recorded yet._

---

## Supplier: Ouros / Goldenbird
<!-- meta: Watchlist | India comparison | Priority 10 | Est. $700–$1,200 -->

### Current record

**Unverified research:** This is not a first-wave option. It is retained only for a specific listing or an India-based comparison; caution signals in the existing research make it a poor default for a sentimental custom piece.

**Likely strength:** alternate geographic and pricing comparison.  
**Main risk:** spending time on a lower-confidence route without a compelling design or price advantage.  
**Research lead:** [Community vendor directory](https://www.reddit.com/r/Moissanite/wiki/list/)

### Comparable pricing

**Closest supplier listing:** Golden Bird lists a pear lab-diamond solitaire with a 1 ct EF/VS IGI stone and 16-inch chain; the page starts at **$170**, but that displayed price is the sterling-silver/low-carat variant, not the required 14k configuration. The page does confirm 14k solid gold and 0.50–3.00 ct options. Ouros has a pear lab-diamond tennis necklace, but it is too structurally different to price the target. [Golden Bird pear pendant](https://www.goldenbirdjewels.com/products/pear-cut-lab-diamond-solitaire-pendant) · [Ouros pear tennis necklace](https://ca.ourosjewels.com/collections/diamond-tennis-necklace/products/pear-shaped-diamond-tennis-necklace)

**Estimated target cost: $700–$1,200. Confidence: low.** The range uses the broader India-direct market rather than a valid configured price. Require a screenshot or invoice showing the selected 14k, 1 ct IGI, chain, and accent options before comparing it with the first wave.

### How to approach them

Contact only with a specific reason. Require the same written specification, stone identity trail, CAD gates, payment protection, and remake terms as every first-wave supplier.

**Use as leverage:** Geographic comparison only; do not lower the evidence standard.

**Do not advance until:** the option offers a distinct, documented advantage over the first wave.

### Reply log

> _No supplier statements recorded yet._

---

## Outreach script

Copy this exact request to the first wave so the replies remain comparable:

> Hello, I am looking for a custom necklace quote. Please quote a solid 14k yellow gold two-stone lab diamond necklace with a 40 + 5 cm adjustable delicate cable/oval-link chain and lobster clasp. The pendant has one round lab diamond above one pear lab diamond, following the linked reference proportions.
>
> Target stones: pear around 0.90–1.00 ct and 5.3 × 8.3 mm, D–F color, VS or better; round around 0.15–0.20 ct and 3.4 mm, D–F, VS or better. Please quote the pear both without and with an IGI report.
>
> Please list separately: necklace price, IGI added cost, CAD fee, shipping to the United States, production time, finished gold weight, chain width/thickness, clasp, payment terms, buyer protection, and refund/remake policy. Before deposit I need the selected stone’s video and written specs. Before final payment I need finished photos/video, chain on a ruler, scale weight, 585 stamp, and IGI inscription proof if certified.

### If they answer “yes, same as photo”

Ask them to confirm each measurable detail: solid 14k/585, finished grams, chain dimensions, both stones’ dimensions and grades, CAD before production, and use of the exact approved pear.

### If the price is unusually low

Ask what changed. Specifically check solid versus plated gold, finished weight, chain gauge, stone material, certification, CAD fee, shipping, and whether the quoted price includes the pictured chain.

## Quote comparison

Fill this only from written supplier answers. Use **—** rather than guessing.

| Supplier | Base | IGI add-on | Ship | Gold g | Chain mm | Lead time | Protection | Open issue |
|---|---:|---:|---:|---:|---:|---|---|---|
| Tianyu | — | — | — | — | — | — | — | — |
| Paston | — | — | — | — | — | — | — | — |
| Fiorese | — | — | — | — | — | — | — | — |
| LGG | — | — | — | — | — | — | — | — |
| Provence | — | — | — | — | — | — | — | — |
| StarsGem | — | — | — | — | — | — | — | — |

## Approval path

1. **Collect comparable quotes.** Wait for at least three complete replies before negotiating deeply.
2. **Shortlist two or three.** Favor direct answers, line items, realistic timing, CAD approval, stone evidence, and protected payment.
3. **Approve the pear.** Match video, dimensions, report number, availability, and inscription; record the exact stone in the order.
4. **Approve CAD.** Check proportion, side profile, prongs, articulation, pendant dimensions, chain connection, clasp, and adjuster.
5. **Lock the contract.** Put the specification, chosen stone, price, timeline, QC deliverables, and remake/refund language into the protected order or invoice.
6. **Approve shipment.** Inspect full video, alignment, finish, clasp, ruler length, scale weight, 585 stamp, and certificate identity before releasing the balance.

## Decision log

Use this section to preserve why the specification or shortlist changed.

| Date | Decision | Evidence | What changes next |
|---|---|---|---|
| 2026-07-23 | Reframed the project as a research document | Supplier claims need context and iteration, not board status | Record replies inside each supplier dossier |
`;

const INITIAL_ALIBABA_MARKDOWN = `# Closest Alibaba comparisons
A dedicated working sheet for finding Chinese factory listings that can genuinely challenge StarsGem’s $410.47 necklace—without mistaking a mixed-variant, plated, moissanite, pendant-only, or sample price for the finished 14k piece.

> **Current recommendation:** StarsGem remains the default. Use the alternatives below to test its price and upgrade cost. Change suppliers only for a meaningful landed saving or a measurable construction/certification upgrade.

## Exact comparison specification

Every supplier must quote this same finished piece. A listing is not comparable until each field is confirmed in the Alibaba order.

| Item | Required comparison value |
|---|---|
| Design | Round lab diamond above pear lab diamond; same proportions as StarsGem AuDP0000190Y-P2 |
| Metal | Solid 14k yellow gold; 585 stamp; no plating, filling, or vermeil |
| Chain | Included; 40 + 5 cm; actual width and thickness stated |
| Pear | About 0.935 ct; about 5.3 × 8.3 mm; DEF/VS; CVD or HPHT stated |
| Round | About 0.16 ct; about 3.4 mm; DEF/VS |
| Total diamond | Minimum 1.095 ctw |
| Finished weight | Minimum 2.06 g for the complete necklace; quote a 3 g option separately |
| Certification | Price A: none certified; Price B: actual IGI pear with report number |
| Commercial terms | MOQ 1; CAD, production, shipping, and all fees itemized |

## Closest public listings

### 1. StarsGem — direct benchmark
<!-- meta: Closest match | Verified public price | $395–$600 -->

**What is public:** StarsGem’s own mall lists the exact two-stone SKU for **$410.47**. Its Alibaba catalog separately lists a 1 ct pear solitaire necklace at **$395–$600, MOQ 1**, with 10k/14k options. The second listing is a simpler solitaire, but its price independently supports the approximate $400 factory level.

**What still needs proof:** exact 14k selection price on Alibaba, whether the $410.47 stock unit is available, chain gauge, shipping, and whether StarsGem will write the mall SKU into an Alibaba-protected order.

**Normalized estimate for the target:** **$410–$500 uncertified and delivered; $500–$650 with an IGI pear and/or modest chain upgrade.** This is a working estimate, not a supplier quote.

[Exact StarsGem reference](https://starsgemmall.com/#/detail?=25751_14K+Yellow+Gold+Lab+Diamond+Necklace+1.095ct+AuDP0000190Y-P2.html) · [StarsGem 1 ct pear solitaire on Alibaba](https://www.alibaba.com/product-detail/Starsgem-Fine-Jewelry-Solitaire-1ct-Pear_1601378797481.html)

### 2. Anster Fine Jewelry — strongest low-price challenger
<!-- meta: Price lead | Variant must be verified | $250–$300 -->

**What is public:** Alibaba’s China solitaire results show an Anster 1 ct pear lab-diamond necklace in 10k/14k at **$250–$300, MOQ 1**. The supplier result displays five years on Alibaba, a 4.9/5 rating, and 50 reviews at the time captured.

**Why it is close:** the main-stone size, pear shape, solid-gold options, necklace format, Chinese factory route, and single-piece MOQ all match the commercial problem.

**What prevents direct comparison:** the public range may begin with 10k or another variant; it does not establish 14k gold grams, chain inclusion/gauge, a 0.16 ct round accent, certification, shipping, or the checkout price for this exact configuration.

**Normalized estimate for the target:** **$325–$450 before shipping** if Anster truly honors its public 14k price structure. Require a complete written quote before treating this as real savings.

[Find the Anster pear listing in Alibaba’s China solitaire results](https://www.alibaba.com/countrysearch/CN/diamond-pendant-solitaire.html)

### 3. Shenzhen Hong Yun Fu — useful second quote
<!-- meta: Price lead | Wide option range | $200–$576 -->

**What is public:** a pear-cut lab-grown diamond necklace is advertised in AU585/14k with 0.5 ct, 1 ct, and 2 ct variants at **$200–$576, MOQ 1**. Public supplier signals captured during research showed three years on the platform, a 4.8/5 rating, and a comparatively strong reorder signal.

**Why it is close:** it explicitly combines pear lab diamond, 14k/AU585, necklace, China, and MOQ 1.

**What prevents direct comparison:** the headline range mixes three carat weights. It does not prove the 1 ct price, chain grams/gauge, accent diamond, certificate, finish, shipping, or a two-stone CAD.

**Normalized estimate for the target:** **$350–$525 before shipping.** It is a quote check, not a reason to abandon the exact StarsGem design.

[Open relevant 14k Alibaba results](https://www.alibaba.com/showroom/price-14k-gold.html)

### 4. Provence Gems — heavier/certified comparison
<!-- meta: Quality upgrade | IGI available | $759–$1,410 -->

**What is public:** Provence lists pear lab-diamond necklaces at **$759–$1,410** across 1–3 ct and 10k/14k/18k options. The listing states DEF, VVS/VS, IGI, an 18-inch chain, and approximately 4–10 g of precious metal.

**Why it matters:** this is not the cheapest alternative, but it tests what a heavier and certified Chinese-factory build costs. Its approximately 4 g minimum is materially different from StarsGem’s entire 2.06 g necklace.

**What prevents direct comparison:** the price range mixes metal and carat variants; the 14k/1 ct checkout price, exact chain allocation, two-stone change, shipping, and final gold weight must be quoted.

**Normalized estimate for the target:** **$700–$900 delivered** if it includes an actual IGI pear and around 4 g finished weight. Above that, require a clearly better stone, chain, or service package.

[Open the Provence Alibaba listing](https://www.alibaba.com/product-detail/Fine-Jewelry-18k-14k-10k-Gold_1601581553072.html)

## Secondary price signals

| Listing signal | Public price | Usefulness | Why it is not the winner yet |
|---|---:|---|---|
| One Circle 1 ct DEF VVS/VS lab-diamond pendant | $180–$500 | Tests the lab-diamond floor | Metal, chain, configuration, and exact variant are unclear |
| Guangxi Wuzhou Brilliant 0.5–3 ct pendant, 10k/14k/18k | $200–$310 | Another Wuzhou factory lead | Round design; range mixes carat and metal variants |
| Henan Stars custom IGI 1–5 ct pendant, 14k/18k | $350–$880 | Certification/custom capability | Round design and mixed variants; newer supplier history |
| StarsGem certified round pendant, 1–2 ct | $575–$1,070 | Tests StarsGem’s own IGI upgrade band | Round solitaire, mixed carat/metal options |

[Browse the underlying Alibaba China listings](https://www.alibaba.com/countrysearch/CN/diamond-pendant-solitaire.html)

## Exclude from the comparison

- **Moissanite listings:** even when they say “diamond tester” or use $400+ solid-gold pricing, the center stone is not a lab-grown diamond.
- **Gold plated, vermeil, filled, or 925 silver listings:** low prices often describe the coating color, not solid 14k construction.
- **Pendant-only prices:** confirm that the 40 + 5 cm solid-gold chain and clasp are included.
- **From-price and sample-price cards:** the displayed amount may correspond to 10k, 0.5 ct, silver, no chain, high MOQ, or a deposit.
- **Certification language without a report number:** “IGI available” is not proof that the quoted stone includes an actual report.
- **Gross package weight:** this is shipping weight, not finished gold weight.

## Landed-price scorecard

Fill this from supplier messages and the actual Alibaba order page. Do not copy the public range into the quote columns.

| Supplier | Exact 14k base | IGI add | Ship/tax | Landed | Finished g | Chain mm | Actual report | Protected order | Verdict |
|---|---:|---:|---:|---:|---:|---:|---|---|---|
| StarsGem | — | — | — | — | — | — | — | — | — |
| Anster | — | — | — | — | — | — | — | — | — |
| Hong Yun Fu | — | — | — | — | — | — | — | — | — |
| Provence | — | — | — | — | — | — | — | — | — |

## Buy-or-switch rule

1. **Buy StarsGem stock** when SKU AuDP0000190Y-P2 is confirmed, final QC is satisfactory, and the uncertified landed total is **$475 or less** through Alibaba.
2. **Buy upgraded StarsGem** when the landed total is **$650 or less** and includes the actual IGI pear/report and/or a documented stronger chain.
3. **Switch to Anster or Hong Yun Fu** only if the finished order is at least **$75–$100 cheaper landed** with the same stones, 2.06 g-or-better weight, chain, and protection.
4. **Choose Provence** only when paying more deliberately buys approximately 4 g finished weight, an actual IGI pear, or meaningfully stronger construction/QC.
5. Never choose from the headline price alone. Compare the completed order specification and finished evidence.

## Copy-ready RFQ

> Please quote one finished necklace matching StarsGem SKU AuDP0000190Y-P2: solid 14k yellow gold stamped 585; 40 + 5 cm chain; 0.935 ct DEF/VS pear lab diamond approximately 5.3 × 8.3 mm; 0.16 ct DEF/VS round approximately 3.4 mm; minimum 1.095 ctw; minimum 2.06 g finished product weight. State chain width and thickness, clasp, exact finished gold weight, whether the chain is included, certification status, CAD cost, production time, shipping to the United States, and total landed price. Please quote (A) uncertified and (B) an IGI pear with its actual report number. The Alibaba order must contain these specifications, selected-stone identity, CAD approval, and final QC requirements.

## Alibaba order checklist

- [ ] Supplier legal name matches the Alibaba storefront and payment recipient.
- [ ] Negotiation, specification, custom order, and payment stay on Alibaba.
- [ ] Order says solid 14k/585—not merely “gold” or “yellow-gold color.”
- [ ] Both diamonds, dimensions, grades, chain, clasp, length, and minimum finished weight are written into the order.
- [ ] Actual IGI report number and selected-stone video are attached when certification is purchased.
- [ ] CAD approval happens before production; final balance waits for QC evidence.
- [ ] Final video shows alignment, articulation, clasp, ruler length, scale weight, 585 stamp, and inscription if applicable.
- [ ] Refund/remake language covers material deviation from the approved CAD and written specification.

## Comparison log

| Date | Supplier | Evidence received | Price change | Remaining issue |
|---|---|---|---:|---|
| 2026-07-23 | Research baseline | Public Alibaba listing signals recorded | — | Send identical RFQ and replace estimates with written quotes |
`;

const INITIAL_PRODUCT_MARKDOWN = `# The necklace to order
An order-ready product page for the StarsGem two-stone drop necklace: what the listing actually states, what the photographs reasonably suggest, what remains uncertain, and the exact questions that convert it into a dependable specification.

![StarsGem two-stone pear and round lab-diamond necklace](../assets/reference-necklace.png)

> **Reference product:** StarsGem “14K Yellow Gold Lab Diamond Necklace 1.095ct AuDP0000190Y-P2” — listed at **$410.47**. [Open the original listing](https://starsgemmall.com/#/detail?=25751_14K+Yellow+Gold+Lab+Diamond+Necklace+1.095ct+AuDP0000190Y-P2.html)

## Recommended order configuration

The safest value choice is the exact visual design in **solid 14k yellow gold**, but with its light construction made measurable. Keep the 40 + 5 cm length and the listed stone dimensions. Before ordering, require the chain gauge, chain-only weight, pendant-only weight, actual clasp, finished-piece scale photo, and final video. Ask for two prices: the stock uncertified version and a version with an actual IGI pear.

| Component | Order target | Acceptable economical version | Preferred daily-wear version |
|---|---|---|---|
| Metal | Solid 14k yellow gold, 585 stamp, no plating | Exact stock construction | Same design with more gold where the chain/links need it |
| Length | 40 cm chain + 5 cm extender | Exact listing length | Same; request usable clasp points at 40, 42.5, and 45 cm if possible |
| Chain | Fine elongated cable/oval-link appearance | Confirm listing’s “方1.0mm” and actual caliper measurements | Quote 1.1–1.2 mm or minimum 2.5–3.0 g total finished weight without changing the look |
| Pear | 0.935 ct, about 5.3 × 8.3 mm, DEF/VS lab diamond | Uncertified with exact stone video | IGI report number, inscription match, and exact stone video |
| Round | 0.16 ct, about 3.4 mm, DEF/VS lab diamond | No individual report necessary | Written specs and close-up; report not worth much at this size |
| Setting | Minimal vertical round-over-pear drop | Match stock piece | CAD with prong, gallery, connection, and snag-point dimensions |
| Finished weight | Listing says 2.06 g complete | Accept only after chain/pendant split and QC | Prefer at least 2.5 g; quote 3.0 g option separately |

## What the StarsGem listing states

| Field | Supplier-stated value | Interpretation |
|---|---|---|
| SKU | AuDP0000190Y-P2 | Use this in every message and order |
| Retail price | $410.47 | Exact stock anchor; shipping/duty may differ |
| Metal | 14k yellow gold | Ask invoice to say solid 14k/585; “no plating” is also listed |
| Length | 40 + 5 cm | About 15.75 in plus a 1.97 in extender; maximum about 17.72 in |
| Product weight | 2.06 g | Entire necklace is very light; not enough information to isolate chain strength |
| Total diamond | 1.095 ctw | 0.935 ct pear + 0.16 ct round |
| Pear | DEF, VS, CVD, pear shape, 5.3 × 8.3 mm, 0.935 ct | Elongated ratio is about 1.57; dimensions matter more than calling it “1 ct” |
| Round | DEF, VS, round, 3.4 mm, 0.16 ct | Size is visually plausible above the pear; individual certification unnecessary |
| Certificate | None Certified | The exact listed stones do not come with an IGI report unless explicitly changed |
| Product description | 方1.0mm | Likely a 1.0 mm chain/construction note, but the exact Chinese factory meaning must be confirmed |

## Chain analysis

### What can reasonably be inferred

The photograph shows a **fine open-link chain with elongated oval or rectangular links**, best described in an English RFQ as a delicate cable/oval-link chain. It does not look like a snake, wheat, rope, curb, or solid box chain. The pendant appears to hang from a polished elongated bail through which the chain passes.

The listing’s “40 + 5 cm” almost certainly means a 40 cm primary chain plus a 5 cm extender, allowing a choker-to-short-princess range of roughly **15.75–17.72 inches**. On many wearers, the pendant will sit high around the collarbone rather than at the common 18-inch position.

The phrase **“方1.0mm” is ambiguous**. 方 can refer to square/rectangular form, and the note may mean a 1.0 mm square-style or chain dimension. The photograph looks more like open elongated links than a classic closed box chain, so do not translate the phrase into a contract. Ask StarsGem for its exact chain name/code, width and thickness at three points, link dimensions, and a caliper photo.

At **2.06 g for the entire necklace**, the chain, clasp, extender, settings, and gold around both stones share a small gold budget. That can be appropriate for a deliberately delicate occasional-wear piece, but it leaves little margin for vague construction. The best upgrade is not an arbitrary “thicker chain”; it is a quoted minimum finished weight plus measured chain width/thickness while preserving the visual scale.

### Ask StarsGem these chain questions

- What exactly does “方1.0mm” mean for this SKU in Chinese and English?
- Is this a cable, oval-link, rectangular-link, box, or another factory chain code?
- What are the chain’s measured width and thickness in millimeters—not the wire diameter alone?
- What are one link’s outside length and width?
- How many grams belong to the chain/extender/clasp, and how many to the pendant/settings?
- Is the 2.06 g a guaranteed finished minimum or an average/sample weight?
- What clasp is included, what is its size, and does the extender have a finished end tag?
- Can they quote the same look at 1.1–1.2 mm and/or a 2.5 g and 3.0 g total minimum?
- Will the pendant slide freely, and can the bail pass over the clasp if the chain ever needs replacement?

## Setting and construction analysis

The product image suggests a polished fixed bail at the top, a prong-set round diamond, a small vertical connection, and a prong-set pear below. The front view is consistent with a very minimal open setting designed to maximize visible diamond. It is **not sufficient to determine** the exact prong count, whether the round and pear articulate independently, how much metal protects the pear tip, or whether the galleries are open-backed.

The likely weak points are the bail-to-round joint, the tiny round-to-pear connection, the pear-tip protection, and any very fine chain link adjacent to the pendant. These are normal design questions, not evidence of a defect.

### Ask for these CAD and setting details

- Front, side, and back CAD with overall pendant height and maximum width.
- Exact prong count and prong thickness for both stones.
- A dedicated V-prong or equivalent protection at the pear tip; confirm it in the CAD and finished video.
- Gallery/seat depth and whether each stone has an open back for cleaning.
- Whether the round-to-pear connection is fixed or articulated; if articulated, wire/jump-ring diameter and solder points.
- Bail inside dimensions, outside dimensions, wall thickness, and how it is joined to the round setting.
- Confirmation that the pear hangs straight and cannot flip excessively in normal wear.
- Close-up final video showing prong symmetry, no visible gaps, smooth joints, and no chain kinks.

## Diamond and certificate strategy

The exact SKU uses a **0.935 ct DEF/VS CVD pear** and a **0.16 ct DEF/VS round**, for 1.095 ctw. The pear’s 5.3 × 8.3 mm measurements yield an elongated length-to-width ratio of about **1.57**, which is a defining visual feature. Require replacements to stay close to those dimensions; a heavier but shorter/wider pear could change the look.

The listing says **None Certified**. The attached StarsGem graphic says IGI service is available, that an IGI number can be verified, and that a certificate without StarsGem branding can be reissued free with approximately five working days’ delay. This is a general service claim—not evidence that this exact SKU already includes a report.

![StarsGem IGI certificate-service information](../assets/starsgem/igi-certificate-service.jpg)

For the IGI option, require the actual report number before payment, verify it on [IGI’s report-check site](https://www.igi.org/verify-your-report/), match the measurements to the approved video, and require the finished-piece video to show the laser inscription when reasonably possible. The 0.16 ct round does not need its own report; written specs and close-up evidence are proportionate.

## Commercial terms shown with the listing

StarsGem’s service graphic advertises seven-day returns for quality problems, stock shipment within 48 working hours, and responses within 24 working hours. It also recommends avoiding chemicals, scratches, soaking, and sleeping in the necklace; storing it in a box; and cleaning with a soft cloth. These are supplier-stated care/service messages, not a substitute for the order’s exact return terms.

![StarsGem service and jewelry-maintenance information](../assets/starsgem/care-and-service.jpg)

The pre-purchase notice says the default international term is **DAP**: delivery to the destination is arranged, but customs clearance and duties are not included. It also warns about remote-area surcharges, possible packaging differences, and additional overweight-order shipping. Ask for the complete delivered shipping charge and who handles any duty/tax before paying.

![StarsGem pre-purchase and DAP shipping notice](../assets/starsgem/pre-purchase-notice.jpg)

## Three sensible purchase versions

### A. Exact-value version

- Exact stock SKU at $410.47 plus confirmed shipping.
- None-certified listed stones.
- Keep 2.06 g only after chain dimensions, weight split, stock availability, and final QC are confirmed.
- Best if the delicate look and lowest cost matter most.

### B. Daily-wear version — recommended

- Same stones and proportions.
- Minimum 2.5 g finished weight or a measured 1.1–1.2 mm chain, whichever preserves the look better.
- Stronger bail/connection and pear-tip protection verified in CAD.
- Uncertified pear is acceptable if the actual stone video is excellent and identity is locked.

### C. Traceable version

- Daily-wear construction plus an actual IGI pear near 5.3 × 8.3 mm.
- Report number, inscription, video, and no-substitution wording.
- Target challenge price: about $650 or less delivered from StarsGem unless the gold weight increases materially.

## Closest necklace links

| Link | Why it helps | Important difference |
|---|---|---|
| [StarsGem exact two-stone listing](https://starsgemmall.com/#/detail?=25751_14K+Yellow+Gold+Lab+Diamond+Necklace+1.095ct+AuDP0000190Y-P2.html) | Exact source and $410.47 anchor | None-certified; construction details incomplete |
| [StarsGem 1 ct pear solitaire on Alibaba](https://www.alibaba.com/product-detail/Starsgem-Fine-Jewelry-Solitaire-1ct-Pear_1601378797481.html) | Confirms roughly $395–$600 Chinese factory band | No round accent; variants must be selected |
| [LGG two-stone round-over-pear necklace](https://www.lggjewelry.com/products/elegant-1-ct-round-cut-2-ct-pear-cut-drop-pendant-necklace) | Closest public two-stone architecture | Much larger 3 ctw design and mixed metal pricing |
| [Fiorese 1 ct pear necklace with 1.3 mm rolo chain](https://fioresejewelry.com/products/pear-shaped-lab-diamond-pendant-necklace-rolo-chain) | Useful chain-gauge and certified-quality comparison | Solitaire and retail-style price |
| [Provence pear/round choker](https://provencegems.com/product/pear-shape-lab-diamond-necklace-18k-gold-lab-diamond-choker-with-19-bead-accents/) | Chinese custom build with pear/round visual vocabulary | Different accent layout and incomplete specs |
| [Quince 1 ct IGI pear necklace](https://www.quince.com/women/14k-gold-lab-grown-diamond-pear-necklace---1ctw) | U.S. retail floor with 0.8–1 mm adjustable chain | No round accent; retail service model |
| [Kuololit lab-diamond necklace collection](https://www.kuololit.net/collections/lab-grown-diamonds-necklace) | Chinese retail/custom price context | “From” prices mix metals and variants |

## Copy-ready StarsGem message

> I want to order SKU AuDP0000190Y-P2. I understand the listing price is $410.47 for 14k yellow gold, 40 + 5 cm, 2.06 g, a 0.935 ct 5.3 × 8.3 mm DEF/VS CVD pear, a 0.16 ct 3.4 mm DEF/VS round, and no certificate. Before ordering, please confirm stock availability and explain exactly what “方1.0mm” means. Please provide the chain type/factory code, chain width and thickness by caliper, one link’s dimensions, chain/extender/clasp weight, pendant weight, clasp type, and whether 2.06 g is the guaranteed finished minimum. Also quote: (A) the exact stock piece, (B) the same piece with a minimum 2.5 g finished weight or 1.1–1.2 mm chain, and (C) version B with an actual IGI pear near the listed 5.3 × 8.3 mm dimensions. List shipping, DAP/customs terms, production time, CAD fee, selected-stone approval, final QC evidence, and return/remake terms separately. Please put every confirmed specification into the protected order.

## Final approval checklist

- [ ] Exact SKU, solid 14k/585, no plating, and final price appear in the order.
- [ ] Chain type/code, width, thickness, link size, clasp, and 40 + 5 cm length are written.
- [ ] Minimum finished weight and chain/pendant weight split are documented.
- [ ] Exact pear and round dimensions/weights/grades match the approved stones.
- [ ] IGI report and inscription match if that upgrade is purchased.
- [ ] CAD confirms prongs, pear-tip protection, bail, galleries, articulation, and dimensions.
- [ ] Final evidence shows ruler length, scale weight, 585 stamp, clasp operation, alignment, prongs, and stone identity.
- [ ] Shipping total, DAP/duty handling, delivery timing, and remake/refund terms are written.
`;

const SUPPLIER_RANKING = [
  { id: "starsgem", name: "StarsGem", section: "StarsGem", rank: 1, tier: "Best overall fit", estimate: "$500–$750", verdict: "Exact design, strongest price evidence, and least reproduction risk.", links: [["Exact two-stone listing", "https://starsgemmall.com/#/detail?=25751_14K+Yellow+Gold+Lab+Diamond+Necklace+1.095ct+AuDP0000190Y-P2.html"], ["10K yellow 1.105 ct round", "https://starsgemmall.com/#/detail?=21313_10K+Yellow+Lab+Diamond+Necklace+1.105ct+AuDP1033281Y-12.html"], ["10K white 0.487 ct pear", "https://starsgemmall.com/#/detail?=23401_10K+White+Gold+Lab+Diamond+Necklace+0.487ct+AuDP0003441-1.html"], ["10K yellow 0.647 ct floating pear", "https://starsgemmall.com/#/detail?=22908_10K+Yellow+Gold+Lab+Diamond+Necklace++0.647ct+AuDP0003421-5.html"], ["18K white 1.12 ct two-stone", "https://starsgemmall.com/#/detail?=22081_18K+White+Gold+Lab+Diamond+Necklace+1.12ct+AuDP4011413%28p1%29.html"], ["Alibaba pear solitaire", "https://www.alibaba.com/product-detail/Starsgem-Fine-Jewelry-Solitaire-1ct-Pear_1601378797481.html"], ["IGI pear loose-diamond listing", "https://www.alibaba.com/product-detail/Factory-IGI-certified-fancy-lab-diamond_1601031154962.html"]] },
  { id: "provence", name: "Provence Gems", section: "Provence Gems", rank: 2, tier: "Best established alternative", estimate: "$700–$1,100", verdict: "Good Alibaba workflow and heavier/IGI comparison; must justify its premium.", links: [["Alibaba pear lab-diamond necklace", "https://www.alibaba.com/product-detail/Fine-Jewelry-18k-14k-10k-Gold_1601581553072.html"], ["Pear-and-round choker", "https://provencegems.com/product/pear-shape-lab-diamond-necklace-18k-gold-lab-diamond-choker-with-19-bead-accents/"]] },
  { id: "tianyu", name: "Tianyu Gems", section: "Tianyu Gems", rank: 3, tier: "Quality baseline", estimate: "$1,000–$1,350", verdict: "Strong design/CAD comparator when finish matters more than lowest price.", links: [["Tianyu home", "https://www.tygems.net/"], ["Pear-and-round necklace promotion", "https://www.reddit.com/r/TianyuGemsOfficial/comments/1u4mhs4/stock_jewelry_promotion_worldwide_shipping14k/"], ["Alibaba pear-necklace results including Tianyu", "https://www.alibaba.com/countrysearch/CN/pear-necklace.html"]] },
  { id: "anster", name: "Anster Fine Jewelry", rank: 4, tier: "Aggressive price challenger", estimate: "$325–$450 before shipping", verdict: "Closest low public price, but the exact 14k variant and weight are unverified.", links: [["Alibaba solitaire results", "https://www.alibaba.com/countrysearch/CN/diamond-pendant-solitaire.html"], ["Alibaba lab-diamond necklace results", "https://www.alibaba.com/countrysearch/CN/lab-diamonds-necklace.html"], ["Pear-necklace results", "https://www.alibaba.com/countrysearch/CN/pear-necklace.html"]], custom: "Alibaba publicly shows a 1 ct pear 10k/14k necklace at $250–$300, MOQ 1, and other Anster lab-diamond necklace variants. The range may mix metals and configurations. No order-specific promises have been recorded." },
  { id: "hong-yun-fu", name: "Shenzhen Hong Yun Fu", rank: 5, tier: "Second price check", estimate: "$350–$525 before shipping", verdict: "Relevant AU585 pear listing, but a wide carat range and less exact evidence.", links: [["Relevant 14k Alibaba results", "https://www.alibaba.com/showroom/price-14k-gold.html"], ["China pear-necklace results", "https://www.alibaba.com/countrysearch/CN/pear-necklace.html"]], custom: "A public result advertises an AU585/14k pear lab-diamond necklace with 0.5 ct, 1 ct, and 2 ct options at $200–$576, MOQ 1. The displayed range does not prove the 1 ct price, chain, gold grams, accent round, or certification." },
  { id: "lgg", name: "LGG Jewelry", section: "LGG Jewelry / Igg Jewelry", rank: 6, tier: "Closest alternate architecture", estimate: "$950–$1,300", verdict: "Publishes a round-over-pear drop design, though much larger than the target.", links: [["Two-stone round-over-pear necklace", "https://www.lggjewelry.com/products/elegant-1-ct-round-cut-2-ct-pear-cut-drop-pendant-necklace"], ["LGG home", "https://www.lggjewelry.com/"]] },
  { id: "fiorese", name: "Fiorese Jewelry", section: "Fiorese Jewelry", rank: 7, tier: "Stone/certification baseline", estimate: "$1,300–$1,800", verdict: "Strongest public chain-gauge comparator; higher retail-style pricing.", links: [["1 ct pear necklace with 1.3 mm rolo chain", "https://fioresejewelry.com/products/pear-shaped-lab-diamond-pendant-necklace-rolo-chain"], ["Fiorese home", "https://fioresejewelry.com/"]] },
  { id: "paston", name: "Paston Jewelry", section: "Paston Jewelry", rank: 8, tier: "Alibaba custom backup", estimate: "$1,150–$1,450", verdict: "Useful protected-order comparison, but the current reported price is not competitive.", links: [["Paston Alibaba storefront", "https://pastonjewelry.en.alibaba.com/"], ["Community quote comparison", "https://www.reddit.com/r/Moissanite/comments/1v1h3vy/op_zoek_naar_leverancierswelke_moet_je_kiezen/"]] },
  { id: "kuololit", name: "Kuololit", section: "Kuololit", rank: 9, tier: "Catalog backup", estimate: "$700–$1,050", verdict: "Useful 40 + 5 cm and lab-diamond catalog context; exact custom process needs proof.", links: [["1.3 ctw 14k necklace", "https://www.kuololit.net/products/kuololit-1-3ctw-lab-grown-diamonds-necklace-for-women-solid-585-14k-10k-yellow-gold-d-vs1-diamond-necklace-for-anniversary-gift"], ["Lab-diamond necklace collection", "https://www.kuololit.net/collections/lab-grown-diamonds-necklace"]] },
  { id: "messi", name: "Messi Gems", section: "Messi Gems", rank: 10, tier: "Loose-stone/factory backup", estimate: "$750–$1,200", verdict: "Good pear lab-diamond access; no trustworthy configured comparison yet.", links: [["Messi 1 ct necklace model", "https://www.messijewelry.com/p-messi-jewelry-lab-grown-diamond-tennis-necklace-price-list.html"], ["Alibaba pear loose diamonds", "https://www.alibaba.com/countrysearch/CN/pear-shaped-diamonds.html"]] },
  { id: "mona", name: "Mona Fine Jewelry", section: "Mona Fine Jewelry", rank: 11, tier: "Personal-service backup", estimate: "$1,300–$1,900", verdict: "Potentially attentive service, but limited public necklace pricing and weaker standardization.", links: [["Community vendor directory", "https://www.reddit.com/r/Moissanite/wiki/list/"], ["Historical quote discussion", "https://www.reddit.com/r/LabDiamonds/comments/1bqufw8/tianyu_vs_mona_quotes/"]] },
  { id: "ouros", name: "Ouros / Golden Bird", section: "Ouros / Goldenbird", rank: 12, tier: "Geographic backup", estimate: "$700–$1,200", verdict: "Useful India-based comparison only if a configured 14k quote presents a clear advantage.", links: [["Golden Bird pear pendant", "https://www.goldenbirdjewels.com/products/pear-cut-lab-diamond-solitaire-pendant"], ["Ouros pear tennis necklace", "https://ca.ourosjewels.com/collections/diamond-tennis-necklace/products/pear-shaped-diamond-tennis-necklace"]] }
];

function supplierSection(record) {
  if (record.custom) return `## Current research\n\n**Unverified research:** ${record.custom}`;
  const heading = `## Supplier: ${record.section}`;
  const start = INITIAL_MARKDOWN.indexOf(heading);
  if (start < 0) return "## Current research\n\n_No supplier record found yet._";
  const end = INITIAL_MARKDOWN.indexOf("\n---\n", start);
  return INITIAL_MARKDOWN.slice(start, end < 0 ? INITIAL_MARKDOWN.length : end).replace(heading, "## Current research").trim();
}

function buildSupplierMarkdown(record) {
  const links = record.links.map(([label, url]) => `- [${label}](${url})`).join("\n");
  const starsGemEvidence = record.id === "starsgem" ? `\n## Original-listing evidence\n\n![StarsGem two-stone reference necklace](../assets/reference-necklace.png)\n\nThe exact SKU states 14k yellow gold, 40 + 5 cm, 2.06 g, 0.935 ct 5.3 × 8.3 mm DEF/VS CVD pear, 0.16 ct 3.4 mm DEF/VS round, 1.095 ctw, and None Certified. The chain photograph appears to show a fine elongated cable/oval-link chain. The ambiguous “方1.0mm” note must be translated into an actual chain code and caliper measurements.\n\n![StarsGem IGI service graphic](../assets/starsgem/igi-certificate-service.jpg)\n\nThe IGI image proves only that StarsGem advertises certificate service. It does not make the listed none-certified pear certified. Require an actual report number, verification, inscription match, and no-substitution language.\n\n![StarsGem care and service graphic](../assets/starsgem/care-and-service.jpg)\n\n![StarsGem DAP and pre-purchase notice](../assets/starsgem/pre-purchase-notice.jpg)\n\nThe service graphics advertise stock dispatch and limited quality-return language, while the pre-purchase notice says international shipping defaults to DAP with customs clearance and duties excluded. Put order-specific shipping and remedies into the protected invoice.` : "";
  return `# #${record.rank} — ${record.name}\n${record.tier}. Estimated target: **${record.estimate}**.\n\n> **Ranked verdict:** ${record.verdict}\n\n## Rank and role\n\nThis is rank **${record.rank} of ${SUPPLIER_RANKING.length}** for this specific necklace as of July 24, 2026. Ranking weighs exact-design access, credible price evidence, Chinese-factory fit, stone/certificate controls, construction clarity, buyer protection, and reproduction risk. It is a sourcing priority—not a universal quality judgment.\n\n## Product to quote\n\n- Solid 14k yellow gold, stamped 585; no plating.\n- 40 + 5 cm fine cable/oval-link chain; measured width, thickness, clasp, and chain weight.\n- Pear lab diamond about 0.935 ct and 5.3 × 8.3 mm, DEF/VS.\n- Round lab diamond about 0.16 ct and 3.4 mm, DEF/VS.\n- Minimum 1.095 ctw and 2.06 g finished weight; quote a 2.5–3.0 g option.\n- Quote both uncertified and actual-IGI-pear versions.\n- CAD approval, selected-stone identity, final QC evidence, shipping, and remedies in writing.\n${starsGemEvidence}\n\n${supplierSection(record)}\n\n## Closest links\n\n${links}\n\n## Supplier-specific quote table\n\n| Field | Supplier answer | Evidence/source | Still open |\n|---|---|---|---|\n| Exact 14k base | — | — | — |\n| IGI pear add-on | — | — | — |\n| Shipping/duty | — | — | — |\n| Finished gold g | — | — | — |\n| Chain width/thickness | — | — | — |\n| CAD/revisions | — | — | — |\n| Lead time | — | — | — |\n| Buyer protection | — | — | — |\n| Remake/refund terms | — | — | — |\n\n## Message to send\n\n> Please quote one finished necklace matching StarsGem SKU AuDP0000190Y-P2: solid 14k yellow gold stamped 585; 40 + 5 cm chain; 0.935 ct DEF/VS pear lab diamond approximately 5.3 × 8.3 mm; 0.16 ct DEF/VS round approximately 3.4 mm; minimum 1.095 ctw; minimum 2.06 g finished weight. State chain type, width, thickness, clasp, chain-only weight, pendant-only weight, certification, CAD cost, lead time, shipping to the United States, and landed price. Quote A uncertified and B with an actual IGI pear/report number. Put the selected stone, CAD approval, QC evidence, and remedies into the protected order.\n\n## Reply log\n\n> _Paste dated supplier statements here and label each as supplier-stated, observed, or still unverified._\n`;
}

const DOCUMENTS = {
  start: {
    title: "Start here",
    storageKey: START_STORAGE_KEY,
    initial: INITIAL_START_MARKDOWN,
    filename: "necklace-start-here.md"
  },
  starsgem: {
    title: "StarsGem comparison",
    storageKey: STARSGEM_STORAGE_KEY,
    initial: INITIAL_STARSGEM_MARKDOWN,
    filename: "starsgem-listing-comparison.md"
  },
  gold: {
    title: "Gold choice",
    storageKey: GOLD_STORAGE_KEY,
    initial: INITIAL_GOLD_MARKDOWN,
    filename: "gold-alloy-color-guide.md"
  },
  product: {
    title: "Product specification",
    storageKey: PRODUCT_STORAGE_KEY,
    initial: INITIAL_PRODUCT_MARKDOWN,
    filename: "necklace-product-specification.md"
  },
  research: {
    title: "Supplier guide",
    storageKey: MAIN_STORAGE_KEY,
    initial: INITIAL_MARKDOWN,
    filename: "necklace-supplier-research.md"
  },
  alibaba: {
    title: "Alibaba comparisons",
    storageKey: ALIBABA_STORAGE_KEY,
    initial: INITIAL_ALIBABA_MARKDOWN,
    filename: "necklace-alibaba-comparisons.md"
  }
};

SUPPLIER_RANKING.forEach(record => {
  DOCUMENTS[`supplier-${record.id}`] = {
    title: `#${record.rank} ${record.name}`,
    storageKey: `chain-notes-supplier-${record.id}-${record.id === "starsgem" ? "v2" : "v1"}`,
    initial: buildSupplierMarkdown(record),
    filename: `necklace-supplier-${record.rank}-${record.id}.md`,
    supplier: true,
    rank: record.rank
  };
});

function loadDocumentMarkdown(documentId) {
  const documentRecord = DOCUMENTS[documentId];
  const saved = localStorage.getItem(documentRecord.storageKey);
  if (!saved) return documentRecord.initial;
  if (documentId !== "starsgem" || saved.includes("listing-AuDP0000190Y-P2-2026-07-24")) return saved;

  const anchor = "\n## Quick comparison";
  const migrated = saved.includes(anchor)
    ? saved.replace(anchor, `\n${STARSGEM_LISTING_GALLERY_MARKDOWN}\n${anchor}`)
    : `${saved.trim()}\n\n${STARSGEM_LISTING_GALLERY_MARKDOWN}\n`;
  localStorage.setItem(documentRecord.storageKey, migrated);
  return migrated;
}

const editor = document.getElementById("markdownEditor");
const preview = document.getElementById("documentPreview");
const editorWrap = document.getElementById("editorWrap");
const nav = document.getElementById("documentNav");
const saveStatus = document.getElementById("saveStatus");
const stats = document.getElementById("documentStats");
const searchInput = document.getElementById("searchInput");
const addSupplierButton = document.getElementById("addSupplier");
const documentTabs = document.getElementById("documentTabs");
const supplierDocumentSelect = document.getElementById("supplierDocumentSelect");
supplierDocumentSelect.innerHTML = `<option value="">Choose ranked supplier…</option>${SUPPLIER_RANKING.map(record => `<option value="supplier-${record.id}">#${record.rank} · ${record.name}</option>`).join("")}`;
let activeDocument = localStorage.getItem(ACTIVE_DOCUMENT_KEY) || "start";
if (!DOCUMENTS[activeDocument]) activeDocument = "start";
let markdown = loadDocumentMarkdown(activeDocument);
let saveTimer;
let toastTimer;

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[character]);
}

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function inline(text, query = "") {
  let output = escapeHtml(text);
  output = output.replace(/!\[([^\]]*)\]\(((?:https?:\/\/|\.{1,2}\/|\/)[^\s)]+)\)/g, '<img src="$2" alt="$1" loading="lazy">');
  output = output.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>');
  output = output.replace(/`([^`]+)`/g, "<code>$1</code>");
  output = output.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  output = output.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  if (query && query.length > 1) {
    const safeQuery = escapeHtml(query).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    output = output.replace(new RegExp(`(${safeQuery})(?![^<]*>)`, "gi"), "<mark>$1</mark>");
  }
  return output;
}

function parseTable(lines, start, query) {
  const rows = [];
  let index = start;
  while (index < lines.length && /^\|.*\|\s*$/.test(lines[index])) {
    rows.push(lines[index].trim().slice(1, -1).split("|").map(cell => cell.trim()));
    index += 1;
  }
  if (rows.length < 2 || !rows[1].every(cell => /^:?-{3,}:?$/.test(cell))) return null;
  const header = `<thead><tr>${rows[0].map(cell => `<th>${inline(cell, query)}</th>`).join("")}</tr></thead>`;
  const body = `<tbody>${rows.slice(2).map(row => `<tr>${row.map(cell => `<td>${inline(cell, query)}</td>`).join("")}</tr>`).join("")}</tbody>`;
  return { html: `<div class="table-scroll" role="region" aria-label="Scrollable comparison table" tabindex="0"><table>${header}${body}</table></div>`, next: index };
}

function renderMarkdown(source, query = "") {
  const lines = source.split("\n");
  const html = [];
  let i = 0;
  let supplierRank = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) { i += 1; continue; }
    if (/^```/.test(line)) {
      const code = [];
      i += 1;
      while (i < lines.length && !/^```/.test(lines[i])) code.push(lines[i++]);
      html.push(`<pre><code>${escapeHtml(code.join("\n"))}</code></pre>`);
      i += 1;
      continue;
    }
    if (/^\|.*\|\s*$/.test(line)) {
      const table = parseTable(lines, i, query);
      if (table) { html.push(table.html); i = table.next; continue; }
    }
    if (/^<!--\s*meta:/.test(line)) {
      const values = line.replace(/^<!--\s*meta:\s*/, "").replace(/\s*-->$/, "").split("|").map(value => value.trim());
      html.push(`<div class="supplier-meta">${values.map((value, index) => `<span class="supplier-pill ${index === 0 && /backup|watchlist/i.test(value) ? "caution" : index > 0 ? "neutral" : ""}">${inline(value, query)}</span>`).join("")}</div>`);
      i += 1;
      continue;
    }
    const heading = line.match(/^(#{1,3})\s+(.+)$/);
    if (heading) {
      const level = heading[1].length;
      const title = heading[2];
      const isSupplier = level === 2 && title.startsWith("Supplier:");
      if (isSupplier) supplierRank += 1;
      const cleanTitle = isSupplier ? title.replace("Supplier: ", "") : title;
      const id = slugify(title);
      html.push(`<h${level} id="${id}"${isSupplier ? ` data-supplier="true" data-rank="SUPPLIER ${String(supplierRank).padStart(2, "0")}"` : ""}>${inline(cleanTitle, query)}</h${level}>`);
      i += 1;
      continue;
    }
    if (/^---+$/.test(line.trim())) { html.push("<hr>"); i += 1; continue; }
    const standaloneImage = line.trim().match(/^!\[([^\]]*)\]\((((?:https?:\/\/|\.{1,2}\/|\/)[^\s)]+))\)$/);
    if (standaloneImage) {
      const images = [];
      while (i < lines.length) {
        const match = lines[i].trim().match(/^!\[([^\]]*)\]\((((?:https?:\/\/|\.{1,2}\/|\/)[^\s)]+))\)$/);
        if (!match) break;
        images.push({ alt: match[1], src: match[2] });
        i += 1;
      }
      if (images.length > 1) {
        html.push(`<div class="listing-gallery">${images.map(item => `<figure><img src="${escapeHtml(item.src)}" alt="${escapeHtml(item.alt)}" loading="lazy"><figcaption>${inline(item.alt, query)}</figcaption></figure>`).join("")}</div>`);
      } else {
        const item = images[0];
        html.push(`<p><img src="${escapeHtml(item.src)}" alt="${escapeHtml(item.alt)}" loading="lazy"></p>`);
      }
      continue;
    }
    if (/^>\s?/.test(line)) {
      const quoted = [];
      while (i < lines.length && /^>/.test(lines[i])) quoted.push(lines[i++].replace(/^>\s?/, ""));
      html.push(`<blockquote>${quoted.map(value => value ? `<p>${inline(value, query)}</p>` : "").join("")}</blockquote>`);
      continue;
    }
    if (/^\s*[-*]\s+/.test(line)) {
      const items = [];
      while (i < lines.length && /^\s*[-*]\s+/.test(lines[i])) {
        const value = lines[i++].replace(/^\s*[-*]\s+/, "");
        const task = value.match(/^\[([ xX])\]\s+(.*)/);
        items.push(task ? `<li class="task"><input type="checkbox" ${task[1].toLowerCase() === "x" ? "checked" : ""}>${inline(task[2], query)}</li>` : `<li>${inline(value, query)}</li>`);
      }
      html.push(`<ul>${items.join("")}</ul>`);
      continue;
    }
    if (/^\s*\d+\.\s+/.test(line)) {
      const items = [];
      while (i < lines.length && /^\s*\d+\.\s+/.test(lines[i])) items.push(`<li>${inline(lines[i++].replace(/^\s*\d+\.\s+/, ""), query)}</li>`);
      html.push(`<ol>${items.join("")}</ol>`);
      continue;
    }
    const paragraph = [line.trim()];
    i += 1;
    while (i < lines.length && lines[i].trim() && !/^(#{1,3})\s|^>|^```|^---+$|^\||^\s*[-*]\s+|^\s*\d+\.\s+|^<!--/.test(lines[i])) paragraph.push(lines[i++].trim());
    html.push(`<p>${inline(paragraph.join(" "), query).replace(/\s{2,}/g, "<br>")}</p>`);
  }
  return html.join("\n");
}

function extractSections(source) {
  return source.split("\n").map(line => {
    const match = line.match(/^(#{2})\s+(.+)$/);
    if (!match) return null;
    return { title: match[2], id: slugify(match[2]), supplier: match[2].startsWith("Supplier:") };
  }).filter(Boolean);
}

function buildNav() {
  const sections = extractSections(markdown);
  const general = sections.filter(section => !section.supplier);
  const suppliers = sections.filter(section => section.supplier);
  const supplierNav = suppliers.length ? `<p class="nav-label">Suppliers</p>${suppliers.map((section, index) => `<a class="supplier-link" data-rank="${index + 1}" href="#${section.id}">${escapeHtml(section.title.replace("Supplier: ", ""))}</a>`).join("")}` : "";
  nav.innerHTML = `<p class="nav-label">${escapeHtml(DOCUMENTS[activeDocument].title)}</p>${general.map(section => `<a href="#${section.id}">${escapeHtml(section.title)}</a>`).join("")}${supplierNav}`;
}

function updateStats() {
  const words = markdown.trim().split(/\s+/).filter(Boolean).length;
  const suppliers = (markdown.match(/^## Supplier:/gm) || []).length;
  if (activeDocument === "start") stats.textContent = `${words.toLocaleString()} words · recommended path`;
  else if (activeDocument === "starsgem") stats.textContent = `${words.toLocaleString()} words · 5 live listings`;
  else if (activeDocument === "gold") stats.textContent = `${words.toLocaleString()} words · metal decision guide`;
  else if (activeDocument === "alibaba") stats.textContent = `${words.toLocaleString()} words · comparison sheet`;
  else if (activeDocument === "product") stats.textContent = `${words.toLocaleString()} words · order specification`;
  else if (DOCUMENTS[activeDocument].supplier) stats.textContent = `${words.toLocaleString()} words · ranked supplier page`;
  else stats.textContent = `${words.toLocaleString()} words · ${suppliers} suppliers`;
}

function render(query = searchInput.value.trim()) {
  preview.innerHTML = renderMarkdown(markdown, query);
  buildNav();
  updateStats();
}

function setMode(mode) {
  const editing = mode === "edit";
  preview.hidden = editing;
  editorWrap.hidden = !editing;
  document.querySelectorAll(".mode-button").forEach(button => button.classList.toggle("active", button.dataset.mode === mode));
  if (editing) {
    editor.value = markdown;
    requestAnimationFrame(() => editor.focus());
  } else {
    markdown = editor.value || markdown;
    render();
    save();
  }
}

function save() {
  clearTimeout(saveTimer);
  localStorage.setItem(DOCUMENTS[activeDocument].storageKey, markdown);
  saveStatus.classList.remove("saving");
  saveStatus.innerHTML = "<i></i> All changes saved";
}

function updateDocumentTabs() {
  documentTabs.querySelectorAll(".document-tab").forEach(button => {
    const selected = button.dataset.document === activeDocument;
    button.classList.toggle("active", selected);
    button.setAttribute("aria-selected", String(selected));
    button.tabIndex = selected ? 0 : -1;
  });
  supplierDocumentSelect.value = DOCUMENTS[activeDocument].supplier ? activeDocument : "";
  addSupplierButton.hidden = activeDocument !== "research";
  searchInput.placeholder = DOCUMENTS[activeDocument].supplier
    ? `Search ${DOCUMENTS[activeDocument].title}…`
    : activeDocument === "start"
      ? "Search the recommended path…"
      : activeDocument === "starsgem"
        ? "Search the five StarsGem listings…"
        : activeDocument === "gold"
          ? "Search gold choices…"
    : activeDocument === "alibaba"
      ? "Search Alibaba comparisons…"
      : activeDocument === "product"
        ? "Search the product specification…"
        : "Search this research…";
  document.querySelector(".document-stage").setAttribute("aria-label", DOCUMENTS[activeDocument].title);
}

function switchDocument(nextDocument) {
  if (!DOCUMENTS[nextDocument] || nextDocument === activeDocument) return;
  if (!editorWrap.hidden) markdown = editor.value;
  save();
  activeDocument = nextDocument;
  localStorage.setItem(ACTIVE_DOCUMENT_KEY, activeDocument);
  markdown = loadDocumentMarkdown(activeDocument);
  editor.value = markdown;
  searchInput.value = "";
  updateDocumentTabs();
  setMode("read");
  history.replaceState(null, "", window.location.pathname + window.location.search);
  window.scrollTo({ top: 0, behavior: "smooth" });
  showToast(`${DOCUMENTS[activeDocument].title} opened`);
}

function queueSave() {
  saveStatus.classList.add("saving");
  saveStatus.innerHTML = "<i></i> Saving changes…";
  clearTimeout(saveTimer);
  saveTimer = setTimeout(save, 450);
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 1800);
}

editor.addEventListener("input", () => {
  markdown = editor.value;
  updateStats();
  queueSave();
});

document.querySelectorAll(".mode-button").forEach(button => button.addEventListener("click", () => setMode(button.dataset.mode)));

searchInput.addEventListener("input", () => {
  if (!preview.hidden) render(searchInput.value.trim());
});

document.addEventListener("keydown", event => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault(); searchInput.focus();
  }
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "s") {
    event.preventDefault(); markdown = editorWrap.hidden ? markdown : editor.value; save(); showToast("Research saved");
  }
});

addSupplierButton.addEventListener("click", () => {
  const template = `\n\n---\n\n## Supplier: New supplier\n<!-- meta: Researching | Unverified | New -->\n\n### Current record\n\n**Unverified research:** Add what is currently known and where it came from.\n\n**Likely strength:** —  \n**Main risk:** —  \n**Source:** —\n\n### How to approach them\n\nAdd the supplier-specific opening, questions, leverage, and evidence standard.\n\n**Do not advance until:** —\n\n### Reply log\n\n> _No supplier statements recorded yet._\n`;
  markdown += template;
  editor.value = markdown;
  save();
  setMode("edit");
  editor.selectionStart = editor.selectionEnd = editor.value.length;
  editor.scrollTop = editor.scrollHeight;
  showToast("Supplier template added");
});

document.getElementById("exportMarkdown").addEventListener("click", () => {
  const blob = new Blob([markdown], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = DOCUMENTS[activeDocument].filename;
  link.click();
  URL.revokeObjectURL(url);
  showToast(`${DOCUMENTS[activeDocument].title} exported`);
});

document.getElementById("resetDocument").addEventListener("click", () => {
  if (!window.confirm(`Restore the original ${DOCUMENTS[activeDocument].title.toLowerCase()}? Your browser edits to this tab will be replaced.`)) return;
  markdown = DOCUMENTS[activeDocument].initial;
  editor.value = markdown;
  save();
  render();
  setMode("read");
  showToast("Original restored");
});

documentTabs.addEventListener("click", event => {
  const button = event.target.closest(".document-tab");
  if (button) switchDocument(button.dataset.document);
});

document.querySelectorAll("[data-open-document]").forEach(button => {
  button.addEventListener("click", () => switchDocument(button.dataset.openDocument));
});

supplierDocumentSelect.addEventListener("change", () => {
  if (supplierDocumentSelect.value) switchDocument(supplierDocumentSelect.value);
});

documentTabs.addEventListener("keydown", event => {
  if (!event.target.closest(".document-tab")) return;
  if (![/ArrowLeft/, /ArrowRight/].some(pattern => pattern.test(event.key))) return;
  event.preventDefault();
  const tabs = [...documentTabs.querySelectorAll(".document-tab")];
  const currentIndex = tabs.findIndex(tab => tab.dataset.document === activeDocument);
  const direction = event.key === "ArrowRight" ? 1 : -1;
  const next = tabs[(currentIndex + direction + tabs.length) % tabs.length];
  switchDocument(next.dataset.document);
  next.focus();
});

window.addEventListener("scroll", () => {
  const headings = [...preview.querySelectorAll("h2")];
  let current = headings[0]?.id;
  headings.forEach(heading => { if (heading.getBoundingClientRect().top < 130) current = heading.id; });
  nav.querySelectorAll("a").forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${current}`));
}, { passive: true });

editor.value = markdown;
updateDocumentTabs();
render();
