import React from 'react'
import SEO from '../../utils/SEO'
import ServiceDetail from '../../components/ServiceDetail'

export default function LeadScraper() {
  const data = {
    id: 'lead-scraper',
    title: 'Lead Scraper',
    subtitle: 'Capture, deduplicate, and enrich leads from multiple sources.',
    heroImg: '/assets/img/home-one/Chart.png',
    overview: 'Centralize lead capture with connectors, deduplication, enrichment, and scoring to keep your pipeline clean and prioritized.',
    features: [
      { title: 'Connectors', desc: 'Import from CSV, APIs, forms, and CRMs.' },
      { title: 'Deduplication', desc: 'Cross-source matching and merge rules.' },
      { title: 'Enrichment', desc: 'Firmographics, risk, and social data.' },
      { title: 'Scoring', desc: 'Rank leads by fit and engagement.' }
    ],
    steps: [
      { title: 'Connect', desc: 'Add sources and configure mapping.' },
      { title: 'Clean', desc: 'Run dedupe and suppression rules.' },
      { title: 'Enrich', desc: 'Add firmographic and risk data.' },
      { title: 'Sync', desc: 'Push to CRM and campaigns.' }
    ],
    benefits: [
      { title: 'Cleaner CRM', desc: 'Avoid duplicates and stale data.' },
      { title: 'Higher Conversion', desc: 'Prioritize better-fit leads.' },
      { title: 'Faster Handoffs', desc: 'Consistent enriched records.' },
      { title: 'Confident Targeting', desc: 'Better segments and suppression.' }
    ],
    useCases: [
      { title: 'Event Lists', desc: 'Import, clean, and enrich conference contacts.' },
      { title: 'Inbound Forms', desc: 'Validate and enrich signups automatically.' },
      { title: 'Partner Sync', desc: 'Keep shared records aligned.' }
    ],
    comparison: [
      { title: 'Versus Manual CSVs', desc: 'Automated cleaning and enrichment save time.' },
      { title: 'Versus Single Source', desc: 'Unify fragmented data with consistent rules.' }
    ],
    testimonials: [{}, {}],
    faqs: [{}, {}],
    cta: { label: 'Grow Your Pipeline', href: '/signup' }
  }

  return (
    <>
      <SEO title="Lead Scraper — Chatriox" description="Capture, deduplicate, and enrich leads from multiple sources." />
      <ServiceDetail {...data} />
    </>
  )
}
