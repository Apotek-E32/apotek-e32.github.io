import React, { useState } from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = ({ isOpen, onClose }) => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  if (!isOpen) return null;

  return (
    <div className="privacy-overlay" onClick={onClose}>
      <div className="privacy-modal" onClick={(e) => e.stopPropagation()}>
        <div className="privacy-header">
          <h2>Kebijakan Privasi</h2>
          <p>Apotek E32 - PT DWI JAGAT HARMONI</p>
          <button className="close-button" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        
        <div className="privacy-content">
          <div className="privacy-intro">
            <p><strong>Terakhir diperbarui:</strong> 18 Juli 2025</p>
            <p>Apotek E32 berkomitmen untuk melindungi dan menghormati privasi Anda. Kebijakan ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda.</p>
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
                    </ul>
                    <h4>Apoteker Penanggung Jawab</h4>
                    <ul>
                      <li><strong>Nama:</strong> apt. Silvia Afra Meyningtyas S.Farm</li>
                      <li><strong>SIPA:</strong> T/503/44/SIPA/409.25/IV/2025</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Data yang Dikumpulkan */}
            <div className="privacy-section">
              <div 
                className="section-header"
                onClick={() => toggleSection('data')}
              >
                <h3>
                  <i className="fas fa-database"></i>
                  Data yang Kami Kumpulkan
                </h3>
                <i className={`fas fa-chevron-${activeSection === 'data' ? 'up' : 'down'}`}></i>
              </div>
              {activeSection === 'data' && (
                <div className="section-content">
                  <div className="data-types">
                    <h4>Data Pribadi</h4>
                    <ul>
                      <li>Nama lengkap, alamat, nomor telepon, email</li>
                      <li>Riwayat pembelian obat dan kondisi kesehatan</li>
                      <li>Data resep dan instruksi penggunaan obat</li>
                      <li>Informasi transaksi dan pembayaran</li>
                    </ul>
                    <h4>Data Teknis Website</h4>
                    <ul>
                      <li>Informasi perangkat dan browser</li>
                      <li>Data navigasi dan cookies</li>
                      <li>Statistik penggunaan (Google Analytics, Meta Pixel)</li>
                    </ul>
                    <h4>Data Komunikasi</h4>
                    <ul>
                      <li>Pesan WhatsApp dan email</li>
                      <li>Rekaman telepon untuk pelatihan</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Penggunaan Data */}
            <div className="privacy-section">
              <div 
                className="section-header"
                onClick={() => toggleSection('usage')}
              >
                <h3>
                  <i className="fas fa-cogs"></i>
                  Penggunaan Data
                </h3>
                <i className={`fas fa-chevron-${activeSection === 'usage' ? 'up' : 'down'}`}></i>
              </div>
              {activeSection === 'usage' && (
                <div className="section-content">
                  <div className="usage-purposes">
                    <h4>Pelayanan Farmasi</h4>
                    <ul>
                      <li>Memproses dan memenuhi pesanan obat</li>
                      <li>Memberikan konsultasi farmasi yang tepat</li>
                      <li>Menyimpan riwayat pengobatan</li>
                    </ul>
                    <h4>Komunikasi dan Layanan</h4>
                    <ul>
                      <li>Konfirmasi pesanan dan status pengiriman</li>
                      <li>Informasi produk dan layanan</li>
                      <li>Pengingat pengambilan obat</li>
                    </ul>
                    <h4>Kepatuhan Hukum</h4>
                    <ul>
                      <li>Pelaporan ke otoritas kesehatan</li>
                      <li>Mematuhi regulasi farmasi</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Keamanan Data */}
            <div className="privacy-section">
              <div 
                className="section-header"
                onClick={() => toggleSection('security')}
              >
                <h3>
                  <i className="fas fa-shield-alt"></i>
                  Keamanan Data
                </h3>
                <i className={`fas fa-chevron-${activeSection === 'security' ? 'up' : 'down'}`}></i>
              </div>
              {activeSection === 'security' && (
                <div className="section-content">
                  <div className="security-measures">
                    <h4>Perlindungan Teknis</h4>
                    <ul>
                      <li>Enkripsi data dalam penyimpanan dan transmisi</li>
                      <li>Firewall dan sistem keamanan berlapis</li>
                      <li>Backup data secara berkala</li>
                    </ul>
                    <h4>Perlindungan Fisik</h4>
                    <ul>
                      <li>Akses terbatas ke area penyimpanan data</li>
                      <li>Pengawasan CCTV dan kontrol lingkungan</li>
                    </ul>
                    <h4>Perlindungan Administratif</h4>
                    <ul>
                      <li>Pelatihan karyawan tentang keamanan data</li>
                      <li>Audit berkala dan protokol tanggap darurat</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Hak Pengguna */}
            <div className="privacy-section">
              <div 
                className="section-header"
                onClick={() => toggleSection('rights')}
              >
                <h3>
                  <i className="fas fa-user-check"></i>
                  Hak-Hak Anda
                </h3>
                <i className={`fas fa-chevron-${activeSection === 'rights' ? 'up' : 'down'}`}></i>
              </div>
              {activeSection === 'rights' && (
                <div className="section-content">
                  <div className="user-rights">
                    <h4>Hak Akses dan Kontrol</h4>
                    <ul>
                      <li>Meminta salinan data pribadi yang kami simpan</li>
                      <li>Meminta perbaikan data yang tidak akurat</li>
                      <li>Menarik persetujuan penggunaan data</li>
                      <li>Meminta penghapusan data pribadi</li>
                    </ul>
                    <h4>Hak Perlindungan</h4>
                    <ul>
                      <li>Menolak pemrosesan data untuk tujuan tertentu</li>
                      <li>Meminta ganti rugi jika terjadi pelanggaran</li>
                      <li>Mengajukan pengaduan ke otoritas yang berwenang</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Cookies */}
            <div className="privacy-section">
              <div 
                className="section-header"
                onClick={() => toggleSection('cookies')}
              >
                <h3>
                  <i className="fas fa-cookie-bite"></i>
                  Cookies dan Pelacakan
                </h3>
                <i className={`fas fa-chevron-${activeSection === 'cookies' ? 'up' : 'down'}`}></i>
              </div>
              {activeSection === 'cookies' && (
                <div className="section-content">
                  <div className="cookies-info">
                    <p>Kami menggunakan cookies untuk meningkatkan pengalaman Anda:</p>
                    <ul>
                      <li><strong>Cookies Esensial:</strong> Diperlukan untuk fungsi website</li>
                      <li><strong>Cookies Analitik:</strong> Membantu memahami penggunaan website</li>
                      <li><strong>Cookies Pemasaran:</strong> Untuk iklan yang relevan</li>
                    </ul>
                    <p>Anda dapat mengatur cookies melalui pengaturan browser Anda.</p>
                  </div>
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
                  <i className="fas fa-envelope"></i>
                  Hubungi Kami
                </h3>
                <i className={`fas fa-chevron-${activeSection === 'contact' ? 'up' : 'down'}`}></i>
              </div>
              {activeSection === 'contact' && (
                <div className="section-content">
                  <div className="contact-info">
                    <h4>Data Protection Officer</h4>
                    <ul>
                      <li><strong>Nama:</strong> apt. Silvia Afra Meyningtyas S.Farm</li>
                      <li><strong>Telepon:</strong> 085642007123</li>
                      <li><strong>Email:</strong> privacy@apoteke32.com</li>
                    </ul>
                    <h4>Kunjungi Kami</h4>
                    <p>Apotek E32<br/>
                    Jl. Raya Garum No. 14, Tawangsari, Garum, Blitar<br/>
                    Jawa Timur 66182</p>
                    <p><strong>Jam Operasional:</strong> Senin-Minggu, 08:00-21:00 WIB</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="privacy-footer">
            <p><strong>Dokumen ini berlaku sejak 18 Juli 2025</strong></p>
            <p>Dengan menggunakan layanan Apotek E32, Anda menyetujui kebijakan privasi ini. Anda memiliki hak untuk menarik persetujuan kapan saja.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
