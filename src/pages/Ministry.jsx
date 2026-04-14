import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Ministry.css'

const navSections = [
  { id: 'cover',          label: 'Cover',         num: '01' },
  { id: 'market-truth',   label: 'Market Truth',  num: '02' },
  { id: 'core-problem',   label: 'The Problem',   num: '03' },
  { id: 'closer-look',    label: 'Closer Look',   num: '04' },
  { id: 'sensory-gap',    label: 'Sensory Gap',   num: '05' },
  { id: 'business-cost',  label: 'Business Cost', num: '06' },
  { id: 'landscape',      label: 'Landscape',     num: '07' },
  { id: 'framework',      label: 'Framework',     num: '08' },
  { id: 'where-to-start', label: 'Where to Start',num: '09' },
  { id: 'internal-case',  label: 'Internal Case', num: '10' },
  { id: 'assumptions',    label: 'Assumptions',   num: '11' },
  { id: 'close',          label: 'About',         num: '12' },
]

const sensorDimensions = [
  {
    title: 'Hand Feel & Texture',
    need: 'Does this feel smooth or structured against skin? Soft, crisp, waxy, dry? Will it feel premium or synthetic?',
    provided: 'Studio photography and fabric swatch images.',
    gap: 'Hand feel is the most personal and least transferable of all sensory properties. No photograph conveys it. It was the primary reason the Apollo Button-Down came back.',
  },
  {
    title: 'Stretch & Recovery',
    need: 'Does this move with me? When I reach across a table or sit for three hours, does it pull, bind, or bounce back?',
    provided: 'Photography of models in stretch positions — meaningfully better than static studio shots. The innovation section includes a stretch test animation.',
    gap: 'A photograph of a stretched pose shows range of motion but not recovery. Whether the fabric springs back or sags is the property that matters most, and it requires motion to demonstrate.',
  },
  {
    title: 'Drape & Motion',
    need: 'How does this hang and move on a body like mine? Does it hold structure or fall soft?',
    provided: 'Multiple models per product, including some photographed mid-movement — above category average.',
    gap: 'Mid-movement in a static photograph is frozen at one moment. The behavior of the fabric between positions — how it moves, settles, and recovers — is invisible.',
  },
  {
    title: 'Weight & Presence',
    need: 'Is this featherlight or substantial? Will I feel it on my shoulders after a full day?',
    provided: 'Occasionally listed in product specs in grams. Rarely given a reference point.',
    gap: '"Lighter than a cotton t-shirt" communicates instantly. "210 gsm" does not.',
  },
  {
    title: 'Performance Behavior',
    need: 'Does Apollo actually regulate temperature? Does Aero Zero actually wick moisture? How do I know it performs the way the brand claims?',
    provided: 'Copy claims, Engineer\'s Notes, founder video narration, and the innovation section\'s testing content — the most ambitious effort in the category.',
    gap: 'Proof of performance needs to be visual, specific, and located where the purchase decision is made — not one click away in a separate section.',
  },
  {
    title: 'Sound & Tactile Presence',
    need: 'Does this fabric make noise when I move? Does it swish or rustle in a quiet meeting room?',
    provided: 'Nothing, across the industry.',
    gap: 'For professional apparel specifically, fabric sound is a real consideration that no brand currently addresses. It\'s an open lane.',
  },
]

const frameworkDimensions = [
  {
    title: 'Dimension 1: Hand Feel & Texture',
    question: 'What does this actually feel like against skin?',
    format: 'Macro close-up video — 10 to 15 seconds, showing weave structure, surface quality, and material density at high resolution. Not lifestyle — the fabric itself, close enough to read.',
    application: 'Apollo\'s open-weave texture and Aero Zero\'s near-weightless surface are both visually distinctive at close range. Neither is currently shown at a scale where a customer can evaluate them.',
  },
  {
    title: 'Dimension 2: Motion & Recovery',
    question: 'How does this move with my body, and does it come back?',
    format: 'Fabric-in-motion video on every PDP — 20 to 30 seconds showing stretch, recovery, drape in movement, and shape retention after wear. The founder\'s description of Kinetic\'s spiral yarn "bouncing back like a spring" is the brief — show that happening, in close-up, in real time.',
    application: 'This is the single highest-leverage content investment available right now. Three seconds of a Kinetic blazer sleeve stretching and recovering would do more to justify the price premium than any copy on the page.',
  },
  {
    title: 'Dimension 3: Fit & Body Confidence',
    question: 'How will this fit a body like mine?',
    format: 'Expanded multi-body-type photography and UGC, with models shown in motion. Verified buyer content filtered by body type, surfaced on the PDP. Near-term: virtual try-on via an existing platform. Forward state: AI-powered fit simulation using the customer\'s own measurements.',
    application: 'Ministry of Supply already shows multiple models and some motion photography — above category average. The gap is in giving customers a way to connect what they see to their own body.',
  },
  {
    title: 'Dimension 4: Performance Proof',
    question: 'Does the technology actually do what the brand claims?',
    format: 'Visible performance testing — moisture transfer demonstrated with condensation or dye transfer photography. Temperature differential with thermal imaging. Stretch recovery documented under load. These don\'t require laboratory equipment — they require creative direction and a commitment to showing rather than claiming.',
    application: 'The innovation section\'s breathability test already uses steam imagery — the right instinct. Moving that content onto individual PDPs, and expanding it to cover each fabric\'s specific performance claims, would close the proof gap directly.',
  },
  {
    title: 'Dimension 5: Weight & Presence',
    question: 'Is this featherlight or substantial?',
    format: 'Tactile copy language that gives weight a reference point. Weight specs in grams paired with a comparison object. Short video showing the garment hanging from a single finger to convey weight and drape simultaneously.',
    application: 'Aero Zero is named for its near-absence of weight — that claim deserves a visual proof, not just a name.',
  },
  {
    title: 'Dimension 6: Sound & Tactile Presence',
    question: 'Does this fabric make noise when I move?',
    format: 'ASMR-adjacent audio content — short videos where fabric sound is part of the experience. Rustling, stretching, the zip of a closure.',
    application: 'An open lane. Academic research published in 2025 identified ASMR in fashion retail as "an unresolved opportunity." No competitor in the performance workwear category currently owns fabric sound as a content format.',
  },
]

