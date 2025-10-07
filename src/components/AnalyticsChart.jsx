import React, { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function AnalyticsChart({ data = [65, 78, 85, 92], labels = ['Q1', 'Q2', 'Q3', 'Q4'] }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <div ref={ref} className="bg-dark rounded-3 p-4" style={{ minHeight: '200px' }}>
      <div className="d-flex align-items-end justify-content-between h-100" style={{ height: '160px' }}>
        {data.map((value, index) => (
          <div key={index} className="d-flex flex-column align-items-center flex-grow-1">
            <motion.div
              className="bg-primary rounded-1 mb-2"
              style={{ width: '100%', maxWidth: '40px' }}
              initial={{ height: 4 }}
              animate={inView ? { height: `${(value / 100) * 140}px` } : { height: 4 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: 'easeOut' }}
            />
            <small className="text-light opacity-75">{labels[index]}</small>
          </div>
        ))}
      </div>
      <div className="text-center mt-3">
        <small className="text-light opacity-75">Deliverability Rate Improvement</small>
      </div>
    </div>
  )
}