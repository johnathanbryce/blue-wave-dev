export const hero = {
  kicker: 'Johnathan Bryce · Vancouver, BC',
  title: 'Software consulting and development.',
  text: 'I help teams ship software that works: scoping what to build, designing the system, writing the code, and running it in production. AI is where I go deepest.',
  ctaLabel: 'Get in touch',
  secondaryCtaLabel: 'See selected work',
  // The right-hand plate. Rendered as a mono spec sheet; the rows reveal one
  // at a time (see README, Interactions). No image in the hero by design.
  plateTitle: 'how an engagement runs',
  steps: [
    { key: '01 scope', text: 'What to build first, what it will cost to run, and what to leave out.' },
    { key: '02 design', text: 'The system, the data flow, and the model or vendor choices, written down before code.' },
    { key: '03 build', text: 'Working software in small releases, reviewed and tested as it goes.' },
    { key: '04 run', text: 'Deployed, monitored, documented, and handed over to your team.' },
  ],
} as const
