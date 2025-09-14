import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navegar from './Routes'
import './main.scss'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navegar />
  </StrictMode>,
)
