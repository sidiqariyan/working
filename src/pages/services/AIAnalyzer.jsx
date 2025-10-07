import React from 'react'
import SEO from '../../utils/SEO'
import ServiceDetail from '../../components/ServiceDetail'

export default function AIAnalyzer() {
  const data = {
    id: 'ai-analyzer',
    title: 'AI Campaign Analyzer',
    subtitle: 'Turn campaign signals into clear next steps for copy, timing, and targeting.',
    heroImg: '/assets/img/home-one/analytic_img.png',
    overview: 'Automatically surface insights on copy, timing, audience, deliverability health, and anomalies with clear recommendations you can act on.',
    features: [
      { title: 'Recommendations', desc: 'Actionable suggestions based on performance patterns.' },
      { title: 'Anomaly Detection', desc: 'Alerts for unusual spikes or drops.' },
      { title: 'Attribution', desc: 'Cohorts, paths, and contribution analysis.' },
      { title: 'Exports', desc: 'Share findings with stakeholders and tools.' }
    ],
    steps: [
      { title: 'Ingest', desc: 'Sync campaign and event data.' },
      { title: 'Model', desc: 'Analyze patterns and correlations.' },
      { title: 'Recommend', desc: 'Generate next-best-actions.' },
      { title: 'Measure', desc: 'Track impact and iterate.' }
    ],
    benefits: [
      { title: 'Clarity', desc: 'Know what to improve next.' },
      { title: 'Speed', desc: 'Automate time-consuming analysis.' },
      { title: 'Confidence', desc: 'Make decisions with stronger evidence.' },
      { title: 'Alignment', desc: 'Share insights across teams easily.' }
    ],
    useCases: [
      { title: 'Subject Lines', desc: 'Find patterns that drive opens and replies.' },
      { title: 'Send Times', desc: 'Optimize windows by segment and locale.' },
      { title: 'Targeting', desc: 'Refine audiences based on conversion paths.' }
    ],
    comparison: [
      { title: 'Versus Manual Dashboards', desc: 'Proactive insights instead of static charts.' },
      { title: 'Versus Black-box Tools', desc: 'Transparent rationale with clear actions.' }
    ],
    testimonials: [{}, {}],
    faqs: [{}, {}],
    cta: { label: 'Analyze Your Campaigns', href: '/signup' }
  }

  return (
    <>
      <SEO title="AI Campaign Analyzer — Chatriox" description="Actionable insights for copy, timing, targeting, and health." />
      <ServiceDetail {...data} />
    </>
  )
}
