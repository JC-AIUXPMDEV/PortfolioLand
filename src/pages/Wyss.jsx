import { Link } from 'react-router-dom'
import './ProjectDetail.css'

function Wyss() {
  return (
    <div className="container">
      <div className="project-detail">

        <Link to="/work" className="back-link">← Back to Work</Link>

        <header className="project-detail-header">
          <span className="category-tag">Wearable Technology · Physical Product Development · Human Performance</span>
          <h1>Wyss Institute — Shoulder Assist&nbsp;Device</h1>
          <p className="project-framing">Designing a wearable exosuit for human performance at the intersection of textile, technology, and the human&nbsp;body.</p>
        </header>

        <div className="project-body">

          <section className="project-section">
            <h2>The Project</h2>
            <p>In early 2019 I joined a wearable robotics project at the Wyss Institute for Biologically Inspired Engineering at Harvard — one of the world's leading environments for bioinspired technology. The project had a specific industrial mandate: develop a shoulder assist device, funded by TATA, for use on automotive assembly lines. The goal was human performance — reducing the repetitive motion injuries that factory workers sustain from sustained overhead and shoulder-intensive tasks.</p>
            <p>The core technology was already in place: an inflatable air actuator, essentially an artificial muscle, that offloaded strain from the shoulder joint during lifting. What wasn't solved was how to make it wearable — how to take a working research prototype and turn it into something a real worker would actually put on and use for an eight-hour shift. That was the problem I was hired to&nbsp;close.</p>
          </section>

          <section className="project-section">
            <h2>The Design Problem</h2>
            <p>The fundamental challenge of any wearable assistive device is a physics problem: human bodies are soft on the outside and hard on the inside. Force-generating systems need something to push against, and when you try to transfer mechanical force through soft tissue, you lose efficiency, create pressure points, and often cause the very discomfort you were trying to prevent.</p>
            <p>The existing prototype addressed this through brute force: an extremely tight compression undergarment with rigid straps that cinched the actuator to the body, concealed by an outer shirt styled like a factory uniform. The concept had merit as a product direction.</p>
            <p>But the mounting points weren't stable enough to transfer force effectively, the garment was uncomfortable to wear for any extended period, and the system hadn't resolved the fundamental tension between what the engineering required and what a body would actually&nbsp;tolerate.</p>
          </section>

          {/* ── Exosuit concept / prototype image ── */}
          {/* Replace with: <figure className="project-image"><img src="/images/wyss-exosuit.jpg" alt="Soft robotic exosuit prototype — textile actuators and attachment system worn on the body at the Wyss Institute" /><figcaption>Soft exosuit prototype. Wyss Institute, Harvard University.</figcaption></figure> */}
          <figure className="project-image" aria-label="Exosuit prototype image placeholder">
            <div className="project-image-placeholder">
              <span className="project-image-placeholder-label">Add Photo</span>
              <p className="project-image-placeholder-desc">Prototype or lab photo — the exosuit worn on a body, a detail of the textile actuator system, or a bench shot showing components and materials. This is the physical evidence of the work. File: wyss-exosuit.jpg</p>
            </div>
            <figcaption>Soft robotic exosuit prototype. Wyss Institute, Harvard University. Add: wyss-exosuit.jpg</figcaption>
          </figure>

          <section className="project-section">
            <h2>Navigating Two Definitions of Success</h2>
            <p>Working at a research institution on an industry-funded project means operating with two distinct definitions of success running simultaneously — and they don't always point in the same direction.</p>
            <p>TATA needed a device workers could actually use: wearable, durable, easy to don and doff, compatible with existing PPE. The research environment had its own metrics — publishable results, demonstrable technical innovation, visuals compelling enough to attract future funding. A photogenic prototype that performed well in a motion lab served those goals, even if it wasn't ready for a factory floor.</p>
            <p>My job was to ride the line between both — pushing toward genuine product viability while working within the institution's constraints. That meant learning to communicate with research engineers in their language, advocating consistently for the end user, and knowing when to push hard for a product-minded decision and when to work within the research&nbsp;frame.</p>
          </section>

          <section className="project-section">
            <h2>The Body as a Design Surface</h2>
            <p>The most important work I did was rethinking where and how the device attached to the body — treating the human body as a design surface with specific structural properties, load-bearing zones, and comfort thresholds.</p>
            <p>The key insight: skeletal structure is your friend. The hip bone, the shoulder girdle, the clavicle — these are places where a wearable device can anchor meaningfully without compressing soft tissue. Soft tissue areas shift, fatigue, and lose their grip under sustained load. Any mounting point that depends on soft tissue compression will degrade in both effectiveness and comfort over a shift.</p>
            <p>I worked on two parallel tracks. The first was refining the undergarment — introducing non-extensible laminated zones at strategic points to create localized stability without requiring the whole garment to be uncomfortably tight. The goal was something that felt like normal clothing in most areas but gave the actuator precise, stable mounting where it needed it.</p>
            <p>The second track was actuator placement. The most mechanically efficient configuration — a long beam from the hip to the elbow — transferred force well but created what we called the "batwing effect": a visual profile that read as strange, bulky, and distinctly non-consumer.</p>
            <p>The alternative, positioning the actuator in the armpit zone, was less mechanically optimal but dramatically more wearable in appearance and feel.</p>
            <p>That tradeoff — functional efficiency versus psychological acceptance — comes up constantly in wearable consumer products. A device that works perfectly but looks or feels wrong will not get worn. And a device that doesn't get worn helps&nbsp;no&nbsp;one.</p>
          </section>

          {/* ── Body mapping / attachment point image ── */}
          {/* Replace with: <figure className="project-image"><img src="/images/wyss-bodymap.jpg" alt="Body mapping showing skeletal anchor points for wearable force transfer — hip, shoulder girdle, clavicle" /><figcaption>Skeletal anchor points — where wearable devices transfer force without compressing soft tissue.</figcaption></figure> */}
          <figure className="project-image" aria-label="Body mapping image placeholder">
            <div className="project-image-placeholder">
              <span className="project-image-placeholder-label">Add Photo</span>
              <p className="project-image-placeholder-desc">Prototype on body or annotation sketch showing attachment zones — skeletal anchor points versus soft tissue areas. A sketch or diagram works well here. File: wyss-bodymap.jpg</p>
            </div>
            <figcaption>Attachment point mapping — skeletal structure as design constraint. Add: wyss-bodymap.jpg</figcaption>
          </figure>

          <section className="project-section">
            <h2>What This Built</h2>
            <p><strong>Speaking engineering fluently while staying product-focused.</strong> Working embedded in a multidisciplinary research team — roboticists, biomechanical engineers, material scientists — taught me how to communicate across a significant disciplinary gap.</p>
            <p>Research engineers think in terms of technical feasibility and measurable outcomes. Product designers think in terms of user experience and market viability. Both are right. The skill is translating between them: advocating for the end user without dismissing technical constraints, and pushing toward product reality without undermining the research process.</p>
            <p><strong>Understanding the body as a design constraint.</strong> Performance technology that gets worn has to reckon with the human body — a dynamic, soft structure that moves in three dimensions, responds to fatigue, generates heat, and has strong psychological reactions to how things look and feel. Designing wearable products means understanding where the body can bear load, where pressure becomes pain, how garments behave in motion versus at rest, and how a wearer's perception of a device shapes whether they use it at all. That understanding doesn't come from a spec sheet. It comes from making things, putting them on bodies, and paying close&nbsp;attention.</p>
          </section>

        </div>

        <p className="project-credit">The shoulder assist device was developed at the Wyss Institute for Biologically Inspired Engineering at Harvard University in partnership with TATA. 2019–2020.</p>

      </div>
    </div>
  )
}

export default Wyss
