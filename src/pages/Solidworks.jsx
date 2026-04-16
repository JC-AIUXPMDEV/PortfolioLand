import { Link } from 'react-router-dom'
import './ProjectDetail.css'

function Solidworks() {
  return (
    <div className="container">
      <div className="project-detail">

        <Link to="/work" className="back-link">← Back to Work</Link>

        <header className="project-detail-header">
          <span className="category-tag">UX Design · Professional Software · Dassault Systèmes</span>
          <h1>SolidWorks — UX&nbsp;Design</h1>
          <p className="project-framing">Designing for professional engineers at the intersection of complexity and&nbsp;simplicity.</p>
        </header>

        <div className="project-body">

          {/* ── UI image ── */}
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

        </div>

        <p className="project-credit">SolidWorks is a product of Dassault Systèmes. Role: User Experience Design Manager, July 2022 – Present.</p>

      </div>
    </div>
  )
}

export default Solidworks
