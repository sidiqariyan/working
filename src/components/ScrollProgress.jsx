import React, { useState, useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div
      className="position-fixed top-0 start-0 end-0 bg-primary"
      style={{
        scaleX,
        transformOrigin: '0%',
        height: '3px',
        zIndex: 10000
      }}
    />
  )
}

export default ScrollProgress
