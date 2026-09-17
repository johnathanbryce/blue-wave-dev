# Blue Wave Dev: repositioning copy draft

Draft for review. Not final. Source of truth for copy is `src/content/*.ts`; this file mirrors it so it can be edited without touching code. Every `TODO(johnathan)` is a fact I do not have. Nothing here is invented: every claim comes from the resume or the existing site.

Positioning: software and AI consulting first. Small business web development second, still offered, not the headline.

Voice: first person singular ("I"), or "Blue Wave Dev". Never "we" or "our team". Plain English. No em-dashes.

---

## Metadata (`site.ts`)

- Title: Blue Wave Dev | Software & AI Consulting, Vancouver
- Description: Software and AI consulting by Johnathan Bryce, a full stack and AI software engineer in Vancouver, BC. AI feature scoping, RAG and search systems, LLM agents, full stack delivery and infrastructure, plus web development for small businesses.
- Keywords: software consulting Vancouver, AI consulting Vancouver, AI engineer, RAG, LLM agents, FastAPI, Next.js, full stack engineer, small business web development, Blue Wave Dev, Johnathan Bryce
- JSON-LD description: Software and AI consulting practice in Vancouver, BC, run by Johnathan Bryce. AI feature scoping, architecture, RAG and search, LLM agents, full stack delivery and infrastructure.
- Area served: not stated. Work is global.
- Tagline (footer): Software & AI Consulting

## Navigation

Desktop: Services, Work, About, Contact
Mobile: Services, Work, Small Business, Testimonials, About

## Hero (`hero.ts`)

- Title: Blue Wave Dev
- Subtitle: Software & AI Consulting
- Text: I help teams scope, build and run software with AI in it. Python and FastAPI on the back end, TypeScript and Next.js on the front, and the infrastructure to keep it running.
- Button: GET IN TOUCH
- No hero image. The old laptop image was dropped; the design pass decides whether the hero gets one.

## Consulting services (`services.ts`)

Heading: CONSULTING SERVICES

Intro:
- Engineering help for teams building AI features and the systems around them.
- Scoping, architecture, delivery, and the infrastructure to run it in production.

1. **AI feature scoping.** Work out whether an AI feature is worth building, which approach fits, what it will cost to run, and what to build first.
2. **Architecture guidance.** A second set of eyes on your system design, data flow and model choices before you commit engineering time to them.
3. **RAG and search systems.** Retrieval pipelines, hybrid search on Elasticsearch, document indexing and the caching that keeps it fast and affordable.
4. **LLM agent design.** Tool-calling agents with model routing, prompt caching and conversation compaction, built to control cost as usage grows.
5. **Full stack delivery.** Python and FastAPI back ends, TypeScript, Next.js and React front ends, PostgreSQL and Redis. I can take a feature from spec to production.
6. **Infrastructure and CI/CD.** DigitalOcean and Azure, Docker, Nginx, GitHub Actions pipelines, monitoring with Sentry, and the release process around them.

Removed entirely: the two pricing cards (Standard $1K, Monthly $140) and the "Why hand code?" modal.

Engagement model: depends on the client and the ask. The site says nothing about pricing or format, by choice.

## Selected work (`clients.ts`)

Heading: SELECTED WORK
Intro: Consulting and engineering engagements. Text only by design.

### Caseway

> **REQUIRES JOHNATHAN SIGN-OFF.** Every line comes from the resume. No logo, no screenshots, no product link, nothing about how or when the engagement ended. Do not merge to main without explicit approval.
> TODO(johnathan): confirm you are comfortable publishing these resume specifics about an employer (the $150 to $60 spend figure, 7.8M PDFs, team lead, Web Summit) and that the product name "Casey" may appear. Also confirm the link to caseway.ai stays; the brief said no link into their product, and this is the company homepage.

Role: Lead Software Engineer
Link: https://caseway.ai/

