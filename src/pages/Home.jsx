import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const whatIBring = [
  {
    title: 'Physical Product Design and Development',
    description: 'End-to-end product design and development across soft goods, wearables, accessories, and furniture — from brief through factory production and market launch. Fluent in CAD, prototyping, manufacturing — with hard-won knowledge of what survives a factory floor and what doesn\'t.',
  },
  {
    title: 'Founder & CEO',
    description: 'Founded and scaled Hepper, a DTC consumer pet products brand — full P&L ownership, manufacturing across three countries, international retail, and a successful exit. Currently advising early-stage founders on product and go-to-market strategy through Sketch to Shelf.',
  },
  {
    title: 'UX & Software Design',
    description: 'Leading UX projects for SolidWorks desktop and cloud applications, designing for professional engineers at scale. Experience in user research, workflow mapping, design systems, and cross-functional collaboration inside enterprise scale release cycles.',
  },
  {
    title: 'Wearable Technology',
    description: 'Designed textile based wearable robotics at Harvard\'s Wyss Institute — building hands-on experience in how garments and devices attach, move, and perform on the body; balancing comfort, biomechanics, and sensor reliability.',
  }
]

function Home() {
  useEffect(() => {
    const items = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="container">

      <section className="home-hero">
        <h1 className="hero-headline">from sketch to shelf</h1>

        <p className="hero-sub">20 years in physical product design and development; bringing soft goods, wearables, and consumer products from sketch to shelf. Currently working at the intersection of hardware, software, and the human experience between&nbsp;them.</p>

        <Link to="/work" className="cta-button">
          See My Work
          <span className="cta-arrow" aria-hidden="true">→</span>
        </Link>
      </section>

      <section className="what-i-bring">
        <div className="section-header">
          <span className="section-num">01</span>
          <h2>What I Bring</h2>
        </div>

        <div className="bring-list">
          {whatIBring.map((item, index) => (
            <div
              key={index}
              className={`bring-item bring-item--${index + 1}`}
              data-reveal
            >
              <span className="bring-num">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="bring-title">{item.title}</h3>
              <p className="bring-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

export default Home
