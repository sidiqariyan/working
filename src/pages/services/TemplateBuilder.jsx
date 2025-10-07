import React from 'react'
import SEO from '../../utils/SEO'
import ServiceDetail from '../../components/ServiceDetail'

export default function TemplateBuilder() {
  const data = {
    id: 'template-builder',
    title: 'Template Builder',
    subtitle: 'Fast, modular templates with AI suggestions, approvals, and localization.',
    heroImg: '/assets/img/home-one/features_img_two.png',
    overview: 'Design once and reuse everywhere with variables, blocks, guardrails, versioning, and experiments powered by AI.',
    features: [
      { title: 'Blocks & Components', desc: 'Reusable sections for Email and WhatsApp.' },
      { title: 'Variables', desc: 'Safely personalize at scale with preview checks.' },
      { title: 'Localization', desc: 'Manage locales and fallbacks cleanly.' },
      { title: 'Approvals', desc: 'Get stakeholder sign-off with change history.' }
    ],
    steps: [
      { title: 'Model', desc: 'Define blocks and variables.' },
      { title: 'Compose', desc: 'Arrange sections and add variants.' },
      { title: 'Review', desc: 'Run QA and stakeholder approvals.' },
      { title: 'Launch', desc: 'Publish, experiment, and iterate.' }
    ],
    benefits: [
      { title: 'Faster Shipping', desc: 'Move from idea to launch quickly.' },
      { title: 'Brand Safety', desc: 'Guardrails enforce consistency.' },
      { title: 'Collaboration', desc: 'Design, content, and ops work in sync.' },
      { title: 'Learning', desc: 'AI suggests improvements over time.' }
    ],
    useCases: [
      { title: 'Campaign Templates', desc: 'Build once, adapt per segment.' },
      { title: 'Localization', desc: 'Global launches with local nuance.' },
      { title: 'A/B Testing', desc: 'Launch variants and learn quickly.' }
    ],
    comparison: [
      { title: 'Versus Docs', desc: 'Structured, safe, and measurable.' },
      { title: 'Versus Ad-hoc', desc: 'Reduce errors with QA and reviews.' }
    ],
    testimonials: [{}, {}],
    faqs: [{}, {}],
    cta: { label: 'Create Your First Template', href: '/signup' }
  }

  return (
    <>
      <SEO title="Template Builder — Chatriox" description="Fast, modular templates with AI suggestions and approvals." />
      <ServiceDetail {...data} />
    </>
  )
}
