export type Client = {
  name: string
  role: string
  summary: string
  points: readonly string[]
}

export const clients = {
  heading: { standout: 'SELECTED', title: 'WORK' },
  intro: 'Consulting and engineering engagements. Text only by design.',
  items: [
    // REQUIRES JOHNATHAN SIGN-OFF
    // Every line below comes from the resume. Do not merge to main without explicit approval.
    // No logo, no screenshots, no product link, nothing about how or when the engagement ended.
    // TODO(johnathan): confirm which of these points are cleared for public use, and whether "Casey" may be named.
    {
      name: 'Caseway',
      role: 'Lead Software Engineer',
      summary:
        'Lead engineer on Casey, an AI legal research platform used by lawyers and researchers across Canada. Took over an existing Next.js and FastAPI codebase and became the primary author of the backend, from search infrastructure to the user-facing research agent.',
      points: [
        'Re-architected the agent stack with dual-model routing, prompt caching, Redis-backed summary caching and auto-compaction for long conversations, cutting daily LLM API spend from about $150 to about $60.',
        'Built an unattended court-data pipeline on Azure that ingested 7.8 million case PDFs and matching metadata, about 2 TB, with byte-accurate resume and two-tier validation.',
        'Designed and ran the Elasticsearch-backed public case law search, including rate limiting and query caps on an unauthenticated endpoint.',
        'Owned the DigitalOcean infrastructure, wrote the GitHub Actions CI/CD pipelines, held release authority for production, and led an end-to-end infrastructure and security audit.',
        'Onboarded and led a four-person offshore development team, wrote the platform documentation, and ran product demos including the Web Summit Vancouver booth.',
      ],
    },
    {
      name: 'NextTier Sports',
      role: 'AI consulting',
      summary: 'AI feature scoping and architecture guidance.',
      // TODO(johnathan): what was the feature, and what did the guidance cover? Is there a public site to link?
      points: [],
    },
    {
      name: 'Unity Clothing',
      role: 'E-commerce consulting',
      summary: 'Shopify e-commerce consulting.',
      // TODO(johnathan): what did the Shopify work involve (theme, apps, checkout, integrations)? Is there a public site to link?
      points: [],
    },
  ] satisfies Client[],
} as const
