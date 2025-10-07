import React, { useState, useRef, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FiHexagon, 
  FiChevronDown, 
  FiMail, 
  FiMessageSquare, 
  FiCheckCircle, 
  FiUsers, 
  FiEdit3, 
  FiCpu,
  FiTrendingUp,
  FiShoppingCart,
  FiCode,
  FiBookOpen,
  FiFileText,
  FiHelpCircle,
  FiInfo,
  FiBriefcase,
  FiPhone,
  FiShield,
  FiGlobe
} from 'react-icons/fi'

const menuData = {
  Products: {
    title: 'Products',
    subtitle: 'Complete outreach automation suite',
    sections: [
      {
        title: 'Core Services',
        items: [
          { 
            name: 'Bulk Email Sending', 
            href: '/services/bulk-email', 
            desc: 'High-deliverability email campaigns with smart throttling',
            icon: FiMail,
            badge: 'Popular'
          },
          { 
            name: 'Bulk WhatsApp', 
            href: '/services/bulk-whatsapp', 
            desc: 'Personalized WhatsApp sequences with media support',
            icon: FiMessageSquare,
            badge: 'New'
          },
          { 
            name: 'Email Validation', 
            href: '/services/email-validation', 
            desc: 'Real-time email verification and list cleaning',
            icon: FiCheckCircle
          },
          { 
            name: 'Lead Scraper', 
            href: '/services/lead-scraper', 
            desc: 'Capture and enrich leads from multiple sources',
            icon: FiUsers
          },
          { 
            name: 'Template Builder', 
            href: '/services/template-builder', 
            desc: 'AI-powered template creation with variables',
            icon: FiEdit3
          },
          { 
            name: 'AI Analyzer', 
            href: '/services/ai-analyzer', 
            desc: 'Campaign insights and optimization recommendations',
            icon: FiCpu,
            badge: 'AI'
          }
        ]
      }
    ],
    featured: {
      title: 'Featured Integration',
      description: 'Connect with 500+ tools including Salesforce, HubSpot, and Zapier',
      image: '/assets/img/home-one/analytic_img.png',
      cta: 'View All Integrations'
    }
  },
  Solutions: {
    title: 'Solutions',
    subtitle: 'Industry-specific outreach strategies',
    sections: [
      {
        title: 'By Industry',
        items: [
          { 
            name: 'Digital Agencies', 
            href: '/solutions/agencies', 
            desc: 'Multi-client campaign management and reporting',
            icon: FiTrendingUp
          },
          { 
            name: 'SaaS Companies', 
            href: '/solutions/saas', 
            desc: 'Lifecycle campaigns and user onboarding',
            icon: FiCode
          },
          { 
            name: 'E-commerce', 
            href: '/solutions/ecommerce', 
            desc: 'Promotional campaigns and cart recovery',
            icon: FiShoppingCart
          }
        ]
      },
      {
        title: 'By Use Case',
        items: [
          { 
            name: 'Lead Generation', 
            href: '/solutions/lead-gen', 
            desc: 'Outbound prospecting and qualification',
            icon: FiUsers
          },
          { 
            name: 'Customer Retention', 
            href: '/solutions/retention', 
            desc: 'Lifecycle campaigns and re-engagement',
            icon: FiTrendingUp
          },
          { 
            name: 'Event Marketing', 
            href: '/solutions/events', 
            desc: 'Registration drives and follow-up sequences',
            icon: FiBriefcase
          }
        ]
      }
    ],
    featured: {
      title: 'Success Story',
      description: 'See how TechFlow achieved 240% ROI improvement with our platform',
      image: '/assets/img/home-one/features_img_one.png',
      cta: 'Read Case Study'
    }
  },
  Resources: {
    title: 'Resources',
    subtitle: 'Learn, grow, and optimize your campaigns',
    sections: [
      {
        title: 'Learn',
        items: [
          { 
            name: 'Blog', 
            href: '/blog', 
            desc: 'Latest insights and best practices',
            icon: FiBookOpen
          },
          { 
            name: 'Guides & Tutorials', 
            href: '/resources', 
            desc: 'Step-by-step implementation guides',
            icon: FiFileText
          },
          { 
            name: 'Case Studies', 
            href: '/case-studies', 
            desc: 'Real customer success stories',
            icon: FiTrendingUp
          },
          { 
            name: 'API Documentation', 
            href: '/docs', 
            desc: 'Complete API reference and SDKs',
            icon: FiCode
          }
        ]
      },
      {
        title: 'Support',
        items: [
          { 
            name: 'Help Center', 
            href: '/support', 
            desc: 'Find answers to common questions',
            icon: FiHelpCircle
          },
          { 
            name: 'Integrations', 
            href: '/integrations', 
            desc: 'Connect your favorite tools',
            icon: FiGlobe
          },
          { 
            name: 'Status Page', 
            href: '/status', 
            desc: 'Real-time system status and uptime',
            icon: FiInfo
          }
        ]
      }
    ],
    featured: {
      title: 'Latest Guide',
      description: 'Email Deliverability Best Practices: A Complete 2024 Guide',
      image: '/assets/img/home-one/Chart.png',
      cta: 'Download Guide'
    }
  },
  Company: {
    title: 'Company',
    subtitle: 'Learn about our mission and team',
    sections: [
      {
        title: 'About',
        items: [
          { 
            name: 'About Us', 
            href: '/about', 
            desc: 'Our mission, vision, and company story',
            icon: FiInfo
          },
          { 
            name: 'Careers', 
            href: '/careers', 
            desc: 'Join our growing team of experts',
            icon: FiBriefcase,
            badge: 'Hiring'
          },
          { 
            name: 'Contact', 
            href: '/contact', 
            desc: 'Get in touch with our team',
            icon: FiPhone
          }
        ]
      },
      {
        title: 'Legal & Security',
        items: [
          { 
            name: 'Privacy Policy', 
            href: '/privacy', 
            desc: 'How we protect and handle your data',
            icon: FiShield
          },
          { 
            name: 'Terms of Service', 
            href: '/terms', 
            desc: 'Usage terms and conditions',
            icon: FiFileText
          },
          { 
            name: 'Security', 
            href: '/security', 
            desc: 'Enterprise security and compliance',
            icon: FiShield
          }
        ]
      }
    ],
    featured: {
      title: 'We\'re Hiring!',
      description: 'Join our remote-first team and help build the future of outreach automation',
      image: '/assets/img/about/team_1.jpg',
      cta: 'View Open Roles'
    }
  }
}

