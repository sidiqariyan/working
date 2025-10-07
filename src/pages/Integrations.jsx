import React from 'react'
import SEO from '../utils/SEO'
import StatsSection from '../components/StatsSection'
import FAQSection from '../components/FAQSection'

const partners = [
  'SMTP Providers','CRMs','Webhooks','Zapier','SSO','Data Warehouses'
]

export default function Integrations() {
  return (
    <>
      <SEO title="Integrations — Chatriox" description="Connect your stack: CRMs, SMTPs, SSO, and more." />
      <section className="sec_padding"><div className="container"><div className="section_title text-center"><h2 className="title-animation">Integrations</h2><p>Designed to fit into your existing tools.</p></div></div></section>
      <section className="sec_padding"><div className="container"><div className="row g-4">{partners.map(p => (<div className="col-md-4" key={p}><div className="service_item h-100"><h4>{p}</h4><p>Connect and sync with ease using APIs and webhooks.</p></div></div>))}</div></div></section>
      <section className="sec_padding"><div className="container"><div className="service_item"><h4>API Overview</h4><p>RESTful endpoints with webhooks for events. SDKs available.</p></div></div></section>
      <section className="sec_padding"><div className="container"><div className="row g-4"><div className="col-md-6"><div className="service_item"><h4>SDKs</h4><p>JavaScript and Python SDKs for faster integration.</p></div></div><div className="col-md-6"><div className="service_item"><h4>Webhook Example</h4><pre className="mb-0" style={{whiteSpace:'pre-wrap'}}>{`POST /webhooks/chatriox\n{ \"event\": \"delivered\", \"campaignId\": \"cmp_123\", \"timestamp\": 1712345678 }`}</pre></div></div></div></div></section>
      <StatsSection />
      <FAQSection id="faq-integrations" />
      <section className="sec_padding"><div className="container"><div className="promo_content promo_content_bg text-center"><h2 className="title-animation">Looking for a specific integration?</h2><a href="/contact" className="saas_btn"><div className="btn_text"><span>Request It</span><span>Request It</span></div></a></div></div></section>
    </>
  )
}
