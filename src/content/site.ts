export const site = {
  name: 'Blue Wave Dev',
  tagline: 'Web Design + Development',
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
  },
  logoAlt: "Blue Wave Dev's logo. A circle with two small waves",
  wavesLogoAlt: "Blue Wave Dev's waves logo",
} as const

export const seo = {
  title: 'Blue Wave Dev | Custom Web Design & Development Services',
  description:
    'Blue Wave Dev specializes in custom web design and development services for businesses and individuals. Discover how we can help your business thrive online.',
  keywords:
    'Vancouver web design, Vancouver web development, custom web development Vancouver, responsive web design Vancouver, eCommerce development BC, SEO services Vancouver, Next.js, React, small business web solutions, professional website design, website development Vancouver, BC, Canada, Blue Wave Dev',
  jsonLdDescription:
    'A web design and development agency based in Vancouver, specializing in creating custom websites for businesses.',
  areaServed: 'Vancouver, BC',
  address: { locality: 'Vancouver', region: 'BC', country: 'CA' },
} as const

export type NavLink = { label: string; to: string }

export const nav = {
  desktop: [
    { label: 'Services', to: 'services' },
    { label: 'Portfolio', to: 'portfolio' },
    { label: 'About', to: 'about' },
  ] satisfies NavLink[],
  mobile: [
    { label: 'Services', to: 'services' },
    { label: 'Portfolio', to: 'portfolio' },
    { label: 'Testimonials', to: 'testimonials' },
    { label: 'About', to: 'about' },
  ] satisfies NavLink[],
  contactLabel: 'Contact',
} as const

export const footer = {
  navigationTitle: 'Navigation',
  brandTitle: 'Blue Wave',
} as const

export const contactModal = {
  titleHighlight: 'Contact',
  titleRest: 'Us',
  namePlaceholder: 'Name',
  emailPlaceholder: 'Email',
  messagePlaceholder: 'Your Message',
  submitLabel: 'Submit',
  thanksTitle: 'Thank you for reaching out!',
  thanksBody: 'I will respond to your email as soon as possible.',
  thanksSignature: '- John Bryce',
} as const

export const notFound = {
  title: 'Oops! 404 page not found.',
  subtitle: 'Return to Blue Wave Dev:',
} as const
