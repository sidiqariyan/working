import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Preloader = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1800)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{
            background: '#0f172a',
            zIndex: 99999
          }}
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="d-inline-block mb-4"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                <div className="position-relative" style={{ width: '80px', height: '80px' }}>
                  <motion.div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                      border: '3px solid #1e40af',
                      borderRadius: '50%'
                    }}
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: 'linear'
                    }}
                  />
                  <motion.div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                      border: '3px solid transparent',
                      borderTopColor: '#3b82f6',
                      borderRadius: '50%'
                    }}
                    animate={{
                      rotate: -360,
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: 'linear'
                    }}
                  />
                  <div
                    className="position-absolute top-50 start-50 translate-middle bg-primary"
                    style={{ width: '20px', height: '20px', borderRadius: '50%' }}
                  />
                </div>
              </motion.div>

              <motion.h3
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-white fw-bold mb-3"
                style={{ letterSpacing: '4px', fontSize: '1.75rem' }}
              >
                CHATRIOX
              </motion.h3>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="d-flex justify-content-center gap-2"
              >
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="bg-primary"
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%'
                    }}
                    animate={{
                      y: [0, -12, 0],
                    }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      delay: i * 0.15
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Preloader
