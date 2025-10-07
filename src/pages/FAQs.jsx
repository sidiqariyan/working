import React from 'react'
import SEO from '../utils/SEO'
import FAQSection from '../components/FAQSection'

export default function FAQs() {
  return (
    <>
      <SEO title="Chatriox FAQs" description="Common questions about Chatriox." />
      <section className="sec_padding">
        <div className="container">
          <div className="section_title text-center"><h2 className="title-animation">Frequently Asked Questions</h2><p>Answers about plans, limits, integrations, and support.</p></div>
        </div>
      </section>
      <FAQSection id="faq-page" />
    </>
  )
}
