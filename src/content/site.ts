export const site = {
  name: 'Blue Wave Dev',
  tagline: 'Software & AI Consulting',
  url: 'https://www.bluewavedev.ca',
  contact: {
    email: 'johnathanbryce@gmail.com',
    phoneDisplay: '(604) 220 7425',
    phoneTel: '+6042207425',
    phoneJsonLd: '6042207425',
    formAction: 'https://formsubmit.co/johnathanbryce@gmail.com',
  },
  social: {
    linkedInCompany: 'https://www.linkedin.com/company/blue-wave-dev',
    linkedInPersonal: 'https://www.linkedin.com/in/johnathanbryce/',
    github: 'https://github.com/johnathanbryce',
    website: 'https://www.jbryce.dev',
  },
  logoAlt: "Blue Wave Dev's logo. A circle with two small waves",
  wavesLogoAlt: "Blue Wave Dev's waves logo",
} as const

export const seo = {
  title: 'Blue Wave Dev | Software & AI Consulting, Vancouver',
  description:
    'Software and AI consulting by Johnathan Bryce, a full stack and AI software engineer in Vancouver, BC. AI feature scoping, RAG and search systems, LLM agents, full stack delivery and infrastructure, plus web development for small businesses.',
  keywords:
    'software consulting Vancouver, AI consulting Vancouver, AI engineer, RAG, LLM agents, FastAPI, Next.js, full stack engineer, small business web development, Blue Wave Dev, Johnathan Bryce',
  jsonLdDescription:
    'Software and AI consulting practice in Vancouver, BC, run by Johnathan Bryce. AI feature scoping, architecture, RAG and search, LLM agents, full stack delivery and infrastructure.',
  address: { locality: 'Vancouver', region: 'BC', country: 'CA' },
} as const

export type NavLink = { label: string; to: string }

export const nav = {
  desktop: [
    { label: 'Services', to: 'services' },
    { label: 'Work', to: 'clients' },
    { label: 'About', to: 'about' },
  ] satisfies NavLink[],
  mobile: [
    { label: 'Services', to: 'services' },
    { label: 'Work', to: 'clients' },
    { label: 'Small Business', to: 'portfolio' },
    { label: 'Testimonials', to: 'testimonials' },
    { label: 'About', to: 'about' },
  ] satisfies NavLink[],
  contactLabel: 'Contact',
} as const

export const footer = {
  navigationTitle: 'Navigation',
  brandTitle: 'Blue Wave Dev',
} as const

export const contactModal = {
  titleHighlight: 'Get in',
  titleRest: 'touch',
  namePlaceholder: 'Name',
  emailPlaceholder: 'Email',
  messagePlaceholder: 'What are you building, and where is it stuck?',
  submitLabel: 'Send',
  thanksTitle: 'Thanks for reaching out.',
  thanksBody: 'I read every message and will reply as soon as I can.',
  thanksSignature: '- Johnathan Bryce',
} as const

export const notFound = {
  title: 'Oops! 404 page not found.',
  subtitle: 'Return to Blue Wave Dev:',
} as const
