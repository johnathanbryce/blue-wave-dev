import heroImage from '@public/images/heroImage.png'

export const hero = {
  title: 'Blue Wave Dev',
  subtitle: 'Software & AI Consulting',
  text: 'I help teams scope, build and run software with AI in it. Python and FastAPI on the back end, TypeScript and Next.js on the front, and the infrastructure to keep it running.',
  ctaLabel: 'GET IN TOUCH',
  // TODO(johnathan): the hero image is a laptop showing the Julien Verschooris site. It no longer matches the positioning. Replace or drop in the design pass.
  image: heroImage,
  imageAlt: 'A laptop and phone showing a website built by Blue Wave Dev',
} as const
