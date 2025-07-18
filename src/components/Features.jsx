import React, { useEffect, useRef } from 'react';
import './Features.css';

const Features = () => {
  const featuresRef = useRef([]);

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

    featuresRef.current.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => {
      featuresRef.current.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const features = [
    {
      icon: 'fas fa-user-md',
      title: 'Konsultasi Apoteker',
      description: 'Konsultasi gratis dengan apoteker profesional berlisensi untuk mendapatkan saran penggunaan obat yang tepat dan aman.'
    },
    {
      icon: 'fas fa-pills',
      title: 'Obat Berkualitas',
      description: 'Menyediakan obat-obatan original dari distributor resmi dengan jaminan kualitas dan keamanan produk.'
    },
    {
      icon: 'fas fa-truck',
      title: 'Layanan Antar',
      description: 'Layanan antar obat ke rumah untuk area Garum dan sekitarnya dengan biaya terjangkau dan pengiriman cepat.'
    },
    {
      icon: 'fas fa-clock',
      title: 'Buka Setiap Hari',
      description: 'Melayani kebutuhan kesehatan Anda setiap hari dengan jam operasional yang fleksibel untuk kemudahan akses.'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Terpercaya & Aman',
      description: 'Apotek berizin resmi dengan sistem penyimpanan obat yang sesuai standar untuk menjaga kualitas produk.'
    },
    {
      icon: 'fas fa-heart',
      title: 'Pelayanan Ramah',
      description: 'Tim yang ramah dan berpengalaman siap membantu kebutuhan kesehatan keluarga dengan pelayanan prima.'
    }
  ];

  return (
    <section id="layanan" className="features">
      <div className="container">
        <div 
          className="section-title scroll-animation"
          ref={el => featuresRef.current[0] = el}
        >
          <h2>Layanan Profesional Kami</h2>
          <p>Kami berkomitmen memberikan pelayanan kesehatan terbaik dengan standar profesional tinggi</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card scroll-animation"
              ref={el => featuresRef.current[index + 1] = el}
            >
              <div className="feature-icon">
                <i className={feature.icon}></i>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
