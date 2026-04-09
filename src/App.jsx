import './App.css'

function App() {
  const experienceCategories = [
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
    },
    {
      title: 'AI & Emerging Tools',
      description: 'Actively building with AI tools — exploring the intersection of AI-assisted product development, design practice, and physical product frameworks.'
    }
  ]

  return (
    <div className="container">
      <section className="hero">
        <h1>Jed Crystal</h1>
        <p className="tagline">Product leader at the intersection of physical and digital — wearable tech, consumer goods, and the systems that connect&nbsp;them.</p>
      </section>

      <section className="about">
        <h2>About</h2>
        <p>I've spent 20+ years building products from the ground up — physically and digitally. I founded Hepper, a modern consumer pet brand, ran it for 13 years, and negotiated a successful exit. That experience gave me a rare end-to-end view: owning product strategy, design, and the business simultaneously, from zero to&nbsp;exit.</p>

        <p>Before and after Hepper, I've worked at the intersection of physical and digital — designing wearable robotics at Harvard's Wyss Institute, leading UX for 3D CAD software at SolidWorks, and consulting for consumer brands from early concept through production. My industrial design background pushes every digital decision through a physical-world lens. My UX background means I think beyond the object — to how it's worn, used, and connected to the digital ecosystem around&nbsp;it.</p>

        <p>What I do best is hold the whole product in my head at once — the business case, the user experience, the manufacturing reality — and design across all three at the&nbsp;same&nbsp;time.</p>

        <a
          href="https://www.linkedin.com/in/jedcrystal/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-button"
        >
          Connect with me on LinkedIn
        </a>
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
    </div>
  )
}

export default App
