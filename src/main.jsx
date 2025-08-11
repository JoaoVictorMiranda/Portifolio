import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navegar from './Router'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navegar />
  </StrictMode>,
)
