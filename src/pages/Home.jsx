import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const whatIBring = [
  {
    title: 'Physical Product Design and Development',
    description: 'End-to-end physical product design and development across soft goods, wearables, accessories, and furniture — from brief through prototyping, factory production, and market launch. Fluent in CAD, materials, prototyping, and manufacturing, with the experience to balance design intent, production constraints, cost, and real-world use.',
  },
  {
    title: 'Founder & CEO',
    description: 'Founded and scaled Hepper, a DTC consumer pet products brand — with full P&L ownership, manufacturing across three countries, international retail distribution, and a successful exit. I bring that founder experience into select consulting work with startups, helping shape product, positioning, and go-to-market strategy.',
  },
  {
    title: 'UX & Software Design',
    description: 'Leading UX projects for SolidWorks desktop and cloud applications, with a focus on complex workflows, expert users, and enterprise-scale product development. Experienced in user research, workflow mapping, design systems, and cross-functional collaboration across product, design, engineering, and QA.',
  },
  {
    title: 'Wearable Technology',
    description: 'Designed textile-based wearable robotics at Harvard\'s Wyss Institute, working hands-on with how garments and devices attach, move, and perform on the body. Balanced comfort, biomechanics, fit, and sensor reliability in wearable systems designed for real-world use.',
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

        <p className="hero-sub">I connect product strategy, design, user experience, and development to help teams build products that work in the real world. My background spans soft goods, wearable tech, consumer products, and CAD software — bringing ideas from sketch to shelf and beyond.</p>

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
