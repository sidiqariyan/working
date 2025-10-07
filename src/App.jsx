import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import SharedLayout from './components/SharedLayout'
import Preloader from './components/Preloader'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import BulkEmail from './pages/services/BulkEmail'
import BulkWhatsApp from './pages/services/BulkWhatsApp'
import EmailValidation from './pages/services/EmailValidation'
import LeadScraper from './pages/services/LeadScraper'
import TemplateBuilder from './pages/services/TemplateBuilder'
import AIAnalyzer from './pages/services/AIAnalyzer'
import Pricing from './pages/Pricing'
import CaseStudies from './pages/CaseStudies'
import Blog from './pages/Blog'
import FAQs from './pages/FAQs'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Careers from './pages/Careers'
import Resources from './pages/Resources'
import Integrations from './pages/Integrations'
import Support from './pages/Support'
import AdminTickets from './pages/AdminTickets'

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -10 }
}

function PageWrapper({ children }) {
  return (
    <motion.main initial="initial" animate="in" exit="out" variants={pageVariants} transition={{ duration: 0.35, ease: 'easeOut' }}>
      {children}
    </motion.main>
  )
}

export default function App() {
  const location = useLocation()
  return (
    <>
      <Preloader />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="about" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="services" element={<PageWrapper><Services /></PageWrapper>} />
          <Route path="services/bulk-email" element={<PageWrapper><BulkEmail /></PageWrapper>} />
          <Route path="services/bulk-whatsapp" element={<PageWrapper><BulkWhatsApp /></PageWrapper>} />
          <Route path="services/email-validation" element={<PageWrapper><EmailValidation /></PageWrapper>} />
          <Route path="services/lead-scraper" element={<PageWrapper><LeadScraper /></PageWrapper>} />
          <Route path="services/template-builder" element={<PageWrapper><TemplateBuilder /></PageWrapper>} />
          <Route path="services/ai-analyzer" element={<PageWrapper><AIAnalyzer /></PageWrapper>} />
          <Route path="pricing" element={<PageWrapper><Pricing /></PageWrapper>} />
          <Route path="case-studies" element={<PageWrapper><CaseStudies /></PageWrapper>} />
          <Route path="blog" element={<PageWrapper><Blog /></PageWrapper>} />
          <Route path="faqs" element={<PageWrapper><FAQs /></PageWrapper>} />
          <Route path="contact" element={<PageWrapper><Contact /></PageWrapper>} />
          <Route path="login" element={<PageWrapper><Login /></PageWrapper>} />
          <Route path="signup" element={<PageWrapper><Signup /></PageWrapper>} />
          <Route path="dashboard" element={<PageWrapper><Dashboard /></PageWrapper>} />
          <Route path="privacy" element={<PageWrapper><Privacy /></PageWrapper>} />
          <Route path="terms" element={<PageWrapper><Terms /></PageWrapper>} />
          <Route path="careers" element={<PageWrapper><Careers /></PageWrapper>} />
          <Route path="resources" element={<PageWrapper><Resources /></PageWrapper>} />
          <Route path="integrations" element={<PageWrapper><Integrations /></PageWrapper>} />
          <Route path="support" element={<PageWrapper><Support /></PageWrapper>} />
          <Route path="admin/tickets" element={<PageWrapper><AdminTickets /></PageWrapper>} />
        </Route>
      </Routes>
    </AnimatePresence>
    </>
  )
}
