import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { URLProvider } from './context/URLContext'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <URLProvider>
        <App />
      </URLProvider>
    </BrowserRouter>
  </React.StrictMode>
)
