import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalProvider } from "./GlobalContext"
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <GlobalProvider>
    <App />
  </GlobalProvider>
)
