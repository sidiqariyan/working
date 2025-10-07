import React from 'react'
import SEO from '../../utils/SEO'
import ServiceDetail from '../../components/ServiceDetail'

export default function EmailValidation() {
  const data = {
    id: 'email-validation',
    title: 'Email Validation',
    subtitle: 'Real-time checks: syntax, MX/DNS, disposable, role, and spam trap signals.',
    heroImg: '/assets/img/home-one/analytic_img.png',
    overview: 'Maintain list health with synchronous API checks, bulk imports, suppression, and enrichment to reduce bounces and protect your domains.',
    features: [
      { title: 'Synchronous API', desc: 'Low-latency validation for signups and imports.' },
      { title: 'Bulk Processing', desc: 'Fast, parallel validation for large lists.' },
      { title: 'Scoring', desc: 'Quality scores and risk categories.' },
      { title: 'Suppression', desc: 'Rules to block risky or invalid contacts.' }
    ],
    steps: [
      { title: 'Connect', desc: 'Generate API keys and SDK config.' },
      { title: 'Validate', desc: 'Run checks during import or real-time.' },
      { title: 'Segment', desc: 'Score and route to the right campaigns.' },
      { title: 'Monitor', desc: 'Track list health and bounce rates.' }
    ],
    benefits: [
      { title: 'Fewer Bounces', desc: 'Prevent invalid or risky sends.' },
      { title: 'Better Inboxing', desc: 'Protect sender reputation with clean lists.' },
      { title: 'Faster QA', desc: 'Spot issues before launch.' },
      { title: 'Compliance', desc: 'Safer data handling and storage.' }
    ],
    useCases: [
      { title: 'Signup Validation', desc: 'Block disposable and risky addresses at source.' },
      { title: 'Preflight Checks', desc: 'Clean imported lists before sending.' },
      { title: 'Scoring & Enrichment', desc: 'Prioritize high-quality contacts.' }
    ],
    comparison: [
      { title: 'Versus Static Checks', desc: 'Live DNS, MX, and risk signals perform better.' },
      { title: 'Versus No Validation', desc: 'Higher placement, fewer spam traps, and consistent growth.' }
    ],
    testimonials: [{}, {}],
    faqs: [{}, {}],
    cta: { label: 'Start with Clean Data', href: '/signup' }
  }

  return (
    <>
      <SEO title="Email Validation — Chatriox" description="Real-time checks to keep lists clean and deliverability high." />
      <ServiceDetail {...data} />
    </>
  )
}
