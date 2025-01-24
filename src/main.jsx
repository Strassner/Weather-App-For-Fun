import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './stylesheets/index.css'
import App from './App.jsx'
import DisplayCurrentTemp from './DisplayCurrentTemp.jsx'
import SearchBar from './SearchBar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
