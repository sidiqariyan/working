import React from 'react'
import SEO from '../utils/SEO'
import FAQSection from '../components/FAQSection'
import StatsSection from '../components/StatsSection'
import Testimonials from '../components/Testimonials'

export default function Contact() {
  const onSubmit = (e) => { e.preventDefault(); alert('Thanks! We will get back to you shortly.') }
  return (
    <>
      <SEO title="Contact Chatriox" description="Get support or talk to sales." />
      <section className="sec_padding">
        <div className="container">
          <div className="section_title text-center"><h2 className="title-animation">Contact / Support</h2><p className="wow fadeInUp" data-wow-delay="0.2s">We typically respond within one business day.</p></div>
          <div className="row g-5 align-items-stretch">
            <div className="col-lg-5">
              <div className="service_item h-100">
                <h4>Get in touch</h4>
                <p>Email: support@chatriox.example</p>
                <p>Sales: sales@chatriox.example</p>
                <p>Address: 123 Market St, Suite 200</p>
                <div className="ratio ratio-16x9 mt-3">
                  <iframe title="map" src="https://www.openstreetmap.org/export/embed.html?bbox=90.356%2C23.78%2C90.41%2C23.81" style={{border:0}}></iframe>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <form onSubmit={onSubmit} className="contact_form service_item">
                <div className="row g-3">
                  <div className="col-md-6"><input className="form-control" placeholder="Full Name" required /></div>
                  <div className="col-md-6"><input type="email" className="form-control" placeholder="Work Email" required /></div>
                  <div className="col-md-6"><input className="form-control" placeholder="Company" /></div>
                  <div className="col-md-6"><input className="form-control" placeholder="Subject" /></div>
                  <div className="col-md-6"><select className="form-control select"><option>General</option><option>Sales</option><option>Support</option><option>Bulk Email</option><option>Bulk WhatsApp</option><option>Email Validation</option><option>Lead Scraper</option><option>Template Builder</option><option>AI Analyzer</option></select></div>
                  <div className="col-12"><textarea className="form-control" rows="6" placeholder="How can we help?" required /></div>
                  <div className="col-12"><button className="saas_btn"><div className="btn_text"><span>Send Message</span><span>Send Message</span></div></button></div>
                </div>
              </form>
              <div className="service_item mt-3">
                <h5 className="mb-1">Live chat</h5>
                <p className="mb-0">Chat widget placeholder. Connect your provider to enable real-time support.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec_padding"><div className="container"><div className="row g-4"><div className="col-md-6"><div className="service_item"><h4>Support channels</h4><p>Email, chat (coming soon), and ticketing via the contact form.</p></div></div><div className="col-md-6"><div className="service_item"><h4>SLA & response times</h4><p>We aim to reply within one business day. Enterprise SLAs available.</p></div></div></div></div></section>
      <StatsSection />
      <Testimonials />
      <section className="sec_padding"><div className="container"><div className="row g-4"><div className="col-md-12"><div className="service_item text-center"><h4>Enterprise Support</h4><p>Priority SLAs, DPA, and dedicated manager available on Enterprise plans.</p></div></div></div></div></section>
      <section className="sec_padding"><div className="container"><div className="promo_content promo_content_bg text-center"><h2 className="title-animation">Prefer to talk to sales?</h2><a href="/pricing" className="saas_btn"><div className="btn_text"><span>View Plans</span><span>View Plans</span></div></a></div></div></section>
      <FAQSection id="faq-contact" />
    </>
  )
}