export default function MegaMenu() {
  const [activeMenu, setActiveMenu] = useState(null)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const timeoutRef = useRef(null)

  const handleMouseEnter = (menu) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setActiveMenu(menu)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null)
    }, 150)
  }

  const handleKeyDown = (e, menu) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setActiveMenu(activeMenu === menu ? null : menu)
    }
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <nav className="navbar navbar-expand-lg sticky_nav navbar_fixed bg-white shadow-lg border-b border-gray-100" style={{ position: 'sticky', top: 0, zIndex: 1050 }}>
      <div className="container-fluid px-6">
        <Link className="navbar-brand d-flex align-items-center gap-3" to="/">
          <div className="position-relative">
            <FiHexagon className="text-primary" size={32} />
            <div className="position-absolute top-50 start-50 translate-middle">
              <div className="bg-primary rounded-circle" style={{ width: '8px', height: '8px' }}></div>
            </div>
          </div>
          <span className="fw-bold brand-wordmark text-dark fs-4">Chatriox</span>
        </Link>

        {/* Desktop Menu */}
        <div className="d-none d-lg-flex align-items-center justify-content-center flex-grow-1">
          <ul className="navbar-nav d-flex align-items-center gap-5">
            {Object.entries(menuData).map(([key, menu]) => (
              <li 
                key={key}
                className="nav-item dropdown position-static"
                onMouseEnter={() => handleMouseEnter(key)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className="nav-link dropdown-toggle btn btn-link text-dark fw-semibold p-0 border-0 bg-transparent d-flex align-items-center gap-2 position-relative"
                  onKeyDown={(e) => handleKeyDown(e, key)}
                  aria-expanded={activeMenu === key}
                  aria-haspopup="true"
                  style={{ fontSize: '16px', letterSpacing: '0.5px' }}
                >
                  {menu.title}
                  <FiChevronDown 
                    className={`transition-all duration-300 ${activeMenu === key ? 'rotate-180 text-primary' : ''}`}
                    size={16}
                  />
                  {activeMenu === key && (
                    <motion.div
                      className="position-absolute bottom-0 start-0 w-100 bg-primary"
                      style={{ height: '2px' }}
                      layoutId="activeIndicator"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="d-none d-lg-flex align-items-center gap-3">
          <NavLink to="/login" className="btn btn-outline-primary px-4 py-2 fw-semibold">
            Login
          </NavLink>
          <NavLink to="/signup" className="btn btn-primary px-4 py-2 fw-semibold shadow-sm">
            Start Free Trial
          </NavLink>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="navbar-toggler d-lg-none border-0 p-2"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle navigation"
        >
          <div className="d-flex flex-column gap-1">
            <div className={`bg-dark transition-all duration-300 ${isMobileOpen ? 'rotate-45 translate-y-2' : ''}`} style={{ width: '24px', height: '2px' }}></div>
            <div className={`bg-dark transition-all duration-300 ${isMobileOpen ? 'opacity-0' : ''}`} style={{ width: '24px', height: '2px' }}></div>
            <div className={`bg-dark transition-all duration-300 ${isMobileOpen ? '-rotate-45 -translate-y-2' : ''}`} style={{ width: '24px', height: '2px' }}></div>
          </div>
        </button>

        {/* Beautiful Mega Menu Dropdown */}
        <AnimatePresence>
          {activeMenu && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="position-absolute w-100 bg-white shadow-xl border border-gray-100"
              style={{ 
                top: '100%', 
                left: 0, 
                zIndex: 1040,
                minHeight: '400px',
                borderRadius: '0 0 24px 24px'
              }}
              onMouseEnter={() => handleMouseEnter(activeMenu)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="container-fluid px-6 py-6">
                <div className="row g-5">
                  {/* Menu Sections */}
                  <div className="col-lg-8">
                    <div className="mb-4">
                      <h3 className="fw-bold text-dark mb-2">{menuData[activeMenu].title}</h3>
                      <p className="text-muted mb-0">{menuData[activeMenu].subtitle}</p>
                    </div>
                    
                    <div className="row g-4">
                      {menuData[activeMenu].sections.map((section, idx) => (
                        <div key={idx} className="col-md-6">
                          <h6 className="text-primary fw-bold mb-3 text-uppercase" style={{ fontSize: '12px', letterSpacing: '1px' }}>
                            {section.title}
                          </h6>
                          <div className="d-flex flex-column gap-2">
                            {section.items.map((item, itemIdx) => {
                              const IconComponent = item.icon
                              return (
                                <motion.div
                                  key={itemIdx}
                                  whileHover={{ x: 8 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <Link 
                                    to={item.href}
                                    className="text-decoration-none d-flex align-items-start gap-3 p-3 rounded-4 hover-bg-light transition-all position-relative"
                                    onClick={() => setActiveMenu(null)}
                                  >
                                    <div className="bg-primary bg-opacity-10 rounded-3 p-2 d-flex align-items-center justify-content-center" style={{ minWidth: '40px', height: '40px' }}>
                                      <IconComponent className="text-primary" size={20} />
                                    </div>
                                    <div className="flex-grow-1">
                                      <div className="d-flex align-items-center gap-2 mb-1">
                                        <h6 className="fw-semibold text-dark mb-0">{item.name}</h6>
                                        {item.badge && (
                                          <span className={`badge ${item.badge === 'Popular' ? 'bg-success' : item.badge === 'New' ? 'bg-info' : 'bg-warning'} text-white`} style={{ fontSize: '10px' }}>
                                            {item.badge}
                                          </span>
                                        )}
                                      </div>
                                      <p className="text-muted mb-0 small">{item.desc}</p>
                                    </div>
                                  </Link>
                                </motion.div>
                              )
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Featured Section */}
                  <div className="col-lg-4">
                    <div className="bg-light rounded-4 p-4 h-100 d-flex flex-column">
                      <h6 className="text-primary fw-bold mb-3">{menuData[activeMenu].featured.title}</h6>
                      <div className="mb-3 flex-grow-1">
                        <img 
                          src={menuData[activeMenu].featured.image} 
                          alt={menuData[activeMenu].featured.title}
                          className="w-100 rounded-3 mb-3"
                          style={{ height: '120px', objectFit: 'cover' }}
                        />
                        <p className="text-muted mb-0">{menuData[activeMenu].featured.description}</p>
                      </div>
                      <button className="btn btn-outline-primary btn-sm fw-semibold">
                        {menuData[activeMenu].featured.cta}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Bottom CTA Bar */}
                <div className="row mt-5 pt-4 border-top border-gray-200">
                  <div className="col-12">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <h6 className="fw-bold text-dark mb-1">Ready to get started?</h6>
                        <p className="text-muted mb-0 small">Join 500+ companies scaling their outreach</p>
                      </div>
                      <div className="d-flex gap-3">
                        <Link to="/contact" className="btn btn-outline-primary">
                          Book Demo
                        </Link>
                        <Link to="/signup" className="btn btn-primary">
                          Start Free Trial
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="d-lg-none position-absolute w-100 bg-white shadow-lg border-top"
              style={{ top: '100%', left: 0, zIndex: 1040 }}
            >
              <div className="container py-4">
                {Object.entries(menuData).map(([key, menu]) => (
                  <div key={key} className="mb-4">
                    <h6 className="text-primary fw-bold mb-3">{menu.title}</h6>
                    {menu.sections.map((section, idx) => (
                      <div key={idx} className="mb-3">
                        <div className="fw-semibold text-dark mb-2 small text-uppercase" style={{ fontSize: '12px' }}>
                          {section.title}
                        </div>
                        <div className="ps-3">
                          {section.items.map((item, itemIdx) => (
                            <Link 
                              key={itemIdx}
                              to={item.href}
                              className="d-block text-decoration-none text-dark py-2 border-bottom border-gray-100"
                              onClick={() => setIsMobileOpen(false)}
                            >
                              <div className="d-flex align-items-center gap-2">
                                <item.icon size={16} className="text-primary" />
                                <span>{item.name}</span>
                                {item.badge && (
                                  <span className="badge bg-primary text-white" style={{ fontSize: '10px' }}>
                                    {item.badge}
                                  </span>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
                <div className="d-flex flex-column gap-3 mt-4 pt-4 border-top">
                  <NavLink to="/login" className="btn btn-outline-primary" onClick={() => setIsMobileOpen(false)}>
                    Login
                  </NavLink>
                  <NavLink to="/signup" className="btn btn-primary" onClick={() => setIsMobileOpen(false)}>
                    Start Free Trial
                  </NavLink>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style jsx>{`
        .hover-bg-light:hover {
          background-color: #f8f9fa !important;
        }
        .transition-all {
          transition: all 0.3s ease;
        }
        .navbar-brand:hover .brand-wordmark {
          color: var(--bs-primary) !important;
        }
        .nav-link:hover {
          color: var(--bs-primary) !important;
        }
      `}</style>
    </nav>
  )
}