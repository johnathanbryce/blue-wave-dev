import jbBioPic from '@public/images/jbBioPic.jpg'

export const about = {
  heading: { standout: 'ABOUT', title: 'ME' },
  bio: 'I am Johnathan Bryce, a full stack and AI software engineer in Vancouver, BC. Most recently I was the lead engineer on an AI legal research platform, where I owned the backend, the search infrastructure, the LLM agent and the production infrastructure. Before that I built a React Native app and web platform as a founding front end developer at Romp, and a full stack admin dashboard on AWS for MCQ Markets. I work in Python and FastAPI, TypeScript and Next.js, PostgreSQL, Redis and Elasticsearch, and I have shipped with the Claude and Gemini APIs, LangChain and LangGraph. I hold a BSc in Psychology from the University of Victoria and spent several years in analyst roles in the public sector before moving into software.',
  image: jbBioPic,
  imageAlt: 'Johnathan Bryce smiling with a backdrop of Downtown Vancouver',
  linkUrl: 'https://www.linkedin.com/in/johnathanbryce/',
  links: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/johnathanbryce/' },
    { label: 'GitHub', url: 'https://github.com/johnathanbryce' },
    { label: 'jbryce.dev', url: 'https://www.jbryce.dev' },
  ],
  name: 'Johnathan Bryce',
  role: 'Full Stack & AI Software Engineer',
} as const
