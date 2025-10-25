import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="logo-text">Race4Success</span>
            <p>STEM racing education platform</p>
          </div>
          <div className="footer-links">
            <span className="footer-text">© 2025 Race4Success</span>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Race4Success. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
