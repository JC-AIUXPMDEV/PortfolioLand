import { Routes, Route, Link, NavLink, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'
import Home from './pages/Home'
import Work from './pages/Work'
import Ministry from './pages/Ministry'
import Hepper from './pages/Hepper'
import Wyss from './pages/Wyss'
import ShelfReady from './pages/ShelfReady'
import About from './pages/About'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <>
      <ScrollToTop />
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

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/ministry-of-supply" element={<Ministry />} />
          <Route path="/work/hepper" element={<Hepper />} />
          <Route path="/work/wyss-institute" element={<Wyss />} />
          <Route path="/work/shelf-ready" element={<ShelfReady />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <span>Jed Crystal</span>
          {/* [EMAIL PLACEHOLDER] */}
          <span>[email@placeholder.com]</span>
          {/* [LINKEDIN URL PLACEHOLDER] */}
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
