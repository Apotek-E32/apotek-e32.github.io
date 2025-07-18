import React, { useState, useEffect } from 'react';
import './Header.css';
import logoApotek from '../assets/logo-apotek-e32.jpg';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'layanan', 'produk', 'order', 'karir', 'kontak'];
      const scrollPosition = window.scrollY + 200;

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header">
      <nav className="nav-container">
        <div className="logo">
          <img src={logoApotek} alt="Logo Apotek E32" className="logo-image" />
          <span className="logo-text">Apotek E32</span>
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
          <li><a 
            href="#home" 
            className={activeSection === 'home' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
          >Beranda</a></li>
          <li><a 
            href="#layanan" 
            className={activeSection === 'layanan' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); scrollToSection('layanan'); }}
          >Layanan</a></li>
          <li><a 
            href="#produk" 
            className={activeSection === 'produk' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); scrollToSection('produk'); }}
          >Produk</a></li>
          <li><a 
            href="#order" 
            className={activeSection === 'order' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); scrollToSection('order'); }}
          >Order</a></li>
          <li><a 
            href="#karir" 
            className={activeSection === 'karir' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); scrollToSection('karir'); }}
          >Karir</a></li>
          <li><a 
            href="#kontak" 
            className={activeSection === 'kontak' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); scrollToSection('kontak'); }}
          >Kontak</a></li>
        </ul>
        <div className="header-controls">
          <ThemeToggle />
          <button className="mobile-menu" onClick={toggleMenu}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
