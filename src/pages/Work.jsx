import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Work.css'

const projects = [
  {
    name: 'Physical Product Design and Development',
    category: 'Crystal Design Studio',
    slug: 'physical-digital',
    description: 'Physical product design and development across soft goods, accessories, and consumer goods — from early concept through prototyping, vendor sourcing, overseas manufacturing, factory production, and retail launch. Founder-to-factory experience turning product ideas into buildable, market-ready goods.',
    wip: false
  },
  {
    name: 'UX & Software Design',
    category: 'SolidWorks · Dassault Systèmes',
    slug: 'solidworks',
    description: 'Leading UX projects for SolidWorks, one of the world\'s leading 3D CAD platforms. Designing complex workflows for professional engineers at scale, including feature discovery, cloud migration flows, and contextual guidance systems within enterprise software release cycles.',
    wip: false
  },
  {
    name: 'Product Strategy',
    category: 'Ministry of Supply — Sensory Gap Strategy',
    slug: 'ministry-of-supply',
    description: 'Performance apparel brands spend years engineering how a fabric feels — then sell it with a photograph. A speculative strategy case study on closing the sensory gap between physical product experience and digital representation, with a business case for why apparel brands should solve it now.',
    wip: false
  },
  {
    name: 'Founder Case Study — From Zero to Exit',
    category: 'Hepper',
    slug: 'hepper',
    description: 'Built Hepper from first product concept to successful exit: a DTC consumer pet products brand with full P&L ownership, manufacturing across three countries, and international retail distribution. A founder case study on building a brand, product line, supply chain, and business from zero.',
    wip: false
  },
  {
    name: 'Physical Product Development — Wearable Robotics',
    category: 'Wyss Institute at Harvard University',
    slug: 'wyss-institute',
    description: 'Designing textile-based wearable robotics for industrial workers at the intersection of soft goods, technology, and the human body — where the engineering challenge is complex, and the design constraint is simple: it has to be comfortable, usable, and wearable for a full shift.',
    wip: false
  },
  {
    name: 'Shelf Ready',
    category: 'Physical Product Framework — Work in Progress',
    slug: 'shelf-ready',
    description: 'Most physical product teams run on a Word doc brief, a shared folder, and one person manually consolidating decisions from calls, emails, and Slack. Shelf Ready is a brief-centered operating system for solo PMs and small product teams — turning scattered inputs into a living source of truth for product decisions, development tradeoffs, and factory-ready handoff.',
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
