import React from 'react'
import SEO from '../utils/SEO'
import StatsSection from '../components/StatsSection'
import Testimonials from '../components/Testimonials'
import FAQSection from '../components/FAQSection'

export default function Privacy() {
  return (
    <>
      <SEO title="Privacy Policy — Chatriox" description="How we handle data, security, and privacy." />
      <section className="sec_padding"><div className="container"><div className="section_title text-center"><h2 className="title-animation">Privacy Policy</h2><p>Your data is protected with enterprise-grade controls.</p></div></div></section>
      <section className="sec_padding"><div className="container"><div className="row g-4"><div className="col-md-6"><div className="service_item"><h4>Data Collection</h4><p>We collect the minimum data necessary to deliver our services and improve performance.</p></div></div><div className="col-md-6"><div className="service_item"><h4>Processing</h4><p>Processing occurs according to contracts and DPAs. Regional options are available.</p></div></div></div></div></section>
      <section className="sec_padding"><div className="container"><div className="row g-4"><div className="col-md-4"><div className="service_item"><h4>Security</h4><p>SSO, RBAC, audit logs, and encryption in transit and at rest.</p></div></div><div className="col-md-4"><div className="service_item"><h4>Retention</h4><p>Data retention aligns with contractual obligations and legal requirements.</p></div></div><div className="col-md-4"><div className="service_item"><h4>Exports</h4><p>We provide exports on request and self-serve downloads on paid plans.</p></div></div></div></div></section>
      <StatsSection />
      <Testimonials />
      <FAQSection id="faq-privacy" />
      <section className="sec_padding"><div className="container"><div className="promo_content promo_content_bg text-center"><h2 className="title-animation">Questions about privacy?</h2><a href="/contact" className="saas_btn"><div className="btn_text"><span>Contact Us</span><span>Contact Us</span></div></a></div></div></section>
    </>
  )
}
