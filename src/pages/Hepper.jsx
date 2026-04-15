import { Link } from 'react-router-dom'
import './ProjectDetail.css'

function Hepper() {
  return (
    <div className="container">
      <div className="project-detail">

        <Link to="/work" className="back-link">← Back to Work</Link>

        <header className="project-detail-header">
          <span className="category-tag">Founder Case Study · Physical Product Development · DTC Brand</span>
          <h1>Hepper — From Zero to&nbsp;Exit</h1>
          <p className="project-framing">A 13-year case study in consumer product development, brand building, and strategic&nbsp;exit.</p>
        </header>

        <div className="project-body">

          <section className="project-section">
            <h2>The Opportunity</h2>
            <p>In the mid-2000s, I was a physical product designer with a growing collection of modern furniture in my home — and a house full of cats. The problem was obvious to anyone with both: the pet product industry had nothing worth buying if you cared about design.</p>
            <p>I didn't act on that frustration immediately. Instead, I spent time walking pet industry trade shows — both as an attendee and working booths alongside friends who owned existing pet brands. What I found confirmed the personal observation at a market level: the entire category was dominated by big-box brands knocking each other off, with no meaningful innovation in design or function. The buyers at these shows skewed toward exactly the demographic I knew — design-conscious, modern-living pet owners in their 30s and 40s who spent real money on their homes but had zero options for their pets that didn't look like an eyesore.</p>
            <p>That gap between what the market offered and what a clear consumer segment wanted was the founding insight. Not a hunch — a thesis validated by primary research before a single product was&nbsp;designed.</p>
          </section>

          {/* ── Hero product image ── */}
          {/* Replace with: <figure className="project-image"><img src="/images/hepper-hero.jpg" alt="Hepper Pod Bed — the flagship product that launched the brand in 2007, designed around observed cat behavioral needs" /><figcaption>The Hepper Pod Bed — the signature product of the brand for its entire life.</figcaption></figure> */}
          <figure className="project-image" aria-label="Product image placeholder">
            <div className="project-image-placeholder">
              <span className="project-image-placeholder-label">Add Photo</span>
              <p className="project-image-placeholder-desc">Hero product shot — the Pod Bed in a modern home setting. Lifestyle or studio, clean background. This is the image that anchors the whole case study. File: hepper-hero.jpg</p>
            </div>
            <figcaption>The Hepper Pod Bed — the signature product. Add: hepper-hero.jpg</figcaption>
          </figure>

          <section className="project-section">
            <h2>Building the Line</h2>
            <p>The first product was the Pod Bed — a cat bed with a roof, elevated off the ground. The design came directly from observed cat behavior: cats seek small, enclosed, elevated spaces because it makes them feel safe and gives them a vantage point over the room. The Pod translated that behavioral need into a piece of furniture that looked at home next to an Eames chair.</p>
            <p>From there, I built out the line methodically, always starting from the same question: what functional problem does this product solve that nothing on the market solves well?</p>
            <p>The NomNom Bowl came from a specific pet health insight — whisker fatigue, a real and common issue where cats are stressed by their whiskers touching the sides of a narrow bowl. The NomNom's wide, shallow design eliminated the trigger. It also had a raised lip to catch food debris and keep floors clean — a pet owner problem, not just a pet problem. The product solved for both simultaneously.</p>
            <p>The Hi-Lo Scratcher came from a different observation: cardboard scratchers wear out unevenly because cats tend to use only one section. The Hi-Lo could be repositioned into multiple configurations, distributing wear across the surface and dramatically extending product life.</p>
            <p>Every product went through the same validation cycle: prototype at home with my own cats, test with friends' pets for broader behavioral feedback, run small focus groups with local pet owners on design and usability. Products that didn't generate genuine excitement got cut. One modular scratcher concept I developed got killed mid-development when manufacturing costs made viable margin impossible — an early lesson in building business feasibility into the design process from the start, not as an&nbsp;afterthought.</p>
          </section>

          {/* ── Product detail image ── */}
          {/* Replace with: <figure className="project-image"><img src="/images/hepper-detail.jpg" alt="Hepper product detail — material, finish, or production shot" /><figcaption>Product detail — material and craft.</figcaption></figure> */}
          <figure className="project-image" aria-label="Product detail image placeholder">
            <div className="project-image-placeholder">
              <span className="project-image-placeholder-label">Add Photo</span>
              <p className="project-image-placeholder-desc">Product detail or line overview — NomNom Bowl, Hi-Lo Scratcher, or a close-up showing material quality and finish. Proves the craft behind the design decisions. File: hepper-detail.jpg</p>
            </div>
            <figcaption>The product line — NomNom Bowl, Hi-Lo Scratcher. Add: hepper-detail.jpg</figcaption>
          </figure>

          <section className="project-section">
            <h2>From Brief to Factory</h2>
            <p>Manufacturing a physical product is a communication problem as much as a design problem. I sourced and managed production across three countries — each with different languages, different manufacturing cultures, different standards for what "correct" means, and different ways of interpreting a design brief.</p>
            <p>Early on I learned that a beautiful rendering means nothing if the person reading it in a factory in another country interprets a single dimension differently. I developed a documentation practice built around precision and redundancy: detailed SOPs, annotated technical drawings, physical samples at every stage, and explicit sign-off checkpoints before production began. I learned to write briefs that left no room for interpretation — and when language was a barrier, to communicate through drawings, samples, and side-by-side comparisons.</p>
            <p>Managing remote freelancers, US vendors, and overseas factories simultaneously also meant understanding that each audience needs information packaged differently. What a factory floor manager needs to execute is not the same document a marketing freelancer needs to write copy. Getting that translation right — consistently, across every project — is what kept quality consistent across a bootstrapped, one-person&nbsp;operation.</p>
          </section>

          <section className="project-section">
            <h2>Judgment Under Pressure</h2>
            <p>Late in one product cycle, I was waiting on a holiday shipment of beds when the production sample arrived for final review. I spotted an immediately obvious flaw — a section of trim that had been mis-stitched. To my eye, trained to see exactly these kinds of defects, it was glaring. I was genuinely worried it would tank customer satisfaction and trigger a wave of returns — costly for any business, devastating for a bootstrapped one with thin margins.</p>
            <p>I called the factory. Explained the problem. Pushed hard for a fix. The answer was simple and non-negotiable: fix it and wait four to five months, or ship it and make holiday sales.</p>
            <p>I shipped it. And then immediately built a contingency plan — a full returns and rebate system, ready to deploy if customers noticed. They didn't. Not one complaint. Not one return related to the defect.</p>
            <p>The lesson wasn't that quality doesn't matter. It's that the designer's eye and the customer's eye are not the same thing, and that knowing the difference — and being able to act on that difference under real business pressure — is what separates product leaders from product perfectionists. I still think about that shipment every time I'm tempted to hold something back for one more round of&nbsp;refinement.</p>
          </section>

          <section className="project-section">
            <h2>The Exit</h2>
            <p>I explored selling Hepper more than once before the Pangolia deal came together. Two earlier conversations went deep into due diligence and didn't close — one because the margins and operational complexity didn't match the buyer's expectations, one because I chose to walk away at the 11th hour when it became clear the structure would leave me in a partnership I didn't want rather than a clean exit.</p>
            <p>That second walkaway was hard. But it was the right call, and it shaped how I approached the eventual sale.</p>
            <p>The Pangolia connection came through a shared entrepreneur group. Their founder was building a media company around pet content and wanted to add a physical product brand to the portfolio. The fit was immediately obvious — he understood the pet market deeply, was genuinely passionate about the brand, and had the operational infrastructure to take it further than I could as a solo operator.</p>
            <p>The negotiation was structured and straightforward. I identified and valued the tangible assets: IP, inventory, web assets, email list, factory relationships. Some line items came in below my initial expectations, but the inventory buyout addressed my most significant liability. More importantly, the trust built during the process led to a post-acquisition consulting arrangement — I continued designing new products for the brand under my original creative direction. That outcome doesn't happen without mutual respect on both sides of the table.</p>
            <p>Thirteen years of work. A clean exit. A brand still operating and growing&nbsp;today.</p>
          </section>

          <section className="project-section">
            <h2>What This Built</h2>
            <p><strong>Full ownership sharpens every decision.</strong> When your personal savings and monthly rent are the direct consequence of every product and business decision, there is no such thing as a low-stakes call. That experience permanently recalibrated how I evaluate risk, prioritize investment, and take responsibility for outcomes. I don't need external accountability structures to operate with urgency — I've internalized it.</p>
            <p><strong>Cross-cultural supply chain management is a communication discipline.</strong> Managing factories across three countries, vendors across time zones, and remote teams across languages taught me that the quality of a final product is directly proportional to the quality of the brief that initiated it. I learned to write documentation that survives translation — literally and figuratively — and to adapt how I communicate in real time based on what each audience can hear, see, and act on.</p>
            <p><strong>Micro and macro have to work together.</strong> I am a detail-oriented person by training and temperament. But 13 years of running a business taught me that detail work without strategic context is just noise. Every decision I make now starts with the same question: what is the high-level business or customer goal this feeds into? Once I understand that, I can make detail decisions with confidence — because I know what I'm optimizing&nbsp;for.</p>
          </section>

        </div>

        <p className="project-credit">Hepper was acquired by Pangolia Pte. Ltd. in 2021. The brand continues to operate at hepper.com.</p>

      </div>
    </div>
  )
}

export default Hepper
