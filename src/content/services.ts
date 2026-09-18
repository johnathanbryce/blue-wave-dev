export type Service = { title: string; text: string }

export const services = {
  heading: { kicker: '01 / SERVICES', title: 'Consulting and development' },
  intro: 'Consulting and hands-on engineering for teams that need software built, fixed or thought through.',
  items: [
    {
      title: 'Scoping and planning',
      text: 'Turn an idea or a stalled project into a plan: what to build, in what order, what it costs to run, and what to skip.',
    },
    {
      title: 'Architecture and technical review',
      text: 'A second set of eyes on system design, data flow and vendor choices before engineering time goes in. Code and infrastructure audits too.',
    },
    {
      title: 'Web and app development',
      text: 'Websites, web apps and mobile apps, built end to end: back end, front end, database and integrations, from spec to production.',
    },
    {
      title: 'AI features',
      text: 'Assistants, agents, and search over your own data, with the routing and caching that keep model costs predictable. Scoped and built, not just recommended.',
    },
    {
      title: 'Infrastructure and delivery',
      text: 'Deployment, CI/CD pipelines, monitoring, and a release process your team can run without me.',
    },
    {
      title: 'Ongoing engineering support',
      text: 'A standing arrangement for fixes, upgrades, small features and questions, for teams that need an engineer but not a hire.',
    },
  ] satisfies Service[],
} as const
