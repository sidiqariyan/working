import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../utils/SEO'
import FAQSection from '../components/FAQSection'
import StatsSection from '../components/StatsSection'
import Testimonials from '../components/Testimonials'

const services = [
  { slug:'/services/bulk-email', title: 'Bulk Email Sending', desc: 'High deliverability at scale with smart throttling and warm-up hints.' },
  { slug:'/services/bulk-whatsapp', title: 'Bulk WhatsApp Sending', desc: 'Personalized sequences, media support, and reply tracking.' },
  { slug:'/services/email-validation', title: 'Email Validation', desc: 'Real-time checks: syntax, MX/DNS, disposable detection, suppression.' },
  { slug:'/services/lead-scraper', title: 'Lead Scraper', desc: 'Capture, deduplicate, and enrich leads from multiple sources.' },
  { slug:'/services/template-builder', title: 'Template Builder', desc: 'Flexible, modular templates with variables and approvals.' },
  { slug:'/services/ai-analyzer', title: 'AI Analyzer', desc: 'Insights, scoring, and copy suggestions powered by AI.' },
]

export default function Services() {
  return (
    <>
      <SEO title="Chatriox Services" description="Explore our complete outreach stack for email and WhatsApp." />

      <section className="sec_padding" data-bg-color="#F7F8FA">
        <div className="container">
          <div className="section_title text-center"><h1 className="title-animation">Everything you need to scale outreach</h1><p>Unified, compliant, and reliable.</p></div>
          <div className="row g-4">
            {services.map((s) => (
              <div className="col-md-6 col-lg-4" key={s.title}>
                <div className="service_item h-100">
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                  <Link to={s.slug} className="saas_btn"><div className="btn_text"><span>Learn More</span><span>Learn More</span></div></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec_padding">
        <div className="container">
          <div className="section_title text-center"><h2 className="title-animation">Features</h2><p>Built-in controls that teams rely on.</p></div>
          <div className="row g-4">
            <div className="col-md-4"><div className="service_item h-100"><h5>Governance</h5><p>Approvals, RBAC, and audit trails.</p></div></div>
            <div className="col-md-4"><div className="service_item h-100"><h5>Deliverability</h5><p>Warm-up guidance and validation.</p></div></div>
            <div className="col-md-4"><div className="service_item h-100"><h5>Analytics</h5><p>AI insights, cohorts, and exports.</p></div></div>
          </div>
        </div>
      </section>

      <section className="sec_padding" data-bg-color="#0B1020">
        <div className="container">
          <div className="section_title text-center text-white"><h2 className="title-animation">Integrations</h2><p className="text-white-50">APIs, webhooks, and connectors.</p></div>
          <div className="row g-4">
            <div className="col-md-3"><div className="service_item h-100"><h6 className="text-white">SMTP / ESPs</h6></div></div>
            <div className="col-md-3"><div className="service_item h-100"><h6 className="text-white">CRMs</h6></div></div>
            <div className="col-md-3"><div className="service_item h-100"><h6 className="text-white">Data Warehouses</h6></div></div>
            <div className="col-md-3"><div className="service_item h-100"><h6 className="text-white">Webhook Pipelines</h6></div></div>
          </div>
        </div>
      </section>

      <section className="sec_padding">
        <div className="container">
          <div className="section_title text-center"><h2 className="title-animation">Industry Use Cases</h2></div>
          <div className="row g-4">
            <div className="col-md-4"><div className="service_item h-100"><h5>Agencies</h5><p>Client playbooks and approvals.</p></div></div>
            <div className="col-md-4"><div className="service_item h-100"><h5>SaaS</h5><p>Lifecycle, expansion, and churn saves.</p></div></div>
            <div className="col-md-4"><div className="service_item h-100"><h5>eCommerce</h5><p>Promotions, back-in-stock, and CS.</p></div></div>
          </div>
        </div>
      </section>

      <section className="sec_padding">
        <div className="container">
          <div className="promo_content promo_content_bg text-center"><h2 className="title-animation">Ready to get started?</h2><a href="/signup" className="saas_btn"><div className="btn_text"><span>Create Free Account</span><span>Create Free Account</span></div></a></div>
        </div>
      </section>

      <Testimonials />
      <StatsSection />
      <FAQSection id="faq-services" />
    </>
  )
}
