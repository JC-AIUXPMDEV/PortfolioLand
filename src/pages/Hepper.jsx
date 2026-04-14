import { Link } from 'react-router-dom'
import './ProjectDetail.css'

function Hepper() {
  return (
    <div className="container">
      <div className="project-detail">

        <Link to="/work" className="back-link">← Back to Work</Link>

        <header className="project-detail-header">
          <span className="category-tag">Founder Case Study</span>
          <h1>Hepper — From Zero to Exit</h1>
          {/* [FRAMING PLACEHOLDER — e.g. "13 years building and selling a consumer products brand"] */}
          <p className="project-framing">[FRAMING PLACEHOLDER — e.g. "13 years building and selling a consumer products brand"]</p>
        </header>

        <div className="project-body">

          <section className="project-section">
            <h2>The Business</h2>
            {/* [CONTENT PLACEHOLDER] */}
            <p>[CONTENT PLACEHOLDER — What was Hepper? Describe the brand, the product line, the market position, and what made it distinctive in the DTC pet products space.]</p>
          </section>

          {/* ── Hero product image ── */}
          {/* Replace with: <figure className="project-image"><img src="/images/hepper-hero.jpg" alt="Hepper POD™ and DOC™ bowls — styled product shot showing the full line" /><figcaption>Hepper POD™ and DOC™. The two hero products.</figcaption></figure> */}
          <figure className="project-image" aria-label="Product image placeholder">
            <div className="project-image-placeholder">
              <span className="project-image-placeholder-label">Add Photo</span>
              <p className="project-image-placeholder-desc">Hero product shot — Hepper POD™ and DOC™ bowls styled together, showing the full line. Clean background, high contrast. This is the image that sells the design story.</p>
            </div>
            <figcaption>Hepper POD™ and DOC™ — the two hero products. Add: hepper-hero.jpg</figcaption>
          </figure>

          <section className="project-section">
            <h2>Product Development</h2>
            {/* [CONTENT PLACEHOLDER] */}
            <p>[CONTENT PLACEHOLDER — How were products developed? Describe the design process, materials decisions, manufacturing relationships, and how industrial design thinking shaped the product line.]</p>
          </section>

          {/* ── Material / process detail image ── */}
          {/* Replace with: <figure className="project-image project-image--portrait"><img src="/images/hepper-detail.jpg" alt="Hepper bowl detail — material finish, tooling seam, or production shot" /><figcaption>Detail shot — material and craft.</figcaption></figure> */}
          <figure className="project-image" aria-label="Product detail image placeholder">
            <div className="project-image-placeholder">
              <span className="project-image-placeholder-label">Add Photo</span>
              <p className="project-image-placeholder-desc">Detail or process shot — a close-up of material finish, tooling seam, packaging, or a prototype stage. Shows the craft and intentionality behind how the product was made.</p>
            </div>
            <figcaption>Material and process detail. Add: hepper-detail.jpg</figcaption>
          </figure>

          <section className="project-section">
            <h2>Operations & Scale</h2>
            {/* [CONTENT PLACEHOLDER] */}
            <p>[CONTENT PLACEHOLDER — How did the business scale? Cover manufacturing across three countries, international retail expansion, DTC operations, and the organizational decisions made along the way.]</p>
          </section>

          <section className="project-section">
            <h2>The Exit</h2>
            {/* [CONTENT PLACEHOLDER] */}
            <p>[CONTENT PLACEHOLDER — Describe the exit process: how the decision was made, what the negotiation involved, and how it concluded. What did a successful exit from a bootstrapped consumer brand look like?]</p>
          </section>

          <section className="project-section">
            <h2>What I Learned</h2>
            {/* [CONTENT PLACEHOLDER] */}
            <p>[CONTENT PLACEHOLDER — The most important lessons from 13 years as founder-designer-operator. What does this experience give you that most designers don't have?]</p>
          </section>

        </div>
      </div>
    </div>
  )
}

export default Hepper