const priorities = [
  {
    num: 'Priority 1',
    title: 'Fabric-in-motion video on every PDP — start here.',
    body: ['A 20 to 30 second video showing each fabric stretching, recovering, draping, and moving on a body resolves the two most common sources of return — hand feel uncertainty and drape mismatch — more effectively than any other single change. It doesn\'t require a new platform, a new technology partner, or a significant workflow change. It requires a shoot brief and a camera.', 'The brief writes itself from the framework: show the fabric doing what the copy claims it does. Kinetic\'s spring-return recovery. Aero Zero\'s near-weightless drape. Apollo\'s open-weave breathability. These properties are visually demonstrable. They\'re currently described. The gap between those two states is a production decision, not a technology problem.'],
    why: 'Highest customer uncertainty, lowest implementation barrier, direct line to both conversion improvement and return rate reduction.',
  },
  {
    num: 'Priority 2',
    title: 'Move the proof to the purchase moment.',
    body: ['The innovation section\'s breathability test, stretch test, and abrasion test already exist. The founder video already exists. The Engineer\'s Notes already exist. None of this needs to be rebuilt — it needs to be relocated. Specifically: onto the product pages where purchase decisions are made.', 'A customer deciding whether to buy the AeroZero Dress Shirt should encounter the breathability test on that page — not navigate to an innovation hub to find it. Surfacing existing content at the right moment in the customer journey is an information architecture decision, not a content production problem.'],
    why: 'Zero new content required. Maximum leverage from existing investment. Immediate impact on the technical buyer segment.',
  },
  {
    num: 'Priority 3',
    title: 'Build the technical content layer.',
    body: ['For the technical buyer — the segment that reads Engineer\'s Notes, watches the founder video, and wants to understand what 17% bio-based corn polyester means for performance — quantified performance data presented visually is the next layer. GSM weight with a reference comparison, stretch percentage as a graphic, moisture transfer rate benchmarked against a standard fabric. Not more text — a visual format that lands for the reader who needs numbers to convert.'],
    why: 'Serves the highest-value, lowest-return-rate segment in the customer base. Differentiates on depth in a category where competitors compete on aesthetics.',
  },
  {
    num: 'Priority 4',
    title: 'Pilot a virtual try-on integration.',
    body: ['Platform options are accessible and increasingly low-friction — Genlook integrates directly into Shopify, removing the technical barrier for DTC brands. The business case is documented: ASOS recovered 160 basis points of return rate through AIUTA. A pilot on one fabric line — Aero Zero, where the weightlessness claim is hardest to convey through static content — would generate real data quickly.'],
    why: 'Highest impact on fit-related returns. Requires a vendor relationship and integration work, so it runs in parallel with the content investments rather than as a first step.',
  },
]

const metrics = [
  {
    title: 'Return rate on pilot PDPs',
    target: '10–15% reduction versus control pages over a 60-day pilot.',
    benchmark: 'Product pages with video see 37% lower return rates than photo-only pages.',
  },
  {
    title: 'Conversion rate on pilot PDPs',
    target: '8–12% lift versus control.',
    benchmark: '15–25% higher conversion from shoppers who engage with video content.',
  },
  {
    title: 'Video engagement rate',
    target: '60%+ completion rate on videos under 30 seconds.',
    benchmark: 'High completion correlates with purchase confidence; low completion signals the content isn\'t answering the right question.',
  },
  {
    title: 'Return reason data',
    target: 'Decrease in hand feel, drape, and motion as stated return reasons.',
    benchmark: 'Requires a consistent returns survey but provides the most direct read on whether the content is doing its job.',
  },
]

const assumptions = [
  {
    title: 'Assumption 1: Ministry of Supply\'s returns are meaningfully driven by sensory gap, not other causes.',
    body: 'The framework argues that fit, feel, and expectation mismatch are the primary return drivers — supported by industry-level data showing 70% of apparel returns nationally cite fit or feel. But Ministry of Supply\'s actual return data might tell a different story. Until it\'s analyzed, the magnitude of the problem at this brand specifically is an estimate, not a measurement.',
  },
  {
    title: 'Assumption 2: The sensory gap is experienced broadly — not just by technically-oriented buyers.',
    body: 'The direct evidence here comes from one customer: a product designer with 13 years of DTC experience who reads Engineer\'s Notes and watches founder videos before purchasing. That profile is not representative of the average buyer. Whether a less technically-oriented customer experiences the same uncertainty hasn\'t been tested.',
  },
  {
    title: 'Assumption 3: The proposed content formats would resolve the specific uncertainty driving returns.',
    body: 'The recommendations are grounded in category-level benchmarks. Whether this specific format applied to this specific product line moves this brand\'s specific return rate is a hypothesis until a controlled test proves it.',
  },
  {
    title: 'Assumption 4: The technical buyer segment is large enough and underserved enough to justify a dedicated content layer.',
    body: 'The evidence for this segment is circumstantial — the MIT origin story, the presence of Engineer\'s Notes, the Kickstarter camera bag analogy. How large this segment is as a percentage of Ministry of Supply\'s customer base is unknown.',
  },
]

