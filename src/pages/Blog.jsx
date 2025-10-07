import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../utils/SEO'
import FAQSection from '../components/FAQSection'
import Testimonials from '../components/Testimonials'

const posts = [
  { slug: 'email-warmup', title: 'Email Warm-up Myths', excerpt: 'What actually improves deliverability and what does not.' },
  { slug: 'whatsapp-compliance', title: 'WhatsApp Compliance 101', excerpt: 'Templates, opt-ins, and best practices.' },
  { slug: 'ai-subjects', title: 'AI for Subject Lines', excerpt: 'How to test faster and better with AI.' },
]

export default function Blog() {
  return (
    <>
      <SEO title="Chatriox Blog" description="Articles and insights for modern outreach teams." />
      <section className="sec_padding">
        <div className="container">
          <div className="section_title text-center"><h2 className="title-animation">Resources</h2><p>Insights for modern outreach teams.</p></div>
          <div className="service_item text-center mb-4"><div className="d-inline-flex gap-2 flex-wrap"><span className="badge bg-secondary">Deliverability</span><span className="badge bg-secondary">WhatsApp</span><span className="badge bg-secondary">Compliance</span><span className="badge bg-secondary">AI</span></div></div>
          <div className="row">
            {posts.map(p => (
              <div className="col-md-6 col-lg-4" key={p.slug}>
                <div className="blog_item">
                  <div className="blog_img"><img src="assets/img/home-one/tab_img.jpg" alt="" /></div>
                  <div className="blog_content p-3">
                    <h4>{p.title}</h4>
                    <p>{p.excerpt}</p>
                    <Link to="/blog" className="saas_btn"><div className="btn_text"><span>Read</span><span>Read</span></div></Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="sec_padding"><div className="container"><div className="service_item text-center"><h3 className="mb-2">Featured</h3><p>Email Warm-up Myths — What actually improves deliverability and what does not.</p></div></div></section>
      <section className="sec_padding"><div className="container"><div className="service_item text-center"><h3 className="mb-2">Subscribe</h3><form className="newsletter_form newsletter_form_two d-inline-flex gap-2"><input className="form-control" type="email" placeholder="Work email" required /><button className="theme_btn">Subscribe</button></form></div></div></section>
      <Testimonials />
      <section className="sec_padding"><div className="container"><div className="promo_content promo_content_bg text-center"><h2 className="title-animation">Want content like this?</h2><a href="/resources" className="saas_btn"><div className="btn_text"><span>Explore Guides</span><span>Explore Guides</span></div></a></div></div></section>
      <FAQSection id="faq-blog" />
    </>
  )
}
