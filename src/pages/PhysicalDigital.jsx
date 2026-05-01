import { Link } from 'react-router-dom'
import './ProjectDetail.css'

function PhysicalDigital() {
  return (
    <div className="container">
      <div className="project-detail">

        <Link to="/work" className="back-link">← Back to Work</Link>

        <header className="project-detail-header">
          <span className="category-tag">Physical Product Design and Development · Crystal Design Studio</span>
          <h1>Physical Product Design and&nbsp;Development</h1>
          <p className="project-framing">Consumer products consulting and bringing ideas from concept to market, across soft goods, accessories, and home furnishings.</p>
        </header>

        <div className="project-body">

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
            <p>For 18 years I ran a one-person design studio helping everyone from solo inventors to global brands take physical products from brief to production. The categories ranged widely — backpacks, luggage, gloves, footwear, and home furnishings — but the core challenge was always the same: translate an idea into something real, manufacturable, and worth buying.</p>
            <p>This work ran concurrently with Hepper; I was simultaneously building my own brand and advising others on how to build theirs. The overlap was intentional — the consulting work kept me sharp on manufacturing trends and market realities, and the Hepper experience gave me founder credibility that made client relationships more honest and more useful.</p>
          </section>

          <section className="project-section">
            <h2>Selected Projects</h2>

            <h3>Go Gaga — Patented Baby Bag System</h3>
            <p>Go Gaga was founded by an entrepreneur coming out of a business program at Bentley University with a clear vision: a baby bag that solved the real ergonomic problems parents face without sacrificing style. We worked together on a bag featuring a patented strap system that distributed carrying weight across the body in a way I hadn't seen applied to bags before.</p>
            <p>This project is a good example of what the best client relationships look like — a founder who came prepared, knew what she wanted to achieve, was open to the design process, and trusted the expertise she was paying for. The result was a product with genuine functional innovation, not just aesthetic&nbsp;differentiation.</p>

            <h3>Gordini / Timberland Glove Line</h3>
            <p>As a Senior Product Designer at Gordini USA, a Timberland licensee, I designed and managed the full Timberland glove line across three seasons, from concept through trade show presentation. The work at Gordini also covered outdoor performance gloves, base layers, and accessories.</p>
            <p>The key market insight from this category: gloves are largely a commodity purchase. Buyers wanted something functional, affordable, and not too fashion forward. But Timberland wanted designs that fit into their season styling and that were exciting for marketing. Understanding where a category sits on the innovation spectrum — and designing accordingly rather than against it — was the challenge in this role.</p>

            <h3>Cross-Category Consulting</h3>
            <p>The studio touched most corners of the soft goods and consumer product world. Backpacks remain a personal fascination — the functional challenge of distributing weight across a body, organizing gear for daily use, and making something people want to wear is endlessly interesting. Luggage, footwear, and home furnishings each brought their own manufacturing and market constraints.</p>
            <p>Working across categories meant never getting too comfortable with any single set of assumptions about how products are made or why people buy them.</p>
          </section>

          <section className="project-section">
            <h2>Communication is the Key</h2>
            <p>Consulting across dozens of clients and categories built one capability above all others: the ability to communicate design across every kind of gap.</p>
            <p>Inventors and solo founders see their product one way. Engineers see it another. Factory managers in three different countries see it three more ways. Getting an idea out of someone's head, through a design process, through production, and into a market without losing what made it worth making in the first place is fundamentally a communication problem.</p>
            <p>The harder lesson came from the most difficult clients, typically solo inventors with limited budgets and preconceived ideas about how the process should work. Managing the gap between what someone envisions and what's actually buildable, affordable, and sellable requires honesty delivered with care. Being useful without being brutal, and honest without being dismissive, is a skill I use in every professional relationship.</p>
          </section>

        </div>

        <p className="project-credit">Crystal Design Studio, 2002–2020. Consumer product design and consulting across soft goods, accessories, and home furnishings.</p>

      </div>
    </div>
  )
}

export default PhysicalDigital
