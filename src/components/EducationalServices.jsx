import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  BookOpen, GraduationCap, Target, Users, Award, FileText, 
  Globe, TrendingUp, Calculator, Brain, Compass, Star,
  Clock, Heart, Zap, Shield, Lightbulb, Map
} from 'lucide-react';

const EducationalServices = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const services = [
    {
      title: "Academic Advising",
      icon: BookOpen,
      points: [
        "Course selection & curriculum planning",
        "Study skills & time management",
        "Tutoring recommendations", 
        "Academic challenge support"
      ]
    },
    {
      title: "Admissions Consulting",
      icon: GraduationCap,
      points: [
        "UG Admissions: CUET, JEE, NEET, CLAT, IIT/NIT/DU/private universities",
        "PG Admissions: SOP, GRE, GMAT, CAT, GATE, PhD/MBA/etc.",
        "Boarding School Admissions",
        "Transfer Student Advising"
      ]
    },
    {
      title: "Career Counseling",
      icon: Target,
      points: [
        "Career planning aligned with academics",
        "Internship guidance",
        "Post-graduation strategy",
        "Industry insights and trends"
      ]
    },
    {
      title: "K-12 & Early Education Planning",
      icon: Heart,
      points: [
        "Preschool/kindergarten readiness",
        "School selection (private/public)",
        "Early learning development",
        "Educational foundation building"
      ]
    },
    {
      title: "Curriculum Development & Enrichment",
      icon: Brain,
      points: [
        "Personalized learning plans",
        "Enrichment programs",
        "Gifted/talented support",
        "Skill enhancement programs"
      ]
    },
    {
      title: "Academic Assessments",
      icon: FileText,
      points: [
        "Diagnostics for strengths & weaknesses",
        "Interpretation & planning",
        "Progress tracking",
        "Performance optimization"
      ]
    },
    {
      title: "Vocational & Alternative Education",
      icon: Compass,
      points: [
        "Trade schools guidance",
        "Apprenticeships programs",
        "Non-traditional educational paths",
        "Skill-based career planning"
      ]
    },
    {
      title: "Extracurricular & Leadership Development",
      icon: Star,
      points: [
        "Activity planning for profile building",
        "Leadership development programs",
        "Community work guidance",
        "Portfolio enhancement"
      ]
    },
    {
      title: "Gap Year Planning",
      icon: Clock,
      points: [
        "Productive gap year activities",
        "Skill development programs",
        "Work experience guidance",
        "Academic preparation during gaps"
      ]
    },
    {
      title: "Portfolio for Creative Fields",
      icon: Lightbulb,
      points: [
        "Creative portfolio development",
        "Artistic skill enhancement",
        "Industry-specific guidance",
        "Creative career pathways"
      ]
    },
    {
      title: "Interview Coaching",
      icon: Users,
      points: [
        "Mock interview sessions",
        "Communication skills development",
        "Confidence building",
        "Interview strategy planning"
      ]
    },
    {
      title: "Specialized Services",
      icon: Zap,
      points: [
        "Deferral/waitlist strategy",
        "Post-acceptance mentorship",
        "Transition support programs",
        "Ongoing academic guidance"
      ]
    },
    {
      title: "International Student Services",
      icon: Globe,
      points: [
        "Study abroad planning",
        "Visa guidance & documentation",
        "Cultural adaptation support",
        "International education pathways"
      ]
    },
    {
      title: "Test Prep Guidance",
      icon: Calculator,
      points: [
        "JEE, NEET, CUET preparation",
        "CAT, UPSC coaching guidance",
        "GRE, IELTS, TOEFL support",
        "Resource recommendations & strategy"
      ]
    },
    {
      title: "Financial Aid & Scholarships",
      icon: Award,
      points: [
        "NSP Portal assistance",
        "Scholarship application guidance",
        "Financial planning for education",
        "Grant and aid optimization"
      ]
    },
    {
      title: "Academic Crisis & Recovery",
      icon: Shield,
      points: [
        "Academic probation support",
        "Board failure recovery",
        "NIOS/Open school guidance",
        "Re-engagement strategies"
      ]
    },
    {
      title: "Personalized Educational Roadmapping",
      icon: Map,
      points: [
        "Long-term education strategy",
        "Goal-oriented planning",
        "Milestone tracking",
        "Adaptive pathway development"
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
    <section id="educational" className="section">
      <div className="section-container">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2 className="section-title" variants={cardVariants}>
          Educational Consultancy Services
        </motion.h2>
        
        <motion.p className="section-subtitle" variants={cardVariants}>
          Comprehensive guidance for every step of your educational journey
        </motion.p>

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
                      <IconComponent size={32} />
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
      </motion.div>
      </div>

      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
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
          content: "✓";
          position: absolute;
          left: 0;
          top: 0;
          color: var(--text-accent);
          font-weight: bold;
          font-size: 1.1rem;
        }

        .service-points li:last-child {
          margin-bottom: 0;
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          }
          
          .service-card {
            padding: 1.5rem;
          }
          
          .service-header {
            flex-direction: column;
            text-align: center;
          }
          
          .service-icon {
            align-self: center;
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
        }
      `}</style>
    </section>
  );
};

export default EducationalServices;