import { Link } from 'react-router-dom'
import './About.css'

function About() {
  return (
    <div className="container">

      <section className="about-header">
        <h1>About Jed</h1>
      </section>

      <section className="about-bio">
        <p>I've spent 20+ years building physical and digital products from the ground&nbsp;up.</p>

        <p>For 13 of those years, I was also growing Hepper, a modern pet brand I founded. I designed the product line, managed manufacturing across three countries, grew the business to 40,000 email subscribers and international retail distribution, and negotiated a successful exit.</p>

        <p>That experience gave me a rare, hands-on view of product building: shaping strategy, designing the experience, navigating manufacturing, and making the tradeoffs required to bring ideas from zero to one and beyond.</p>

        <p>I've also designed wearable robotics at Harvard's Wyss Institute, led UX projects for 3D CAD software at SolidWorks, and consulted with consumer brands from early concept through production.</p>

        <p>My work sits at the intersection of industrial design, UX, and product strategy. I care about how things feel, how they're made, how they hold up, and how they fit into the larger experience around them.</p>

        <p>I'm drawn to consumer brands building where hardware and software meet: wearable tech, health and performance, connected devices, and products where the physical and digital experience have to work as one.</p>

        <p>I help teams build products that make sense as businesses, feel right to users, and hold up in the real world.</p>
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
