import React from 'react'
import SEO from '../../utils/SEO'
import ServiceDetail from '../../components/ServiceDetail'

export default function BulkEmail() {
  const data = {
    id: 'bulk-email',
    title: 'Bulk Email Sending',
    subtitle: 'Accelerate outreach with reliable deliverability, scheduling, and templates.',
    heroImg: '/assets/img/home-one/features_img_one.png',
    overview: 'Chatriox Bulk Email provides warm-up friendly sending with smart throttling, template variables, approvals, and analytics to scale confidently without risking domain reputation.',
    features: [
      { title: 'Smart Throttling', desc: 'Auto-adjust sends based on domain health and engagement.' },
      { title: 'Templates & Variables', desc: 'Personalize at scale with safe, reusable blocks.' },
      { title: 'Approvals & QA', desc: 'Guardrails that prevent mistakes before launch.' },
      { title: 'Scheduling Windows', desc: 'Send at optimal times across regions and timezones.' }
    ],
    steps: [
      { title: 'Connect', desc: 'Link SMTP or API and verify domains.' },
      { title: 'Import', desc: 'Upload lists and run validation & suppression.' },
      { title: 'Compose', desc: 'Create templates with variables and locales.' },
      { title: 'Launch', desc: 'Schedule, monitor health, and iterate with AI insights.' }
    ],
    benefits: [
      { title: 'Better Inbox Placement', desc: 'Warm-up guidance and validation protect reputation.' },
      { title: 'Higher Replies', desc: 'Personalization and timing improve engagement.' },
      { title: 'Operational Safety', desc: 'RBAC, approvals, and audit trails.' },
      { title: 'Faster Iteration', desc: 'AI suggestions and experiments accelerate learning.' }
    ],
    useCases: [
      { title: 'Outbound Sales', desc: 'B2B prospecting with sequences and follow-ups.' },
      { title: 'Lifecycle Nurture', desc: 'Onboarding and reactivation campaigns.' },
      { title: 'Announcements', desc: 'Product updates and event invites.' }
    ],
    comparison: [
      { title: 'Versus Legacy ESPs', desc: 'More control over warm-up, validation, and safety.' },
      { title: 'Versus DIY Tools', desc: 'Unified workflow with analytics and governance.' }
    ],
    testimonials: [{}, {}],
    faqs: [{}, {}],
    cta: { label: 'Start Sending with Chatriox', href: '/signup' }
  }

  return (
    <>
      <SEO title="Bulk Email — Chatriox" description="Scale outreach with reliable deliverability and templates." />
      <ServiceDetail {...data} />
    </>
  )
}
