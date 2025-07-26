import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Target } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="floating-elements">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="floating-element"
              animate={{
                y: [-20, 20, -20],
                x: [-10, 10, -10],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              whileHover={{ scale: 1.2 }}
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`
              }}
            >
              <motion.div
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.2 }}
              >
                <Sparkles size={20 + i * 4} />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="hero-title" variants={itemVariants}>
          <span className="gradient-text">ASRV Digital Services</span>
        </motion.h1>

        <motion.p className="hero-subtitle" variants={itemVariants}>
          Empowering Students & Businesses
        </motion.p>

        <motion.p className="hero-description" variants={itemVariants}>
          Your trusted partner in educational consultancy and digital transformation.
          We guide students through their academic journey while helping businesses
          thrive in the digital landscape.
        </motion.p>

        <motion.div className="hero-buttons" variants={itemVariants}>
          <motion.a
            href="#educational"
            className="btn btn-primary"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.1 }}
          >
            Explore Services
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ duration: 0.1 }}
            >
              <ArrowRight size={20} />
            </motion.div>
          </motion.a>
          <motion.a
            href="#contact"
            className="btn btn-secondary"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.1 }}
          >
            Get Started
          </motion.a>
        </motion.div>

        <motion.div className="hero-stats" variants={itemVariants}>
          <div className="stat">
            <h3>5000+</h3>
            <p>Students Guided</p>
          </div>
          <div className="stat">
            <h3>500+</h3>
            <p>Businesses Transformed</p>
          </div>
          <div className="stat">
            <h3>100+</h3>
            <p>Success Stories</p>
          </div>
        </motion.div>
      </motion.div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          width: 100%;
          max-width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding-top: 80px;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: -1;
          width: 100%;
          max-width: 100%;
        }

        .hero-gradient {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          max-width: 100%;
          background: var(--gradient-hero);
          opacity: 0.1;
        }

        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          width: 100%;
          max-width: 100%;
        }

        .floating-element {
          position: absolute;
          color: var(--text-accent);
          opacity: 0.3;
        }

        .hero-content {
          text-align: center;
          max-width: 800px;
          padding: 2rem;
          width: 100%;
        }

        .hero-title {
          font-size: 4rem;
          font-weight: 800;
          margin-bottom: 1rem;
          line-height: 1.1;
        }

        .gradient-text {
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-accent);
          margin-bottom: 1rem;
        }

        .hero-description {
          font-size: 1.2rem;
          color: var(--text-secondary);
          margin-bottom: 3rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 4rem;
        }

        .hero-buttons .btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .hero-stats {
          display: flex;
          justify-content: center;
          gap: 3rem;
          flex-wrap: wrap;
        }

        .stat {
          text-align: center;
        }

        .stat h3 {
          font-size: 2.5rem;
          font-weight: 700;
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.5rem;
        }

        .stat p {
          color: var(--text-secondary);
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-subtitle {
            font-size: 1.2rem;
          }
          
          .hero-description {
            font-size: 1rem;
          }
          
          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .hero-stats {
            gap: 2rem;
          }
          
          .stat h3 {
            font-size: 2rem;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem;
          }
          
          .hero-stats {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;