const researchAgenda = [
  {
    num: '1',
    title: 'Returns data analysis — do this first.',
    body: 'Pull return reason codes and free-text customer comments from the past 12 months. Categorize returns by reason: fit/sizing error, feel/texture mismatch, style expectation mismatch, product defect, changed mind. This data almost certainly exists internally and could be analyzed in 48 hours. It either confirms the sensory gap hypothesis or reorients the entire framework toward a different problem.',
  },
  {
    num: '2',
    title: 'Customer interviews — the most important primary research.',
    body: '10 to 15 interviews with customers who have purchased and returned Ministry of Supply products in the past year. Primary question: what would have changed your decision? Secondary: what information, if it had been on the product page, would have resolved your uncertainty?',
  },
  {
    num: '3',
    title: 'Content engagement audit.',
    body: 'Analyze scroll depth, time on page, and click patterns on current PDPs. Is the Engineer\'s Notes section being read, or is it below the fold where most customers never reach it? This distinguishes between a content quality problem, a content placement problem, and a content discovery problem — which have meaningfully different solutions.',
  },
  {
    num: '4',
    title: 'Competitive content audit.',
    body: 'Select three to five direct competitors. Evaluate their product pages systematically against the six sensory dimensions in the framework. Identify who is doing what well, and where Ministry of Supply sits in the category landscape.',
  },
  {
    num: '5',
    title: 'A controlled content test.',
    body: 'Run Priority 1 — fabric-in-motion video — on a single high-traffic PDP against a matched control page for 60 days. Measure return rate, conversion rate, and video engagement. Real data from a real test is worth more than any benchmark.',
  },
]

