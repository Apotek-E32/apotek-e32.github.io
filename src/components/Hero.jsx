import React from 'react';
import './Hero.css';
import logoApotek from '../assets/logo-apotek-e32.jpg';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-logo">
          <img src={logoApotek} alt="Logo Apotek E32" className="hero-logo-image" />
        </div>
        <h1>Apotek E32</h1>
        <p>Kesehatan Keluarga Terpercaya di Blitar - Melayani dengan Profesional dan Terpercaya</p>
        <div className="cta-buttons">
          <button 
            className="btn btn-primary"
            onClick={() => scrollToSection('order')}
          >
            <i className="fas fa-shopping-cart"></i>
            Order Sekarang
          </button>
          <button 
            className="btn btn-secondary"
            onClick={() => scrollToSection('layanan')}
          >
            <i className="fas fa-info-circle"></i>
            Pelajari Lebih Lanjut
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
