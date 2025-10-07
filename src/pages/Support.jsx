import React from 'react'
import SEO from '../utils/SEO'
import FAQSection from '../components/FAQSection'
import StatsSection from '../components/StatsSection'

export default function Support() {
  return (
    <>
      <SEO title="Support — Chatriox Help Center" description="Find answers, guides, and contact support." />
      <section className="sec_padding"><div className="container"><div className="section_title text-center"><h2 className="title-animation">Help Center</h2><p>Start with guides or reach our team.</p></div></div></section>
      <section className="sec_padding"><div className="container"><div className="row g-4"><div className="col-md-4"><div className="service_item h-100"><h4>Getting Started</h4><p>Setup, DNS, and warm-up checklist.</p></div></div><div className="col-md-4"><div className="service_item h-100"><h4>Campaigns</h4><p>Templates, sequences, and scheduling.</p></div></div><div className="col-md-4"><div className="service_item h-100"><h4>Compliance</h4><p>Consent, opt-outs, and WhatsApp rules.</p></div></div></div></div></section>
      <section className="sec_padding"><div className="container"><div className="row g-4"><div className="col-md-6"><div className="service_item h-100"><h4>Contact Options</h4><p>Email support@chatriox.example or use the contact form for priority routing.</p></div></div><div className="col-md-6"><div className="service_item h-100"><h4>SLA & Hours</h4><p>Business hours 9–5 (local). Priority SLAs on Enterprise.</p></div></div></div></div></section>
      <section className="sec_padding"><div className="container"><div className="service_item text-center"><h4>Can’t find what you need?</h4><a href="/contact" className="saas_btn"><div className="btn_text"><span>Contact Support</span><span>Contact Support</span></div></a></div></div></section>
      <FAQSection id="faq-support" />
      <StatsSection />
      <section className="sec_padding"><div className="container"><div className="promo_content promo_content_bg text-center"><h2 className="title-animation">Status: All systems operational</h2><a href="/contact" className="saas_btn"><div className="btn_text"><span>Report Issue</span><span>Report Issue</span></div></a></div></div></section>
    </>
  )
}
