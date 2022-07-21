import React from 'react'
import ReactDOM from 'react-dom/client'
import Principal from './principal.jsx'
import '../style.css'
import { Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Principal />
  </Router>
)
