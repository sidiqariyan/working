import React from 'react'
import SEO from '../utils/SEO'
import FAQSection from '../components/FAQSection'
import Testimonials from '../components/Testimonials'

const guides = [
  { t:'Deliverability Basics', d:'Warm-up, DNS, and reputation.' },
  { t:'WhatsApp Compliance', d:'Templates, opt-ins, and policies.' },
  { t:'List Hygiene', d:'Validation, suppression, and scoring.' },
  { t:'AI Copywriting', d:'Prompts, variants, and testing.' }
]

export default function Resources() {
  return (
    <>
      <SEO title="Resources & Guides — Chatriox" description="Best practices and how‑tos for modern outreach." />
      <section className="sec_padding"><div className="container"><div className="section_title text-center"><h2 className="title-animation">Resources & Guides</h2><p>Practical playbooks for your team.</p></div></div></section>
      <section className="sec_padding"><div className="container"><div className="row g-4">{guides.map(g => (<div className="col-md-6 col-lg-3" key={g.t}><div className="service_item h-100"><h4>{g.t}</h4><p>{g.d}</p><a href="/blog" className="saas_btn"><div className="btn_text"><span>Read</span><span>Read</span></div></a></div></div>))}</div></div></section>
      <section className="sec_padding"><div className="container"><div className="service_item text-center"><h3 className="mb-2">Subscribe for updates</h3><form className="newsletter_form newsletter_form_two d-inline-flex gap-2"><input className="form-control" type="email" placeholder="Work email" required /><button className="theme_btn">Subscribe</button></form></div></div></section>
      <section className="sec_padding"><div className="container"><div className="row g-4"><div className="col-md-6"><div className="service_item"><h4>Featured Downloads</h4><p>Checklist: Deliverability 101 • Template QA guide</p></div></div><div className="col-md-6"><div className="service_item"><h4>Popular Categories</h4><p>Deliverability, WhatsApp, Compliance, AI</p></div></div></div></div></section>
      <Testimonials />
      <FAQSection id="faq-resources" />
      <section className="sec_padding"><div className="container"><div className="promo_content promo_content_bg text-center"><h2 className="title-animation">Want hands‑on help?</h2><a href="/contact" className="saas_btn"><div className="btn_text"><span>Talk to Us</span><span>Talk to Us</span></div></a></div></div></section>
    </>
  )
}
