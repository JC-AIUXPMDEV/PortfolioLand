import './App.css'

function App() {
  const experienceCategories = [
    {
      title: 'UX Design',
      description: 'Desktop and cloud software, onboarding, workflow mapping, Figma prototyping, design systems'
    },
    {
      title: 'Physical Product Design',
      description: 'Soft goods, wearables, furniture, footwear, CAD, prototyping, factory production, and ongoing product design consulting for small businesses'
    },
    {
      title: 'Founder & Entrepreneur',
      description: 'Built and sold Hepper.com, currently building Sketch to Shelf'
    },
    {
      title: 'UX Research',
      description: 'Usability testing, conversion optimization, user interviews, ecommerce friction analysis'
    },
    {
      title: 'AI & Exploratory Builds',
      description: 'Building exploratory apps and services with Claude, exploring the intersection of AI tools and design practice'
    }
  ]

  return (
    <div className="container">
      <section className="hero">
        <h1>Jed Crystal</h1>
        <p className="tagline">Creating intuitive products with hands-on design, business strategy, and user&nbsp;experience.</p>
      </section>

      <section className="about">
        <h2>About</h2>
        <p>I'm a product and UX designer with 20+ years of experience across physical goods and digital tools. My background spans CAD software, wearable robotics, ecommerce, and soft goods — but the goal has always been the same: turn complexity into something simple and delightful that people can actually&nbsp;use.</p>

        <p>I founded and sold a consumer brand, and now work as a UX designer at SolidWorks helping engineers learn faster and work smarter. I collaborate closely with engineers and PMs because great ideas in Figma still have to survive legacy code — and great renderings still have to be manufacturable at the right cost.</p>
      </section>

      <section className="experience">
        <h2>Experience</h2>
        <div className="experience-grid">
          {experienceCategories.map((category, index) => (
            <div key={index} className="experience-card">
              <h3>{category.title}</h3>
              <p>{category.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="contact">
        <a
          href="https://www.linkedin.com/in/jedcrystal/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-button"
        >
          Connect with me on LinkedIn
        </a>
      </section>
    </div>
  )
}

export default App
