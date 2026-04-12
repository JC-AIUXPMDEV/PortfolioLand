import { Link } from 'react-router-dom'
import './ProjectDetail.css'

function ShelfReady() {
  return (
    <div className="container">
      <div className="project-detail">

        <Link to="/work" className="back-link">← Back to Work</Link>

        <header className="project-detail-header">
          <span className="category-tag">Framework — Work in Progress</span>
          <h1>Shelf Ready — Physical Product Framework</h1>
          {/* [FRAMING PLACEHOLDER — e.g. "A brief-centered operating system for physical product development"] */}
          <p className="project-framing">[FRAMING PLACEHOLDER — e.g. "A brief-centered operating system for physical product development"]</p>
        </header>

        {/* Prominent WIP banner — required per spec */}
        <div className="wip-banner" role="note" aria-label="Work in progress">
          This framework is actively in development. Structure and content will evolve.
        </div>

        <div className="project-body">

          <section className="project-section">
            <h2>The Problem This Solves</h2>
            {/* [CONTENT PLACEHOLDER] */}
            <p>[CONTENT PLACEHOLDER — What gap does Shelf Ready address? Describe the failure mode it's built to prevent: the disconnect between product brief and production reality that causes most physical product projects to go wrong.]</p>
          </section>

          <section className="project-section">
            <h2>The Framework</h2>
            {/* [CONTENT PLACEHOLDER] */}
            <p>[CONTENT PLACEHOLDER — Describe the framework structure. What are the core phases, tools, or artifacts? How does it guide a team from initial brief through manufacturing-ready specification?]</p>
          </section>

          <section className="project-section">
            <h2>Current Status</h2>
            {/* [CONTENT PLACEHOLDER] */}
            <p>[CONTENT PLACEHOLDER — Where does the framework stand today? What's been validated, what's still being developed, and what consulting engagements or projects have stress-tested it so far?]</p>
          </section>

          <section className="project-section">
            <h2>Why This Matters</h2>
            {/* [CONTENT PLACEHOLDER] */}
            <p>[CONTENT PLACEHOLDER — The broader argument for why a brief-centered OS for physical product development matters now. Who needs this and why the existing tools (design sprints, agile, etc.) fall short for physical product work.]</p>
          </section>

        </div>
      </div>
    </div>
  )
}

export default ShelfReady
