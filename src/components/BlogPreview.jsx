import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiBookOpen, FiClock, FiArrowRight } from 'react-icons/fi'

const blogPosts = [
  {
    title: 'Email Warm-up Myths Debunked',
    category: 'Deliverability',
    image: '/assets/img/home-one/tab_img.jpg',
    excerpt: 'What actually improves deliverability and what doesn\'t. Evidence-based insights from analyzing 100M+ emails.',
    readTime: '8 min read',
    date: 'Dec 15, 2024',
    href: '/blog/email-warmup-myths',
    author: 'Sarah Chen',
    authorRole: 'Deliverability Expert'
  },
  {
    title: 'WhatsApp Compliance 101',
    category: 'Compliance',
    image: '/assets/img/home-one/features_img_one.png',
    excerpt: 'Complete guide to WhatsApp Business API compliance, templates, opt-ins, and best practices for 2024.',
    readTime: '6 min read',
    date: 'Dec 12, 2024',
    href: '/blog/whatsapp-compliance',
    author: 'Marcus Rodriguez',
    authorRole: 'Compliance Lead'
  },
  {
    title: 'AI for Better Subject Lines',
    category: 'AI & Optimization',
    image: '/assets/img/home-one/analytic_img.png',
    excerpt: 'How to leverage AI for testing subject lines faster and achieving consistently better open rates.',
    readTime: '5 min read',
    date: 'Dec 10, 2024',
    href: '/blog/ai-subject-lines',
    author: 'Emily Watson',
    authorRole: 'AI Product Manager'
  }
]

export default function BlogPreview() {
  return (
    <div className="row g-4">
      {blogPosts.map((post, index) => (
        <div key={index} className="col-md-6 col-lg-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-white rounded-4 shadow-lg overflow-hidden h-100 border border-gray-100"
            style={{ minHeight: '400px' }}
          >
            <div className="position-relative">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-100"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="position-absolute top-0 end-0 m-3">
                <span className="badge bg-primary text-white px-3 py-2 fw-semibold">
                  {post.category}
                </span>
              </div>
              <div className="position-absolute bottom-0 start-0 m-3">
                <div className="bg-white bg-opacity-90 rounded-3 p-2 d-inline-flex align-items-center gap-2">
                  <FiClock className="text-muted" size={14} />
                  <small className="text-dark fw-semibold">{post.readTime}</small>
                </div>
              </div>
            </div>

            <div className="p-4 d-flex flex-column h-100">
              <div className="mb-3">
                <small className="text-muted">{post.date}</small>
              </div>
              
              <h5 className="fw-bold text-dark mb-3">{post.title}</h5>
              <p className="text-muted mb-4 flex-grow-1">{post.excerpt}</p>

              <div className="d-flex justify-content-between align-items-center mt-auto pt-3 border-top border-gray-100">
                <div>
                  <div className="fw-semibold text-dark small">{post.author}</div>
                  <small className="text-muted">{post.authorRole}</small>
                </div>
                <Link 
                  to={post.href}
                  className="btn btn-outline-primary btn-sm d-flex align-items-center gap-2 fw-semibold"
                >
                  Read Article
                  <FiArrowRight size={14} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  )
}