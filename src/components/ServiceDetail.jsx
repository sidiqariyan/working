import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Testimonials from './Testimonials'
import FAQSection from './FAQSection'

gsap.registerPlugin(ScrollTrigger)

export default function ServiceDetail({
  id,
  title,
  subtitle,
  heroImg,
  overview,
  features = [],
  steps = [],
  benefits = [],
  useCases = [],
  comparison = [],
  testimonials = [],
  faqs = [],
  cta = { label: 'Get Started', href: '/signup' }
}) {
  const heroRef = useRef(null)
  const featuresRef = useRef([])

  useEffect(() => {
    if (heroRef.current) {
      gsap.from(heroRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
      })
    }

    featuresRef.current.forEach((el, index) => {
      if (el) {
        gsap.from(el, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        })
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <>
      <section className="sec_padding" data-bg-color="#F7F8FA" style={{ paddingTop: '140px' }}>
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <div className="section_title">
                  <motion.h1
                    className="title-animation mb-2 display-4 fw-bold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {title}
                  </motion.h1>
                  <motion.p
                    className="mb-0 fs-5 text-muted"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    {subtitle}
                  </motion.p>
                </div>
                <motion.a
                  href={cta.href}
                  className="saas_btn mt-4 d-inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="btn_text"><span>{cta.label}</span><span>{cta.label}</span></div>
                </motion.a>
              </motion.div>
            </div>
            <div className="col-lg-5">
              <motion.div
                className="saas_banner_img text-center"
                ref={heroRef}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                <img src={heroImg} alt={title} className="img-fluid" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec_padding" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <motion.div
                className="service_item"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="display-6 fw-bold mb-4">Overview</h3>
                <p className="fs-5 text-muted" style={{ lineHeight: '1.8' }}>{overview}</p>
              </motion.div>
            </div>
            <div className="col-lg-6">
              <div className="row g-4">
                {features.map((f, i) => (
                  <div className="col-sm-6" key={i}>
                    <motion.div
                      className="service_item h-100 bg-white rounded-4 p-4 shadow-sm border"
                      initial={{ opacity: 0, y: 30, scale: 0.9 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
                      whileHover={{ y: -8, scale: 1.02, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                    >
                      <div className="bg-primary bg-opacity-10 rounded-3 p-2 d-inline-flex mb-3">
                        <div className="bg-primary rounded-circle" style={{ width: '8px', height: '8px' }}></div>
                      </div>
                      <h5 className="mb-2 fw-bold">{f.title}</h5>
                      <p className="mb-0 text-muted small">{f.desc}</p>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {steps.length > 0 && (
        <section className="sec_padding" data-bg-color="#0B1020" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
          <div className="container">
            <motion.div
              className="section_title text-center text-white mb-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="title-animation display-5 fw-bold">How It Works</h2>
            </motion.div>
            <div className="row g-4">
              {steps.map((s, i) => (
                <div className="col-md-6 col-lg-3" key={i}>
                  <motion.div
                    className="service_item h-100 bg-white bg-opacity-5 rounded-4 p-4 border border-white border-opacity-10"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.15 }}
                    whileHover={{ y: -10, borderColor: 'rgba(255,255,255,0.3)', backgroundColor: 'rgba(255,255,255,0.1)' }}
                  >
                    <motion.div
                      className="badge bg-primary mb-3 fs-5 px-3 py-2"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.15 + 0.3, type: 'spring', stiffness: 200 }}
                    >
                      {i+1}
                    </motion.div>
                    <h5 className="text-white mb-3 fw-bold">{s.title}</h5>
                    <p className="text-white-50 mb-0">{s.desc}</p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {benefits.length > 0 && (
        <section className="sec_padding">
          <div className="container">
            <div className="section_title text-center"><h2 className="title-animation">Benefits</h2></div>
            <div className="row g-4">
              {benefits.map((b, i) => (
                <div className="col-md-6 col-lg-3" key={i}><div className="service_item h-100"><h5 className="mb-1">{b.title}</h5><p className="mb-0">{b.desc}</p></div></div>
              ))}
            </div>
          </div>
        </section>
      )}

      {useCases.length > 0 && (
        <section className="sec_padding">
          <div className="container">
            <div className="section_title text-center"><h2 className="title-animation">Use Cases</h2></div>
            <div className="row g-4">
              {useCases.map((u, i) => (
                <div className="col-md-6 col-lg-4" key={i}><div className="service_item h-100"><h5 className="mb-1">{u.title}</h5><p className="mb-0">{u.desc}</p></div></div>
              ))}
            </div>
          </div>
        </section>
      )}

      {comparison.length > 0 && (
        <section className="sec_padding">
          <div className="container">
            <div className="section_title text-center"><h2 className="title-animation">Why Chatriox</h2></div>
            <div className="row g-4">
              {comparison.map((c, i) => (
                <div className="col-md-6" key={i}><div className="service_item h-100"><h5 className="mb-1">{c.title}</h5><p className="mb-0">{c.desc}</p></div></div>
              ))}
            </div>
          </div>
        </section>
      )}

      {testimonials.length > 0 && <Testimonials />}

      {faqs.length > 0 && <FAQSection id={`faq-${id}`} title={`${title} — FAQs`} />}

      <section className="sec_padding">
        <div className="container">
          <div className="promo_content promo_content_bg text-center">
            <h2 className="title-animation">{cta.label}</h2>
            <a href={cta.href} className="saas_btn"><div className="btn_text"><span>Try Now</span><span>Try Now</span></div></a>
          </div>
        </div>
      </section>
    </>
  )
}
