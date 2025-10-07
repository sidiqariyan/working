import React from 'react'
import SEO from '../utils/SEO'
import Testimonials from '../components/Testimonials'
import FAQSection from '../components/FAQSection'

const allRoles = [
  { title:'Senior Frontend Engineer', location:'Remote', type:'Full-time' },
  { title:'Product Designer', location:'Remote', type:'Full-time' },
  { title:'Customer Success Manager', location:'Remote', type:'Full-time' },
  { title:'Tech Writer', location:'Remote', type:'Contract' }
]

export default function Careers() {
  const [q, setQ] = React.useState('')
  const [type, setType] = React.useState('All')
  const roles = allRoles.filter(r => (
    (type==='All' || r.type===type) && (r.title.toLowerCase().includes(q.toLowerCase()) || r.location.toLowerCase().includes(q.toLowerCase()))
  ))

  return (
    <>
      <SEO title="Careers — Chatriox" description="Join us in building the outreach platform teams trust." />
      <section className="sec_padding" data-bg-color="#F7F8FA"><div className="container"><div className="section_title text-center"><h2 className="title-animation">Careers</h2><p>We are a distributed, product-focused team.</p></div></div></section>

      <section className="sec_padding"><div className="container"><div className="row g-3 align-items-center">
        <div className="col-md-6"><input className="form-control" placeholder="Search roles or locations" value={q} onChange={e=>setQ(e.target.value)} /></div>
        <div className="col-md-3"><select className="form-control" value={type} onChange={e=>setType(e.target.value)}><option>All</option><option>Full-time</option><option>Contract</option></select></div>
        <div className="col-md-3 text-end"><a href="/contact" className="saas_btn"><div className="btn_text"><span>Refer a Candidate</span><span>Refer a Candidate</span></div></a></div>
      </div></div></section>

      <section className="sec_padding"><div className="container"><div className="row g-4">{roles.map(r => (<div className="col-md-6 col-lg-4" key={r.title}><div className="service_item h-100"><h4>{r.title}</h4><p>{r.location} · {r.type}</p><a href="/contact" className="saas_btn"><div className="btn_text"><span>Apply</span><span>Apply</span></div></a></div></div>))}</div></div></section>

      <section className="sec_padding"><div className="container"><div className="row g-4"><div className="col-md-4"><div className="service_item"><h4>Why Work With Us</h4><p>Ship meaningful work with kind, talented peers.</p></div></div><div className="col-md-4"><div className="service_item"><h4>Benefits</h4><p>Competitive pay, flexible time, home office stipend.</p></div></div><div className="col-md-4"><div className="service_item"><h4>Growth</h4><p>Conference budget, mentorship, and clear leveling.</p></div></div></div></div></section>

      <section className="sec_padding"><div className="container"><div className="row g-4"><div className="col-md-6"><div className="service_item"><h4>Culture</h4><p>Bias for action, kindness, and craftsmanship.</p></div></div><div className="col-md-6"><div className="service_item"><h4>Employee Stories</h4><p>Hear from teammates about their journey at Chatriox.</p></div></div></div></div></section>

      <Testimonials />
      <FAQSection id="faq-careers" />
      <section className="sec_padding"><div className="container"><div className="promo_content promo_content_bg text-center"><h2 className="title-animation">Don’t see a role?</h2><a href="/contact" className="saas_btn"><div className="btn_text"><span>Reach Out</span><span>Reach Out</span></div></a></div></div></section>
    </>
  )
}
