import React from 'react'
import SEO from '../utils/SEO'
import FAQSection from '../components/FAQSection'

function Card({ title, children }) {
  return (
    <div className="service_item mb-4">
      <h4>{title}</h4>
      {children}
    </div>
  )
}

export default function Dashboard() {
  return (
    <>
      <SEO title="Chatriox Dashboard (Prototype)" description="Manage campaigns, templates, and analytics." />
      <section className="sec_padding">
        <div className="container">
          <div className="section_title"><h2 className="title-animation">Dashboard</h2></div>
          <div className="row">
            <div className="col-lg-6">
              <Card title="Campaigns">
                <ul className="list-unstyled">
                  <li>New Product Launch — Email — Scheduled</li>
                  <li>Q4 Promotions — WhatsApp — Running</li>
                </ul>
                <a href="#" className="saas_btn"><div className="btn_text"><span>Create Campaign</span><span>Create Campaign</span></div></a>
              </Card>
            </div>
            <div className="col-lg-6">
              <Card title="Templates">
                <ul className="list-unstyled"><li>Follow-up #1</li><li>WhatsApp Intro</li></ul>
                <a href="#" className="saas_btn"><div className="btn_text"><span>New Template</span><span>New Template</span></div></a>
              </Card>
            </div>
            <div className="col-lg-12">
              <Card title="Analytics">
                <div className="row text-center">
                  <div className="col-md-3"><h3>42%</h3><p>Open Rate</p></div>
                  <div className="col-md-3"><h3>9.8%</h3><p>Reply Rate</p></div>
                  <div className="col-md-3"><h3>1.1%</h3><p>Bounce</p></div>
                  <div className="col-md-3"><h3>2m</h3><p>TTF Reply</p></div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <FAQSection id="faq-dashboard" />
    </>
  )
}
