import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Send, CheckCircle, User, Phone, Mail, FileText } from 'lucide-react';

const JobAssistance = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    jobType: ''
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
    const subject = "Job Assistance Enquiry - " + formData.jobType;
    const body = `Job Assistance Enquiry Details:

Full Name: ${formData.fullName}
Phone Number: ${formData.phone}
Email: ${formData.email}
Job Type/Position Enquiring For: ${formData.jobType}

I have attached my updated CV here.

Best regards,
${formData.fullName}`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=info@asrvdigital.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open Gmail in new tab
    window.open(gmailUrl, '_blank');

    // Show success message
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ fullName: '', phone: '', email: '', jobType: '' });
    }, 3000);
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
    <section id="job-assistance" className="section">
      <div className="section-container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Job Assistance
          </motion.h2>

          <motion.div className="job-assistance-content" variants={itemVariants}>
            <div className="job-assistance-info">
              <div className="job-icon">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <Briefcase size={48} />
                </motion.div>
              </div>
              <p className="job-description">
                Ready to launch or elevate your career? Our specialized Job Assistance services offer
                invaluable guidance and resources. We equip you with the essential tools and insights
                required to confidently pursue top opportunities and make a significant leap towards
                a rewarding and successful professional life.
              </p>
            </div>

            <div className="job-form-container">
              {!isSubmitted ? (
                <motion.form
                  className="job-form"
                  onSubmit={handleSubmit}
                  variants={itemVariants}
                >
                  <h3>Get Job Assistance</h3>

                  <div className="form-group">
                    <label htmlFor="fullName">
                      <User size={18} />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">
                      <Phone size={18} />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      <Mail size={18} />
                      Email Address *
                    </label>
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
                    <label htmlFor="jobType">
                      <FileText size={18} />
                      Job Type / Position Enquiring For *
                    </label>
                    <input
                      type="text"
                      id="jobType"
                      name="jobType"
                      value={formData.jobType}
                      onChange={handleInputChange}
                      required
                      placeholder="e.g., Analyst, Marketing Manager, Customer Service Rep"
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
                    Send Enquiry
                  </motion.button>

                  <p className="form-note">
                    * This will open Gmail with your enquiry pre-filled for sending
                  </p>
                </motion.form>
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
                  <h3>Enquiry Prepared!</h3>
                  <p>
                    Gmail has opened with your job enquiry pre-filled.
                    Please review, attach your CV, and send it to complete your application.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        .job-assistance-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 4rem;
          align-items: start;
          width: 100%;
          max-width: 100%;
        }

        .job-assistance-info {
          text-align: center;
        }

        .job-icon {
          background: var(--gradient-primary);
          border-radius: 1rem;
          padding: 1.5rem;
          color: white;
          display: inline-block;
          margin-bottom: 2rem;
        }

        .job-description {
          font-size: 1.2rem;
          color: var(--text-secondary);
          line-height: 1.8;
          text-align: left;
        }

        .job-form-container {
          background: var(--bg-secondary);
          border-radius: 1rem;
          padding: 2rem;
          border: 1px solid var(--border-color);
          box-shadow: var(--shadow);
        }

        .job-form h3 {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
          text-align: center;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .form-group label svg {
          color: var(--text-accent);
        }

        .form-group input {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid var(--border-color);
          border-radius: 0.5rem;
          background: var(--bg-primary);
          color: var(--text-primary);
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }

        .form-group input:focus {
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
          .job-assistance-content {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
          }
          
          .job-form-container {
            padding: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .job-assistance-content {
            grid-template-columns: 1fr;
          }
          
          .job-form-container {
            padding: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default JobAssistance;