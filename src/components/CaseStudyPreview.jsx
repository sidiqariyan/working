import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiTrendingUp, FiTarget, FiZap } from 'react-icons/fi'

const caseStudies = [
  {
    title: 'TechFlow: 240% ROI Improvement',
    category: 'SaaS',
    image: '/assets/img/home-one/analytic_small.png',
    problem: 'Low inbox placement affecting outreach ROI and lead quality',
    solution: 'Implemented smart warm-up protocols and real-time validation',
    result: '+240% ROI, 98.5% deliverability, 2x reply rate',
    readTime: '5 min read',
    href: '/case-studies/techflow',
    icon: FiTrendingUp,
    color: 'success'
  },
  {
    title: 'ScaleUp: Clean Data Pipeline',
    category: 'Agency',
    image: '/assets/img/home-one/features_img_two.png',
    problem: 'High bounce rates damaging sender reputation across clients',
    solution: 'Deployed comprehensive validation and list hygiene system',
    result: '+65% open rate, 95% bounce reduction, client retention up',
    readTime: '4 min read',
    href: '/case-studies/scaleup',
    icon: FiTarget,
    color: 'info'
  },
  {
    title: 'CloudVenture: Unified Inbox Success',
    category: 'Enterprise',
    image: '/assets/img/home-one/12.png',
    problem: 'Fragmented communication across email and WhatsApp channels',
    solution: 'Unified inbox with intelligent routing and team collaboration',
    result: '50% faster response time, 3x engagement, team efficiency up',
    readTime: '6 min read',
    href: '/case-studies/cloudventure',
    icon: FiZap,
    color: 'warning'
  }
]

export default function CaseStudyPreview() {
  return (
    <div className="row g-4">
      {caseStudies.map((study, index) => {
        const IconComponent = study.icon
        return (
          <div key={index} className="col-md-6 col-lg-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-4 shadow-lg overflow-hidden h-100 border border-gray-100"
              style={{ minHeight: '420px' }}
            >
              <div className="position-relative">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-100"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="position-absolute top-0 end-0 m-3">
                  <span className={`badge bg-${study.color} text-white px-3 py-2 fw-semibold`}>
                    {study.category}
                  </span>
                </div>
                <div className="position-absolute bottom-0 start-0 m-3">
                  <div className={`bg-${study.color} bg-opacity-10 rounded-3 p-2 d-inline-flex`}>
                    <IconComponent className={`text-${study.color}`} size={20} />
                  </div>
                </div>
              </div>

              <div className="p-4 d-flex flex-column h-100">
                <h5 className="fw-bold text-dark mb-3">{study.title}</h5>
                
                <div className="mb-4 flex-grow-1">
                  <div className="mb-3">
                    <div className="d-flex align-items-start gap-2 mb-2">
                      <div className="bg-danger bg-opacity-10 rounded-circle p-1">
                        <div className="bg-danger rounded-circle" style={{ width: '6px', height: '6px' }}></div>
                      </div>
                      <div>
                        <strong className="text-danger small">Problem:</strong>
                        <p className="mb-0 text-muted small">{study.problem}</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-start gap-2 mb-2">
                      <div className="bg-warning bg-opacity-10 rounded-circle p-1">
                        <div className="bg-warning rounded-circle" style={{ width: '6px', height: '6px' }}></div>
                      </div>
                      <div>
                        <strong className="text-warning small">Solution:</strong>
                        <p className="mb-0 text-muted small">{study.solution}</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-start gap-2">
                      <div className="bg-success bg-opacity-10 rounded-circle p-1">
                        <div className="bg-success rounded-circle" style={{ width: '6px', height: '6px' }}></div>
                      </div>
                      <div>
                        <strong className="text-success small">Results:</strong>
                        <p className="mb-0 text-muted small">{study.result}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center mt-auto pt-3 border-top border-gray-100">
                  <small className="text-muted">{study.readTime}</small>
                  <Link 
                    to={study.href}
                    className={`btn btn-${study.color} btn-sm fw-semibold`}
                  >
                    Read Case Study
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )
      })}
    </div>
  )
}