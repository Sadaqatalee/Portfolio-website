
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <a href="#" className="footer-logo">Sadaqat<span>Alee</span></a>
          <p>Creating beautiful digital experiences</p>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="copyright">
          <p>&copy; 2025 Sadaqat Alee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;