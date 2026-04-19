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
        <p>I've spent 20+ years building products from the ground up — physically and digitally. I founded Hepper, a modern consumer pet brand, ran it for 13 years, and negotiated a successful exit. That experience gave me a rare hands-on end to end experience: owning product strategy, design, and the business simultaneously, from zero to&nbsp;exit.</p>

        <p>Before and after Hepper, I've worked at the intersection of physical and digital — designing wearable robotics at Harvard's Wyss Institute, leading UX projects for 3D CAD software at SolidWorks, and consulting for consumer brands from early concept through production. My industrial design background pushes every digital decision through a physical-world lens. My UX background helps me think beyond the object, to how it's worn, used, and connected to the digital ecosystem around&nbsp;it.</p>

        <p>I think best when I'm working across the full product picture: the business rationale, the user experience, and the manufacturing reality, simultaneously rather than&nbsp;sequentially.</p>

        {/* [BIO PARAGRAPH 4 PLACEHOLDER — additional context, voice, or framing] */}
        <p>[BIO PARAGRAPH 4 PLACEHOLDER]</p>
      </section>

      <section className="about-skills">
        <div className="about-section-header">
          <span className="section-num">01</span>
          <h2>Skills &amp; Expertise</h2>
        </div>
        {/* [SKILLS/EXPERTISE LIST PLACEHOLDER] */}
        <ul className="skills-list">
          <li>[SKILL PLACEHOLDER]</li>
          <li>[SKILL PLACEHOLDER]</li>
          <li>[SKILL PLACEHOLDER]</li>
          <li>[SKILL PLACEHOLDER]</li>
          <li>[SKILL PLACEHOLDER]</li>
          <li>[SKILL PLACEHOLDER]</li>
        </ul>
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
