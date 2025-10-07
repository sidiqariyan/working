import React, { useState } from 'react'
import { motion } from 'framer-motion'
import SEO from '../utils/SEO'
import Testimonials from '../components/Testimonials'
import AnimatedCounter from '../components/AnimatedCounter'
import {
  FiTrendingUp,
  FiCheckCircle,
  FiUsers,
  FiMail,
  FiTarget,
  FiAward,
  FiArrowRight,
  FiBarChart
} from 'react-icons/fi'

const caseStudies = [
  {
    id: 1,
    company: 'TechStartup Inc.',
    industry: 'SaaS',
    image: '/assets/img/home-one/analytic_small.png',
    logo: '/assets/img/home-one/1.png',
    challenge: 'Low email deliverability and high bounce rates affecting campaign performance',
    solution: 'Implemented Chatriox validation + warm-up strategy with smart throttling',
    results: [
      { label: 'Reply Rate Increase', value: 240, suffix: '%' },
      { label: 'Inbox Placement', value: 98.5, suffix: '%' },
      { label: 'Time Saved', value: 15, suffix: 'hrs/week' }
    ],
    testimonial: 'Chatriox transformed our outreach. We now reach more prospects with better engagement.',
    author: 'Sarah Johnson',
    position: 'Head of Growth',
    color: '#667eea'
  },
  {
    id: 2,
    company: 'Global Retail Co.',
    industry: 'E-commerce',
    image: '/assets/img/home-one/features_img_two.png',
    logo: '/assets/img/home-one/2.png',
    challenge: 'Fragmented communication across email and WhatsApp channels',
    solution: 'Unified inbox with cross-channel automation and AI-powered routing',
    results: [
      { label: 'Response Time', value: 50, suffix: '% faster' },
      { label: 'Customer Satisfaction', value: 95, suffix: '%' },
      { label: 'Cost Reduction', value: 30, suffix: '%' }
    ],
    testimonial: 'The unified inbox changed everything. Our team is more efficient than ever.',
    author: 'Michael Chen',
    position: 'VP of Customer Success',
    color: '#0cebeb'
  },
  {
    id: 3,
    company: 'Digital Marketing Agency',
    industry: 'Marketing',
    image: '/assets/img/home-one/12.png',
    logo: '/assets/img/home-one/3.png',
    challenge: 'Managing campaigns for 50+ clients with inconsistent results',
    solution: 'Multi-tenant setup with white-label reporting and automated workflows',
    results: [
      { label: 'Client Retention', value: 98, suffix: '%' },
      { label: 'Campaign ROI', value: 340, suffix: '%' },
      { label: 'Clients Served', value: 75, suffix: '+' }
    ],
    testimonial: 'Chatriox lets us scale without sacrificing quality. Our clients love the results.',
    author: 'Emily Rodriguez',
    position: 'Agency Owner',
    color: '#f093fb'
  }
]

const stats = [
  { icon: FiTrendingUp, value: 240, suffix: '%', label: 'Average ROI Increase' },
  { icon: FiCheckCircle, value: 98.5, suffix: '%', label: 'Customer Satisfaction' },
  { icon: FiUsers, value: 500, suffix: '+', label: 'Companies Trust Us' },
  { icon: FiMail, value: 120, suffix: 'M+', label: 'Emails Delivered' }
]

