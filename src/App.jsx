import { Routes, Route, Link, NavLink, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'
import Home from './pages/Home'
import Work from './pages/Work'
import Ministry from './pages/Ministry'
import Hepper from './pages/Hepper'
import Wyss from './pages/Wyss'
import ShelfReady from './pages/ShelfReady'
import PhysicalDigital from './pages/PhysicalDigital'
import Solidworks from './pages/Solidworks'
import About from './pages/About'
import Contact from './pages/Contact'

const pageTitles = {
  '/':                        'Jed Crystal — Product & UX Designer',
  '/work':                    'Work — Jed Crystal',
  '/work/ministry-of-supply': 'Ministry of Supply — Jed Crystal',
  '/work/hepper':             'Hepper — Jed Crystal',
  '/work/wyss-institute':     'Wyss Institute — Jed Crystal',
  '/work/shelf-ready':        'Shelf Ready — Jed Crystal',
  '/work/physical-digital':   'Physical Product Design — Jed Crystal',
  '/work/solidworks':         'SolidWorks UX Design — Jed Crystal',
  '/about':                   'About — Jed Crystal',
  '/contact':                 'Contact — Jed Crystal',
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = pageTitles[pathname] ?? 'Jed Crystal — Product & UX Designer'
  }, [pathname])
  return null
}

function App() {
  return (
    <>
      <ScrollToTop />
      <div className="site-header">
        <div className="site-banner" role="banner">
          <p className="site-banner-text">
            Site under development. Check back soon or contact me anytime on{' '}
            <a
              href="https://www.linkedin.com/in/jedcrystal/"
              target="_blank"
              rel="noopener noreferrer"
              className="site-banner-link"
            >LinkedIn</a>.
          </p>
        </div>
        <header className="nav">
          <div className="nav-inner">
            <Link to="/" className="nav-logo">Jed Crystal</Link>
            <nav aria-label="Main navigation">
              <ul className="nav-links">
                <li><NavLink to="/work">Work</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
              </ul>
            </nav>
          </div>
        </header>
      </div>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/ministry-of-supply" element={<Ministry />} />
          <Route path="/work/hepper" element={<Hepper />} />
          <Route path="/work/wyss-institute" element={<Wyss />} />
          <Route path="/work/shelf-ready" element={<ShelfReady />} />
          <Route path="/work/physical-digital" element={<PhysicalDigital />} />
          <Route path="/work/solidworks" element={<Solidworks />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <span>Jed Crystal</span>
          <a
            href="https://www.linkedin.com/in/jedcrystal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/jedcrystal
          </a>
        </div>
      </footer>
    </>
  )
}

export default App
