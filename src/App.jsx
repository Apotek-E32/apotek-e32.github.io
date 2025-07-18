import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Products from './components/Products';
import Order from './components/Order';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Header />
          <main>
            <Hero />
            <Features />
            <Products />
            <Order />
            <Contact />
          </main>
          <Footer />
          <WhatsAppFloat />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App
