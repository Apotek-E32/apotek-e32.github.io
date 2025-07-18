import React, { useState, useEffect, useRef } from 'react';
import './Order.css';

const Order = () => {
  const [formData, setFormData] = useState({
    nama: '',
    telepon: '',
    kategori: '',
    produk: '',
    catatan: ''
  });

  const orderRef = useRef(null);

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

    if (orderRef.current) {
      observer.observe(orderRef.current);
    }

    return () => {
      if (orderRef.current) {
        observer.unobserve(orderRef.current);
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const kategoriText = {
      'obat-bebas': 'Obat Bebas',
      'vitamin': 'Vitamin & Suplemen',
      'produk-bayi': 'Produk Bayi',
      'alat-kesehatan': 'Alat Kesehatan',
      'p3k': 'P3K',
      'obat-resep': 'Obat Resep'
    };
    
    let message = `*ORDER APOTEK E32*\n\n`;
    message += `Nama: ${formData.nama}\n`;
    message += `Telepon: ${formData.telepon}\n`;
    message += `Kategori: ${kategoriText[formData.kategori]}\n`;
    message += `Produk: ${formData.produk}\n`;
    if (formData.catatan) {
      message += `Catatan: ${formData.catatan}\n`;
    }
    message += `\nMohon konfirmasi ketersediaan dan harga produk. Terima kasih!`;
    
    const whatsappUrl = `https://wa.me/62085642007123?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="order" className="order-section">
      <div className="container">
        <div className="section-title" ref={orderRef}>
          <h2>Order Online - Ambil di Apotek</h2>
          <p>Pesan obat secara online dan ambil langsung di apotek kami untuk kemudahan dan kenyamanan Anda</p>
        </div>
        <form className="order-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nama">Nama Lengkap *</label>
            <input 
              type="text" 
              id="nama" 
              name="nama" 
              value={formData.nama}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="telepon">Nomor WhatsApp *</label>
            <input 
              type="tel" 
              id="telepon" 
              name="telepon" 
              value={formData.telepon}
              onChange={handleChange}
              placeholder="08xxxxxxxxxx"
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="kategori">Kategori Produk *</label>
            <select 
              id="kategori" 
              name="kategori" 
              value={formData.kategori}
              onChange={handleChange}
              required
            >
              <option value="">Pilih Kategori</option>
              <option value="obat-bebas">Obat Bebas</option>
              <option value="vitamin">Vitamin & Suplemen</option>
              <option value="produk-bayi">Produk Bayi</option>
              <option value="alat-kesehatan">Alat Kesehatan</option>
              <option value="p3k">P3K</option>
              <option value="obat-resep">Obat Resep (Wajib bawa resep)</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="produk">Detail Produk yang Dibutuhkan *</label>
            <textarea 
              id="produk" 
              name="produk" 
              rows="4" 
              value={formData.produk}
              onChange={handleChange}
              placeholder="Contoh: Paracetamol 500mg strip, Vitamin C 1000mg botol, dll."
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="catatan">Catatan Tambahan</label>
            <textarea 
              id="catatan" 
              name="catatan" 
              rows="3" 
              value={formData.catatan}
              onChange={handleChange}
              placeholder="Catatan khusus, pertanyaan, atau permintaan lainnya"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary submit-btn">
            <i className="fab fa-whatsapp"></i>
            Kirim Order via WhatsApp
          </button>
          <p className="form-info">
            <i className="fas fa-info-circle"></i>
            Order akan dikirim ke WhatsApp kami untuk konfirmasi ketersediaan dan harga
          </p>
        </form>
      </div>
    </section>
  );
};

export default Order;
