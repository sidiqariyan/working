import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEO from '../utils/SEO'
import Testimonials from '../components/Testimonials'
import {
  FiCheck,
  FiX,
  FiZap,
  FiShield,
  FiUsers,
  FiTrendingUp,
  FiAward,
  FiHelpCircle
} from 'react-icons/fi'

const pricingPlans = [
  {
    name: 'Starter',
    price: 0,
    yearlyPrice: 0,
    description: 'Perfect for individuals and small teams getting started',
    features: [
      { name: '1,000 emails per month', included: true },
      { name: 'Basic email validation', included: true },
      { name: 'Email templates', included: true },
      { name: 'Community support', included: true },
      { name: 'WhatsApp campaigns', included: false },
      { name: 'AI Analyzer', included: false },
      { name: 'Priority support', included: false },
      { name: 'Custom integrations', included: false }
    ],
    cta: 'Start Free',
    popular: false,
    color: '#64748b'
  },
  {
    name: 'Professional',
    price: 99,
    yearlyPrice: 990,
    description: 'For growing businesses that need more power',
    features: [
      { name: '50,000 emails per month', included: true },
      { name: 'Advanced validation', included: true },
      { name: 'WhatsApp campaigns', included: true },
      { name: 'Lead scraper', included: true },
      { name: 'Template builder', included: true },
      { name: 'AI Analyzer', included: true },
      { name: 'Priority email support', included: true },
      { name: 'Custom integrations', included: false }
    ],
    cta: 'Start 14-Day Trial',
    popular: true,
    color: '#3b82f6'
  },
  {
    name: 'Enterprise',
    price: null,
    yearlyPrice: null,
    description: 'For large organizations with custom needs',
    features: [
      { name: 'Unlimited emails', included: true },
      { name: 'All Professional features', included: true },
      { name: 'Dedicated account manager', included: true },
      { name: '99.9% uptime SLA', included: true },
      { name: 'SSO & SAML', included: true },
      { name: 'Custom integrations', included: true },
      { name: '24/7 phone support', included: true },
      { name: 'White-label options', included: true }
    ],
    cta: 'Contact Sales',
    popular: false,
    color: '#1e293b'
  }
]

const comparisonFeatures = [
  { category: 'Email Campaigns', features: ['Email sends', 'Email templates', 'A/B testing', 'Schedule campaigns'] },
  { category: 'WhatsApp', features: ['WhatsApp campaigns', 'Media attachments', 'Auto-replies', 'Campaign analytics'] },
  { category: 'Validation & Quality', features: ['Email validation', 'Bounce protection', 'Spam score check', 'List cleaning'] },
  { category: 'Analytics & Insights', features: ['Campaign analytics', 'AI recommendations', 'Custom reports', 'Export data'] },
  { category: 'Team & Collaboration', features: ['Team members', 'Role permissions', 'Approval workflows', 'Activity logs'] },
  { category: 'Support', features: ['Email support', 'Priority support', 'Phone support', 'Dedicated manager'] }
]

