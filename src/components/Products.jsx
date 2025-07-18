import React, { useEffect, useRef } from 'react';
import './Products.css';

const Products = () => {
  const productsRef = useRef([]);

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

    productsRef.current.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => {
      productsRef.current.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const products = [
    {
      icon: 'fas fa-pills',
      category: 'Obat Bebas',
      title: 'Obat Demam & Flu',
      description: 'Berbagai pilihan obat untuk mengatasi demam, flu, dan gejala pilek dengan merek terpercaya.'
    },
    {
      icon: 'fas fa-capsules',
      category: 'Vitamin & Suplemen',
      title: 'Vitamin Keluarga',
      description: 'Suplemen vitamin lengkap untuk dewasa, anak-anak, dan lansia guna mendukung daya tahan tubuh.'
    },
    {
      icon: 'fas fa-baby',
      category: 'Produk Bayi',
      title: 'Kebutuhan Bayi',
      description: 'Produk kesehatan khusus bayi termasuk vitamin, obat tetes, dan perlengkapan perawatan bayi.'
    },
    {
      icon: 'fas fa-first-aid',
      category: 'Alat Kesehatan',
      title: 'Alat Medis',
      description: 'Thermometer, tensimeter, masker, dan berbagai alat kesehatan rumah tangga berkualitas.'
    },
    {
      icon: 'fas fa-band-aid',
      category: 'P3K',
      title: 'Obat Luar',
      description: 'Betadine, plester, perban, salep, dan perlengkapan P3K untuk pertolongan pertama.'
    },
    {
      icon: 'fas fa-prescription',
      category: 'Obat Resep',
      title: 'Obat Keras',
      description: 'Melayani tebus resep dokter dengan stok obat lengkap dan konsultasi apoteker profesional.'
    }
  ];

  return (
    <section id="produk" className="products">
      <div className="container">
        <div 
          className="section-title scroll-animation"
          ref={el => productsRef.current[0] = el}
        >
          <h2>Produk Kesehatan Kami</h2>
          <p>Koleksi lengkap produk kesehatan berkualitas untuk kebutuhan keluarga Anda</p>
        </div>
        <div className="products-grid">
          {products.map((product, index) => (
            <div 
              key={index}
              className="product-card scroll-animation"
              ref={el => productsRef.current[index + 1] = el}
            >
              <div className="product-image">
                <i className={product.icon}></i>
              </div>
              <div className="product-info">
                <div className="product-category">{product.category}</div>
                <h3 className="product-title">{product.title}</h3>
                <p className="product-description">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
