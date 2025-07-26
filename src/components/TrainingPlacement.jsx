import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  GraduationCap, Code, Users, Award, Target, Briefcase,
  BookOpen, TrendingUp, CheckCircle, Star, Zap, Shield
} from 'lucide-react';

const TrainingPlacement = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const services = [
    {
      title: "Skill Development Programs",
      icon: Code,
      points: [
        "Technical skills training (Programming, Web Development, Data Science)",
        "Soft skills enhancement (Communication, Leadership, Teamwork)",
        "Industry-specific certifications and courses",
        "Hands-on project-based learning approach"
      ]
    },
    {
      title: "Professional Training",
      icon: BookOpen,
      points: [
        "Corporate training programs",
        "Interview preparation and mock sessions",
        "Resume building and portfolio development",
        "Industry best practices and standards"
      ]
    },
    {
      title: "Placement Assistance",
      icon: Briefcase,
      points: [
        "Job matching with partner companies",
        "Career counseling and guidance",
        "Salary negotiation support",
        "Post-placement follow-up and support"
      ]
    },
    {
      title: "Industry Partnerships",
      icon: Users,
      points: [
        "Direct connections with hiring companies",
        "Internship opportunities with top firms",
        "Industry mentorship programs",
        "Networking events and job fairs"
      ]
    },
    {
      title: "Certification Programs",
      icon: Award,
      points: [
        "Industry-recognized certifications",
        "Digital marketing certifications",
        "Technical skill certifications",
        "Professional development certificates"
      ]
    },
    {
      title: "Career Advancement",
      icon: TrendingUp,
      points: [
        "Career path planning and roadmapping",
        "Skill gap analysis and improvement",
        "Leadership development programs",
        "Continuous learning support"
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
    <section id="training-placement" className="section">
      <div className="section-container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={cardVariants}>
            Training & Placement Services
          </motion.h2>
          
          <motion.div className="training-intro" variants={cardVariants}>
            <div className="training-icon">
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ duration: 0.2 }}
              >
                <GraduationCap size={48} />
              </motion.div>
            </div>
            <p className="training-summary">
              Our Training & Placement program is designed to bridge the gap between academic 
              knowledge and industry demands. We provide cutting-edge, hands-on training coupled 
              with dedicated placement assistance, ensuring you gain the essential skills and 
              secure the rewarding career you deserve for a brighter future.
            </p>
          </motion.div>

          <div className="services-grid">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  className="service-card"
                  variants={cardVariants}
                  whileHover={{ y: -8, scale: 1.03 }}
                  transition={{ duration: 0.1 }}
                >
                  <div className="service-header">
                    <div className="service-icon">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
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

          <motion.div className="training-cta-section" variants={cardVariants}>
            <div className="cta-content">
              <h3>Ready to Transform Your Career?</h3>
              <p>
                Join our comprehensive training programs and take the first step 
                towards a successful career with guaranteed placement assistance.
              </p>
              <div className="cta-features">
                <div className="feature">
                  <CheckCircle size={20} />
                  <span>100% Practical Training</span>
                </div>
                <div className="feature">
                  <Star size={20} />
                  <span>Industry Expert Trainers</span>
                </div>
                <div className="feature">
                  <Shield size={20} />
                  <span>Placement Guarantee</span>
                </div>
              </div>
              <motion.a
                href="#contact"
                className="btn btn-primary large"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.1 }}
              >
                <motion.div
                  whileHover={{ rotate: 15 }}
                  transition={{ duration: 0.1 }}
                >
                  <Zap size={20} />
                </motion.div>
                Start Your Training Journey
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        .training-intro {
          text-align: center;
          margin-bottom: 4rem;
        }

        .training-icon {
          background: var(--gradient-primary);
          border-radius: 1rem;
          padding: 1.5rem;
          color: white;
          display: inline-block;
          margin-bottom: 2rem;
        }

        .training-summary {
          font-size: 1.2rem;
          color: var(--text-secondary);
          line-height: 1.8;
          max-width: 800px;
          margin: 0 auto;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
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
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
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
          align-items: flex-start;
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
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.3;
          margin: 0;
        }

        .service-points {
          list-style: none;
          padding: 0;
          margin: 0;
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

        .training-cta-section {
          background: var(--gradient-secondary);
          border-radius: 1.5rem;
          padding: 3rem;
          text-align: center;
          color: var(--text-primary);
        }

        .cta-content h3 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .cta-content p {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-features {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .feature {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-accent);
          font-weight: 600;
        }

        .feature svg {
          color: var(--text-accent);
        }

        .btn.large {
          padding: 1rem 2rem;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          }
          
          .service-card {
            padding: 1.5rem;
          }
          
          .training-cta-section {
            padding: 2rem;
          }
          
          .cta-content h3 {
            font-size: 1.5rem;
          }
          
          .cta-features {
            flex-direction: column;
            gap: 1rem;
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
          
          .training-cta-section {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default TrainingPlacement;