const faqs = [
  {
    question: 'Can I switch plans at any time?',
    answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and well pro-rate any charges or credits.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, Mastercard, American Express). Enterprise plans can pay via invoice.'
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes! All paid plans come with a 14-day free trial. No credit card required to start.'
  },
  {
    question: 'What happens if I exceed my email limit?',
    answer: 'Well notify you when you reach 80% of your limit. You can upgrade anytime or purchase additional credits.'
  },
  {
    question: 'Do you offer refunds?',
    answer: 'Yes, we offer a 30-day money-back guarantee for all plans. No questions asked.'
  }
]

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <>
      <SEO
        title="Pricing — Chatriox"
        description="Simple, transparent pricing for teams of all sizes. Start free, upgrade as you grow."
      />

      {/* Hero Section */}
      <section className="bg-dark text-white" style={{ paddingTop: '180px', paddingBottom: '100px' }}>
        <div className="container">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="badge bg-primary px-4 py-2 rounded-pill fw-semibold fs-6 mb-4">
              Pricing Plans
            </span>
            <h1 className="display-3 fw-bold mb-4">Simple, Transparent Pricing</h1>
            <p className="fs-4 text-white text-opacity-75 mx-auto mb-5" style={{ maxWidth: '700px' }}>
              Choose the plan that fits your needs. All plans include 14-day free trial.
            </p>

            {/* Toggle */}
            <div className="d-inline-flex align-items-center gap-3 bg-white bg-opacity-10 rounded-pill p-2">
              <button
                onClick={() => setIsYearly(false)}
                className={`btn ${!isYearly ? 'btn-primary' : 'btn-link text-white'} rounded-pill px-4`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`btn ${isYearly ? 'btn-primary' : 'btn-link text-white'} rounded-pill px-4`}
              >
                Yearly
                <span className="badge bg-success ms-2">Save 15%</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="bg-light" style={{ paddingTop: '80px', paddingBottom: '100px', marginTop: '-60px', position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div className="row g-4">
            {pricingPlans.map((plan, index) => (
              <div key={plan.name} className="col-lg-4">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className={`bg-white rounded-4 shadow-lg h-100 overflow-hidden ${plan.popular ? 'border border-primary border-3' : ''}`}
                  style={{ position: 'relative' }}
                >
                  {plan.popular && (
                    <div className="bg-primary text-white text-center py-2 fw-semibold">
                      <FiZap className="me-2" size={16} />
                      Most Popular
                    </div>
                  )}

                  <div className="p-5">
                    <h3 className="fw-bold text-dark mb-2">{plan.name}</h3>
                    <p className="text-muted mb-4">{plan.description}</p>

                    <div className="mb-4">
                      {plan.price === null ? (
                        <h2 className="display-4 fw-bold text-dark">Custom</h2>
                      ) : (
                        <>
                          <h2 className="display-4 fw-bold text-dark mb-0">
                            ${isYearly ? plan.yearlyPrice : plan.price}
                          </h2>
                          <span className="text-muted">
                            {isYearly ? '/year' : '/month'}
                          </span>
                        </>
                      )}
                    </div>

                    <Link
                      to={plan.price === null ? '/contact' : '/signup'}
                      className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline-dark'} w-100 py-3 fw-semibold mb-4`}
                      style={{ borderRadius: '12px' }}
                    >
                      {plan.cta}
                    </Link>

                    <div className="border-top pt-4">
                      <p className="fw-semibold text-dark mb-3">What's included:</p>
                      <ul className="list-unstyled d-flex flex-column gap-3">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="d-flex align-items-start gap-2">
                            {feature.included ? (
                              <FiCheck className="text-success mt-1" size={20} />
                            ) : (
                              <FiX className="text-muted mt-1" size={20} />
                            )}
                            <span className={feature.included ? 'text-dark' : 'text-muted'}>
                              {feature.name}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="bg-white py-5" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
        <div className="container">
          <motion.div
            className="text-center mb-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="display-5 fw-bold text-dark mb-4">Compare Features</h2>
            <p className="fs-5 text-muted">See what's included in each plan</p>
          </motion.div>

          <div className="table-responsive">
            <table className="table table-bordered">
              <thead className="bg-dark text-white">
                <tr>
                  <th style={{ width: '40%' }}>Feature</th>
                  <th className="text-center">Starter</th>
                  <th className="text-center bg-primary">Professional</th>
                  <th className="text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((category, idx) => (
                  <React.Fragment key={idx}>
                    <tr className="bg-light">
                      <td colSpan="4" className="fw-bold text-dark">{category.category}</td>
                    </tr>
                    {category.features.map((feature, i) => (
                      <tr key={i}>
                        <td className="text-dark">{feature}</td>
                        <td className="text-center">{idx === 0 && i < 2 ? <FiCheck className="text-success" size={20} /> : <FiX className="text-muted" size={20} />}</td>
                        <td className="text-center bg-primary bg-opacity-10"><FiCheck className="text-success" size={20} /></td>
                        <td className="text-center"><FiCheck className="text-success" size={20} /></td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-dark text-white py-5" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-4">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="display-6 fw-bold mb-4">Trusted by 500+ Companies</h2>
                <p className="text-white text-opacity-75 fs-5">
                  Join teams that trust Chatriox to power their outreach campaigns
                </p>
              </motion.div>
            </div>
            <div className="col-lg-8">
              <div className="row g-4">
                {[
                  { icon: FiShield, value: '99.9%', label: 'Uptime SLA' },
                  { icon: FiUsers, value: '500+', label: 'Enterprise Clients' },
                  { icon: FiTrendingUp, value: '240%', label: 'Average ROI' },
                  { icon: FiAward, value: '4.9/5', label: 'Customer Rating' }
                ].map((stat, i) => {
                  const Icon = stat.icon
                  return (
                    <div key={i} className="col-md-6">
                      <motion.div
                        className="bg-white bg-opacity-10 rounded-4 p-4 text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Icon className="text-primary mb-3" size={32} />
                        <h3 className="fw-bold mb-2">{stat.value}</h3>
                        <p className="text-white text-opacity-75 mb-0">{stat.label}</p>
                      </motion.div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-light py-5" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
        <div className="container">
          <motion.div
            className="text-center mb-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="display-5 fw-bold text-dark mb-4">What Our Customers Say</h2>
          </motion.div>
          <Testimonials />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-5" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
        <div className="container">
          <motion.div
            className="text-center mb-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="display-5 fw-bold text-dark mb-4">Frequently Asked Questions</h2>
          </motion.div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion" id="pricingFAQ">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    className="accordion-item border-0 mb-3 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed bg-light fw-semibold"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#faq${index}`}
                      >
                        <FiHelpCircle className="text-primary me-3" size={20} />
                        {faq.question}
                      </button>
                    </h2>
                    <div id={`faq${index}`} className="accordion-collapse collapse" data-bs-parent="#pricingFAQ">
                      <div className="accordion-body text-muted">
                        {faq.answer}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark text-white py-5" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
        <div className="container">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="display-4 fw-bold mb-4">Ready to Get Started?</h2>
            <p className="fs-4 text-white text-opacity-75 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
              Start your 14-day free trial today. No credit card required.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <Link to="/signup" className="btn btn-primary btn-lg px-5 py-3 fw-semibold" style={{ borderRadius: '12px' }}>
                Start Free Trial
              </Link>
              <Link to="/contact" className="btn btn-outline-light btn-lg px-5 py-3 fw-semibold" style={{ borderRadius: '12px' }}>
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
