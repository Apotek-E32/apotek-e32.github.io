import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import './Header.css';
import logoApotek from '../assets/logo-apotek-e32.jpg';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/', { replace: true });
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    } else {
      // If we're on the home page, scroll directly
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    navigate('/');
    setIsMobileMenuOpen(false);
  };

  const handlePrivacyClick = () => {
    navigate('/privacy-policy');
    setIsMobileMenuOpen(false);
  };

  const handleKarirClick = () => {
    navigate('/karir');
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <nav className="nav-container">
        <div className="logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
          <img src={logoApotek} alt="Logo Apotek E32" className="logo-image" />
          <span className="logo-text">Apotek E32</span>
        </div>
        
        <div className="header-controls">
          <ul className={`nav-menu ${isMobileMenuOpen ? 'nav-menu-open' : ''}`}>
            {location.pathname === '/' ? (
              <>
                <li>
                  <a href="#home" onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('home');
                  }}>
                    Beranda
                  </a>
                </li>
                <li>
                  <a href="#layanan" onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('layanan');
                  }}>
                    Layanan
                  </a>
                </li>
                <li>
                  <a href="#produk" onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('produk');
                  }}>
                    Produk
                  </a>
                </li>
                <li>
                  <a href="#order" onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('order');
                  }}>
                    Order
                  </a>
                </li>
                <li>
                  <a href="#karir" onClick={(e) => {
                    e.preventDefault();
                    handleKarirClick();
                  }}>
                    Karir
                  </a>
                </li>
                <li>
                  <a href="#kontak" onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('kontak');
                  }}>
                    Kontak
                  </a>
                </li>
              </>
            ) : (
              <>
                <li>
                  <a href="/" onClick={(e) => {
                    e.preventDefault();
                    navigate('/');
                  }}>
                    Beranda
                  </a>
                </li>
                <li>
                  <a href="#layanan" onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('layanan');
                  }}>
                    Layanan
                  </a>
                </li>
                <li>
                  <a href="#produk" onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('produk');
                  }}>
                    Produk
                  </a>
                </li>
                <li>
                  <a href="#order" onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('order');
                  }}>
                    Order
                  </a>
                </li>
                <li>
                  <a href="#karir" onClick={(e) => {
                    e.preventDefault();
                    handleKarirClick();
                  }}>
                    Karir
                  </a>
                </li>
                <li>
                  <a href="#kontak" onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('kontak');
                  }}>
                    Kontak
                  </a>
                </li>
              </>
            )}
            <li>
              <a href="/privacy-policy" onClick={(e) => {
                e.preventDefault();
                handlePrivacyClick();
              }}>
                Kebijakan Privasi
              </a>
            </li>
          </ul>
          
          <ThemeToggle />
          
          <button 
            className="mobile-menu" 
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
