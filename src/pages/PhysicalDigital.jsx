import { Link } from 'react-router-dom'
import './ProjectDetail.css'

function PhysicalDigital() {
  return (
    <div className="container">
      <div className="project-detail">

        <Link to="/work" className="back-link">← Back to Work</Link>

        <header className="project-detail-header">
          <span className="category-tag">Physical Product Development · UX &amp; Software Design</span>
          <h1>Physical + Digital Product&nbsp;Development</h1>
          <p className="project-framing">Two disciplines, one through-line: understanding what people need and building something real — whether that's a product in a factory or a workflow in software.</p>
        </header>

        <div className="project-body">

          {/* ═══════════════════════════════════════════════════════
              CHAPTER 1 — CRYSTAL DESIGN STUDIO
          ═══════════════════════════════════════════════════════ */}

          <div className="project-chapter">
            <span className="project-chapter-label">Chapter 01 — Physical Product</span>
            <h2 className="project-chapter-title">Crystal Design&nbsp;Studio</h2>
            <p className="project-chapter-subtitle">18 years taking consumer products from concept to market across soft goods, accessories, and home&nbsp;furnishings.</p>

            {/* ── Chapter image ── */}
            {/* Replace with: <figure className="project-image"><img src="/images/cds-work.jpg" alt="Consumer product design work across soft goods and accessories — Crystal Design Studio" /><figcaption>Selected work — Crystal Design Studio, 2002–2020.</figcaption></figure> */}
            <figure className="project-image" aria-label="Crystal Design Studio work image placeholder">
              <div className="project-image-placeholder">
                <span className="project-image-placeholder-label">Add Photo</span>
                <p className="project-image-placeholder-desc">Product collage or overview — a clean grid or selection of product photography across categories (bags, gloves, home goods). File: cds-work.jpg</p>
              </div>
              <figcaption>Selected work — Crystal Design Studio. Add: cds-work.jpg</figcaption>
            </figure>

            <section className="project-section">
              <h2>The Work</h2>
              <p>For 18 years I ran a one-person design studio helping everyone from solo inventors to global brands take physical products from first sketch to factory floor. The categories ranged widely — backpacks, luggage, gloves, footwear, and home furnishings — but the core challenge was always the same: translate an idea into something real, manufacturable, and worth buying.</p>
              <p>This work ran concurrently with Hepper for most of its life, which meant I was simultaneously building my own brand and advising others on how to build theirs. The overlap was intentional — the consulting work kept me sharp on manufacturing trends and market realities, and the Hepper experience gave me founder-level credibility that made client relationships more honest and more&nbsp;useful.</p>
            </section>

            <section className="project-section">
              <h2>Selected Projects</h2>

              <h3>Go Gaga — Patented Baby Bag System</h3>
              <p>Go Gaga was founded by an entrepreneur coming out of a business program at Bentley University with a clear vision: a baby bag that solved the real ergonomic problems parents face without sacrificing style. We worked together on a bag featuring a patented strap system that distributed carrying weight across the body in a way I hadn't seen applied to bags before.</p>
              <p>This project is a good example of what the best client relationships look like — a founder who came prepared, knew what she wanted to achieve, was open to the design process, and trusted the expertise she was paying for. The result was a product with genuine functional innovation, not just aesthetic&nbsp;differentiation.</p>

              <h3>Gordini / Timberland Glove Line</h3>
              <p>As a Senior Product Designer at Gordini USA — a Timberland licensee — I designed and managed the full Timberland glove line across three seasons, from concept through trade show presentation. The work covered outdoor performance gloves, lifestyle styles, base layers, and accessories.</p>
              <p>The key market insight from this category: gloves are largely a commodity purchase. Buyers want something functional, affordable, and not too fashion-forward. Understanding where a category sits on the innovation spectrum — and designing accordingly rather than against it — is a skill that transfers across every product&nbsp;type.</p>

              <h3>Cross-Category Consulting</h3>
              <p>Across 18 years the studio touched most corners of the soft goods and consumer product world. Backpacks remain a personal fascination — the functional challenge of distributing weight across a body, organizing gear for daily use, and making something people want to wear is endlessly interesting. Luggage, footwear, and home furnishings each brought their own manufacturing and market constraints.</p>
              <p>The range wasn't accidental. Working across categories meant never getting too comfortable with any single set of assumptions about how products are made or why people buy&nbsp;them.</p>
            </section>

            <section className="project-section">
              <h2>What This Built</h2>
              <p>Eighteen years of consulting across dozens of clients and categories built one capability above all others: the ability to communicate design across every kind of gap.</p>
              <p>Inventors and solo founders see their product one way. Engineers see it another. Factory managers in three different countries see it three more ways. Getting an idea out of someone's head, through a design process, through production, and into a market — without losing what made it worth making in the first place — is fundamentally a communication problem.</p>
              <p>The harder lesson came from the clients who were difficult — typically solo inventors with limited budgets and preconceived ideas about how the process should work. Managing the gap between what someone envisions and what's actually buildable, affordable, and sellable requires honesty delivered with care. That skill — being useful without being brutal, and honest without being dismissive — is one I use in every professional relationship.</p>
            </section>

            <p className="project-credit">Crystal Design Studio, 2002–2020. Consumer product design and consulting across soft goods, accessories, and home furnishings.</p>
          </div>

          {/* ═══════════════════════════════════════════════════════
              CHAPTER 2 — SOLIDWORKS
          ═══════════════════════════════════════════════════════ */}

          <div className="project-chapter">
            <span className="project-chapter-label">Chapter 02 — Software UX</span>
            <h2 className="project-chapter-title">SolidWorks</h2>
            <p className="project-chapter-subtitle">Designing for professional engineers at the intersection of complexity and&nbsp;simplicity.</p>

            {/* ── Chapter image ── */}
            {/* Replace with: <figure className="project-image"><img src="/images/solidworks-ui.jpg" alt="SolidWorks desktop CAD application — professional engineering software used by millions worldwide" /><figcaption>SolidWorks desktop and xDesign cloud platform.</figcaption></figure> */}
            <figure className="project-image" aria-label="SolidWorks UI image placeholder">
              <div className="project-image-placeholder">
                <span className="project-image-placeholder-label">Add Screenshot</span>
                <p className="project-image-placeholder-desc">SolidWorks desktop application or xDesign cloud platform UI — a screenshot or UI overview showing the product context. File: solidworks-ui.jpg</p>
              </div>
              <figcaption>SolidWorks desktop + xDesign cloud platform. Add: solidworks-ui.jpg</figcaption>
            </figure>

            <section className="project-section">
              <h2>The Context</h2>
              <p>SolidWorks is one of the world's leading 3D CAD platforms, used by professional engineers, product designers, and manufacturers across nearly every industry. For four years I've been the UX designer responsible for desktop and cloud application experiences — designing for one of the most technically demanding and opinionated user audiences in software.</p>
              <p>The work sits at an unusual intersection: deeply complex professional tooling, a fiercely loyal user base that resists change, and a company pushing hard toward cloud migration. My job is to make that transition feel inevitable rather than&nbsp;disruptive.</p>
            </section>

            <section className="project-section">
              <h2>The Audience</h2>
              <p>Designing for SolidWorks users is unlike designing for most software audiences. These are professional engineers who have spent years — sometimes decades — mastering an extraordinarily complex tool.</p>
              <p>Many exhibit what might be called the IKEA effect at scale: they've worked so hard to learn the software that they take genuine pride in that complexity. They don't want it simplified. They want it respected.</p>
              <p>That means change has to be introduced carefully. New UI that gets in the way of an established workflow is not a feature — it's an intrusion. Convincing this audience that something new is worth their attention requires demonstrating clear value quickly, and never asking them to sacrifice efficiency for aesthetics.</p>
              <p>At the same time, they are among the most engaged and collaborative users I've worked with. They show up to research sessions, share detailed feedback, advocate loudly for improvements, and are genuinely grateful when the team listens. Designing for them is demanding and deeply rewarding in equal&nbsp;measure.</p>
            </section>

            <section className="project-section">
              <h2>Selected Work</h2>

              <h3>Notification &amp; Guidance Component — xDesign Cloud</h3>
              <p>One of my most recent projects was designing a new contextual notification and guidance component for the xDesign cloud platform. The goal was to create something that felt less like a system alert and more like having a knowledgeable colleague nearby — someone who notices what you're working on and offers a useful insight at exactly the right moment.</p>
              <p>The component triggers contextually as users move through specific workflow paths, surfacing relevant guidance without interrupting focus. In its simplest state it delivers a single high-value insight.</p>
              <p>Expanded, it offers up to five modular content sections — explanations, animated GIFs, step-by-step actions, and in some instances a button that takes automated action within the software directly. The entire system is modular, allowing PMs and designers across the platform to configure it for their specific contexts without rebuilding from scratch.</p>
              <p>What made this project notable wasn't the UI complexity — the interface itself is intentionally simple, consistent with existing patterns. What made it worth doing was the underlying design strategy: treating education as a product feature, not a support&nbsp;function.</p>

              <h3>Configuration Assistant — Desktop Migration Support</h3>
              <p>SolidWorks is aggressively pushing desktop users toward cloud subscription platforms. One specific file type, when saved to the cloud for the first time, undergoes an irreversible configuration change. If users aren't aware of this before it happens, the consequences are significant — hours of manual remediation, increased support costs, and eroded trust in the migration process.</p>
              <p>Approximately 10% of migrating users were encountering this problem.</p>
              <p>I designed the Configuration Assistant — a contextual in-app component that intercepts users at the decision point, explains the implications clearly, and guides them through the right path before the irreversible action occurs.</p>
              <p>I was both UX designer and de facto project manager on this work, coordinating across the SME team, customer support, user assistance, the platform team in Paris, and a development team split between the US and India — all without formal PM authority.</p>
              <p>The project required managing stakeholder alignment across time zones and disciplines, translating technical constraints into user-facing language, and building a component that would scale across multiple migration scenarios. It's the kind of project that doesn't look complicated from the outside but requires significant cross-functional coordination to actually&nbsp;ship.</p>

              <h3>Command Search — Discoverability at Scale</h3>
              <p>SolidWorks has thousands of commands across its desktop interface. For new users, finding the right command at the right moment is a genuine barrier to learning. For experienced users, it's a workflow efficiency problem.</p>
              <p>Command Search is a universal search layer that surfaces relevant commands contextually, reducing the cognitive load of navigating a deeply nested menu system that has accumulated decades of additions. The design challenge was creating something powerful enough to satisfy expert users while being approachable enough to genuinely help beginners — without getting in the way of&nbsp;either.</p>
            </section>

            <section className="project-section">
              <h2>What This Demonstrates</h2>
              <p>Designing for SolidWorks taught me that the hardest UX problems aren't about making things look good — they're about earning trust from users who know more about the domain than you do, introducing change to people who've built their professional identity around the existing system, and translating complex technical constraints into experiences that feel simple without being patronizing.</p>
              <p>Those skills — designing for expert users, managing cross-functional complexity, and building systems that scale — are directly applicable to any product role where the user has high expectations and low tolerance for&nbsp;friction.</p>
            </section>

            <p className="project-credit">SolidWorks is a product of Dassault Systèmes. Role: User Experience Design Manager, July 2022 – Present.</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default PhysicalDigital
