import React from 'react'

export default function FAQSection({ id = 'faq-shared', title = 'Frequently Asked Questions' }) {
  return (
    <section className="saas_faq_area sec_padding">
      <div className="container">
        <div className="section_title text-center"><h2 className="title-animation">{title}</h2></div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="accordion faq_inner faq_inner_two ps-4" id={id}>
              {[{
                q:'How does Chatriox improve deliverability?',
                a:'Throttling, warm-up guidance, suppression lists, and validation protect sender reputation.'
              },{
                q:'Can I run WhatsApp and Email together?',
                a:'Yes. Manage unified sequences with shared suppression and a combined inbox.'
              },{
                q:'What integrations are supported?',
                a:'Connect SMTP, APIs, CRMs, and webhooks. Enterprise SSO and DPA options available.'
              },{
                q:'Can I customize templates?',
                a:'Use variables, approvals, localization, and AI suggestions for better performance.'
              },{
                q:'Do you offer analytics exports?',
                a:'CSV/JSON exports on paid plans; custom dashboards on enterprise.'
              }].map((item, i) => (
                <div className="accordion-item" key={i}>
                  <h2 className="accordion-header" id={`${id}-h${i}`}>
                    <button className={`accordion-button ${i===0?'':'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target={`#${id}-c${i}`} aria-expanded={i===0} aria-controls={`${id}-c${i}`}>{i+1}. {item.q}</button>
                  </h2>
                  <div id={`${id}-c${i}`} className={`accordion-collapse collapse ${i===0?'show':''}`} aria-labelledby={`${id}-h${i}`} data-bs-parent={`#${id}`}>
                    <div className="accordion-body"><p>{item.a}</p></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
