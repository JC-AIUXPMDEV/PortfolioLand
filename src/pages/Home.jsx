import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const whatIBring = [
  {
    title: 'Physical + Digital Product Development',
    description: 'End-to-end product development across soft goods, wearables, accessories, and connected devices — from brief through factory production and market launch. Fluent in CAD, prototyping, manufacturing, and the handoff between design intent and what actually gets made.',
    link: '/work/physical-digital'
  },
  {
    title: 'Founding & Business Ownership',
    description: 'Founded and scaled Hepper, a DTC consumer pet products brand — full P&L ownership, manufacturing across three countries, international retail, and a successful exit. Currently advising early-stage founders on product and go-to-market strategy through Sketch to Shelf.',
    link: '/work/hepper'
  },
  {
    title: 'UX & Software Product Design',
    description: 'Led UX for SolidWorks desktop and cloud applications, designing for professional engineers at scale. Deep fluency in user research, workflow mapping, design systems, and cross-functional product development inside large-company release cycles.',
    link: '/work/ministry-of-supply'
  },
  {
    title: 'Wearable Technology',
    description: 'Designed textile-based wearable robotics at Harvard\'s Wyss Institute — building hands-on fluency in how garments and devices attach, move, and perform on the body, balancing comfort, biomechanics, and sensor reliability.',
    link: '/work/wyss-institute'
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
        <h1 className="hero-headline">From brief to built.</h1>

        <p className="hero-sub">Product and UX designer with 20 years at the physical&#8209;digital intersection — soft goods, wearables, software, and consumer brands shipped at&nbsp;scale.</p>

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
            <Link
              key={index}
              to={item.link}
              className={`bring-item bring-item--${index + 1}`}
              data-reveal
            >
              <span className="bring-num">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="bring-title">{item.title}</h3>
              <p className="bring-desc">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>

    </div>
  )
}

export default Home
