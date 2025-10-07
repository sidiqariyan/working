import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEO from '../utils/SEO'
import TestimonialSlider from '../components/TestimonialSlider'
import FAQAccordion from '../components/FAQAccordion'
import AnimatedCounter from '../components/AnimatedCounter'
import {
  FiMail,
  FiMessageSquare,
  FiCheckCircle,
  FiUsers,
  FiEdit3,
  FiCpu,
  FiTrendingUp,
  FiShield,
  FiZap,
  FiTarget,
  FiAward,
  FiArrowRight,
  FiStar,
  FiGlobe,
  FiBarChart,
  FiLayers,
  FiClock
} from 'react-icons/fi'

const homepageFAQs = [
  {
    question: 'How does Chatriox improve email deliverability?',
    answer: 'We use smart throttling, warm-up guidance, suppression lists, and real-time validation to maximize inbox placement and protect your sender reputation.'
  },
  {
    question: 'Can I run WhatsApp and Email campaigns together?',
    answer: 'Yes. Our unified platform lets you manage cross-channel sequences with shared suppression lists and a combined inbox for replies.'
  },
  {
    question: 'What integrations does Chatriox support?',
    answer: 'Connect SMTP providers, CRMs, APIs, webhooks, and more. Enterprise plans include SSO and DPA options.'
  },
  {
    question: 'How customizable are the templates?',
    answer: 'Fully customizable with variables, approvals, localization, and AI suggestions. Create once, reuse everywhere.'
  },
  {
    question: 'Do you offer analytics exports?',
    answer: 'Yes. CSV/JSON exports are available on paid plans, with custom dashboards and advanced analytics on Enterprise.'
  }
]

const features = [
  {
    icon: FiMail,
    title: 'Bulk Email Sending',
    description: 'Enterprise-grade email campaigns with 98.5% average deliverability',
    href: '/services/bulk-email',
    color: '#3b82f6',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    icon: FiMessageSquare,
    title: 'Bulk WhatsApp',
    description: 'Compliant WhatsApp campaigns with rich media and automation',
    href: '/services/bulk-whatsapp',
    color: '#10b981',
    gradient: 'linear-gradient(135deg, #0cebeb 0%, #20e3b2 50%, #29ffc6 100%)'
  },
  {
    icon: FiCheckCircle,
    title: 'Email Validation',
    description: 'Real-time verification with 99.2% accuracy and spam protection',
    href: '/services/email-validation',
    color: '#8b5cf6',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    icon: FiUsers,
    title: 'Lead Scraper',
    description: 'Intelligent lead capture with enrichment and deduplication',
    href: '/services/lead-scraper',
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },
  {
    icon: FiEdit3,
    title: 'Template Builder',
    description: 'AI-powered templates with variables and approval workflows',
    href: '/services/template-builder',
    color: '#ec4899',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
  },
  {
    icon: FiCpu,
    title: 'AI Analyzer',
    description: 'Campaign optimization with predictive insights',
    href: '/services/ai-analyzer',
    color: '#6366f1',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  }
]

const stats = [
  { icon: FiMail, value: 120000000, suffix: '+', label: 'Emails Delivered' },
  { icon: FiTarget, value: 98.5, suffix: '%', label: 'Deliverability Rate' },
  { icon: FiTrendingUp, value: 240, suffix: '%', label: 'ROI Increase' },
  { icon: FiAward, value: 500, suffix: '+', label: 'Enterprise Clients' }
]

const benefits = [
  {
    icon: FiShield,
    title: 'Enterprise Security',
    description: 'Bank-level encryption and compliance with SOC 2, GDPR, and CCPA'
  },
  {
    icon: FiZap,
    title: 'Lightning Fast',
    description: 'Process millions of emails per hour with 99.9% uptime SLA'
  },
  {
    icon: FiBarChart,
    title: 'Real-time Analytics',
    description: 'Track performance with live dashboards and detailed reports'
  },
  {
    icon: FiLayers,
    title: 'Easy Integration',
    description: 'Connect with your favorite tools in minutes via API or webhooks'
  }
]

