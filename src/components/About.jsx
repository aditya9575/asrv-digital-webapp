import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Eye, Award, Users } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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
    <section id="about" className="section">
      <div className="section-container">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          About ASRV Digital Services
        </motion.h2>
        
        <motion.p className="section-subtitle" variants={itemVariants}>
          Building bridges between dreams and achievements through personalized guidance and innovative solutions
        </motion.p>

        <div className="grid grid-2 gap-4 mb-4">
          <motion.div className="about-content" variants={itemVariants}>
            <h3>Our Story</h3>
            <p>
              Founded with a vision to transform the educational and digital landscape, 
              ASRV Digital Services has been at the forefront of providing comprehensive 
              consultancy services. We understand that every student's journey is unique, 
              and every business has distinct needs.
            </p>
            <p>
              Our team of experienced professionals combines deep industry knowledge 
              with innovative approaches to deliver solutions that create lasting impact. 
              From academic guidance to digital transformation, we're your trusted partner 
              in achieving excellence.
            </p>
          </motion.div>

          <motion.div className="values-grid" variants={itemVariants}>
            <div className="value-card">
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ duration: 0.1 }}
              >
                <Heart className="value-icon" />
              </motion.div>
              <h4>Passion</h4>
              <p>Dedicated to student success and business growth</p>
            </div>
            <div className="value-card">
              <motion.div
                whileHover={{ scale: 1.2, rotate: -10 }}
                transition={{ duration: 0.1 }}
              >
                <Eye className="value-icon" />
              </motion.div>
              <h4>Vision</h4>
              <p>Creating pathways to educational and digital excellence</p>
            </div>
            <div className="value-card">
              <motion.div
                whileHover={{ scale: 1.2, y: -5 }}
                transition={{ duration: 0.1 }}
              >
                <Award className="value-icon" />
              </motion.div>
              <h4>Excellence</h4>
              <p>Committed to delivering outstanding results</p>
            </div>
            <div className="value-card">
              <motion.div
                whileHover={{ scale: 1.2, rotate: 15 }}
                transition={{ duration: 0.1 }}
              >
                <Users className="value-icon" />
              </motion.div>
              <h4>Community</h4>
              <p>Building lasting relationships and success stories</p>
            </div>
          </motion.div>
        </div>

        <motion.div className="mission-vision" variants={itemVariants}>
          <div className="mission-card">
            <h3>Our Mission</h3>
            <p>
              "To empower students and businesses by providing exceptional consultancy 
              services that bridge the gap between potential and achievement, fostering 
              growth through personalized guidance and innovative digital solutions."
            </p>
          </div>
          <div className="vision-card">
            <h3>Our Vision</h3>
            <p>
              "To be the leading consultancy firm that transforms lives through education 
              and drives business success through digital innovation, creating a positive 
              impact in the Indian market and beyond."
            </p>
          </div>
        </motion.div>

        <motion.div className="quote-section" variants={itemVariants}>
          <blockquote>
            "Success is not just about reaching your destination, but about having the right guidance throughout your journey."
          </blockquote>
          <cite>- ASRV Digital Services Team</cite>
        </motion.div>
      </motion.div>
      </div>

      <style>{`
        .about-content h3 {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }

        .about-content p {
          color: var(--text-secondary);
          margin-bottom: 1rem;
          line-height: 1.8;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        .value-card {
          background: var(--bg-secondary);
          padding: 1.5rem;
          border-radius: 0.75rem;
          border: 1px solid var(--border-color);
          text-align: center;
          transition: all 0.2s ease;
          position: relative;
          overflow: hidden;
        }

        .value-card:hover {
          transform: translateY(-8px) scale(1.05);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
          border-color: var(--text-accent);
        }

        .value-icon {
          width: 40px;
          height: 40px;
          color: var(--text-accent);
          margin: 0 auto 1rem;
        }

        .value-card h4 {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }

        .value-card p {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .mission-vision {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .mission-card, .vision-card {
          background: var(--bg-secondary);
          padding: 2rem;
          border-radius: 1rem;
          border: 1px solid var(--border-color);
          box-shadow: var(--shadow);
        }

        .mission-card h3, .vision-card h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .mission-card p, .vision-card p {
          color: var(--text-secondary);
          line-height: 1.7;
          font-style: italic;
        }

        .quote-section {
          text-align: center;
          background: var(--bg-secondary);
          padding: 3rem;
          border-radius: 1rem;
          border: 1px solid var(--border-color);
          box-shadow: var(--shadow);
        }

        .quote-section blockquote {
          font-size: 1.5rem;
          font-style: italic;
          color: var(--text-primary);
          margin-bottom: 1rem;
          line-height: 1.6;
        }

        .quote-section cite {
          color: var(--text-accent);
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .grid-2 {
            grid-template-columns: 1fr;
          }
          
          .values-grid {
            grid-template-columns: 1fr;
          }
          
          .mission-vision {
            grid-template-columns: 1fr;
          }
          
          .quote-section {
            padding: 2rem;
          }
          
          .quote-section blockquote {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;