export default function CaseStudies() {
  const [selectedStudy, setSelectedStudy] = useState(caseStudies[0])

  return (
    <>
      <SEO
        title="Case Studies — Chatriox Success Stories"
        description="Discover how companies achieve 240% ROI with Chatriox. Real results from SaaS, e-commerce, and marketing teams."
      />

      {/* Hero Section */}
      <section
        className="position-relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          paddingTop: '180px',
          paddingBottom: '100px'
        }}
      >
        <div className="container position-relative">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="badge bg-white text-primary px-4 py-2 rounded-pill fw-semibold fs-6 mb-4">
              <FiAward className="me-2" />
              Success Stories
            </span>
            <h1 className="display-3 fw-bold mb-4">Real Results, Real Impact</h1>
            <p className="fs-4 text-white text-opacity-90 mx-auto" style={{ maxWidth: '700px' }}>
              See how leading companies transform their outreach with Chatriox
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-5" style={{ marginTop: '-50px', position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div className="row g-4">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="col-md-6 col-lg-3">
                  <motion.div
                    className="bg-white rounded-4 p-4 shadow-lg text-center h-100"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ y: -10 }}
                  >
                    <div className="bg-primary bg-opacity-10 rounded-circle p-3 d-inline-flex mb-3">
                      <IconComponent className="text-primary" size={28} />
                    </div>
                    <h2 className="fw-bold text-primary mb-2">
                      <AnimatedCounter from={0} to={stat.value} duration={2} suffix={stat.suffix} />
                    </h2>
                    <p className="text-muted mb-0 fw-semibold small">{stat.label}</p>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-5" style={{ paddingTop: '100px', paddingBottom: '100px', background: '#f8f9fa' }}>
        <div className="container">
          <motion.div
            className="text-center mb-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill fw-semibold mb-3">
              Featured Case Studies
            </span>
            <h2 className="display-5 fw-bold text-dark mb-4">Industry-Leading Results</h2>
            <p className="fs-5 text-muted">Proven success across multiple industries</p>
          </motion.div>

          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              className="mb-5"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <div className="bg-white rounded-4 shadow-lg overflow-hidden">
                <div className="row g-0">
                  <div className={`col-lg-6 ${index % 2 === 0 ? 'order-lg-1' : 'order-lg-2'}`}>
                    <div
                      className="h-100 position-relative"
                      style={{
                        background: `linear-gradient(135deg, ${study.color}22 0%, ${study.color}11 100%)`,
                        minHeight: '400px'
                      }}
                    >
                      <img
                        src={study.image}
                        alt={study.company}
                        className="img-fluid w-100 h-100"
                        style={{ objectFit: 'cover', opacity: 0.9 }}
                      />
                      <div className="position-absolute top-0 start-0 m-4">
                        <span className="badge bg-white text-dark px-3 py-2 rounded-pill fw-semibold">
                          {study.industry}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className={`col-lg-6 ${index % 2 === 0 ? 'order-lg-2' : 'order-lg-1'}`}>
                    <div className="p-5">
                      <div className="d-flex align-items-center gap-3 mb-4">
                        <img src={study.logo} alt={study.company} style={{ maxHeight: '40px', opacity: 0.7 }} />
                        <h3 className="fw-bold text-dark mb-0">{study.company}</h3>
                      </div>

                      <div className="mb-4">
                        <h6 className="text-primary fw-bold mb-2">Challenge</h6>
                        <p className="text-muted">{study.challenge}</p>
                      </div>

                      <div className="mb-4">
                        <h6 className="text-success fw-bold mb-2">Solution</h6>
                        <p className="text-muted">{study.solution}</p>
                      </div>

                      <div className="mb-4">
                        <h6 className="text-dark fw-bold mb-3">Results</h6>
                        <div className="row g-3">
                          {study.results.map((result, i) => (
                            <div key={i} className="col-4">
                              <div className="text-center p-3 bg-light rounded-3">
                                <h3 className="fw-bold mb-1" style={{ color: study.color }}>
                                  <AnimatedCounter from={0} to={result.value} duration={2} suffix={result.suffix} />
                                </h3>
                                <small className="text-muted fw-semibold">{result.label}</small>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="p-4 bg-light rounded-4 border-start border-4" style={{ borderColor: study.color }}>
                        <p className="fst-italic text-dark mb-3">"{study.testimonial}"</p>
                        <div className="d-flex align-items-center gap-3">
                          <div className="bg-white rounded-circle p-2">
                            <FiUsers className="text-primary" size={20} />
                          </div>
                          <div>
                            <div className="fw-bold text-dark">{study.author}</div>
                            <small className="text-muted">{study.position}</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-5" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
        <div className="container">
          <motion.div
            className="text-center mb-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill fw-semibold mb-3">
              What Our Customers Say
            </span>
            <h2 className="display-5 fw-bold text-dark mb-4">Trusted by Growth Teams</h2>
          </motion.div>
          <Testimonials />
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="position-relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          paddingTop: '100px',
          paddingBottom: '100px'
        }}
      >
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="display-4 fw-bold mb-4">Ready to See Similar Results?</h2>
            <p className="fs-4 text-white text-opacity-90 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
              Join 500+ companies achieving breakthrough results with Chatriox
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <a
                href="/signup"
                className="btn btn-light btn-lg px-5 py-3 fw-semibold shadow-lg"
                style={{ borderRadius: '50px' }}
              >
                Start Free Trial
                <FiArrowRight className="ms-2" />
              </a>
              <a
                href="/contact"
                className="btn btn-outline-light btn-lg px-5 py-3 fw-semibold"
                style={{ borderRadius: '50px', borderWidth: '2px' }}
              >
                Book a Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
