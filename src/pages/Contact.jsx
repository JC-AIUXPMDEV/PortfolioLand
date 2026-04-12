import './Contact.css'

function Contact() {
  return (
    <div className="container">

      <section className="contact-header">
        <h1>Get In Touch</h1>
        {/* [INTRO PLACEHOLDER — short line setting the tone for reaching out] */}
        <p className="contact-intro">[INTRO PLACEHOLDER — e.g. "Open to the right opportunities. No cold pitches."]</p>
      </section>

      <section className="contact-items">
        <div className="contact-item">
          <span className="contact-label">Email</span>
          {/* [EMAIL PLACEHOLDER] */}
          <a href="mailto:email@placeholder.com" className="contact-value">
            [email@placeholder.com]
          </a>
        </div>

        <div className="contact-item">
          <span className="contact-label">LinkedIn</span>
          {/* [LINKEDIN URL PLACEHOLDER] */}
          <a
            href="https://www.linkedin.com/in/jedcrystal/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-value"
          >
            linkedin.com/in/jedcrystal
          </a>
        </div>
      </section>

    </div>
  )
}

export default Contact
