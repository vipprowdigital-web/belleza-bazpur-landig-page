import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PrivacyPolicy from './components/PrivacyPolicy.jsx'

const isPrivacyPage =
  window.location.pathname.replace(/\/+$/, '') === '/privacy-policy'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {isPrivacyPage ? <PrivacyPolicy /> : <App />}
  </StrictMode>,
)
