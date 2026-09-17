export type Service = {
  title: string
  text: string
}

export const services = {
  heading: { standout: 'CONSULTING', title: 'SERVICES' },
  intro: [
    'Engineering help for teams building AI features and the systems around them.',
    'Scoping, architecture, delivery, and the infrastructure to run it in production.',
  ],
  items: [
    {
      title: 'AI feature scoping',
      text: 'Work out whether an AI feature is worth building, which approach fits, what it will cost to run, and what to build first.',
    },
    {
      title: 'Architecture guidance',
      text: 'A second set of eyes on your system design, data flow and model choices before you commit engineering time to them.',
    },
    {
      title: 'RAG and search systems',
      text: 'Retrieval pipelines, hybrid search on Elasticsearch, document indexing and the caching that keeps it fast and affordable.',
    },
    {
      title: 'LLM agent design',
      text: 'Tool-calling agents with model routing, prompt caching and conversation compaction, built to control cost as usage grows.',
    },
    {
      title: 'Full stack delivery',
      text: 'Python and FastAPI back ends, TypeScript, Next.js and React front ends, PostgreSQL and Redis. I can take a feature from spec to production.',
    },
    {
      title: 'Infrastructure and CI/CD',
      text: 'DigitalOcean and Azure, Docker, Nginx, GitHub Actions pipelines, monitoring with Sentry, and the release process around them.',
    },
  ] satisfies Service[],
} as const
