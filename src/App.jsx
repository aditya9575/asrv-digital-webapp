import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import EducationalServices from './components/EducationalServices';
import DigitalServices from './components/DigitalServices';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeProvider from './context/ThemeContext';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="loading-content"
        >
          <h1>ASRV Digital Services</h1>
          <motion.div
            className="loading-spinner"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 1.2, duration: 0.3 }}
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="star-animation"
          >
            ✨
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <Hero />
        <About />
        <EducationalServices />
        <DigitalServices />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;