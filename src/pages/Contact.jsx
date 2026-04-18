import './Contact.css'

function Contact() {
  return (
    <div className="container">

      <section className="contact-header">
        <h1>Get In Touch</h1>
        <p className="contact-intro">Contact me on LinkedIn.</p>
      </section>

      <section className="contact-links">
        <a
          href="https://www.linkedin.com/in/jedcrystal/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-linkedin-btn"
        >
          LinkedIn
          <span aria-hidden="true">→</span>
        </a>
      </section>

    </div>
  )
}

export default Contact
