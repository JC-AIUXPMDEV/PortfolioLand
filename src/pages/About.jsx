import { Link } from 'react-router-dom'
import './About.css'

function About() {
  return (
    <div className="container">

      <section className="about-header">
        <h1>About Jed</h1>
      </section>

      <section className="about-bio">
        {/*
          Bio carried forward from existing site.
          [BIO PLACEHOLDER — replace/expand with final 4-paragraph version]
        */}
        <p>I've spent 20+ years building physical and digital products from the ground&nbsp;up.</p>

        <p>For about 13 of those years, I was also growing Hepper, a modern pet brand that I founded. I designed the full product line, managed manufacturing across 3 countries, grew to 40,000 email subscribers and international retail, and negotiated a successful&nbsp;exit.</p>

        <p>That experience gave me a rare hands-on, end-to-end view: owning product strategy, design, and the business simultaneously, from zero to one and&nbsp;beyond.</p>

        <p>Before and after Hepper, I've worked at the intersection of physical and digital, designing wearable robotics at Harvard's Wyss Institute, leading UX projects for 3D CAD software at SolidWorks, and consulting for consumer brands from early concept through&nbsp;production.</p>

        <p>My industrial design background pushes every digital decision through a physical-world lens. How it feels, how it's made, how it holds&nbsp;up.</p>

        <p>My UX background means I don't just design the physical product. I think about how it fits into the full user experience, from how it's worn and used to how it connects to the digital ecosystem around&nbsp;it.</p>

        <p>What I'm drawn to now: consumer brands building at the intersection of hardware and software, wearable tech, health and performance, connected devices, where the physical experience and the digital experience have to work as one. I understand both sides of that equation, and I know how to translate between&nbsp;them.</p>

        <p>I think best when I'm working across the full product picture: the business rationale, the user experience, and the manufacturing reality,&nbsp;simultaneously.</p>

        {/* [BIO PARAGRAPH 4 PLACEHOLDER — additional context, voice, or framing] */}
      </section>

      <section className="about-skills">
        <div className="about-section-header">
          <span className="section-num">01</span>
          <h2>Skills &amp; Expertise</h2>
        </div>
        <div className="skills-groups">

          <div className="skills-group">
            <span className="skills-group-title">Product Development</span>
            <ul className="skills-list">
              <li>End-to-end physical product development — soft goods, wearables, accessories, and consumer goods from brief to factory to market</li>
              <li>Brief writing, vendor sourcing, overseas manufacturing, and production management across multiple countries and cultures</li>
            </ul>
          </div>

          <div className="skills-group">
            <span className="skills-group-title">Design and Research</span>
            <ul className="skills-list">
              <li>UX design, user research, workflow mapping, and design systems for enterprise software</li>
              <li>Industrial design, CAD, prototyping, and materials knowledge across textiles, soft goods, and hard goods</li>
            </ul>
          </div>

          <div className="skills-group">
            <span className="skills-group-title">Business and Operations</span>
            <ul className="skills-list">
              <li>P&amp;L ownership, DTC e-commerce, brand building, and founder-to-exit experience</li>
              <li>Cross-functional product leadership and stakeholder alignment without direct authority</li>
            </ul>
          </div>

        </div>
      </section>

      <section className="about-headshot">
        <div className="about-section-header">
          <span className="section-num">02</span>
          <h2>Photo</h2>
        </div>
        {/* Replace the div below with: <img src="/images/jed-headshot.jpg" className="headshot-photo" alt="Jed Crystal" /> */}
        <div className="headshot-placeholder" role="img" aria-label="Headshot placeholder">
          <span className="headshot-placeholder-label">Add Photo</span>
          <span className="headshot-placeholder-desc">Portrait — head and shoulders, neutral or contextual background. File: jed-headshot.jpg (240×300px minimum, portrait crop)</span>
        </div>
      </section>

      <section className="about-links">
        <Link to="/contact" className="about-cta">Get In Touch</Link>
        <a
          href="https://www.linkedin.com/in/jedcrystal/"
          target="_blank"
          rel="noopener noreferrer"
          className="about-cta about-cta--secondary"
        >
          LinkedIn
        </a>
      </section>

    </div>
  )
}

export default About
