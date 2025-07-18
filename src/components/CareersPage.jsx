import React, { useState, useEffect, useRef } from 'react';
import { trackJobView, trackJobApplication } from '../utils/fbPixel';
import { useTheme } from '../contexts/ThemeContext';
import lokerImage from '../assets/loker-apotek-blitar.png';
import './CareersPage.css';

const CareersPage = () => {
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
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Update page title
    document.title = 'Karir - Apotek E32';
    
    // Track when careers page is viewed
    trackJobView('Tenaga Teknis Kefarmasian');
    
    return () => {
      // Reset title when leaving page
      document.title = 'Apotek E32 - Kesehatan Keluarga Terpercaya';
    };
  }, []);

  const jobDetails = {
    title: 'Tenaga Teknis Kefarmasian',
    location: 'Blitar, Jawa Timur',
    type: 'Full-time',
    experience: '0-2 tahun',
    salary: 'Kompetitif',
    requirements: [
      'Lulusan D3/S1 Farmasi atau bidang terkait',
      'Memiliki STR (Surat Tanda Registrasi) yang masih berlaku',
      'Pengalaman kerja di apotek minimal 1 tahun (diutamakan)',
      'Menguasai sistem komputer dan software apotek',
      'Memiliki kemampuan komunikasi yang baik',
      'Teliti, jujur, dan dapat bekerja dalam tim',
      'Bersedia bekerja shift (pagi, siang, malam)',
      'Domisili Blitar dan sekitarnya'
    ],
    responsibilities: [
      'Melayani penjualan obat-obatan sesuai resep dokter',
      'Memberikan informasi dan konsultasi obat kepada pasien',
      'Melakukan pencatatan dan pelaporan obat-obatan',
      'Menjaga kebersihan dan kerapihan area kerja',
      'Membantu dalam pengelolaan stok obat',
      'Melakukan pelayanan administratif apotek',
      'Mengikuti prosedur keselamatan dan kesehatan kerja',
      'Memberikan pelayanan prima kepada pelanggan'
    ],
    benefits: [
      'Gaji pokok yang kompetitif',
      'Tunjangan kesehatan',
      'Tunjangan transportasi',
      'Bonus kinerja',
      'Pelatihan dan pengembangan profesional',
      'Lingkungan kerja yang kondusif',
      'Kesempatan karir yang jelas',
      'Cuti tahunan'
    ]
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Track job application
      trackJobApplication(jobDetails.title, formData.nama);

      // Prepare WhatsApp message
      const message = `*LAMARAN KERJA - ${jobDetails.title}*

*Data Pelamar:*
Nama: ${formData.nama}
Email: ${formData.email}
Telepon: ${formData.telepon}
Alamat: ${formData.alamat}
Pendidikan: ${formData.pendidikan}
Pengalaman: ${formData.pengalaman}

*Motivasi:*
${formData.motivasi}

*Waktu Melamar:* ${new Date().toLocaleString('id-ID')}

Terima kasih atas perhatiannya.`;

      // Send to WhatsApp
      const whatsappUrl = `https://wa.me/62085642007123?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');

      // Reset form
      setFormData({
        nama: '',
        email: '',
        telepon: '',
        alamat: '',
        pendidikan: '',
        pengalaman: '',
        motivasi: ''
      });

      // Close modal
      setIsApplicationOpen(false);
      
      // Show success message
      alert('Lamaran berhasil dikirim! Kami akan segera menghubungi Anda.');

    } catch (error) {
      console.error('Error sending application:', error);
      alert('Terjadi kesalahan. Silakan coba lagi atau hubungi kami langsung.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const openGoogleMaps = () => {
    const googleMapsUrl = 'https://maps.app.goo.gl/31wVEGyXZFk8rFYK8';
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <div className="careers-page">
      <div className="container">
        <div className="careers-page-header">
          <h1>Karir di Apotek E32</h1>
          <p className="careers-subtitle">Bergabunglah dengan tim profesional kami dalam melayani kesehatan masyarakat</p>
        </div>

        <div className="careers-content">
          <div className="job-banner">
            <img src={lokerImage} alt="Lowongan Kerja Apotek E32" className="job-image" />
            <div className="job-badge">
              <i className="fas fa-briefcase"></i>
              <span>Lowongan Tersedia</span>
            </div>
          </div>

          <div className="job-details">
            <div className="job-header">
              <h2>{jobDetails.title}</h2>
              <div className="job-meta">
                <span><i className="fas fa-map-marker-alt"></i> {jobDetails.location}</span>
                <span><i className="fas fa-clock"></i> {jobDetails.type}</span>
                <span><i className="fas fa-user-tie"></i> {jobDetails.experience}</span>
                <span><i className="fas fa-money-bill-wave"></i> {jobDetails.salary}</span>
              </div>
            </div>

            <div className="job-sections">
              <div className="job-section">
                <h3><i className="fas fa-check-circle"></i> Persyaratan</h3>
                <ul>
                  {jobDetails.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>

              <div className="job-section">
                <h3><i className="fas fa-tasks"></i> Tanggung Jawab</h3>
                <ul>
                  {jobDetails.responsibilities.map((resp, index) => (
                    <li key={index}>{resp}</li>
                  ))}
                </ul>
              </div>

              <div className="job-section">
                <h3><i className="fas fa-gift"></i> Benefit</h3>
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
              <button 
                onClick={openGoogleMaps}
                className="btn btn-secondary location-btn"
              >
                <i className="fas fa-map"></i>
                Lihat Lokasi
              </button>
            </div>
          </div>
        </div>

        {/* Company Info Section */}
        <div className="company-info-section">
          <div className="company-info-content">
            <h2>Mengapa Bergabung dengan Apotek E32?</h2>
            <div className="company-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">
                  <i className="fas fa-award"></i>
                </div>
                <h3>Profesional</h3>
                <p>Lingkungan kerja yang profesional dengan standar pelayanan farmasi yang tinggi</p>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">
                  <i className="fas fa-users"></i>
                </div>
                <h3>Tim Solid</h3>
                <p>Bergabung dengan tim yang berpengalaman dan saling mendukung</p>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h3>Karir Jelas</h3>
                <p>Kesempatan pengembangan karir dan peningkatan kompetensi yang berkelanjutan</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="careers-contact-section">
          <h2>Punya Pertanyaan?</h2>
          <p>Jangan ragu untuk menghubungi kami jika ada pertanyaan tentang lowongan kerja ini.</p>
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <span>085642007123</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>Jl. Raya Garum No.14, Blitar, Jawa Timur</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-clock"></i>
              <span>Senin - Minggu: 08:00 - 21:00 WIB</span>
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
                  <label htmlFor="telepon">Nomor Telepon *</label>
                  <input
                    type="tel"
                    id="telepon"
                    name="telepon"
                    value={formData.telepon}
                    onChange={handleInputChange}
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
                    rows="2"
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
                    <option value="D3 Farmasi">D3 Farmasi</option>
                    <option value="S1 Farmasi">S1 Farmasi</option>
                    <option value="S1 Kimia">S1 Kimia</option>
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
                    rows="3"
                    placeholder="Ceritakan pengalaman kerja Anda (jika ada)"
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
                    placeholder="Ceritakan motivasi Anda bergabung dengan Apotek E32"
                    required
                  ></textarea>
                </div>
                
                <div className="form-note">
                  <i className="fas fa-info-circle"></i>
                  Lamaran akan dikirim melalui WhatsApp untuk proses yang lebih cepat
                </div>
                
                <div className="form-actions">
                  <button 
                    type="button" 
                    onClick={() => setIsApplicationOpen(false)}
                    className="btn btn-secondary"
                  >
                    Batal
                  </button>
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <i className="fas fa-spinner fa-spin"></i>
                        Mengirim...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane"></i>
                        Kirim Lamaran
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CareersPage;
