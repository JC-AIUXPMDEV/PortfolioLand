import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Work.css'

const projects = [
  {
    name: 'Physical Product Design and Development',
    category: 'Crystal Design Studio',
    slug: 'physical-digital',
    description: 'Eighteen years designing and developing physical products from concept to factory floor — soft goods, accessories, and consumer goods. Founder to factory experience: brief writing, vendor sourcing, overseas manufacturing, and all of the steps of getting an idea from someone\'s head onto a retail shelf.',
    wip: false
  },
  {
    name: 'UX & Software Design',
    category: 'SolidWorks · Dassault Systèmes',
    slug: 'solidworks',
    description: 'Currently working as a User Experience Design Manager for SolidWorks — one of the world\'s leading 3D CAD platforms. Designing for professional engineers at scale: feature discovery, cloud migration flows, and contextual guidance systems inside large company release cycles.',
    wip: false
  },
  {
    name: 'Product Strategy',
    category: 'Ministry of Supply — Sensory Gap Strategy',
    slug: 'ministry-of-supply',
    description: 'Performance apparel brands spend years engineering how a fabric feels. Then they sell it with a photograph. A strategic framework for closing the gap between physical product experience and digital product representation — and the business case for doing it now.',
    wip: false
  },
  {
    name: 'Founder Case Study — From Zero to Exit',
    category: 'Hepper',
    slug: 'hepper',
    description: 'Thirteen years founding, building, and exiting a DTC consumer products brand — full P&L ownership, manufacturing across three countries, international retail distribution, and a negotiated acquisition. A complete founder case study from first product to exit.',
    wip: false
  },
  {
    name: 'Physical Product Development — Wearable Robotics',
    category: 'Wyss Institute at Harvard University',
    slug: 'wyss-institute',
    description: 'Designing a wearable exosuit for industrial workers at the intersection of textile, technology, and the human body — where the engineering challenge is real, and the design constraint is that a factory worker needs to put it on and wear it for eight hours.',
    wip: false
  },
  {
    name: 'Shelf Ready',
    category: 'Physical Product Framework — Work in Progress',
    slug: 'shelf-ready',
    description: 'Most physical product teams run on a Word doc brief, a shared folder, and one person manually consolidating decisions from calls, emails, and Slack. Shelf Ready is a brief-centered operating system for solo PMs and small teams — adapted from Erika Flowers\' Zero Vector methodology — where decisions are logged daily, analyzed by Claude against the master brief, and nothing reaches the factory floor without the owner confirming it first.',
    wip: false
  }
]

function Work() {
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
      { threshold: 0.1 }
    )
    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="container">

      <section className="work-header">
        <h1>Selected Work</h1>
        <p className="work-intro">Selected work across physical products, software, brand building, and a framework built to connect them.</p>
      </section>

      <section className="work-list">
        {projects.map((project, index) => (
          <article
            key={project.slug}
            className={`project-card project-card--${index + 1}`}
            data-reveal
          >
            <div className="project-card-header">
              <span className="category-tag">{project.category}</span>
              {project.wip && <span className="wip-badge">Work in Progress</span>}
            </div>
            <h2 className="project-name">{project.name}</h2>
            <p className="project-description">{project.description}</p>
            {!project.wip && (
              <Link
                to={`/work/${project.slug}`}
                className="project-link"
              >
                View Project
                <span className="project-link-arrow" aria-hidden="true">→</span>
              </Link>
            )}
          </article>
        ))}
      </section>

    </div>
  )
}

export default Work
