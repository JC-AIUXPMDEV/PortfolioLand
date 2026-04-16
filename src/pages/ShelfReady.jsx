import { Link } from 'react-router-dom'
import './ProjectDetail.css'

function ShelfReady() {
  return (
    <div className="container">
      <div className="project-detail">

        <Link to="/work" className="back-link">← Back to Work</Link>

        <header className="project-detail-header">
          <span className="category-tag">Framework · Work in Progress</span>
          <h1>Shelf Ready — Physical Product&nbsp;Framework</h1>
          <p className="project-framing">A brief-centered operating system for solo PMs and small teams — where decisions are logged daily, Claude analyzes them against the master brief, and nothing reaches the factory floor without the owner confirming it&nbsp;first.</p>
        </header>

        {/* Prominent WIP banner — required per spec */}
        <div className="wip-banner" role="note" aria-label="Work in progress">
          This framework is actively in development. Structure and content will evolve.
        </div>

        <div className="project-body">

          <section className="project-section">
            <h2>The Problem This Solves</h2>
            <p>Large companies have enterprise PLM systems, dedicated operations staff, and formal change management infrastructure. That infrastructure exists because the problem is real: physical product development generates an enormous volume of decisions — factory calls, sample reviews, vendor negotiations, leadership directives — and keeping a single source of truth current across all of it is genuinely hard.</p>
            <p>Solo PMs and small teams don't have that. They have a Word doc brief, a shared folder of images, and one person manually consolidating emails, calls, and Slack threads into something that resembles a specification.</p>
            <p>The failure mode isn't that the brief starts wrong. It's that it quietly stops being true. A decision made on a Monday factory call doesn't make it into the document. A material change agreed over email becomes tribal knowledge. Three gates later, the factory is building to a specification the team quietly walked away from — without anyone writing it down.</p>
            <p>The conflict surfaces at pre-production review. Not at Gate 01, where it was a conversation. At Gate 03, where it's a timeline, a cost, and a production commitment you can't easily undo.</p>
          </section>

          <section className="project-section">
            <h2>The Origin</h2>
            <p>Shelf Ready is an adaptation of Zero Vector Design — a doctrine-first operating system for building software with AI agents, created by Erika Flowers. In Zero Vector, the product brief is the single source of authority. Every decision flows through it. Nothing exists outside it.</p>
            <p>The adaptation question was whether the same principles hold for physical products. They do — and in some ways the stakes are higher. A misaligned brief in software costs a sprint. In physical product development, it can cost a factory run.</p>
            <p>What changed in the adaptation: the artifacts, the pipeline (six stage gates from concept to launch), the constraint framework (cost of goods, minimum order quantity, lead time, compliance requirements). What didn't change: the brief is still the core artifact. If it's not in the brief, it didn't happen.</p>
          </section>

          <section className="project-section">
            <h2>The Framework</h2>
            <p>Shelf Ready is organized around five doctrine files, each with a specific role. The product brief is the equivalent of a codebase's main file — the document everything refers back to, and the record of every decision the product has required.</p>
            <p>Six stage gates structure the pipeline from Consumer Insight through Launch, each with explicit GO/NO-GO criteria. The constraint framework — MSRP target, cost of goods, margin floor, MOQ, lead time — is set at Gate 00 and carried through to production, so every downstream decision is evaluated against the same set of numbers from the start.</p>
            <p>The system is built for one person or a small team running the full pipeline. Not a simplified version of enterprise tooling — a different architecture designed for a different scale.</p>

            {/* Replace with: <figure className="project-image"><img src="/images/shelfready-files.jpg" alt="Five Shelf Ready doctrine files — PRODUCT.md, PROCESS.md, BRIEF.md, SYSTEM.md, SPRINT.md" /><figcaption>The five doctrine files and their roles in the system.</figcaption></figure> */}
            <figure className="project-image" aria-label="Doctrine files screenshot placeholder">
              <div className="project-image-placeholder">
                <span className="project-image-placeholder-label">Add Screenshot</span>
                <p className="project-image-placeholder-desc">The five doctrine files in the project folder — PRODUCT.md, PROCESS.md, BRIEF.md, SYSTEM.md, SPRINT.md — with a one-line description of each role. File: shelfready-files.jpg</p>
              </div>
              <figcaption>The five doctrine files and their roles. Add: shelfready-files.jpg</figcaption>
            </figure>

            {/* Replace with: <figure className="project-image"><img src="/images/shelfready-brief.jpg" alt="Shelf Ready brief template showing the constraint framework table with MSRP, COG, MOQ, lead time rows" /><figcaption>The brief template — constraint framework set at Gate 00.</figcaption></figure> */}
            <figure className="project-image" aria-label="Brief template screenshot placeholder">
              <div className="project-image-placeholder">
                <span className="project-image-placeholder-label">Add Screenshot</span>
                <p className="project-image-placeholder-desc">The brief template open, showing the constraint framework table with MSRP, COG, MOQ, lead time rows. File: shelfready-brief.jpg</p>
              </div>
              <figcaption>The brief template — constraint framework. Add: shelfready-brief.jpg</figcaption>
            </figure>

            {/* Replace with: <figure className="project-image"><img src="/images/shelfready-pipeline.jpg" alt="Six stage gates from Consumer Insight to Launch — Shelf Ready pipeline diagram" /><figcaption>The six-stage pipeline — Consumer Insight through Launch.</figcaption></figure> */}
            <figure className="project-image" aria-label="Pipeline diagram placeholder">
              <div className="project-image-placeholder">
                <span className="project-image-placeholder-label">Add Diagram</span>
                <p className="project-image-placeholder-desc">Pipeline diagram — Figjam-style workflow of the six stage gates from Consumer Insight to Launch, showing the brief at the center of every gate decision. To be designed separately. File: shelfready-pipeline.jpg</p>
              </div>
              <figcaption>Six-stage pipeline — Consumer Insight to Launch. Add: shelfready-pipeline.jpg</figcaption>
            </figure>
          </section>

          <section className="project-section">
            <h2>The AI Layer — What Makes This Different</h2>
            <p>Claude's role in a Shelf Ready project is narrow and specific: keep the brief honest. Not a co-designer, not a search tool, not a documentation assistant. An active analyst with a single mandate.</p>
            <p>The daily ritual is designed for zero friction. After any meeting, call, or decision, the PM drops notes in any format — a voice memo transcript, a pasted email, bullet points from memory. Claude structures the input, saves it as a dated log entry, then immediately reads it against the current brief.</p>
            <p>This is where the system does its most important work. Claude isn't filing the note — it's comparing every new piece of information against the master document and asking whether anything has changed. Not at a scheduled weekly review. The same day.</p>

            {/* Replace with: <figure className="project-image"><img src="/images/shelfready-log.jpg" alt="Raw meeting notes dropped into a Cowork session — Claude structuring the log and flagging a conflict with the brief" /><figcaption>Raw notes in, structured log out — with conflicts flagged immediately.</figcaption></figure> */}
            <figure className="project-image" aria-label="Log and conflict detection screenshot placeholder">
              <div className="project-image-placeholder">
                <span className="project-image-placeholder-label">Add Screenshot</span>
                <p className="project-image-placeholder-desc">Raw meeting notes dropped into a Cowork session — showing Claude structuring the log and immediately flagging a conflict with the brief in plain language. File: shelfready-log.jpg</p>
              </div>
              <figcaption>Notes in, conflicts flagged immediately. Add: shelfready-log.jpg</figcaption>
            </figure>

            <p>What surfaces are three categories of issue: direct conflicts (a lead time that contradicts what the brief says), unrecorded decisions (a material change agreed in a meeting that never made it into the document), and drift signals (a pattern across recent logs suggesting the product direction has shifted without anyone updating the brief). These are things a busy PM may not catch in the moment — the AI reads across everything and surfaces what the human might have missed.</p>
            <p>Critically, Claude never assumes. Each potential update triggers a specific question — the brief currently says this, the notes suggest that, should this change? — and waits for an explicit answer before touching anything. A series of targeted questions, one at a time, until every flag is resolved or deferred. Nothing is rewritten until the owner confirms it.</p>

            {/* Replace with: <figure className="project-image"><img src="/images/shelfready-confirm.jpg" alt="Claude asking a confirmation question in conversational format — one-item-at-a-time approach before any brief update" /><figcaption>Confirmation before any change — one question at a time.</figcaption></figure> */}
            <figure className="project-image" aria-label="Confirmation flow screenshot placeholder">
              <div className="project-image-placeholder">
                <span className="project-image-placeholder-label">Add Screenshot</span>
                <p className="project-image-placeholder-desc">Claude asking a confirmation question in conversational format — showing the one-item-at-a-time approach before any brief update. File: shelfready-confirm.jpg</p>
              </div>
              <figcaption>One question at a time — nothing updated without confirmation. Add: shelfready-confirm.jpg</figcaption>
            </figure>

            {/* Replace with: <figure className="project-image"><img src="/images/shelfready-changelog.jpg" alt="Brief change log showing versioned updates — each with date, owner, description, and the log entry that triggered it" /><figcaption>Every change versioned — date, owner, and what triggered it.</figcaption></figure> */}
            <figure className="project-image" aria-label="Changelog screenshot placeholder">
              <div className="project-image-placeholder">
                <span className="project-image-placeholder-label">Add Screenshot</span>
                <p className="project-image-placeholder-desc">The brief change log showing versioned updates — each with a date, owner, description of what changed, and the log entry that triggered it. File: shelfready-changelog.jpg</p>
              </div>
              <figcaption>Every change versioned and traceable. Add: shelfready-changelog.jpg</figcaption>
            </figure>

            <p>Every change is versioned and logged. The brief reflects the current state of decisions — not the original state of aspirations, and not a version someone on the team quietly edited without telling anyone.</p>
          </section>

          <section className="project-section">
            <h2>Current Status</h2>
            <p>The framework is complete across five doctrine files and has been tested against a physical product development scenario. An interactive companion site provides an overview of the system, its principles, and the stage-gate pipeline.</p>
            <p>The next phase includes a visual workflow diagram, a demo walkthrough, and open-source publication with category adaptation guides for footwear, consumer hardware, and food products.</p>
          </section>

        </div>

        <p className="project-credit">Shelf Ready is an adaptation of Zero Vector Design by Erika Flowers. open.zerovector.design</p>

      </div>
    </div>
  )
}

export default ShelfReady
