import { Link } from 'react-router-dom'
import './Home.css'

const whatIBring = [
  {
    title: 'Physical + Digital Product Development',
    description: 'End-to-end product development across soft goods, wearables, accessories, and connected devices — from brief through factory production and market launch. Fluent in CAD, prototyping, manufacturing, and the handoff between design intent and what actually gets made.'
  },
  {
    title: 'Founding & Business Ownership',
    description: 'Founded and scaled Hepper, a DTC consumer pet products brand — full P&L ownership, manufacturing across three countries, international retail, and a successful exit. Currently advising early-stage founders on product and go-to-market strategy through Sketch to Shelf.'
  },
  {
    title: 'UX & Software Product Design',
    description: 'Led UX for SolidWorks desktop and cloud applications, designing for professional engineers at scale. Deep fluency in user research, workflow mapping, design systems, and cross-functional product development inside large-company release cycles.'
  },
  {
    title: 'Wearable Technology',
    description: 'Designed textile-based wearable robotics at Harvard\'s Wyss Institute — building hands-on fluency in how garments and devices attach, move, and perform on the body, balancing comfort, biomechanics, and sensor reliability.'
  }
]

function Home() {
  return (
    <div className="container">

      <section className="home-hero">
        {/* [HEADLINE PLACEHOLDER — e.g. "Product Leader | Physical + Digital"] */}
        <h1>[HEADLINE PLACEHOLDER]</h1>
        {/* [POSITIONING STATEMENT PLACEHOLDER — one sentence] */}
        <p className="home-tagline">[POSITIONING STATEMENT PLACEHOLDER]</p>
        <Link to="/work" className="cta-button">See My Work</Link>
      </section>

      <section className="what-i-bring">
        <h2>
          <span className="section-num">01</span>
          What I Bring
        </h2>
        <div className="bring-grid">
          {whatIBring.map((item, index) => (
            <div key={index} className="bring-card">
              <span className="card-num">{String(index + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

export default Home
