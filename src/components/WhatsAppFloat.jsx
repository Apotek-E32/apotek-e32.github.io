import React from 'react';
import { trackContact } from '../utils/fbPixel';
import './WhatsAppFloat.css';

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    // Track contact event
    trackContact();
    
    const message = 'Halo Apotek E32, saya ingin konsultasi';
    const whatsappUrl = `https://wa.me/62085642007123?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button 
      className="whatsapp-float" 
      onClick={handleWhatsAppClick}
      aria-label="Chat WhatsApp"
    >
      <i className="fab fa-whatsapp"></i>
    </button>
  );
};

export default WhatsAppFloat;
