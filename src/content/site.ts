export const site = {
  name: 'Blue Wave Dev',
  tagline: 'Software Consulting & Development',
  url: 'https://www.bluewavedev.ca',
  contact: {
    email: 'johnathanbryce@gmail.com',
    phoneDisplay: '(604) 220 7425',
    phoneTel: '+16042207425',
    phoneJsonLd: '6042207425',
    formAction: 'https://formsubmit.co/johnathanbryce@gmail.com',
  },
  social: {
    linkedInCompany: 'https://www.linkedin.com/company/blue-wave-dev',
    linkedInPersonal: 'https://www.linkedin.com/in/johnathanbryce/',
    github: 'https://github.com/johnathanbryce',
  },
  logoAlt: "Blue Wave Dev's logo. A circle with two small waves",
  wavesLogoAlt: "Blue Wave Dev's waves logo",
} as const

export const seo = {
  title: 'Blue Wave Dev | Software Consulting and Development, Vancouver',
  description:
    'Software consulting and development by Johnathan Bryce, a full stack developer in Vancouver, BC. Scoping and planning, architecture review, web and app development, AI features, infrastructure and ongoing engineering support.',
  keywords:
    'software consulting Vancouver, software development Vancouver, AI consulting Vancouver, AI engineer, RAG, LLM agents, full stack developer, web development, app development, small business web development, Blue Wave Dev, Johnathan Bryce',
  jsonLdDescription:
    'Software consulting and development practice in Vancouver, BC, run by Johnathan Bryce. Scoping and planning, architecture and technical review, web and app development, AI features, infrastructure and delivery, and ongoing engineering support.',
  // No areaServed claim: work is global. Do not re-add a city-scoped areaServed to the JSON-LD.
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
    { label: 'Small business', to: 'portfolio' },
    { label: 'About', to: 'about' },
    { label: 'Contact', to: 'contact' },
  ] satisfies NavLink[],
  contactLabel: 'Contact',
  themeToggleToDark: 'Switch to dark theme',
  themeToggleToLight: 'Switch to light theme',
} as const

export const footer = {
  navigationTitle: 'Navigation',
  brandTitle: 'Blue Wave Dev',
  brandLine: 'Software & AI Consulting · Vancouver, BC',
  copyright: '© 2026 Blue Wave Dev',
} as const

export const notFound = {
  title: 'Oops! 404 page not found.',
  subtitle: 'Return to Blue Wave Dev:',
} as const
