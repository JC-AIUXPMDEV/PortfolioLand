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

          <section className="project-section">
            <h2>Product Development</h2>
            {/* [CONTENT PLACEHOLDER] */}
            <p>[CONTENT PLACEHOLDER — How were products developed? Describe the design process, materials decisions, manufacturing relationships, and how industrial design thinking shaped the product line.]</p>
          </section>

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
