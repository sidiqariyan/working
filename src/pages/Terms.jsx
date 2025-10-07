import React from 'react'
import SEO from '../utils/SEO'
import FAQSection from '../components/FAQSection'

export default function Terms() {
  return (
    <>
      <SEO title="Terms & Conditions — Chatriox" description="Legal terms for using Chatriox." />
      <section className="sec_padding"><div className="container"><div className="section_title text-center"><h2 className="title-animation">Terms & Conditions</h2><p>Read the terms that govern your use of Chatriox.</p></div></div></section>
      <section className="sec_padding"><div className="container"><div className="row g-4"><div className="col-md-6"><div className="service_item"><h4>Acceptable Use</h4><p>Respect consent, anti-spam laws, and platform policies for email/WhatsApp.</p></div></div><div className="col-md-6"><div className="service_item"><h4>Accounts</h4><p>Maintain accurate information and protect credentials. You are responsible for activity.</p></div></div></div></div></section>
      <section className="sec_padding"><div className="container"><div className="row g-4"><div className="col-md-6"><div className="service_item"><h4>Termination</h4><p>We may suspend or terminate accounts violating these terms or applicable law.</p></div></div><div className="col-md-6"><div className="service_item"><h4>Governing Law</h4><p>These terms are governed by the laws of your contracting entity's jurisdiction.</p></div></div></div></div></section>
      <section className="sec_padding"><div className="container"><div className="row g-4"><div className="col-md-4"><div className="service_item"><h4>Payments</h4><p>Subscriptions renew monthly unless cancelled. Refunds per policy.</p></div></div><div className="col-md-4"><div className="service_item"><h4>Liability</h4><p>Services provided as-is with commercially reasonable uptime and support.</p></div></div><div className="col-md-4"><div className="service_item"><h4>Compliance</h4><p>DPA and SSO available on enterprise. Regional data residency options.</p></div></div></div></div></section>
      <section className="sec_padding"><div className="container"><div className="row g-4"><div className="col-md-6"><div className="service_item"><h4>Definitions</h4><p>Key terms used throughout these terms including "Services", "Account", and "Content".</p></div></div><div className="col-md-6"><div className="service_item"><h4>Changes</h4><p>We may update these terms. We will notify you of material changes.</p></div></div></div></div></section>
      <FAQSection id="faq-terms" />
      <section className="sec_padding"><div className="container"><div className="promo_content promo_content_bg text-center"><h2 className="title-animation">Need clarification?</h2><a href="/contact" className="saas_btn"><div className="btn_text"><span>Talk to Legal</span><span>Talk to Legal</span></div></a></div></div></section>
    </>
  )
}
