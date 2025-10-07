import React from 'react'
import SEO from '../../utils/SEO'
import ServiceDetail from '../../components/ServiceDetail'

export default function BulkWhatsApp() {
  const data = {
    id: 'bulk-whatsapp',
    title: 'Bulk WhatsApp Sending',
    subtitle: 'Personalized WhatsApp sequences with media, compliance, and unified inbox.',
    heroImg: '/assets/img/home-one/analytic_img.png',
    overview: 'Plan and launch compliant WhatsApp campaigns with template approvals, localization, reply tracking, and a unified inbox across channels.',
    features: [
      { title: 'Template Approvals', desc: 'Manage pre-approved templates per locale.' },
      { title: 'Media Messages', desc: 'Send images, PDFs, and rich content.' },
      { title: 'Smart Routing', desc: 'Deduplicate and route messages to the right contact.' },
      { title: 'Unified Inbox', desc: 'See replies across channels in one place.' }
    ],
    steps: [
      { title: 'Connect', desc: 'Link provider and configure templates.' },
      { title: 'Segment', desc: 'Target opt-in contacts with personalization.' },
      { title: 'Launch', desc: 'Schedule sequences and monitor delivery.' },
      { title: 'Respond', desc: 'Triage replies in a unified inbox with labels.' }
    ],
    benefits: [
      { title: 'Compliance Built-in', desc: 'Opt-outs, policies, and rate controls.' },
      { title: 'Higher Engagement', desc: 'Rich media and personalization boost replies.' },
      { title: 'Operational Speed', desc: 'Templates and approvals accelerate shipping.' },
      { title: 'Clear Analytics', desc: 'Delivery and reply insights for every campaign.' }
    ],
    useCases: [
      { title: 'Promotions', desc: 'Local offers and product drops.' },
      { title: 'Reminders', desc: 'Renewals, events, and follow-ups.' },
      { title: 'Support', desc: 'Guided flows and quick responses.' }
    ],
    comparison: [
      { title: 'Versus Standalone Tools', desc: 'One place for templates, sequences, and analytics.' },
      { title: 'Versus Manual Ops', desc: 'Safer, faster, and measurable at scale.' }
    ],
    testimonials: [{}, {}],
    faqs: [{}, {}],
    cta: { label: 'Scale WhatsApp with Chatriox', href: '/signup' }
  }

  return (
    <>
      <SEO title="Bulk WhatsApp — Chatriox" description="Personalized WhatsApp sequences with compliance built in." />
      <ServiceDetail {...data} />
    </>
  )
}