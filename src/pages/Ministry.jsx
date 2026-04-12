import { Link } from 'react-router-dom'
import './ProjectDetail.css'

function Ministry() {
  return (
    <div className="container">
      <div className="project-detail">

        <Link to="/work" className="back-link">← Back to Work</Link>

        <header className="project-detail-header">
          <span className="category-tag">Product Strategy Exercise</span>
          <h1>Ministry of Supply — Sensory Gap Strategy</h1>
          {/* [FRAMING PLACEHOLDER — e.g. "How physical products get sold through digital screens"] */}
          <p className="project-framing">[FRAMING PLACEHOLDER — e.g. "How physical products get sold through digital screens"]</p>
        </header>

        <div className="project-body">

          <section className="project-section">
            <h2>The Problem</h2>
            {/* [CONTENT PLACEHOLDER] */}
            <p>[CONTENT PLACEHOLDER — Describe the core problem: the gap between how performance apparel is experienced physically vs. how it must be communicated digitally. Set up the tension.]</p>
          </section>

          <section className="project-section">
            <h2>The Approach</h2>
            {/* [CONTENT PLACEHOLDER] */}
            <p>[CONTENT PLACEHOLDER — Describe the methodology. How was the sensory gap identified and analyzed? What frameworks or research informed the approach?]</p>
          </section>

          <section className="project-section">
            <h2>Key Findings</h2>
            {/* [CONTENT PLACEHOLDER] */}
            <p>[CONTENT PLACEHOLDER — What were the specific findings? What sensory properties are most at risk in the digital translation, and how do customers currently compensate?]</p>
          </section>

          <section className="project-section">
            <h2>Strategic Recommendations</h2>
            {/* [CONTENT PLACEHOLDER] */}
            <p>[CONTENT PLACEHOLDER — What concrete recommendations came out of the analysis? Specific to Ministry of Supply's product line, channels, and competitive position.]</p>
          </section>

          <section className="project-section">
            <h2>What This Means for Wearable Brands</h2>
            {/* [CONTENT PLACEHOLDER] */}
            <p>[CONTENT PLACEHOLDER — Broader implications beyond Ministry of Supply. What does this sensory gap pattern mean for any brand selling tactile, performance-driven products through digital channels?]</p>
          </section>

        </div>
      </div>
    </div>
  )
}

export default Ministry
