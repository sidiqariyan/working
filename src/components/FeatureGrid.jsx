import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  FiMail, 
  FiMessageSquare, 
  FiCheckCircle, 
  FiUsers, 
  FiEdit3, 
  FiCpu 
} from 'react-icons/fi'

const features = [
  {
    icon: FiMail,
    title: 'Bulk Email Sending',
    description: 'High-deliverability campaigns with smart throttling and warm-up guidance',
    href: '/services/bulk-email',
    color: 'bg-blue-50 text-blue-600',
    stats: '98.5% avg deliverability'
  },
  {
    icon: FiMessageSquare,
    title: 'Bulk WhatsApp',
    description: 'Personalized WhatsApp sequences with media support and compliance',
    href: '/services/bulk-whatsapp',
    color: 'bg-green-50 text-green-600',
    stats: '3x higher engagement'
  },
  {
    icon: FiCheckCircle,
    title: 'Email Validation',
    description: 'Real-time verification with syntax, MX, and spam trap detection',
    href: '/services/email-validation',
    color: 'bg-purple-50 text-purple-600',
    stats: '99.2% accuracy rate'
  },
  {
    icon: FiUsers,
    title: 'Lead Scraper',
    description: 'Capture, deduplicate, and enrich leads from multiple sources',
    href: '/services/lead-scraper',
    color: 'bg-orange-50 text-orange-600',
    stats: '40% more qualified leads'
  },
  {
    icon: FiEdit3,
    title: 'Template Builder',
    description: 'AI-powered templates with variables, approvals, and localization',
    href: '/services/template-builder',
    color: 'bg-pink-50 text-pink-600',
    stats: '80% faster creation'
  },
  {
    icon: FiCpu,
    title: 'AI Analyzer',
    description: 'Campaign insights and optimization recommendations powered by AI',
    href: '/services/ai-analyzer',
    color: 'bg-indigo-50 text-indigo-600',
    stats: '2x better performance'
  }
]

export default function FeatureGrid() {
  return (
    <section className="sec_padding">
      <div className="container">
        <div className="section_title text-center mb-5">
          <h2 className="title-animation">Complete Outreach Platform</h2>
          <p className="text-muted">Everything you need to scale outreach campaigns with confidence</p>
        </div>

        <div className="row g-4">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div key={index} className="col-md-6 col-lg-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="service_item h-100 position-relative overflow-hidden"
                >
                  <div className={`rounded-3 p-3 d-inline-flex mb-3 ${feature.color}`}>
                    <IconComponent size={24} />
                  </div>
                  
                  <h4 className="mb-3">{feature.title}</h4>
                  <p className="text-muted mb-3">{feature.description}</p>
                  
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-success fw-semibold">{feature.stats}</small>
                    <Link 
                      to={feature.href}
                      className="btn btn-sm btn-outline-primary"
                    >
                      Learn More
                    </Link>
                  </div>

                  {/* Subtle background decoration */}
                  <div 
                    className="position-absolute opacity-10"
                    style={{
                      top: '-20px',
                      right: '-20px',
                      width: '80px',
                      height: '80px',
                      background: 'linear-gradient(135deg, var(--bs-primary), var(--bs-info))',
                      borderRadius: '50%',
                      zIndex: -1
                    }}
                  />
                </motion.div>
              </div>
            )
          })}
        </div>

        <motion.div
          className="text-center mt-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link to="/services" className="btn btn-primary btn-lg">
            Explore All Features
          </Link>
        </motion.div>
      </div>
    </section>
  )
}