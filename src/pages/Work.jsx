import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Work.css'

const projects = [
  {
    name: 'Physical + Digital Product Development',
    category: 'Crystal Design Studio · SolidWorks',
    slug: 'physical-digital',
    description: 'Eighteen years designing physical products from concept to factory floor across soft goods, accessories, and consumer goods — plus four years designing professional tooling for SolidWorks, one of the world\'s leading CAD platforms. Two disciplines, the same through-line.',
    wip: false
  },
  {
    name: 'Ministry of Supply — Sensory Gap Strategy',
    category: 'Product Strategy',
    slug: 'ministry-of-supply',
    // [PROJECT DESCRIPTION PLACEHOLDER — 2–3 sentences]
    description: '[PROJECT DESCRIPTION PLACEHOLDER — How physical products get sold through digital screens, and what gets lost in translation. 2–3 sentences describing the strategic exercise and its core insight.]',
    wip: false
  },
  {
    name: 'Hepper — From Zero to Exit',
    category: 'Founder Case Study',
    slug: 'hepper',
    // [PROJECT DESCRIPTION PLACEHOLDER — 2–3 sentences]
    description: '[PROJECT DESCRIPTION PLACEHOLDER — 13 years building and selling a consumer products brand. 2–3 sentences covering the scope: founding, scaling, and exit.]',
    wip: false
  },
  {
    name: 'Wyss Institute — Wearable Robotics',
    category: 'Physical Product Development',
    slug: 'wyss-institute',
    // [PROJECT DESCRIPTION PLACEHOLDER — 2–3 sentences]
    description: '[PROJECT DESCRIPTION PLACEHOLDER — Designing for the body at the intersection of textile and technology. 2–3 sentences on the research context and design challenges.]',
    wip: false
  },
  {
    name: 'Shelf Ready — Physical Product Framework',
    category: 'Framework — Work in Progress',
    slug: 'shelf-ready',
    // [PROJECT DESCRIPTION PLACEHOLDER — 2–3 sentences]
    description: '[PROJECT DESCRIPTION PLACEHOLDER — A brief-centered operating system for physical product development. 2–3 sentences on what the framework solves and who it\'s for.]',
    wip: true
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
        {/* [INTRO SENTENCE PLACEHOLDER] */}
        <p className="work-intro">[INTRO SENTENCE PLACEHOLDER — one line framing what this work represents]</p>
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
