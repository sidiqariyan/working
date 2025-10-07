import React from 'react'
import SEO from '../utils/SEO'
import FAQSection from '../components/FAQSection'
import StatsSection from '../components/StatsSection'
import Testimonials from '../components/Testimonials'

export default function About() {
  return (
    <>
      <SEO title="About Chatriox" description="Our mission, leadership, journey, culture, and achievements." />

      <section className="sec_padding" data-bg-color="#F7F8FA">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <div className="section_title"><h1 className="title-animation mb-2">Built for dependable growth</h1><p className="mb-0">We help teams run outreach at scale—reliably, safely, and insightfully.</p></div>
            </div>
            <div className="col-lg-5"><img className="img-fluid" src="/assets/img/home-one/analytic_img.png" alt="Chatriox platform" /></div>
          </div>
        </div>
      </section>

      <section className="sec_padding">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6"><div className="service_item h-100"><h3>Mission</h3><p>Make large‑scale outreach dependable and respectful, with the controls enterprises require.</p></div></div>
            <div className="col-md-6"><div className="service_item h-100"><h3>Vision</h3><p>Marketing systems that learn and guide teams toward better experiences for everyone.</p></div></div>
          </div>
        </div>
      </section>

      <section className="sec_padding" data-bg-color="#0B1020">
        <div className="container">
          <div className="section_title text-center text-white"><h2 className="title-animation">Leadership</h2></div>
          <div className="row g-4">
            {[1,2,3,4].map((n) => (
              <div className="col-sm-6 col-lg-3" key={n}>
                <div className="service_item h-100">
                  <img className="w-100 rounded mb-3" src={`/assets/img/about/team_${n}.jpg`} alt={`Leader ${n}`} />
                  <h5 className="text-white mb-1">Leader {n}</h5>
                  <p className="text-white-50 mb-0">Exec Team</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec_padding">
        <div className="container">
          <div className="section_title text-center"><h2 className="title-animation">Our Journey</h2></div>
          <div className="row g-4">
            <div className="col-md-3"><div className="service_item h-100"><h5>2019</h5><p>Founding and early pilots.</p></div></div>
            <div className="col-md-3"><div className="service_item h-100"><h5>2021</h5><p>Validation, AI Analyzer prototype.</p></div></div>
            <div className="col-md-3"><div className="service_item h-100"><h5>2023</h5><p>Unified inbox and template builder.</p></div></div>
            <div className="col-md-3"><div className="service_item h-100"><h5>2024</h5><p>Enterprise controls and global rollout.</p></div></div>
          </div>
        </div>
      </section>

      <section className="sec_padding">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4"><div className="service_item h-100"><h4>Culture & Values</h4><ul className="saas_list list-unstyled mb-0"><li><div className="icon"><img src="/assets/img/home-one/check.png" alt="" /></div>Trust & respect</li><li><div className="icon"><img src="/assets/img/home-one/check.png" alt="" /></div>Clarity & craft</li><li><div className="icon"><img src="/assets/img/home-one/check.png" alt="" /></div>Outcomes over outputs</li></ul></div></div>
            <div className="col-md-4"><div className="service_item h-100"><h4>Security</h4><p>SSO, RBAC, audit logs, and regional data residency options.</p></div></div>
            <div className="col-md-4"><div className="service_item h-100"><h4>Achievements</h4><p>Billions of events processed. 98.% avg inbox placement. Global customer base.</p></div></div>
          </div>
        </div>
      </section>

      <StatsSection />
      <Testimonials />
      <FAQSection id="faq-about" />

      <section className="sec_padding">
        <div className="container">
          <div className="promo_content promo_content_bg text-center"><h2 className="title-animation">Join us on the journey</h2><a href="/careers" className="saas_btn"><div className="btn_text"><span>View Roles</span><span>View Roles</span></div></a></div>
        </div>
      </section>
    </>
  )
}