Summary: Lead engineer on Casey, an AI legal research platform used by lawyers and researchers across Canada. Took over an existing Next.js and FastAPI codebase and became the primary author of the backend, from search infrastructure to the user-facing research agent.

- Re-architected the agent stack with dual-model routing, prompt caching, Redis-backed summary caching and auto-compaction for long conversations, cutting daily LLM API spend from about $150 to about $60.
- Built an unattended court-data pipeline on Azure that ingested 7.8 million case PDFs and matching metadata, about 2 TB, with byte-accurate resume and two-tier validation.
- Designed and ran the Elasticsearch-backed public case law search, including rate limiting and query caps on an unauthenticated endpoint.
- Owned the DigitalOcean infrastructure, wrote the GitHub Actions CI/CD pipelines, held release authority for production, and led an end-to-end infrastructure and security audit.
- Onboarded and led a four-person offshore development team, wrote the platform documentation, and ran product demos including the Web Summit Vancouver booth.

### Next Tier

Role: AI consulting
Link: https://nexttierstats.com/
Summary: Advised their developer on scaling the app, which services to use, and how to set up and run a RAG-powered chatbot.

### Unity Clothing

Role: E-commerce consulting
Link: https://unityclothing.ca/
Summary: Audited their Shopify storefront and delivered SEO and other updates.

### Provincial Health Services Authority

Role: SharePoint consulting
Summary: Audited their SharePoint systems and restructured SEO and metadata.

## Call to action band (`newProject.ts`)

- Title: Have a project in mind?
- Text: Tell me what you are building and where it is stuck. I will reply with a straight read on scope and next steps.
- Button: GET IN TOUCH
- Phone line: or (604) 220 7425

## Small business websites (`smallBusiness.ts`)

Heading: SMALL BUSINESS WEBSITES
Intro: Blue Wave Dev started as a web design shop, and I still build and maintain sites for small businesses. A few of them:

The four existing projects are unchanged (Julien Verschooris, Romp, Labridge Farms, SolLuna Essence), with their existing descriptions and images.

## Testimonials (`testimonials.ts`)

Unchanged. Heading: Client Testimonials. Four existing quotes kept as they are.

## About (`about.ts`)

Heading: ABOUT ME
Name: Johnathan Bryce
Title: Full Stack & AI Software Engineer

Bio: I am Johnathan Bryce, a full stack and AI software engineer in Vancouver, BC. Most recently I was the lead engineer on an AI legal research platform, where I owned the backend, the search infrastructure, the LLM agent and the production infrastructure. Before that I built a React Native app and web platform as a founding front end developer at Romp, and a full stack admin dashboard on AWS for MCQ Markets. I work in Python and FastAPI, TypeScript and Next.js, PostgreSQL, Redis and Elasticsearch, and I have shipped with the Claude and Gemini APIs, LangChain and LangGraph. I hold a BSc in Psychology from the University of Victoria and spent several years in analyst roles in the public sector before moving into software.

Photo: existing headshot, kept.
Links: LinkedIn, GitHub (github.com/johnathanbryce), jbryce.dev.

## Contact modal (`site.ts`)

- Title: Get in touch
- Placeholders: Name, Email, "What are you building, and where is it stuck?"
- Button: Send
- Thanks: Thanks for reaching out. I read every message and will reply as soon as I can. - Johnathan Bryce

The form posts to formsubmit.co with the Gmail address and opens their confirmation page in a new tab. Kept for now. Phone number stays public.

## 404

Unchanged.

---

## Open TODOs, in one place

1. Caseway block: sign-off required. Confirm the resume specifics are fine to publish, that "Casey" may be named, and that the caseway.ai link stays.

Resolved 2026-09-17: Next Tier and Unity Clothing descriptions and links; PHSA added as a fourth entry; no area served (global); no engagement model line; hero image dropped; headshot kept; About links LinkedIn, GitHub and jbryce.dev; contact form and phone stay.
