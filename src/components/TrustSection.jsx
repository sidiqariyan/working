import React, { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import AnimatedCounter from './AnimatedCounter'
import AnalyticsChart from './AnalyticsChart'
import { 
  FiMail, 
  FiTarget, 
  FiTrendingUp, 
  FiAward, 
  FiShield, 
  FiGlobe,
  FiCheckCircle,
  FiUsers
} from 'react-icons/fi'

const kpis = [
  { label: 'Emails Delivered', value: 120000000, suffix: '+', prefix: '', icon: FiMail, color: 'primary' },
  { label: 'Avg Deliverability', value: 98.5, suffix: '%', prefix: '', icon: FiTarget, color: 'success' },
  { label: 'Client Growth YoY', value: 240, suffix: '%', prefix: '+', icon: FiTrendingUp, color: 'info' },
  { label: 'Enterprise Clients', value: 500, suffix: '+', prefix: '', icon: FiAward, color: 'warning' }
]

const microCases = [
  { company: 'TechFlow', metric: '+240% ROI', icon: FiTrendingUp },
  { company: 'ScaleUp', metric: '98.9% inbox rate', icon: FiTarget },
  { company: 'CloudVenture', metric: '3x engagement', icon: FiUsers }
]

const securityFeatures = [
  { title: 'SOC 2 Compliant', icon: FiShield },
  { title: 'GDPR Ready', icon: FiGlobe },
  { title: '99.9% Uptime SLA', icon: FiCheckCircle }
]

export default function TrustSection() {
  const chartRef = useRef(null)
  const chartInView = useInView(chartRef, { once: true, margin: '-100px' })

  return (
    <section className="py-5" style={{ backgroundColor: '#0f172a', paddingTop: '120px', paddingBottom: '120px' }}>
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left: Trust Copy */}
          <div className="col-lg-4">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-4">
                <span className="badge bg-primary bg-opacity-20 text-primary px-3 py-2 rounded-pill fw-semibold">
                  <FiShield className="me-2" size={14} />
                  Enterprise Grade
                </span>
              </div>
              <h2 className="display-5 fw-bold text-white mb-4">
                Why Global Teams Choose Chatriox
              </h2>
              <p className="text-white text-opacity-75 mb-4 fs-5">
                Join 500+ companies that trust our platform for mission-critical outreach campaigns 
                with enterprise-grade security and reliability.
              </p>
              
              {/* Micro Cases */}
              <div className="mb-4">
                <h6 className="text-white fw-semibold mb-3">Customer Success Highlights</h6>
                {microCases.map((case_, index) => {
                  const IconComponent = case_.icon
                  return (
                    <motion.div
                      key={index}
                      className="d-flex align-items-center gap-3 mb-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    >
                      <div className="bg-primary bg-opacity-20 rounded-3 p-2">
                        <IconComponent className="text-primary" size={16} />
                      </div>
                      <div>
                        <div className="text-white fw-semibold">{case_.company}</div>
                        <small className="text-white text-opacity-75">{case_.metric}</small>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Security Features */}
              <div>
                <h6 className="text-white fw-semibold mb-3">Enterprise Security</h6>
                <div className="d-flex flex-wrap gap-2">
                  {securityFeatures.map((feature, index) => {
                    const IconComponent = feature.icon
                    return (
                      <motion.div
                        key={index}
                        className="bg-white bg-opacity-10 rounded-pill px-3 py-2 d-flex align-items-center gap-2"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      >
                        <IconComponent className="text-white" size={14} />
                        <small className="text-white fw-semibold">{feature.title}</small>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Center: KPI Cards */}
          <div className="col-lg-4">
            <div className="row g-3">
              {kpis.map((kpi, index) => {
                const IconComponent = kpi.icon
                return (
                  <div key={index} className="col-6">
                    <motion.div
                      className="bg-white rounded-4 p-4 text-center h-100 shadow-lg border border-gray-100"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ y: -5, scale: 1.05 }}
                    >
                      <div className={`bg-${kpi.color} bg-opacity-10 rounded-3 p-3 d-inline-flex mb-3`}>
                        <IconComponent className={`text-${kpi.color}`} size={24} />
                      </div>
                      <h3 className={`fw-bold text-${kpi.color} mb-2`}>
                        <AnimatedCounter
                          from={0}
                          to={kpi.value}
                          duration={2.5}
                          prefix={kpi.prefix}
                          suffix={kpi.suffix}
                        />
                      </h3>
                      <p className="small text-muted mb-0 fw-semibold">{kpi.label}</p>
                    </motion.div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right: Interactive Chart */}
          <div className="col-lg-4">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              ref={chartRef}
            >
              <div className="bg-white rounded-4 p-4 shadow-lg mb-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h6 className="fw-bold text-dark mb-0">Performance Trends</h6>
                  <span className="badge bg-success text-white">Live Data</span>
                </div>
                <AnalyticsChart data={[65, 78, 85, 92]} labels={['Q1', 'Q2', 'Q3', 'Q4']} />
                <p className="small text-muted mt-3 mb-0 text-center">
                  Average improvement across 1,000+ campaigns
                </p>
              </div>
              
              <div className="bg-primary bg-opacity-10 rounded-4 p-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <div className="fw-bold fs-4 text-primary">
                      <AnimatedCounter from={0} to={99.9} duration={2} suffix="%" />
                    </div>
                    <small className="text-white text-opacity-75">Uptime SLA</small>
                  </div>
                  <FiShield className="text-primary" size={32} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Trust Indicators */}
        <motion.div
          className="row mt-5 pt-5 border-top border-white border-opacity-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="col-12 text-center">
            <div className="row g-4">
              <div className="col-md-3">
                <div className="text-white">
                  <FiGlobe className="text-primary mb-2" size={32} />
                  <div className="fw-bold fs-5">50+ Countries</div>
                  <small className="text-white text-opacity-75">Global Reach</small>
                </div>
              </div>
              <div className="col-md-3">
                <div className="text-white">
                  <FiUsers className="text-primary mb-2" size={32} />
                  <div className="fw-bold fs-5">10,000+ Users</div>
                  <small className="text-white text-opacity-75">Active Monthly</small>
                </div>
              </div>
              <div className="col-md-3">
                <div className="text-white">
                  <FiShield className="text-primary mb-2" size={32} />
                  <div className="fw-bold fs-5">SOC 2 Type II</div>
                  <small className="text-white text-opacity-75">Security Certified</small>
                </div>
              </div>
              <div className="col-md-3">
                <div className="text-white">
                  <FiAward className="text-primary mb-2" size={32} />
                  <div className="fw-bold fs-5">4.9/5 Rating</div>
                  <small className="text-white text-opacity-75">Customer Satisfaction</small>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}