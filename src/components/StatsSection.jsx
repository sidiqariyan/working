import React, { useEffect } from 'react'
import { motion, useAnimation, useInView, useMotionValue, animate } from 'framer-motion'

function Counter({ from = 0, to = 100, suffix = '', duration = 1.6 }) {
  const ref = React.useRef(null)
  const inView = useInView(ref, { once: true, margin: '-20% 0px' })
  const mv = useMotionValue(from)
  const [val, setVal] = React.useState(from)

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, { duration, ease: 'easeOut', onUpdate: v => setVal(v) })
      return () => controls.stop()
    }
  }, [inView, from, to, duration])

  return <span ref={ref}>{`${Math.round(val).toLocaleString()}${suffix}`}</span>
}

export default function StatsSection() {
  const bars = [65, 78, 92, 84]
  const ctrl = useAnimation()
  const ref = React.useRef(null)
  const inView = useInView(ref, { once: true, margin: '-20% 0px' })

  useEffect(() => { if (inView) ctrl.start('show') }, [inView])

  return (
    <section className="sec_padding" data-bg-color="#0B1020">
      <div className="container">
        <div className="section_title text-center">
          <h2 className="title-animation text-white">Why Companies Choose Chatriox</h2>
          <p className="text-white/70">Visual performance at a glance—reliability, growth, and outcomes.</p>
        </div>
        <div className="row text-center text-white g-4">
          <div className="col-md-3">
            <div className="service_item">
              <h3 className="mb-1"><Counter to={120_000_000} suffix="+" /></h3>
              <p className="mb-0">Emails sent</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="service_item">
              <h3 className="mb-1"><Counter to={98} suffix=".%" /></h3>
              <p className="mb-0">Avg. inbox placement</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="service_item">
              <h3 className="mb-1"><Counter to={240} suffix="%" /></h3>
              <p className="mb-0">Client growth YoY</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="service_item">
              <h3 className="mb-1"><Counter to={35} suffix="%" /></h3>
              <p className="mb-0">Deliverability uplift</p>
            </div>
          </div>
        </div>
        <div className="row align-items-end mt-5" ref={ref}>
          <div className="col-lg-8">
            <div className="p-4 rounded" data-bg-color="#12172A">
              <div className="d-flex align-items-end gap-3" style={{height:160}}>
                {bars.map((b, i) => (
                  <motion.div key={i} className="flex-grow-1 rounded" style={{background:'#5D6BFF'}}
                    initial={{ height: 8 }}
                    variants={{ show: { height: `${b}%` } }}
                    animate={ctrl}
                    transition={{ duration: 0.9, delay: i * 0.12, ease: 'easeOut' }}
                  />
                ))}
              </div>
              <div className="d-flex justify-content-between mt-2 text-white/70 small"><span>Q1</span><span>Q2</span><span>Q3</span><span>Q4</span></div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="service_item">
              <h4 className="mb-2">Enterprise reliability</h4>
              <ul className="list-unstyled saas_list">
                <li><div className="icon"><img src="/assets/img/home-one/check.png" alt="" /></div>Warm-up guidance & throttling</li>
                <li><div className="icon"><img src="/assets/img/home-one/check.png" alt="" /></div>Validation & suppression lists</li>
                <li><div className="icon"><img src="/assets/img/home-one/check.png" alt="" /></div>SSO, RBAC, audit logs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
