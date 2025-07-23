import React from 'react';
import { motion } from 'framer-motion';
import {
  Instagram, Linkedin, Mail, Phone,
  MapPin, Clock, ArrowUp
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/asrv_digital_services/", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/asrv-digital-services-0b39a730b/", label: "LinkedIn" }
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Educational Services", href: "#educational" },
    { name: "Digital Marketing", href: "#digital" },
    { name: "Contact", href: "#contact" },
    { name: "Meet the Developer", href: "https://www.linkedin.com/in/aditya-m-0bb92b110/" },
  ];

  const services = [
    "Academic Advising",
    "Admissions Consulting",
    "Career Counseling",
    "SEO Services",
    "PPC Advertising",
    "Social Media Marketing"
  ];

  return (
    <footer className="footer">
      <div className="footer-content">

        {/* Brand and Socials */}
        <div className="footer-section">
          <motion.div
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3>ASRV Digital Services</h3>
            <p>
              Empowering students and businesses through comprehensive
              consultancy services and digital transformation solutions.
            </p>
            <div className="social-links">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    whileHover={{ scale: 1.2, y: -3, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.3 }}>
                      <Icon size={20} />
                    </motion.div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <a href={link.href}>{link.name}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Services */}
        <div className="footer-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4>Our Services</h4>
            <ul className="footer-links">
              {services.map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <span>{service}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4>Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <Mail size={16} />
                <span>info@asrvdigital.com</span>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <span>+91 8349204267</span>
              </div>
              <div className="contact-item">
                <MapPin size={16} />
                <span>Bhopal, Madhya Pradesh</span>
              </div>
              <div className="contact-item">
                <Clock size={16} />
                <span>Mon-Sat: 9 AM - 7 PM</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            © {currentYear} ASRV Digital Services. All rights reserved.
          </motion.p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        className="scroll-to-top"
        onClick={scrollToTop}
        whileHover={{ scale: 1.2, y: -3, rotate: 360 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.1 }}>
          <ArrowUp size={20} />
        </motion.div>
      </motion.button>
      <style>{`
        .footer {
          background: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
          position: relative;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 4rem 1rem 2rem;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          width: 100%;
          max-width: 100%;
        }

        .footer-brand h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .footer-brand p {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: var(--gradient-primary);
          color: white;
          border-radius: 0.5rem;
          text-decoration: none;
          transition: all 0.2s ease;
          position: relative;
          overflow: hidden;
        }

        .social-link:hover {
          background: var(--text-accent) !important;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
          transform: translateY(-3px) scale(1.1);
        }

        .social-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.3s ease;
        }

        .social-link:hover::before {
          left: 100%;
        }

        .footer-section h4 {
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin-bottom: 0.75rem;
        }

        .footer-links a,
        .footer-links span {
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 0.3s ease;
          cursor: pointer;
        }

        .footer-links a:hover {
          color: var(--text-accent);
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
        }

        .contact-item svg {
          color: var(--text-accent);
          flex-shrink: 0;
        }

        .footer-bottom {
          border-top: 1px solid var(--border-color);
          padding: 1.5rem 1rem;
        }

        .footer-bottom-content {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
          width: 100%;
          max-width: 100%;
        }

        .footer-bottom p {
          color: var(--text-secondary);
          margin: 0;
        }

        .scroll-to-top {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 50px;
          height: 50px;
          background: var(--gradient-primary);
          color: white;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
          z-index: 100;
          transition: all 0.2s ease;
        }

        @media (max-width: 1024px) {
          .footer-content {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          }
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            text-align: center;
          }
          
          .contact-info {
            align-items: center;
          }
          
          .social-links {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .footer-content {
            grid-template-columns: 1fr;
            padding: 2rem 1rem;
          }
          
          .scroll-to-top {
            bottom: 1rem;
            right: 1rem;
            width: 45px;
            height: 45px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
