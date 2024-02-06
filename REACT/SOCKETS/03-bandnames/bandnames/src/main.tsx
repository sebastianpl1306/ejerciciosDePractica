import React from 'react'
import ReactDOM from 'react-dom/client'
import { BandNamesApp } from './BandNamesApp.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BandNamesApp />
  </React.StrictMode>,
)
