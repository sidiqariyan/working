import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiFacebook,
  FiTwitter,
  FiLinkedin,
  FiInstagram,
  FiArrowRight
} from 'react-icons/fi'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    products: [
      { name: 'Bulk Email Sending', href: '/services/bulk-email' },
      { name: 'Bulk WhatsApp', href: '/services/bulk-whatsapp' },
      { name: 'Email Validation', href: '/services/email-validation' },
      { name: 'Lead Scraper', href: '/services/lead-scraper' },
      { name: 'Template Builder', href: '/services/template-builder' },
      { name: 'AI Analyzer', href: '/services/ai-analyzer' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Blog', href: '/blog' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact Us', href: '/contact' }
    ],
    resources: [
      { name: 'Resources', href: '/resources' },
      { name: 'Integrations', href: '/integrations' },
      { name: 'Support', href: '/support' },
      { name: 'FAQs', href: '/faqs' },
      { name: 'Pricing', href: '/pricing' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Login', href: '/login' },
      { name: 'Sign Up', href: '/signup' },
      { name: 'Dashboard', href: '/dashboard' }
    ]
  }

  return (
    <footer className="position-relative" style={{ background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)' }}>
      {/* Main Footer */}
      <div className="py-5" style={{ paddingTop: '80px', paddingBottom: '40px' }}>
        <div className="container">
          <div className="row g-5">
            {/* Company Info */}
            <div className="col-lg-4 col-md-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Link to="/" className="d-inline-block mb-4">
                  <h3 className="text-white fw-bold mb-0">CHATRIOX</h3>
                </Link>
                <p className="text-white text-opacity-75 mb-4" style={{ lineHeight: '1.8' }}>
                  Enterprise-grade outreach automation platform trusted by 500+ companies worldwide. Scale your campaigns with AI-powered precision.
                </p>

                {/* Contact Info */}
                <div className="d-flex flex-column gap-3 mb-4">
                  <div className="d-flex align-items-center gap-3 text-white text-opacity-75">
                    <FiMail size={18} />
                    <a href="mailto:support@chatriox.com" className="text-white text-opacity-75 text-decoration-none">
                      support@chatriox.com
                    </a>
                  </div>
                  <div className="d-flex align-items-center gap-3 text-white text-opacity-75">
                    <FiPhone size={18} />
                    <a href="tel:+15551234567" className="text-white text-opacity-75 text-decoration-none">
                      +1 (555) 123-4567
                    </a>
                  </div>
                  <div className="d-flex align-items-start gap-3 text-white text-opacity-75">
                    <FiMapPin size={18} className="mt-1" />
                    <span>123 Business Ave, Suite 100<br />San Francisco, CA 94102</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="d-flex gap-3">
                  {[
                    { icon: FiFacebook, href: '#' },
                    { icon: FiTwitter, href: '#' },
                    { icon: FiLinkedin, href: '#' },
                    { icon: FiInstagram, href: '#' }
                  ].map((social, index) => {
                    const Icon = social.icon
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        whileHover={{ scale: 1.1, y: -3 }}
                        className="bg-white bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center text-white text-decoration-none"
                        style={{ width: '40px', height: '40px' }}
                      >
                        <Icon size={18} />
                      </motion.a>
                    )
                  })}
                </div>
              </motion.div>
            </div>

            {/* Products */}
            <div className="col-lg-2 col-md-6 col-sm-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h5 className="text-white fw-bold mb-4">Products</h5>
                <ul className="list-unstyled d-flex flex-column gap-3">
                  {footerLinks.products.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.href}
                        className="text-white text-opacity-75 text-decoration-none d-inline-block"
                        style={{ transition: 'all 0.3s' }}
                        onMouseEnter={(e) => {
                          e.target.style.color = 'white'
                          e.target.style.paddingLeft = '8px'
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.color = 'rgba(255,255,255,0.75)'
                          e.target.style.paddingLeft = '0'
                        }}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Company */}
            <div className="col-lg-2 col-md-6 col-sm-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h5 className="text-white fw-bold mb-4">Company</h5>
                <ul className="list-unstyled d-flex flex-column gap-3">
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.href}
                        className="text-white text-opacity-75 text-decoration-none d-inline-block"
                        style={{ transition: 'all 0.3s' }}
                        onMouseEnter={(e) => {
                          e.target.style.color = 'white'
                          e.target.style.paddingLeft = '8px'
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.color = 'rgba(255,255,255,0.75)'
                          e.target.style.paddingLeft = '0'
                        }}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Resources */}
            <div className="col-lg-2 col-md-6 col-sm-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h5 className="text-white fw-bold mb-4">Resources</h5>
                <ul className="list-unstyled d-flex flex-column gap-3">
                  {footerLinks.resources.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.href}
                        className="text-white text-opacity-75 text-decoration-none d-inline-block"
                        style={{ transition: 'all 0.3s' }}
                        onMouseEnter={(e) => {
                          e.target.style.color = 'white'
                          e.target.style.paddingLeft = '8px'
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.color = 'rgba(255,255,255,0.75)'
                          e.target.style.paddingLeft = '0'
                        }}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Legal & Account */}
            <div className="col-lg-2 col-md-6 col-sm-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h5 className="text-white fw-bold mb-4">Legal & Account</h5>
                <ul className="list-unstyled d-flex flex-column gap-3">
                  {footerLinks.legal.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.href}
                        className="text-white text-opacity-75 text-decoration-none d-inline-block"
                        style={{ transition: 'all 0.3s' }}
                        onMouseEnter={(e) => {
                          e.target.style.color = 'white'
                          e.target.style.paddingLeft = '8px'
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.color = 'rgba(255,255,255,0.75)'
                          e.target.style.paddingLeft = '0'
                        }}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Newsletter */}
          <motion.div
            className="row mt-5 pt-5 border-top border-white border-opacity-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="col-lg-6 mx-auto text-center">
              <h4 className="text-white fw-bold mb-3">Subscribe to Our Newsletter</h4>
              <p className="text-white text-opacity-75 mb-4">
                Get the latest updates on features, tips, and best practices delivered to your inbox.
              </p>
              <form className="d-flex gap-3 mx-auto" style={{ maxWidth: '500px' }}>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Enter your email"
                  required
                  style={{
                    background: 'rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    color: 'white',
                    borderRadius: '50px'
                  }}
                />
                <button
                  type="submit"
                  className="btn btn-primary btn-lg px-4 fw-semibold"
                  style={{ borderRadius: '50px', whiteSpace: 'nowrap' }}
                >
                  Subscribe
                  <FiArrowRight className="ms-2" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-4 border-top border-white border-opacity-10">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <p className="text-white text-opacity-75 mb-0">
                © {currentYear} Chatriox. All rights reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <p className="text-white text-opacity-75 mb-0">
                Made with ❤️ for growth teams worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
