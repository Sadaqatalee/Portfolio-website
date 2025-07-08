
import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = ({ menuOpen, setMenuOpen }) => {
  const toggleMenu = () => setMenuOpen(!menuOpen);
  
  const closeMenu = () => setMenuOpen(false);
  
  return (
    <header id="header">
      <div className="container header-container">
        <a href="#" className="logo">Sadaqat<span> Alee</span></a>
        <div className="menu-btn" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`} id="nav-links">
          <li><a href="#home" className="active" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;