export default function Home() {
  return (
    <>
      <SEO
        title="Chatriox — Enterprise Outreach Automation Platform"
        description="Scale outreach with Chatriox: Bulk Email, Bulk WhatsApp, Email Validation, Lead Scraper, Template Builder, AI Analyzer. Trusted by 500+ companies worldwide."
        image="/assets/img/home-one/dash.png"
      />

      {/* Hero Section - Gradient Background */}
      <section
        className="position-relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          paddingTop: '180px',
          paddingBottom: '120px'
        }}
      >
        {/* Animated Background Elements */}
        <div className="position-absolute w-100 h-100 top-0 start-0" style={{ opacity: 0.1 }}>
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="position-absolute bg-white rounded-circle"
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          ))}
        </div>

        <div className="container position-relative">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="mb-4"
                >
                  <span className="badge bg-white text-primary px-4 py-2 rounded-pill fw-semibold fs-6">
                    <FiZap className="me-2" size={16} />
                    Trusted by 500+ Companies
                  </span>
                </motion.div>

                <motion.h1
                  className="display-3 fw-bold text-white mb-4"
                  style={{ lineHeight: '1.2' }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  Scale Your Outreach
                  <span className="d-block" style={{ color: '#fbbf24' }}>
                    With AI Precision
                  </span>
                </motion.h1>

                <motion.p
                  className="fs-4 text-white text-opacity-90 mb-5"
                  style={{ lineHeight: '1.8' }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  The all-in-one platform for bulk email, WhatsApp campaigns, lead generation, and AI-powered analytics.
                </motion.p>

                <motion.div
                  className="d-flex flex-column flex-sm-row gap-3 mb-5"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <Link
                    to="/signup"
                    className="btn btn-light btn-lg px-5 py-3 fw-semibold shadow-lg"
                    style={{ borderRadius: '50px' }}
                  >
                    Start Free Trial
                    <FiArrowRight className="ms-2" />
                  </Link>
                  <Link
                    to="/contact"
                    className="btn btn-outline-light btn-lg px-5 py-3 fw-semibold"
                    style={{ borderRadius: '50px', borderWidth: '2px' }}
                  >
                    Book a Demo
                  </Link>
                </motion.div>

                <motion.div
                  className="d-flex align-items-center gap-4 text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.6 }}
                >
                  {['14-day free trial', 'No credit card', 'Cancel anytime'].map((text, i) => (
                    <div key={i} className="d-flex align-items-center gap-2">
                      <FiCheckCircle size={18} />
                      <small className="fw-medium">{text}</small>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </div>

            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotateY: -20 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="position-relative"
              >
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <img
                    src="/assets/img/home-one/dash.png"
                    alt="Dashboard"
                    className="img-fluid rounded-4 shadow-lg"
                    style={{ transform: 'perspective(1000px) rotateY(-5deg)' }}
                  />
                </motion.div>

                {/* Floating Stats */}
                <motion.div
                  className="position-absolute bg-white rounded-4 shadow-lg p-4"
                  style={{ top: '10%', right: '-5%', minWidth: '200px' }}
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="d-flex align-items-center gap-3">
                    <div className="bg-success rounded-3 p-3">
                      <FiTrendingUp className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="fw-bold text-dark mb-0">+240%</h4>
                      <small className="text-muted">ROI Increase</small>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="position-absolute bg-white rounded-4 shadow-lg p-4"
                  style={{ bottom: '15%', left: '-5%', minWidth: '200px' }}
                  animate={{ y: [0, 15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                >
                  <div className="d-flex align-items-center gap-3">
                    <div className="bg-primary rounded-3 p-3">
                      <FiStar className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="fw-bold text-dark mb-0">98.5%</h4>
                      <small className="text-muted">Deliverability</small>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-5" style={{ marginTop: '-60px', position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div className="row g-4">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="col-md-6 col-lg-3">
                  <motion.div
                    className="bg-white rounded-4 p-4 shadow-lg text-center h-100"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ y: -10, scale: 1.05 }}
                  >
                    <div className="bg-primary bg-opacity-10 rounded-circle p-3 d-inline-flex mb-3">
                      <IconComponent className="text-primary" size={32} />
                    </div>
                    <h2 className="fw-bold text-primary mb-2">
                      <AnimatedCounter from={0} to={stat.value} duration={2.5} suffix={stat.suffix} />
                    </h2>
                    <p className="text-muted mb-0 fw-semibold">{stat.label}</p>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5" style={{ paddingTop: '120px', paddingBottom: '120px', background: '#f8f9fa' }}>
        <div className="container">
          <motion.div
            className="text-center mb-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill fw-semibold mb-3">
              Our Services
            </span>
            <h2 className="display-4 fw-bold text-dark mb-4">Powerful Features, Unified Platform</h2>
            <p className="fs-5 text-muted mx-auto" style={{ maxWidth: '700px' }}>
              Everything you need to scale your outreach campaigns with enterprise-grade reliability
            </p>
          </motion.div>

          <div className="row g-4">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div key={index} className="col-md-6 col-lg-4">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ y: -15, scale: 1.03 }}
                    className="h-100"
                  >
                    <Link to={feature.href} className="text-decoration-none">
                      <div
                        className="rounded-4 p-5 h-100 position-relative overflow-hidden"
                        style={{
                          background: feature.gradient,
                          minHeight: '320px'
                        }}
                      >
                        <div className="position-relative" style={{ zIndex: 2 }}>
                          <div className="bg-white rounded-3 p-3 d-inline-flex mb-4">
                            <IconComponent size={32} style={{ color: feature.color }} />
                          </div>
                          <h4 className="fw-bold text-white mb-3">{feature.title}</h4>
                          <p className="text-white text-opacity-90 mb-4">{feature.description}</p>
                          <div className="d-flex align-items-center text-white fw-semibold">
                            Learn More
                            <FiArrowRight className="ms-2" />
                          </div>
                        </div>
                        <div
                          className="position-absolute bg-white rounded-circle"
                          style={{
                            width: '200px',
                            height: '200px',
                            bottom: '-100px',
                            right: '-100px',
                            opacity: 0.1
                          }}
                        />
                      </div>
                    </Link>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-5" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill fw-semibold mb-3">
                  Why Choose Us
                </span>
                <h2 className="display-5 fw-bold text-dark mb-4">
                  Built for Scale, Trusted by Enterprises
                </h2>
                <p className="fs-5 text-muted mb-5" style={{ lineHeight: '1.8' }}>
                  Join 500+ companies using Chatriox to transform their outreach strategy with cutting-edge technology and enterprise-grade reliability.
                </p>
                <div className="row g-4">
                  {benefits.map((benefit, index) => {
                    const IconComponent = benefit.icon
                    return (
                      <div key={index} className="col-12">
                        <motion.div
                          className="d-flex gap-4"
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1, duration: 0.6 }}
                        >
                          <div className="bg-primary bg-opacity-10 rounded-3 p-3 d-flex align-items-center justify-content-center" style={{ minWidth: '64px', height: '64px' }}>
                            <IconComponent className="text-primary" size={28} />
                          </div>
                          <div>
                            <h5 className="fw-bold text-dark mb-2">{benefit.title}</h5>
                            <p className="text-muted mb-0">{benefit.description}</p>
                          </div>
                        </motion.div>
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            </div>
            <div className="col-lg-6">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src="/assets/img/home-one/analytic_img.png"
                  alt="Analytics"
                  className="img-fluid rounded-4 shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-5" style={{ paddingTop: '120px', paddingBottom: '120px', background: '#f8f9fa' }}>
        <div className="container">
          <motion.div
            className="text-center mb-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill fw-semibold mb-3">
              Testimonials
            </span>
            <h2 className="display-4 fw-bold text-dark mb-4">Loved by Growth Teams</h2>
            <p className="fs-5 text-muted">See what our customers say about us</p>
          </motion.div>
          <TestimonialSlider />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-5" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="container">
          <motion.div
            className="text-center mb-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill fw-semibold mb-3">
              FAQ
            </span>
            <h2 className="display-4 fw-bold text-dark mb-4">Frequently Asked Questions</h2>
            <p className="fs-5 text-muted">Find answers to common questions</p>
          </motion.div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <FAQAccordion faqs={homepageFAQs} id="homepage-faq" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="position-relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          paddingTop: '120px',
          paddingBottom: '120px'
        }}
      >
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="display-4 fw-bold text-white mb-4">
              Ready to Transform Your Outreach?
            </h2>
            <p className="fs-4 text-white text-opacity-90 mb-5 mx-auto" style={{ maxWidth: '700px' }}>
              Join thousands of companies scaling their growth with Chatriox
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center mb-4">
              <Link
                to="/signup"
                className="btn btn-light btn-lg px-5 py-3 fw-semibold shadow-lg"
                style={{ borderRadius: '50px' }}
              >
                Start Free Trial
                <FiArrowRight className="ms-2" />
              </Link>
              <Link
                to="/pricing"
                className="btn btn-outline-light btn-lg px-5 py-3 fw-semibold"
                style={{ borderRadius: '50px', borderWidth: '2px' }}
              >
                View Pricing
              </Link>
            </div>
            <p className="text-white text-opacity-75">
              ✓ 14-day free trial &nbsp;&nbsp; ✓ No credit card required &nbsp;&nbsp; ✓ Cancel anytime
            </p>
          </motion.div>
        </div>

        {/* Background Pattern */}
        <div className="position-absolute w-100 h-100 top-0 start-0" style={{ opacity: 0.05 }}>
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="position-absolute bg-white"
              style={{
                width: Math.random() * 4 + 2,
                height: Math.random() * 4 + 2,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                borderRadius: '50%'
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: Math.random() * 2 + 1,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          ))}
        </div>
      </section>
    </>
  )
}
