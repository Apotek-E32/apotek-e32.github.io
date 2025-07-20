import React, { useState, useEffect, useRef } from 'react';
import { trackJobView, trackJobApplication } from '../utils/analytics';
import { useTheme } from '../contexts/ThemeContext';
import lokerImage from '../assets/loker-apotek-blitar.png';
import './Careers.css';

const Careers = () => {
  const { theme, isDark } = useTheme();
  const [isApplicationOpen, setIsApplicationOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    telepon: '',
    alamat: '',
    pendidikan: '',
    pengalaman: '',
    motivasi: ''
  });

  const careersRef = useRef(null);

  useEffect(() => {
    // Track when careers section is viewed
    trackJobView('Tenaga Teknis Kefarmasian');
    
    // Optimize for low-end devices
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    const observerOptions = {
      threshold: reduceMotion ? 0.3 : 0.1,
      rootMargin: reduceMotion ? '0px' : '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    if (careersRef.current) {
      observer.observe(careersRef.current);
    }

    return () => {
      if (careersRef.current) {
        observer.unobserve(careersRef.current);
      }
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    
    // Track job application submission
    trackJobApplication('Tenaga Teknis Kefarmasian');
    
    let message = `*LAMARAN KERJA - APOTEK E32*\n\n`;
    message += `*POSISI: Tenaga Teknis Kefarmasian*\n\n`;
    message += `*DATA PELAMAR:*\n`;
    message += `Nama: ${formData.nama}\n`;
    message += `Email: ${formData.email}\n`;
    message += `Telepon: ${formData.telepon}\n`;
    message += `Alamat: ${formData.alamat}\n`;
    message += `Pendidikan: ${formData.pendidikan}\n`;
    message += `Pengalaman: ${formData.pengalaman}\n`;
    message += `Motivasi: ${formData.motivasi}\n\n`;
    message += `*LOKASI KERJA:*\n`;
    message += `Apotek Blitar - https://maps.app.goo.gl/31wVEGyXZFk8rFYK8\n\n`;
    message += `Mohon informasi lebih lanjut mengenai proses rekrutmen. Terima kasih!`;
    
    const whatsappUrl = `https://wa.me/62085642007123?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Reset form after delay
    setTimeout(() => {
      setFormData({
        nama: '',
        email: '',
        telepon: '',
        alamat: '',
        pendidikan: '',
        pengalaman: '',
        motivasi: ''
      });
      setIsApplicationOpen(false);
      setIsSubmitting(false);
    }, 1000);
  };

  const jobDetails = {
    title: "Tenaga Teknis Kefarmasian",
    location: "Apotek Blitar, Kota Blitar",
    type: "Full Time",
    requirements: [
      "Minimal SMK Farmasi / D3",
      "Perempuan",
      "Tidak sedang menempuh pendidikan"
    ],
    responsibilities: [
      "Membantu apoteker dalam pelayanan obat",
      "Mengelola stok obat dan produk kesehatan",
      "Memberikan informasi dasar obat kepada pelanggan",
      "Menjaga kebersihan dan kerapihan apotek",
      "Melayani pelanggan dengan ramah dan profesional"
    ],
    benefits: [
      "Gaji kompetitif",
      "BPJS Kesehatan & Ketenagakerjaan",
      "Lingkungan kerja yang nyaman",
      "Pelatihan dan pengembangan karir",
      "Bonus kinerja"
    ]
  };

  return (
    <section id="karir" className="careers-section">
      <div className="container">
        <div className="section-title" ref={careersRef}>
          <h2>Bergabunglah dengan Tim Kami</h2>
          <p>Wujudkan karir impian Anda di bidang kesehatan bersama Apotek E32</p>
        </div>

        <div className="careers-content">
          <div className="job-banner">
            <img src={lokerImage} alt="Lowongan Kerja Apotek Blitar" className="job-image" />
          </div>

          <div className="job-details">
            <div className="job-header">
              <h3>{jobDetails.title}</h3>
              <div className="job-meta">
                <span className="location">
                  <i className="fas fa-map-marker-alt"></i>
                  {jobDetails.location}
                </span>
                <span className="type">
                  <i className="fas fa-clock"></i>
                  {jobDetails.type}
                </span>
              </div>
            </div>

            <div className="job-sections">
              <div className="job-section">
                <h4><i className="fas fa-check-circle"></i> Persyaratan</h4>
                <ul>
                  {jobDetails.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>

              <div className="job-section">
                <h4><i className="fas fa-tasks"></i> Tanggung Jawab</h4>
                <ul>
                  {jobDetails.responsibilities.map((resp, index) => (
                    <li key={index}>{resp}</li>
                  ))}
                </ul>
              </div>

              <div className="job-section">
                <h4><i className="fas fa-gift"></i> Benefit</h4>
                <ul>
                  {jobDetails.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="job-actions">
              <button 
                onClick={() => setIsApplicationOpen(true)}
                className="btn btn-primary apply-btn"
              >
                <i className="fas fa-paper-plane"></i>
                Lamar Sekarang
              </button>
              <a 
                href="https://maps.app.goo.gl/31wVEGyXZFk8rFYK8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary location-btn"
              >
                <i className="fas fa-map"></i>
                Lihat Lokasi
              </a>
            </div>
          </div>
        </div>

        {/* Application Modal */}
        {isApplicationOpen && (
          <div className="modal-overlay" onClick={() => setIsApplicationOpen(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h3>Lamar Posisi: {jobDetails.title}</h3>
                <button 
                  onClick={() => setIsApplicationOpen(false)}
                  className="close-btn"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="application-form">
                <div className="form-group">
                  <label htmlFor="nama">Nama Lengkap *</label>
                  <input
                    type="text"
                    id="nama"
                    name="nama"
                    value={formData.nama}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
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
                    onChange={handleInputChange}
                    placeholder="08xxxxxxxxxx"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="alamat">Alamat Lengkap *</label>
                  <textarea
                    id="alamat"
                    name="alamat"
                    value={formData.alamat}
                    onChange={handleInputChange}
                    rows="3"
                    required
                  ></textarea>
                </div>
                
                <div className="form-group">
                  <label htmlFor="pendidikan">Pendidikan Terakhir *</label>
                  <select
                    id="pendidikan"
                    name="pendidikan"
                    value={formData.pendidikan}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Pilih Pendidikan</option>
                    <option value="SMK Farmasi">SMK Farmasi</option>
                    <option value="D3 Farmasi">D3 Farmasi</option>
                    <option value="S1 Farmasi">S1 Farmasi</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="pengalaman">Pengalaman Kerja</label>
                  <textarea
                    id="pengalaman"
                    name="pengalaman"
                    value={formData.pengalaman}
                    onChange={handleInputChange}
                    rows="4"
                    placeholder="Ceritakan pengalaman kerja Anda di bidang farmasi/kesehatan (jika ada)"
                  ></textarea>
                </div>
                
                <div className="form-group">
                  <label htmlFor="motivasi">Motivasi Melamar *</label>
                  <textarea
                    id="motivasi"
                    name="motivasi"
                    value={formData.motivasi}
                    onChange={handleInputChange}
                    rows="4"
                    placeholder="Mengapa Anda tertarik bekerja di Apotek E32?"
                    required
                  ></textarea>
                </div>
                
                <div className="form-actions">
                  <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <i className="fas fa-spinner fa-spin"></i>
                        Mengirim...
                      </>
                    ) : (
                      <>
                        <i className="fab fa-whatsapp"></i>
                        Kirim Lamaran via WhatsApp
                      </>
                    )}
                  </button>
                </div>
                
                <p className="form-note">
                  <i className="fas fa-info-circle"></i>
                  Lamaran akan dikirim ke WhatsApp HRD untuk proses selanjutnya.
                  Mohon sertakan CV dalam format PDF saat mengirim pesan.
                </p>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Careers;
