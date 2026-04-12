import { Link } from 'react-router-dom'
import './ProjectDetail.css'

function Wyss() {
  return (
    <div className="container">
      <div className="project-detail">

        <Link to="/work" className="back-link">← Back to Work</Link>

        <header className="project-detail-header">
          <span className="category-tag">Physical Product Development</span>
          <h1>Wyss Institute — Wearable Robotics</h1>
          {/* [FRAMING PLACEHOLDER — e.g. "Designing for the body at the intersection of textile and technology"] */}
          <p className="project-framing">[FRAMING PLACEHOLDER — e.g. "Designing for the body at the intersection of textile and technology"]</p>
        </header>

        <div className="project-body">

          <section className="project-section">
            <h2>The Challenge</h2>
            {/* [CONTENT PLACEHOLDER] */}
            <p>[CONTENT PLACEHOLDER — What was the research challenge at the Wyss Institute? Describe the problem space: soft robotic exosuits, the tension between mechanical function and wearable comfort, and the stakes of getting it wrong.]</p>
          </section>

          <section className="project-section">
            <h2>My Role</h2>
            {/* [CONTENT PLACEHOLDER] */}
            <p>[CONTENT PLACEHOLDER — What was your specific role on the team? What did you own, what did you collaborate on, and how did your industrial design background intersect with the research context?]</p>
          </section>

          <section className="project-section">
            <h2>Design Approach</h2>
            {/* [CONTENT PLACEHOLDER] */}
            <p>[CONTENT PLACEHOLDER — How did you approach the design problems? Cover material selection, prototyping methods, body-worn attachment systems, and how you balanced biomechanics with sensor reliability and user comfort.]</p>
          </section>

          <section className="project-section">
            <h2>Key Outcomes</h2>
            {/* [CONTENT PLACEHOLDER] */}
            <p>[CONTENT PLACEHOLDER — What did the work produce? Describe outcomes: prototypes built, research published, insights generated, and what this experience permanently changed about how you think about products on the body.]</p>
          </section>

        </div>
      </div>
    </div>
  )
}

export default Wyss
