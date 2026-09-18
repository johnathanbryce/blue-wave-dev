import jbBioPic from '@public/images/jbBioPic.jpg'

export const about = {
  heading: { kicker: '04 / ABOUT', title: 'Johnathan Bryce' },
  role: 'Full Stack & AI Software Engineer',
  bio: [
    'I am a self taught developer in Vancouver, BC. I cut my teeth as a founding engineer at Romp, went on to lead the engineering on an AI legal research platform at Caseway, and now work as a full stack developer who specializes in AI.',
    'The work I like is the kind where the answer is not obvious yet: a feature nobody has scoped, a system that needs rethinking, a build that stalled. Tell me the problem and I will figure out what it takes to solve it.',
  ],
  image: jbBioPic,
  imageAlt: 'Johnathan Bryce smiling with a backdrop of Downtown Vancouver',
  imageCaption: { left: 'Johnathan Bryce', right: 'Vancouver, BC' },
  links: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/johnathanbryce/' },
    { label: 'GitHub', url: 'https://github.com/johnathanbryce' },
  ],
} as const
