import React, { useEffect, useState } from 'react'
import { motion, useInView, useMotionValue, animate } from 'framer-motion'

export default function AnimatedCounter({ 
  from = 0, 
  to = 100, 
  duration = 2, 
  suffix = '', 
  prefix = '',
  className = '' 
}) {
  const ref = React.useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [displayValue, setDisplayValue] = useState(from)

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration,
        ease: 'easeOut',
        onUpdate: (value) => {
          setDisplayValue(Math.round(value))
        }
      })
      return () => controls.stop()
    }
  }, [inView, from, to, duration])

  return (
    <motion.span 
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {prefix}{displayValue.toLocaleString()}{suffix}
    </motion.span>
  )
}