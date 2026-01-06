import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Servicios from './Servicios.jsx'
import Productos from './Productos.jsx'
import Contacto from './Contacto.jsx'
import Header from './components/Header.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
)
