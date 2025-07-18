import React, { useEffect, useRef } from 'react';
import { trackContact } from '../utils/fbPixel';
import './Contact.css';

const Contact = () => {
  const contactRef = useRef([]);

  const openGoogleMaps = () => {
    const googleMapsUrl = 'https://maps.app.goo.gl/Pia3MYF8Tzamg6t4A';
    window.open(googleMapsUrl, '_blank');
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    contactRef.current.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => {
      contactRef.current.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const contactInfo = [
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Alamat Apotek',
      content: 'Jl. Raya Garum No.14, Ngebra, Tawangsari, Kec. Garum, Kabupaten Blitar, Jawa Timur 66182'
    },
    {
      icon: 'fas fa-phone',
      title: 'Telepon',
      content: '085642007123'
    },
    {
      icon: 'fab fa-whatsapp',
      title: 'WhatsApp',
      content: '085642007123'
    },
    {
      icon: 'fas fa-clock',
      title: 'Jam Operasional',
      content: 'Senin - Minggu\n08:00 - 21:00 WIB'
    }
  ];

  return (
    <section id="kontak" className="contact">
      <div className="container">
        <div 
          className="section-title scroll-animation"
          ref={el => contactRef.current[0] = el}
        >
          <h2>Hubungi Kami</h2>
          <p>Kami siap melayani kebutuhan kesehatan Anda dengan profesional dan terpercaya</p>
        </div>
        <div className="contact-grid">
          <div 
            className="scroll-animation"
            ref={el => contactRef.current[1] = el}
          >
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-info">
                <div className="contact-icon">
                  <i className={info.icon}></i>
                </div>
                <div>
                  <h4>{info.title}</h4>
                  <p style={{ whiteSpace: 'pre-line' }}>{info.content}</p>
                </div>
              </div>
            ))}
          </div>
          <div 
            className="scroll-animation"
            ref={el => contactRef.current[2] = el}
          >
            <div className="map-container" onClick={openGoogleMaps} style={{cursor: 'pointer'}}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15802.888!2d112.2149794!3d-8.072476!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd629b01c8c5c5b%3A0x2101420971471255498!2sApotek%20E32!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                width="100%" 
                height="100%" 
                style={{border: 0, pointerEvents: 'none'}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Apotek E32 - Jl. Raya Garum No.14, Ngebra, Tawangsari, Kec. Garum, Kabupaten Blitar"
              ></iframe>
              <div className="map-overlay">
                <div className="map-click-hint">
                  <i className="fas fa-external-link-alt"></i>
                  <span>Klik untuk buka di Google Maps</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
