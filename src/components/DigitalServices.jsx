import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Search, MousePointer, Share2, Mail, Monitor, 
  PenTool, BarChart3, Megaphone 
} from 'lucide-react';

const DigitalServices = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const services = [
    {
      title: "Search Engine Optimization (SEO)",
      icon: Search,
      points: [
        "On-page and off-page SEO optimization",
        "Keyword strategy & research",
        "Content optimization for search engines",
        "Technical SEO improvements"
      ]
    },
    {
      title: "Pay-Per-Click (PPC) Advertising",
      icon: MousePointer,
      points: [
        "Google Ads setup & management",
        "Budget optimization strategies",
        "Performance tracking & analysis",
        "ROI maximization techniques"
      ]
    },
    {
      title: "Social Media Marketing",
      icon: Share2,
      points: [
        "Campaign creation and management",
        "Organic growth strategies",
        "Audience targeting & engagement",
        "Multi-platform social presence"
      ]
    },
    {
      title: "Content & Email Marketing",
      icon: Mail,
      points: [
        "Blog/article writing & strategy",
        "Lead nurturing campaigns",
        "Email automation systems",
        "Drip campaigns & newsletters"
      ]
    },
    {
      title: "Website Design & Development",
      icon: Monitor,
      points: [
        "UI/UX focused website building",
        "Responsive, mobile-friendly layouts",
        "E-commerce solutions",
        "Performance optimization"
      ]
    },
    {
      title: "Brand Strategy",
      icon: PenTool,
      points: [
        "Brand identity creation",
        "Messaging alignment and positioning",
        "Visual identity development",
        "Brand guidelines & consistency"
      ]
    },
    {
      title: "Analytics & Reporting",
      icon: BarChart3,
      points: [
        "Google Analytics setup & configuration",
        "Custom dashboard creation",
        "ROI tracking & measurement",
        "Data-driven insights & recommendations"
      ]
    },
    {
      title: "Digital Marketing Consulting",
      icon: Megaphone,
      points: [
        "Comprehensive digital strategy",
        "Market analysis & competitor research",
        "Growth planning & execution",
        "Ongoing optimization & support"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="digital" className="section">
      <div className="section-container">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2 className="section-title" variants={cardVariants}>
          Digital Marketing Services
        </motion.h2>
        
        <motion.p className="section-subtitle" variants={cardVariants}>
          Transform your business with cutting-edge digital marketing solutions
        </motion.p>

        <div className="services-grid">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                className="service-card"
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ duration: 0.1 }}
              >
                <div className="service-header">
                  <div className="service-icon">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <IconComponent size={28} />
                    </motion.div>
                  </div>
                  <h3>{service.title}</h3>
                </div>
                <ul className="service-points">
                  {service.points.map((point, pointIndex) => (
                    <li key={pointIndex}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <motion.div className="digital-cta-section" variants={cardVariants}>
          <h3>Ready to Transform Your Digital Presence?</h3>
          <p>
            Our digital marketing experts are ready to help you grow your business 
            online. From strategy to execution, we've got you covered.
          </p>
          <motion.a
            href="#contact"
            className="btn btn-primary large"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.1 }}
          >
            Get Your Free Consultation
          </motion.a>
        </motion.div>
      </motion.div>
      </div>

      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
          width: 100%;
          max-width: 100%;
        }

        .service-card {
          background: var(--bg-secondary);
          border-radius: 1rem;
          padding: 2rem;
          border: 1px solid var(--border-color);
          box-shadow: var(--shadow);
          transition: all 0.2s ease;
          height: 100%;
          position: relative;
          overflow: hidden;
        }

        .service-card:hover {
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
          border-color: var(--text-accent);
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transition: left 0.3s ease;
        }

        .service-card:hover::before {
          left: 100%;
        }

        .service-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .service-icon {
          background: var(--gradient-primary);
          border-radius: 0.75rem;
          padding: 0.75rem;
          color: white;
          flex-shrink: 0;
          transition: all 0.2s ease;
        }

        .service-card h3 {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.3;
          margin: 0;
        }

        .service-points {
          list-style: none;
          padding: 0;
          margin: 0;
          flex-grow: 1;
        }

        .service-points li {
          color: var(--text-secondary);
          margin-bottom: 0.75rem;
          padding-left: 1.5rem;
          position: relative;
          line-height: 1.6;
        }

        .service-points li:before {
          content: "→";
          position: absolute;
          left: 0;
          top: 0;
          color: var(--text-accent);
          font-weight: bold;
          font-size: 1.2rem;
        }

        .service-points li:last-child {
          margin-bottom: 0;
        }

        .btn.large {
          padding: 1rem 2rem;
          font-size: 1.1rem;
        }

        .digital-cta-section {
          background: var(--gradient-secondary);
          border-radius: 1.5rem;
          padding: 3rem;
          text-align: center;
          color: var(--text-primary);
        }

        .digital-cta-section h3 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .digital-cta-section p {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          }
          
          .service-card {
            padding: 1.5rem;
          }
          
          .digital-cta-section {
            padding: 2rem;
          }
          
          .digital-cta-section h3 {
            font-size: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .services-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          
          .service-card {
            padding: 1rem;
          }
          
          .digital-cta-section {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default DigitalServices;