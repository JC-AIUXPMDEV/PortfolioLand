import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

// Easter egg for curious designers
console.log(
  '%cCurious, aren\'t you?',
  'font-size: 16px; font-weight: 600; color: #3B82F6; font-family: "Space Grotesk", sans-serif;'
)
console.log(
  '%cI like that. Built with intention, not templates.\n\nLet\'s talk: linkedin.com/in/jedcrystal',
  'font-size: 14px; color: #9CA3AF; font-family: "Space Grotesk", sans-serif; line-height: 1.6;'
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
