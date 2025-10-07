import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'

export default function FAQAccordion({ faqs, id = 'faq-accordion' }) {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggleFAQ(index)
    }
  }

  return (
    <div className="accordion" id={id}>
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          className="accordion-item border-0 mb-3 rounded-3 overflow-hidden shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${openIndex === index ? '' : 'collapsed'} fw-semibold border-0 bg-white`}
              type="button"
              onClick={() => toggleFAQ(index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              aria-expanded={openIndex === index}
              aria-controls={`${id}-collapse-${index}`}
            >
              <span className="me-2 text-primary fw-bold">{index + 1}.</span>
              {faq.question}
              <FiChevronDown 
                className={`ms-auto transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
                size={20}
              />
            </button>
          </h2>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="accordion-collapse"
                id={`${id}-collapse-${index}`}
              >
                <div className="accordion-body pt-0">
                  <p className="mb-0 text-muted">{faq.answer}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  )
}