import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import './PrivacyPolicyPage.css';

const PrivacyPolicyPage = () => {
  const { theme } = useTheme();
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Update page title
    document.title = 'Kebijakan Privasi - Apotek E32';
    
    return () => {
      // Reset title when leaving page
      document.title = 'Apotek E32 - Kesehatan Keluarga Terpercaya';
    };
  }, []);

  return (
    <div className="privacy-page">
      <div className="container">
        <div className="privacy-page-header">
          <h1>Kebijakan Privasi</h1>
          <div className="company-badge">
            <h2>Apotek E32</h2>
            <p>PT DWI JAGAT HARMONI</p>
          </div>
          <p className="last-updated">Terakhir diperbarui: 18 Juli 2025</p>
        </div>

        <div className="privacy-page-content">
          <div className="privacy-intro">
            <p className="intro-text">
              Apotek E32 berkomitmen untuk melindungi dan menghormati privasi Anda. 
              Kebijakan ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan 
              melindungi informasi pribadi Anda saat menggunakan website dan layanan kami.
            </p>
          </div>

          <div className="privacy-sections">
            {/* Informasi Umum */}
            <div className="privacy-section">
              <div 
                className="section-header"
                onClick={() => toggleSection('general')}
              >
                <h3>
                  <i className="fas fa-info-circle"></i>
                  Informasi Umum
                </h3>
                <i className={`fas fa-chevron-${activeSection === 'general' ? 'up' : 'down'}`}></i>
              </div>
              {activeSection === 'general' && (
                <div className="section-content">
                  <div className="company-info">
                    <h4>Identitas Perusahaan</h4>
                    <ul>
                      <li><strong>Nama Pelaku Usaha:</strong> PT DWI JAGAT HARMONI</li>
                      <li><strong>NIB:</strong> 0206220032993</li>
                      <li><strong>Alamat:</strong> Jl. Raya Garum No. 14, Tawangsari, Garum, Blitar, Jawa Timur 66182</li>
                      <li><strong>Telepon:</strong> 085642007123</li>
                      <li><strong>Apoteker:</strong> apt. Silvia Afra Meyningtyas S.Farm</li>
                      <li><strong>SIPA:</strong> T/503/44/SIPA/409.25/IV/2025</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Informasi yang Kami Kumpulkan */}
            <div className="privacy-section">
              <div 
                className="section-header"
                onClick={() => toggleSection('collection')}
              >
                <h3>
                  <i className="fas fa-database"></i>
                  Informasi yang Kami Kumpulkan
                </h3>
                <i className={`fas fa-chevron-${activeSection === 'collection' ? 'up' : 'down'}`}></i>
              </div>
              {activeSection === 'collection' && (
                <div className="section-content">
                  <h4>Data Pribadi</h4>
                  <ul>
                    <li>Nama lengkap</li>
                    <li>Nomor telepon/WhatsApp</li>
                    <li>Alamat email</li>
                    <li>Alamat domisili</li>
                    <li>Informasi kesehatan yang relevan</li>
                  </ul>
                  
                  <h4>Data Teknis</h4>
                  <ul>
                    <li>Alamat IP</li>
                    <li>Jenis browser dan perangkat</li>
                    <li>Halaman yang dikunjungi</li>
                    <li>Waktu kunjungan</li>
                    <li>Data analytics melalui Meta Pixel</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Penggunaan Informasi */}
            <div className="privacy-section">
              <div 
                className="section-header"
                onClick={() => toggleSection('usage')}
              >
                <h3>
                  <i className="fas fa-cogs"></i>
                  Penggunaan Informasi
                </h3>
                <i className={`fas fa-chevron-${activeSection === 'usage' ? 'up' : 'down'}`}></i>
              </div>
              {activeSection === 'usage' && (
                <div className="section-content">
                  <h4>Tujuan Penggunaan</h4>
                  <ul>
                    <li>Memproses pesanan obat dan produk kesehatan</li>
                    <li>Memberikan konsultasi farmasi</li>
                    <li>Mengirim informasi tentang produk dan layanan</li>
                    <li>Meningkatkan kualitas layanan</li>
                    <li>Memproses lamaran kerja</li>
                    <li>Analisis website untuk pengembangan</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Perlindungan Data */}
            <div className="privacy-section">
              <div 
                className="section-header"
                onClick={() => toggleSection('protection')}
              >
                <h3>
                  <i className="fas fa-shield-alt"></i>
                  Perlindungan Data
                </h3>
                <i className={`fas fa-chevron-${activeSection === 'protection' ? 'up' : 'down'}`}></i>
              </div>
              {activeSection === 'protection' && (
                <div className="section-content">
                  <h4>Keamanan Data</h4>
                  <ul>
                    <li>Enkripsi SSL untuk transmisi data</li>
                    <li>Akses terbatas pada data pribadi</li>
                    <li>Penyimpanan data yang aman</li>
                    <li>Backup rutin untuk mencegah kehilangan data</li>
                    <li>Pelatihan staff tentang perlindungan data</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Cookie dan Tracking */}
            <div className="privacy-section">
              <div 
                className="section-header"
                onClick={() => toggleSection('cookies')}
              >
                <h3>
                  <i className="fas fa-cookie-bite"></i>
                  Cookie dan Tracking
                </h3>
                <i className={`fas fa-chevron-${activeSection === 'cookies' ? 'up' : 'down'}`}></i>
              </div>
              {activeSection === 'cookies' && (
                <div className="section-content">
                  <h4>Penggunaan Cookie</h4>
                  <ul>
                    <li>Session cookies untuk fungsi website</li>
                    <li>Preferensi theme (gelap/terang)</li>
                    <li>Meta Pixel untuk analytics dan remarketing</li>
                    <li>Google Maps untuk lokasi apotek</li>
                  </ul>
                  
                  <h4>Meta Pixel</h4>
                  <p>Kami menggunakan Meta Pixel (Facebook Pixel) untuk:</p>
                  <ul>
                    <li>Menganalisis penggunaan website</li>
                    <li>Meningkatkan pengalaman pengguna</li>
                    <li>Menayangkan iklan yang relevan</li>
                    <li>Mengukur efektivitas kampanye marketing</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Berbagi Informasi */}
            <div className="privacy-section">
              <div 
                className="section-header"
                onClick={() => toggleSection('sharing')}
              >
                <h3>
                  <i className="fas fa-share-alt"></i>
                  Berbagi Informasi
                </h3>
                <i className={`fas fa-chevron-${activeSection === 'sharing' ? 'up' : 'down'}`}></i>
              </div>
              {activeSection === 'sharing' && (
                <div className="section-content">
                  <h4>Kami TIDAK membagikan data pribadi Anda kepada pihak ketiga, kecuali:</h4>
                  <ul>
                    <li>Dengan persetujuan eksplisit dari Anda</li>
                    <li>Untuk keperluan hukum yang wajib</li>
                    <li>Dengan penyedia layanan yang terpercaya (seperti WhatsApp untuk komunikasi)</li>
                    <li>Dalam keadaan darurat medis</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Hak Anda */}
            <div className="privacy-section">
              <div 
                className="section-header"
                onClick={() => toggleSection('rights')}
              >
                <h3>
                  <i className="fas fa-user-shield"></i>
                  Hak Anda
                </h3>
                <i className={`fas fa-chevron-${activeSection === 'rights' ? 'up' : 'down'}`}></i>
              </div>
              {activeSection === 'rights' && (
                <div className="section-content">
                  <h4>Hak Anda sebagai pemilik data:</h4>
                  <ul>
                    <li><strong>Akses:</strong> Mengetahui data apa yang kami miliki tentang Anda</li>
                    <li><strong>Koreksi:</strong> Memperbaiki data yang tidak akurat</li>
                    <li><strong>Penghapusan:</strong> Meminta penghapusan data pribadi</li>
                    <li><strong>Portabilitas:</strong> Meminta salinan data Anda</li>
                    <li><strong>Keberatan:</strong> Menolak penggunaan data untuk tujuan tertentu</li>
                    <li><strong>Pembatasan:</strong> Membatasi pemrosesan data</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Retensi Data */}
            <div className="privacy-section">
              <div 
                className="section-header"
                onClick={() => toggleSection('retention')}
              >
                <h3>
                  <i className="fas fa-clock"></i>
                  Retensi Data
                </h3>
                <i className={`fas fa-chevron-${activeSection === 'retention' ? 'up' : 'down'}`}></i>
              </div>
              {activeSection === 'retention' && (
                <div className="section-content">
                  <h4>Periode Penyimpanan:</h4>
                  <ul>
                    <li><strong>Data konsultasi:</strong> 5 tahun sesuai regulasi farmasi</li>
                    <li><strong>Data pesanan:</strong> 3 tahun untuk keperluan pajak</li>
                    <li><strong>Data lamaran kerja:</strong> 1 tahun</li>
                    <li><strong>Data analytics:</strong> 2 tahun</li>
                    <li><strong>Data marketing:</strong> Hingga Anda unsubscribe</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Kontak */}
            <div className="privacy-section">
              <div 
                className="section-header"
                onClick={() => toggleSection('contact')}
              >
                <h3>
                  <i className="fas fa-phone"></i>
                  Hubungi Kami
                </h3>
                <i className={`fas fa-chevron-${activeSection === 'contact' ? 'up' : 'down'}`}></i>
              </div>
              {activeSection === 'contact' && (
                <div className="section-content">
                  <h4>Jika Anda memiliki pertanyaan tentang kebijakan privasi ini:</h4>
                  <div className="contact-info">
                    <p><strong>WhatsApp:</strong> 085642007123</p>
                    <p><strong>Alamat:</strong> Jl. Raya Garum No. 14, Tawangsari, Garum, Blitar, Jawa Timur 66182</p>
                    <p><strong>Apoteker:</strong> apt. Silvia Afra Meyningtyas S.Farm</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="privacy-footer">
            <p>Dengan menggunakan website ini, Anda menyetujui kebijakan privasi yang telah dijelaskan di atas.</p>
            <p><strong>Kebijakan ini dapat berubah sewaktu-waktu dan akan diperbarui di halaman ini.</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
