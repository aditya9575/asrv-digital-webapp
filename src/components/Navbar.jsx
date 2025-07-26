import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Educational Services', href: '#educational' },
    { name: 'Digital Marketing', href: '#digital' },
    { name: 'Job Assistance', href: '#job-assistance' }, //added this content , jobassistance component, added in app.jsx , added in footer 
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="navbar-container">
        {/* Brand */}
        <div className="navbar-brand">
          <motion.h2
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ duration: 0.1 }}
            className="brand-text"
          >
            ASRV Digital Services
          </motion.h2>
        </div>

        {/* Desktop Nav */}
        <div className="navbar-menu desktop">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="nav-link"
              whileHover={{ y: -3, scale: 1.05, transition: { duration: 0.1 } }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              {item.name}
            </motion.a>
          ))}

          <motion.button
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="theme-toggle"
          >
            <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.3 }}>
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Nav */}
        <div className="navbar-menu mobile">
          <motion.button
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="theme-toggle"
          >
            <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.3 }}>
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </motion.div>
          </motion.button>

          <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
            <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.1 }}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="mobile-menu"
        >
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="mobile-nav-link"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item.name}
            </motion.a>
          ))}
        </motion.div>
      )}
      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border-color);
          transition: all 0.3s ease;
        }
        
        .dark .navbar {
          background: rgba(15, 23, 42, 0.95);
        }
        
        .navbar.scrolled {
          box-shadow: var(--shadow);
        }
        
        .navbar-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          max-width: 100%;
        }
        
        .brand-text {
          font-size: 1.5rem;
          font-weight: 700;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .navbar-menu.desktop {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        
        .navbar-menu.mobile {
          display: none;
          align-items: center;
          gap: 1rem;
        }
        
        .nav-link {
          color: var(--text-primary);
          text-decoration: none;
          font-weight: 500;
          transition: all 0.2s ease;
          position: relative;
        }
        
        .nav-link:hover {
          color: var(--text-accent);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--text-accent);
          transition: width 0.2s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }
        
        .theme-toggle {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 0.5rem;
          padding: 0.5rem;
          color: var(--text-primary);
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .theme-toggle:hover {
          background: var(--bg-accent);
          color: white;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }
        
        .mobile-toggle {
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
        }
        
        .mobile-menu {
          background: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
          padding: 1rem;
        }
        
        .mobile-nav-link {
          display: block;
          color: var(--text-primary);
          text-decoration: none;
          padding: 0.75rem 0;
          border-bottom: 1px solid var(--border-color);
          font-weight: 500;
        }
        
        .mobile-nav-link:last-child {
          border-bottom: none;
        }
        
        @media (max-width: 768px) {
          .navbar-menu.desktop {
            display: none;
          }
          
          .navbar-menu.mobile {
            display: flex;
          }
        }
      `}</style>
    </motion.nav>
  );
};

export default Navbar;
