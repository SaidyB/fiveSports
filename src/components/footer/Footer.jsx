import React from 'react'
import "./Footer.css"; 
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img
            src="/public/img/logo.png"
            alt="Logo de la empresa"
            className="logo"
          />
          <span className="copyright">&copy; 2024 Empresa XYZ</span>
        </div>
      </div>
    </footer>

    
  )
}

export default Footer