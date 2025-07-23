import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create Gmail compose URL with prefilled data
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=info@asrvdigital.com&su=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    // Open Gmail in new tab
    window.open(gmailUrl, '_blank');

    // Show success message
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleWhatsAppClick = () => {
    const message = "Hi, I'm interested in your services and would like to know more!";
    const whatsappUrl = `https://wa.me/8349204267?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="contact" className="section">
      <div className="section-container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Get In Touch
          </motion.h2>

          <motion.p className="section-subtitle" variants={itemVariants}>
            Ready to start your journey? We're here to help you succeed
          </motion.p>

          <div className="contact-container">
            <motion.div className="contact-info" variants={itemVariants}>
              <h3>Contact Information</h3>
              <p>
                Reach out to us through any of these channels. We're committed to
                responding within 24 hours.
              </p>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="contact-icon">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.1 }}
                    >
                      <Mail size={24} />
                    </motion.div>
                  </div>
                  <div className="contact-details">
                    <h4>Email Us</h4>
                    <p>info@asrvdigital.com</p>
                    <small>Get detailed responses to your queries</small>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: -10 }}
                      transition={{ duration: 0.1 }}
                    >
                      <Phone size={24} />
                    </motion.div>
                  </div>
                  <div className="contact-details">
                    <h4>Call Us</h4>
                    <p>+91 8349204267</p>
                    <small>Speak directly with our experts</small>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon">
                    <motion.div
                      whileHover={{ scale: 1.2, y: -3 }}
                      transition={{ duration: 0.1 }}
                    >
                      <MapPin size={24} />
                    </motion.div>
                  </div>
                  <div className="contact-details">
                    <h4>Visit Us</h4>
                    <p>First Floor, Aman Complex, Above Nobel Furniture Near Apsara Talkies, Madhya Pradesh, Bhopal, 462023</p>
                    <small>Schedule an appointment</small>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Clock size={24} />
                    </motion.div>
                  </div>
                  <div className="contact-details">
                    <h4>Business Hours</h4>
                    <p>Mon-Sat: 10 AM - 6 PM</p>
                    <small>Sunday: By appointment</small>
                  </div>
                </div>
              </div>

              <motion.button
                className="whatsapp-btn"
                onClick={handleWhatsAppClick}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.1 }}
              >
                <motion.div
                  whileHover={{ rotate: 15 }}
                  transition={{ duration: 0.1 }}
                >
                  <MessageCircle size={20} />
                </motion.div>
                Chat on WhatsApp
              </motion.button>
            </motion.div>

            <motion.div className="contact-form-section" variants={itemVariants}>
              {!isSubmitted ? (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <h3>Send us a Message</h3>

                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="What can we help you with?"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="5"
                      placeholder="Tell us more about your requirements..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="btn btn-primary submit-btn"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.1 }}
                  >
                    <motion.div
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.1 }}
                    >
                      <Send size={20} />
                    </motion.div>
                    Send Message
                  </motion.button>

                  <p className="form-note">
                    * This will open Gmail with your message pre-filled for sending
                  </p>
                </form>
              ) : (
                <motion.div
                  className="success-message"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <CheckCircle size={48} />
                  </motion.div>
                  <h3>Message Prepared!</h3>
                  <p>
                    Gmail has opened with your message pre-filled.
                    Please review and send it to complete your inquiry.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .contact-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 4rem;
          align-items: start;
          width: 100%;
          max-width: 100%;
        }

        .contact-info h3 {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .contact-info > p {
          color: var(--text-secondary);
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .contact-method {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1rem;
          background: var(--bg-secondary);
          border-radius: 0.75rem;
          border: 1px solid var(--border-color);
          transition: all 0.2s ease;
        }

        .contact-method:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          border-color: var(--text-accent);
        }

        .contact-icon {
          background: var(--gradient-primary);
          border-radius: 0.5rem;
          padding: 0.75rem;
          color: white;
          flex-shrink: 0;
          transition: all 0.2s ease;
        }

        .contact-details h4 {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
          color: var(--text-primary);
        }

        .contact-details p {
          color: var(--text-secondary);
          margin-bottom: 0.25rem;
          font-weight: 500;
        }

        .contact-details small {
          color: var(--text-secondary);
          opacity: 0.8;
        }

        .whatsapp-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: #25D366;
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
          justify-content: center;
        }

        .whatsapp-btn:hover {
          background: #128C7E;
          transform: translateY(-2px);
        }

        .contact-form-section {
          background: var(--bg-secondary);
          border-radius: 1rem;
          padding: 2rem;
          border: 1px solid var(--border-color);
          box-shadow: var(--shadow);
        }

        .contact-form h3 {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid var(--border-color);
          border-radius: 0.5rem;
          background: var(--bg-primary);
          color: var(--text-primary);
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--text-accent);
        }

        .submit-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          width: 100%;
          justify-content: center;
          margin-bottom: 1rem;
        }

        .form-note {
          font-size: 0.9rem;
          color: var(--text-secondary);
          text-align: center;
          font-style: italic;
        }

        .success-message {
          text-align: center;
          padding: 2rem;
          color: var(--text-primary);
        }

        .success-message svg {
          color: #10B981;
          margin-bottom: 1rem;
        }

        .success-message h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .success-message p {
          color: var(--text-secondary);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .contact-container {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
          }
          
          .contact-form-section {
            padding: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .contact-container {
            grid-template-columns: 1fr;
          }
          
          .contact-form-section {
            padding: 1rem;
          }
          
          .contact-method {
            padding: 0.75rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;