function Ministry() {
  const [activeSection, setActiveSection] = useState('cover')

  useEffect(() => {
    const sections = document.querySelectorAll('[data-section]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.dataset.section)
          }
        })
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="container">
      <Link to="/work" className="back-link">← Back to Work</Link>

      <div className="ministry-page">

        {/* Sidebar nav */}
        <nav className="ministry-nav" aria-label="Section navigation">
          <ul className="ministry-nav-list">
            {navSections.map(({ id, label, num }) => (
              <li key={id}>
                <button
                  className={`ministry-nav-item${activeSection === id ? ' is-active' : ''}`}
                  onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
                  aria-current={activeSection === id ? 'location' : undefined}
                >
                  <span className="ministry-nav-num">{num}</span>
                  <span className="ministry-nav-label">{label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Content */}
        <div className="ministry-content">

          {/* 01 Cover */}
          <section id="cover" data-section="cover" className="ministry-section">
            <span className="ministry-section-num">01 — Cover</span>
            <h2>The Fabric Doesn't Translate</h2>
            <p className="ministry-subtitle">A strategic framework for closing the physical-digital product gap in performance apparel</p>
            <p>Performance apparel brands spend years engineering how a fabric feels. Then they sell it with a photograph.</p>
            <p>This document is a framework for closing that gap — and an argument for why the window to do it is right now.</p>
            <div className="ministry-framing-note">
              <span className="ministry-framing-note-label">Framing Note</span>
              <p>This document is organized as a strategic hypothesis in three parts.</p>
              <p><strong>Part One</strong> makes the case that a measurable, recoverable problem exists — that the gap between how performance apparel is represented online and how it is experienced in person is costing brands in returns, conversions, and customer trust.</p>
              <p><strong>Part Two</strong> proposes a framework for closing that gap — organized around what customers actually need to know before buying, and the specific content formats and tools that address each dimension.</p>
              <p><strong>Part Three</strong> acknowledges what this document is and what it isn't. The problem framing is grounded in industry data and direct product experience. The recommendations are well-informed directional hypotheses. The research agenda in the final section is the honest next step.</p>
              <p>Read it as a starting point, not a finished answer.</p>
            </div>
          </section>

          {/* 02 Market Truth */}
          <section id="market-truth" data-section="market-truth" className="ministry-section">
            <span className="ministry-section-num">02 — The Market Truth</span>
            <h2>$849.9 Billion</h2>
            <p>That's how much fashion retailers lost to returns in 2025. Not fraud. Not theft. Just people who bought something online that didn't match what they thought they were buying.</p>
            <p>The industry calls this a cost of doing business. It isn't. It's a symptom of a broken promise made before the sale was ever completed.</p>
            <p>Returns don't start at the shipping label. They start on the product page — the moment a customer is asked to make a confident purchasing decision based on evidence that was never adequate to the task.</p>
            <p>And the pressure is structural: 82% of consumers consider free returns essential, even as the cost of providing them becomes increasingly unsustainable for the brands absorbing them. There's no policy solution to this problem. The only exit is giving customers enough information to get it right the first time.</p>
            <div className="ministry-stats-grid">
              <div className="ministry-stat">
                <span className="stat-value">19.3%</span>
                <span className="stat-desc">Online apparel return rate. In-store: 8–10%.</span>
              </div>
              <div className="ministry-stat">
                <span className="stat-value">27¢</span>
                <span className="stat-desc">What it costs the brand to process every dollar returned.</span>
              </div>
              <div className="ministry-stat">
                <span className="stat-value">70%</span>
                <span className="stat-desc">Share of returns citing fit or feel as the primary reason.</span>
              </div>
            </div>
            <p>The fitting room didn't disappear when retail moved online. It became the customer's living room — and the customer's problem. That's the gap. And closing it is worth hundreds of billions of dollars to the brands willing to take it seriously.</p>
            <div className="ministry-sources">
              <p>
                <a href="https://nrf.com/media-center/press-releases/consumers-expected-to-return-nearly-850-billion-in-merchandise-in-2025" target="_blank" rel="noopener noreferrer">NRF — $849.9B in returns, 19.3% online return rate</a>
                {' · '}
                <a href="https://www.cnbc.com/2026/04/05/ai-retail-start-ups-virtual-try-on-tech-margins.html" target="_blank" rel="noopener noreferrer">CNBC — 82% consider free returns essential</a>
                {' · '}
                <a href="https://coresight.com/research/the-true-cost-of-apparel-returns-alarming-return-rates-require-loss-minimization-solutions/" target="_blank" rel="noopener noreferrer">Coresight Research — 70% cite fit/feel, 27¢ processing cost</a>
              </p>
            </div>
          </section>

          {/* 03 Core Problem */}
          <section id="core-problem" data-section="core-problem" className="ministry-section">
            <span className="ministry-section-num">03 — The Core Problem</span>
            <h2>This Isn't a Fit Problem. It's a Technology Problem.</h2>
            <p className="ministry-subtitle">Most apparel brands struggle to show how a garment looks online. Performance apparel brands have a harder challenge: showing how a garment works.</p>
            <p>A photograph can do certain things well. It can show silhouette, color, drape at rest, and how a garment sits on a body at a given moment. For most clothing, that's enough. The customer understands what they're buying.</p>
            <p>Performance apparel breaks that assumption. When the core value of a product is experiential — when what you're really selling is how a fabric regulates temperature, transfers moisture, stretches and recovers, or moves without resistance — a photograph of it hanging on a body proves almost nothing.</p>
            <p>The customer can see the garment. They cannot evaluate the technology.</p>
            <p>For a brand whose fabric technology is the reason to pay $150 for a dress shirt instead of $40, the sensory gap isn't just a conversion problem. It's a brand credibility problem. If customers can't verify the claim, they can't justify the premium. And if they buy on faith and the reality disappoints, they return it — or they don't come back.</p>
            <p>What's missing isn't better photography. It's a different category of evidence — one that shows the fabric doing what it claims to do. Stretch under load. Moisture moving through the weave. Shape holding after a full day of wear. The garment performing, not just existing.</p>
            <div className="ministry-pullquote">
              <p>The premium is justified. The representation isn't — yet.</p>
            </div>
          </section>

          {/* 04 Closer Look */}
          <section id="closer-look" data-section="closer-look" className="ministry-section">
            <span className="ministry-section-num">04 — A Closer Look: Ministry of Supply</span>
            <h2>A Closer Look: Ministry of Supply</h2>
            <p className="ministry-subtitle">This isn't a critique. It's an observation about a brand that has built something genuinely impressive, has already started solving the right problem — and has further to go than it might realize.</p>
            <p>Ministry of Supply was founded in 2012 by MIT graduates who believed professional clothing could perform like athletic wear without looking like it. Apollo fabric regulates temperature. Kinetic retains shape. Aero Zero is so light it barely registers on the body. These are real, engineered properties — genuinely impressive the moment you hold them.</p>
            <p>To their credit, Ministry of Supply has invested more in demonstrating fabric performance than most apparel brands bother to. Their product pages include feature icons, stretch photography showing garments on bodies in motion, multiple models across different frames, and an Engineer's Notes section with real technical depth. Their innovation section goes further: side-by-side durability comparisons with stretch tests, abrasion tests, and a breathability test that actually shows steam rising from fabric on a dark surface. The founder himself records product explanation videos, walking through the technical story behind each garment.</p>
            <p>The direction is exactly right. The gap is in two places.</p>
            <p>First, the most compelling content lives away from the purchase moment. The innovation section, the breathability test, the founder video — these require a motivated customer to seek them out. The buyer on the product page, deciding in real time whether to spend $150 on a dress shirt, sees feature icons and a studio photograph. The proof is elsewhere on the site. Most customers won't find it.</p>
            <p>Second, the content stops one step short of sensory demonstration. The founder's video for the Kinetic Chore Blazer describes a spiral-shaped yarn that acts like a spring — when stretched, it bounces back and retains its resilience over time. That's a precise, compelling, physical claim. Demonstrated in three seconds of macro video, it would be one of the most convincing pieces of product content in the performance apparel category. Described verbally, it asks customers to take it on faith.</p>
            <h3>A Direct Data Point</h3>
            <p>I've owned several Ministry of Supply pieces and experienced their fabrics firsthand. I purchased their Apollo Button-Down — drawn to the brand's reputation for technical fabrics and the shirt's professional styling. The open-texture weave makes it genuinely breathable, which is exactly what the technology promises. But the hand feel — smooth and slick in a way that read as more casual than structured — was something the product page hadn't prepared me for. The drape also read differently on my build than on the model. I'd expected a structured dress shirt. What arrived was more relaxed.</p>
            <p>I returned it. Not because the product failed — it was well-made — but because my expectations and the reality didn't align. That gap was formed on the product page, where the breathability animation and fabric swatch told me nothing about hand feel or drape in practice.</p>
            <p>I'm not a casual buyer. I've spent years designing physical products — thinking about hand feel, material weight, stitch density, and how those granular details shape the moment someone picks something up for the first time. I still couldn't tell from the page what I was actually getting. That's not a user problem. That's a representation opportunity.</p>
            <div className="ministry-pullquote">
              <p>The foundation is there. The technology is there. The next step is bringing the proof of performance to the place where people actually decide to buy.</p>
            </div>
            <div className="ministry-sources">
              <p>
                <a href="https://www.ministryofsupply.com" target="_blank" rel="noopener noreferrer">ministryofsupply.com</a>
                {' · '}
                <a href="https://en.wikipedia.org/wiki/Ministry_of_Supply_(clothing)" target="_blank" rel="noopener noreferrer">Wikipedia — Ministry of Supply founding and MIT origin</a>
              </p>
            </div>
          </section>

          {/* 05 Sensory Gap */}
          <section id="sensory-gap" data-section="sensory-gap" className="ministry-section">
            <span className="ministry-section-num">05 — The Sensory Gap Framework</span>
            <h2>What a Customer Can't Know From a Photo</h2>
            <p className="ministry-subtitle">Before anyone buys a performance garment online, they're trying to answer a set of questions the product page almost never fully resolves.</p>
            <p>Purchase confidence isn't just about knowing what something looks like. It's about resolving uncertainty — the specific doubts standing between a browser and a buyer. For performance apparel, the questions that matter most are the ones a photograph is least equipped to answer.</p>
            <p>Not every buyer asks the same questions. Some are primarily evaluating aesthetics. Others are technical buyers who want to understand the material at a deeper level before committing. Both segments face unresolved uncertainty — just of different kinds.</p>
            {sensorDimensions.map(({ title, need, provided, gap }) => (
              <div key={title} className="ministry-dimension">
                <p className="ministry-dimension-title">{title}</p>
                <div className="ministry-dimension-field">
                  <span className="field-label">Need</span>
                  <span className="field-body">{need}</span>
                </div>
                <div className="ministry-dimension-field">
                  <span className="field-label">Provided</span>
                  <span className="field-body">{provided}</span>
                </div>
                <div className="ministry-dimension-field">
                  <span className="field-label">Gap</span>
                  <span className="field-body">{gap}</span>
                </div>
              </div>
            ))}
            <p>None of these questions are unreasonable. All of them are answerable. And every one that goes unresolved on the product page is a moment where a potential buyer decides to wait — or buys from somewhere with free returns and hopes for the best.</p>
            <div className="ministry-sources">
              <p>
                <a href="https://coresight.com/research/the-true-cost-of-apparel-returns-alarming-return-rates-require-loss-minimization-solutions/" target="_blank" rel="noopener noreferrer">Coresight Research — 70% of returns cite fit or feel</a>
                {' · '}
                <a href="https://runrepeat.com/guides/the-definitive-guide-to-running-shoe-breathability" target="_blank" rel="noopener noreferrer">RunRepeat — breathability testing methodology</a>
              </p>
            </div>
          </section>

          {/* 06 Business Cost */}
          <section id="business-cost" data-section="business-cost" className="ministry-section">
            <span className="ministry-section-num">06 — The Business Cost</span>
            <h2>This Isn't a UX Problem. It's a Revenue Problem.</h2>
            <p className="ministry-subtitle">The sensory gap doesn't show up on a design audit. It shows up on the P&amp;L.</p>
            <p>Every unresolved question on a product page has a cost. Some customers abandon their cart. Some buy and return. Some buy, keep the product without satisfaction, and never come back. The pattern is consistent enough, and the data clear enough, to trace the line.</p>
            <p>The mechanics work like this: a customer lands on a product page with genuine purchase intent. Uncertainty doesn't always kill the sale immediately — sometimes it delays it, or downgrades it to a tentative purchase. The customer buys, hoping the reality matches the representation. When it doesn't, they return it.</p>
            <p>That sequence — intent, uncertainty, tentative purchase, return — is the most expensive customer journey a brand can run. The sale was made and unmade. The product shipped twice. The reverse logistics cost was absorbed. And the customer's confidence in the brand took a measurable hit.</p>
            <div className="ministry-stats-grid">
              <div className="ministry-stat">
                <span className="stat-value">27¢</span>
                <span className="stat-desc">Cost to process every dollar returned. A brand doing $10M online absorbing a 25% return rate spends $675K annually on returns handling alone.</span>
              </div>
              <div className="ministry-stat">
                <span className="stat-value">160bps</span>
                <span className="stat-desc">Return rate reduction ASOS achieved via AI virtual try-on — cited as a direct driver of profitability improvement.</span>
              </div>
              <div className="ministry-stat">
                <span className="stat-value">37%</span>
                <span className="stat-desc">Lower return rates on product pages with video content versus photo-only pages.</span>
              </div>
            </div>
            <h3>The Compounding Effect</h3>
            <p>Returns are only part of the cost. The other part is invisible: the customer who didn't buy at all.</p>
            <p>Conversion leakage — browsers who leave a product page without purchasing — is harder to measure than returns but likely larger in aggregate. A customer who can't resolve their uncertainty about hand feel or drape doesn't always try-and-return. More often, they simply don't buy. That lost sale leaves no data trail. It just doesn't happen.</p>
            <div className="ministry-pullquote">
              <p>The sensory gap isn't just costing returns. It's costing conversions that were never counted because they never happened.</p>
            </div>
            <div className="ministry-sources">
              <p>
                <a href="https://coresight.com/research/the-true-cost-of-apparel-returns-alarming-return-rates-require-loss-minimization-solutions/" target="_blank" rel="noopener noreferrer">Coresight Research — 27¢ processing cost</a>
                {' · '}
                <a href="https://www.cnbc.com/2026/04/05/ai-retail-start-ups-virtual-try-on-tech-margins.html" target="_blank" rel="noopener noreferrer">CNBC — ASOS 160bps return reduction</a>
                {' · '}
                <a href="https://kleep.ai/blogs/why-your-product-page-needs-video-content-to-convert-customers-in-2025" target="_blank" rel="noopener noreferrer">Kleep.ai — 37% lower returns with video</a>
                {' · '}
                <a href="https://videowise.com/blog/product-videos-for-ecommerce-guide" target="_blank" rel="noopener noreferrer">Videowise — 94% higher conversion with AR/3D</a>
              </p>
            </div>
          </section>

          {/* 07 Landscape */}
          <section id="landscape" data-section="landscape" className="ministry-section">
            <span className="ministry-section-num">07 — The Landscape Is Shifting</span>
            <h2>The Tools Have Finally Caught Up</h2>
            <p className="ministry-subtitle">For a decade, the answer to the sensory gap was "better photography." That era is ending. What's replacing it is moving faster than most brands realize.</p>
            <p>Technology companies have been attempting to solve the online fit and feel problem since the early 2010s. Early virtual try-on tools were novelties. That changed with the rapid maturation of generative AI and GPU-accelerated computing. The tools available in 2026 represent a genuine category shift — from simulating how a garment looks to simulating how it behaves. Fabric physics. Body movement. Weight and drape in real time.</p>
            <p>The AI fashion technology market was valued at <strong>$2.89 billion in 2025</strong> and is growing at <strong>39.8% annually.</strong> Eighty-five percent of apparel brands either currently use or plan to implement virtual try-on tools. This is no longer an early-adopter conversation. It's a category-definition moment — and the window for first-mover advantage is measured in months, not years.</p>
            <h3>Deployable Now</h3>
            <p><strong>Catches — RealFit.</strong> Launched March 16, 2026 on luxury brand AMIRI's website. Built on NVIDIA's Omniverse platform with proprietary GPU-accelerated fabric simulation — two years in development. Shoppers enter measurements and a photograph, generate a digital twin, and see any garment on their own body. This isn't a try-on filter. It's a physics simulation.</p>
            <p><strong>AIUTA × ASOS.</strong> Virtual try-on across a wide range of body types, heights, and skin tones. Produced a 160 basis point reduction in returns rate — cited as a direct driver of company profitability improvement. Proof that the technology works at scale.</p>
            <p><strong>Genlook × Shopify.</strong> AI virtual try-on integrated directly into the Shopify merchant ecosystem. Available now to any Shopify brand — removing the technical barrier to entry for DTC operators.</p>
            <h3>Coming Fast</h3>
            <p><strong>Google — April 30, 2026.</strong> Virtual try-on technology expands across product search results. When virtual try-on becomes a feature of organic search results, customer expectations reset permanently. What feels like a differentiator today becomes a baseline expectation by summer.</p>
            <p><strong>OpenAI.</strong> Revamped its shopping experience in ChatGPT in March 2026, integrating product discovery and purchase consideration directly into conversational AI. The evaluation journey is moving into AI-native interfaces.</p>
            <div className="ministry-pullquote">
              <p>The fitting room moved online. The brands that furnish it properly will own what comes next.</p>
            </div>
            <div className="ministry-sources">
              <p>
                <a href="https://www.businesswire.com/news/home/20260316837622/en/CATCHES-Launches-Generative-AI-with-Physics-Based-Sizing-Technology-for-Fashion-E-Commerce-with-AMIRI-Powered-by-NVIDIA" target="_blank" rel="noopener noreferrer">Business Wire — Catches RealFit launch</a>
                {' · '}
                <a href="https://www.cnbc.com/2026/04/05/ai-retail-start-ups-virtual-try-on-tech-margins.html" target="_blank" rel="noopener noreferrer">CNBC — AIUTA, Genlook, Google, OpenAI</a>
                {' · '}
                <a href="https://veeton.com/blog/a-2026-report-on-ai-s-newest-capabilities-for-fashion" target="_blank" rel="noopener noreferrer">Veeton — AI fashion market size</a>
                {' · '}
                <a href="https://3dlook.ai/content-hub/apparel-return-rates-the-stats-retailers-cannot-ignore/" target="_blank" rel="noopener noreferrer">3DLook — 85% of brands implementing virtual try-on</a>
              </p>
            </div>
          </section>

          {/* 08 Framework */}
          <section id="framework" data-section="framework" className="ministry-section">
            <span className="ministry-section-num">08 — A Framework for Closing the Gap</span>
            <h2>A Framework for Closing the Gap</h2>
            <p className="ministry-subtitle">Not a content checklist. A strategic map organized around what customers actually need to know — and the specific formats that answer each question.</p>
            <p>The instinct to add "better content" to product pages is right but underspecified. Without a framework, content investment gets spread thin — a lifestyle video here, a fabric callout there — without ever fully resolving the uncertainty that's costing conversions and driving returns.</p>
            <h3>Two Buyers, Two Needs</h3>
            <p>The <strong>aesthetic buyer</strong> evaluates silhouette, color, styling, and fit relative to their wardrobe. For this buyer, the current Ministry of Supply product page does much of what it needs to do.</p>
            <p>The <strong>technical buyer</strong> wants to understand the material before committing. They read the Engineer's Notes. They watch the founder video. They are almost certainly overrepresented in Ministry of Supply's customer base given the brand's MIT origin and technical positioning. They are currently underserved.</p>
            {frameworkDimensions.map(({ title, question, format, application }) => (
              <div key={title} className="ministry-dimension">
                <p className="ministry-dimension-title">{title}</p>
                <div className="ministry-dimension-field">
                  <span className="field-label">Question</span>
                  <span className="field-body">{question}</span>
                </div>
                <div className="ministry-dimension-field">
                  <span className="field-label">Format</span>
                  <span className="field-body">{format}</span>
                </div>
                <div className="ministry-dimension-field">
                  <span className="field-label">Application</span>
                  <span className="field-body">{application}</span>
                </div>
              </div>
            ))}
            <div className="ministry-sources">
              <p>
                <a href="https://runrepeat.com/guides/the-definitive-guide-to-running-shoe-breathability" target="_blank" rel="noopener noreferrer">RunRepeat — breathability testing methodology</a>
                {' · '}
                <a href="https://www.emerald.com/jsm/article-abstract/doi/10.1108/JSM-04-2025-0239/1308828/Exploring-how-autonomous-sensory-meridian-response" target="_blank" rel="noopener noreferrer">Emerald Publishing — ASMR in fashion retail, 2025</a>
              </p>
            </div>
          </section>

          {/* 09 Where to Start */}
          <section id="where-to-start" data-section="where-to-start" className="ministry-section">
            <span className="ministry-section-num">09 — Where to Start</span>
            <h2>Where to Start</h2>
            <p className="ministry-subtitle">Not everything at once. The highest-leverage initiatives are also the most immediate — and the most achievable without a platform overhaul or new technology partner.</p>
            <p>The answer comes from mapping each intervention against two variables: how directly it resolves the customer's most critical uncertainty, and how quickly it can be executed without significant infrastructure change. The initiatives that score highest on both go first.</p>
            {priorities.map(({ num, title, body, why }) => (
              <div key={num} className="ministry-priority">
                <div className="ministry-priority-header">
                  <span className="ministry-priority-num">{num}</span>
                  <p className="ministry-priority-title">{title}</p>
                </div>
                {body.map((para, i) => <p key={i}>{para}</p>)}
                <p className="ministry-why">Why this</p>
                <p className="ministry-why-body">{why}</p>
              </div>
            ))}
            <div className="ministry-pullquote">
              <p>The fitting room moved online. The brands that furnish it properly will define what the category looks like for the next decade.</p>
            </div>
            <div className="ministry-sources">
              <p>
                <a href="https://www.cnbc.com/2026/04/05/ai-retail-start-ups-virtual-try-on-tech-margins.html" target="_blank" rel="noopener noreferrer">CNBC — Genlook × Shopify, ASOS return rate reduction</a>
              </p>
            </div>
          </section>

          {/* 10 Internal Case */}
          <section id="internal-case" data-section="internal-case" className="ministry-section">
            <span className="ministry-section-num">10 — Making the Case Internally</span>
            <h2>Making the Case Internally</h2>
            <p className="ministry-subtitle">A good idea without a business case is a conversation. A good idea with a business case is a decision.</p>
            <p>Every brand has more good initiatives than capacity to execute them. The relevant comparison set for a DTC brand includes paid acquisition, new product development, retail expansion, loyalty programs, and operational efficiency improvements.</p>
            <p>Mapped against those options, this initiative has an unusual risk profile. Paid acquisition has a known cost-per-acquisition that compounds as competition increases. New product development has an 18 to 24 month runway before revenue impact. Retail expansion requires capital, lease commitments, and operational infrastructure.</p>
            <p>Better digital product representation — specifically Priority initiatives 1 and 2 — requires a content production budget, a shoot brief, and a decision to execute. No new platform. No new vendor relationship. No long implementation timeline. The investment is modest. The payback period is short. The downside is bounded.</p>
            <h3>How You'd Know It's Working</h3>
            <div className="ministry-metrics">
              {metrics.map(({ title, target, benchmark }) => (
                <div key={title} className="ministry-metric">
                  <span className="ministry-metric-title">{title}</span>
                  <p><strong>Target:</strong> {target}</p>
                  <p><strong>Benchmark:</strong> {benchmark}</p>
                </div>
              ))}
            </div>
            <h3>The MVP</h3>
            <p>Select the three to five highest-traffic PDPs in the catalog. Prioritize fabrics with the strongest performance claims and the largest sensory gap between the claim and what the page currently shows. Kinetic is the natural first candidate: the spring-return yarn story is the most visually demonstrable property in the line, and the founder has already articulated the brief.</p>
            <p>For each selected PDP: produce one 20 to 30 second fabric-in-motion video, one macro texture photograph, and move the relevant innovation section content onto the page. Run against matched control pages for 60 days.</p>
            <p>Decision criteria for rollout: if return rate drops more than 10% and conversion lifts more than 8% on pilot pages, expand to the full catalog. This is a $15,000 to $25,000 production investment to generate data that informs a much larger content decision.</p>
            <h3>Risk and Resource</h3>
            <p><strong>The cost of doing this:</strong> Content production for three to five hero videos and a macro texture series — roughly $15,000 to $25,000. No platform development. No new vendor contract for Priorities 1 and 2. Timeline from brief to published: four to six weeks.</p>
            <p><strong>The cost of not doing this:</strong> Continuing to absorb preventable returns at 27 cents on every dollar refunded. Continuing to lose conversions that leave no data trail. And — after April 30 — operating in a market where virtual try-on is a baseline customer expectation.</p>
            <p><strong>The asymmetric case:</strong> A 10% reduction in return rate on a $5 million online revenue base, at current return rates and handling costs, recovers approximately $135,000 in margin annually. Against a $25,000 content investment. In year one. That math doesn't require perfect execution to be compelling.</p>
            <div className="ministry-sources">
              <p>
                <a href="https://kleep.ai/blogs/why-your-product-page-needs-video-content-to-convert-customers-in-2025" target="_blank" rel="noopener noreferrer">Kleep.ai — 37% lower returns with video, 15–25% higher conversion</a>
                {' · '}
                <a href="https://coresight.com/research/the-true-cost-of-apparel-returns-alarming-return-rates-require-loss-minimization-solutions/" target="_blank" rel="noopener noreferrer">Coresight Research — 27¢ processing cost</a>
              </p>
            </div>
          </section>

          {/* 11 Assumptions */}
          <section id="assumptions" data-section="assumptions" className="ministry-section">
            <span className="ministry-section-num">11 — Assumptions &amp; Research Agenda</span>
            <h2>What We're Assuming — And How to Find Out If We're Right</h2>
            <p className="ministry-subtitle">The most useful thing a strategic framework can do is name what it doesn't know. This one has several gaps. Here's what they are, and how to close them.</p>
            <p>Everything in the preceding sections is built on three inputs: industry-level data on returns and content performance, a direct observation audit of Ministry of Supply's digital product experience, and one customer's firsthand experience with the product. Those inputs support the hypotheses. They don't validate them.</p>
            <h3>The Assumptions</h3>
            {assumptions.map(({ title, body }) => (
              <div key={title} className="ministry-assumption">
                <p className="ministry-assumption-title">{title}</p>
                <p>{body}</p>
              </div>
            ))}
            <h3>The Research Agenda</h3>
            {researchAgenda.map(({ num, title, body }) => (
              <div key={num} className="ministry-assumption">
                <p className="ministry-assumption-title">{num}. {title}</p>
                <p>{body}</p>
              </div>
            ))}
            <p>The framework is the starting point. The research agenda is the first deliverable. What comes after is a sharper version of everything in this document — one built on evidence rather than hypothesis, specific enough to execute against with confidence.</p>
            <div className="ministry-sources">
              <p>
                <a href="https://coresight.com/research/the-true-cost-of-apparel-returns-alarming-return-rates-require-loss-minimization-solutions/" target="_blank" rel="noopener noreferrer">Coresight Research — 70% of returns cite fit or feel</a>
              </p>
            </div>
          </section>

          {/* 12 Close */}
          <section id="close" data-section="close" className="ministry-section">
            <span className="ministry-section-num">12 — About This Framework</span>
            <h2>About This Framework</h2>
            <p>This strategic framework was developed by Jed Crystal — an industrial designer, DTC brand founder, and digital product leader who has spent his career building physical products and thinking carefully about how to represent them online.</p>
            <p>He founded and ran Hepper, a consumer products company, for thirteen years — navigating every dimension of the physical-to-digital translation problem this document describes. He designed wearable physical products at Harvard's Wyss Institute, where the gap between what a product does and what can be communicated about it is a daily design constraint. He has led UX design for 3D CAD software at SolidWorks, where precision in how complex physical systems are understood and communicated is the whole job.</p>
            <p>He has spent enough time on the design side to speak that language fluently — which means he can brief creative teams precisely, give useful feedback on execution, and recognize when something has drifted from the original intent.</p>
            <p>He is also a Ministry of Supply customer who returned a shirt, thought carefully about why, and decided the question was worth following up on.</p>
            <p>This is a starting point, not a finished answer. If it's useful — or if any of it is wrong — he'd like to know.</p>
            <span className="ministry-author-name">Jed Crystal</span>
            <p className="ministry-version">Document version 1.0 — April 2026 · Next version: post-research validation</p>
          </section>

        </div>
      </div>
    </div>
  )
}

export default Ministry
