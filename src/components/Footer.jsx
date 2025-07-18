import React from 'react';
import './Footer.css';
import logoApotek from '../assets/logo-apotek-e32.jpg';

const Footer = () => {
  const handleWhatsAppClick = () => {
    const message = 'Halo Apotek E32, saya ingin konsultasi';
    const whatsappUrl = `https://wa.me/62085642007123?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="logo">
              <img src={logoApotek} alt="Logo Apotek E32" className="logo-image" />
              <span className="logo-text">Apotek E32</span>
            </div>
            <p>Melayani kesehatan keluarga Anda dengan dedikasi dan profesionalisme tinggi di Garum, Blitar.</p>
            <div className="social-links">
              <a 
                href="https://www.facebook.com/apoteke32" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook Apotek E32"
                className="social-link facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a 
                href="https://www.instagram.com/apoteke32garum/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram Apotek E32"
                className="social-link instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <button 
                onClick={handleWhatsAppClick}
                aria-label="WhatsApp Apotek E32"
                className="social-link whatsapp"
              >
                <i className="fab fa-whatsapp"></i>
              </button>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Kontak Info</h4>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>Jl. Raya Garum No.14, Ngebra, Tawangsari, Kec. Garum, Kabupaten Blitar, Jawa Timur 66182</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <span>085642007123</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-clock"></i>
              <span>Senin - Minggu: 08:00 - 21:00 WIB</span>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Layanan Kami</h4>
            <ul>
              <li>Konsultasi Apoteker</li>
              <li>Obat Resep & Bebas</li>
              <li>Vitamin & Suplemen</li>
              <li>Produk Kesehatan</li>
              <li>Layanan Antar</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Apotek E32. Semua hak dilindungi. | Apotek Berizin Resmi</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
