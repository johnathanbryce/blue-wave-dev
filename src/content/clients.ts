export type Client = {
  name: string
  role: string
  summary: string
  points: readonly string[]
  url?: string
}

export const clients = {
  heading: { standout: 'SELECTED', title: 'WORK' },
  intro: 'Consulting and engineering engagements. Text only by design.',
  items: [
    // REQUIRES JOHNATHAN SIGN-OFF
    // Every line below comes from the resume. Do not merge to main without explicit approval.
    // No logo, no screenshots, no product link, nothing about how or when the engagement ended.
    // TODO(johnathan): confirm you are comfortable publishing these resume specifics about an employer (the $150 to $60 spend figure, 7.8M PDFs, team lead, Web Summit) and that the product name "Casey" may appear.
    {
      name: 'Caseway',
      role: 'Lead Software Engineer',
      // TODO(johnathan): you supplied this link. The brief said no link into their product; this is the company homepage, not the product. Confirm it stays.
      url: 'https://caseway.ai/',
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
      name: 'Next Tier',
      role: 'AI consulting',
      url: 'https://nexttierstats.com/',
      summary: 'Advised their developer on scaling the app, which services to use, and how to set up and run a RAG-powered chatbot.',
      points: [],
    },
    {
      name: 'Unity Clothing',
      role: 'E-commerce consulting',
      url: 'https://unityclothing.ca/',
      summary: 'Audited their Shopify storefront and delivered SEO and other updates.',
      points: [],
    },
    {
      name: 'Provincial Health Services Authority',
      role: 'SharePoint consulting',
      summary: 'Audited their SharePoint systems and restructured SEO and metadata.',
      points: [],
    },
  ] satisfies Client[],
} as const
