import React from 'react'
import SEO from '../utils/SEO'
import FAQSection from '../components/FAQSection'

export default function Login() {
  return (
    <>
      <SEO title="Login — Chatriox" description="Access your Chatriox dashboard." />
      <section className="sec_padding">
        <div className="container"><div className="row justify-content-center"><div className="col-md-6">
          <h2 className="mb-4">Login</h2>
          <form className="contact_form">
            <div className="mb-3"><input type="email" className="form-control" placeholder="Email" required /></div>
            <div className="mb-3"><input type="password" className="form-control" placeholder="Password" required /></div>
            <button className="saas_btn"><div className="btn_text"><span>Login</span><span>Login</span></div></button>
          </form>
        </div></div></div>
      </section>
      <FAQSection id="faq-login" />
    </>
  )
}
