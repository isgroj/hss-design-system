import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './ThemeProvider'
import { Styleguide } from './pages/Styleguide/Styleguide'
import './tokens/primitives.css'
import './tokens/semantic-light.css'
import './tokens/semantic-dark.css'
import './tokens/typography.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <Styleguide />
    </ThemeProvider>
  </StrictMode>,
)
