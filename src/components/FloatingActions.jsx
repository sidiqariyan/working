import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowUp, FiPhone, FiMail } from 'react-icons/fi'

const FloatingActions = () => {
  const [showScrollTop, setShowScrollTop] = useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1, backgroundColor: '#1e40af' }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="position-fixed btn btn-primary rounded-circle shadow-lg d-flex align-items-center justify-content-center"
            style={{
              bottom: '180px',
              right: '24px',
              width: '56px',
              height: '56px',
              zIndex: 9997
            }}
          >
            <FiArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      <motion.a
        href="tel:+15551234567"
        whileHover={{ scale: 1.1, backgroundColor: '#059669' }}
        whileTap={{ scale: 0.9 }}
        className="position-fixed btn btn-success rounded-circle shadow-lg d-flex align-items-center justify-content-center"
        style={{
          bottom: '110px',
          right: '24px',
          width: '56px',
          height: '56px',
          zIndex: 9997
        }}
        title="Call us"
      >
        <FiPhone size={22} />
      </motion.a>

      <motion.a
        href="mailto:support@chatriox.com"
        whileHover={{ scale: 1.1, backgroundColor: '#dc2626' }}
        whileTap={{ scale: 0.9 }}
        className="position-fixed btn btn-danger rounded-circle shadow-lg d-flex align-items-center justify-content-center"
        style={{
          bottom: '250px',
          right: '24px',
          width: '56px',
          height: '56px',
          zIndex: 9997
        }}
        title="Email us"
      >
        <FiMail size={22} />
      </motion.a>
    </>
  )
}

export default FloatingActions
