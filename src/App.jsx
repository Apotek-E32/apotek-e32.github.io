import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import HomePage from './components/HomePage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import CareersPage from './components/CareersPage';
import { initAnalytics } from './utils/analytics';
import './App.css';

function App() {
  useEffect(() => {
    // Initialize all analytics (Facebook Pixel + Google Analytics)
    initAnalytics();
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/karir" element={<CareersPage />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppFloat />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App
