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
- Area served: Vancouver, BC. TODO(johnathan): do you take remote work across Canada? If so this should say Canada.
- Tagline (footer): Software & AI Consulting

## Navigation

Desktop: Services, Work, About, Contact
Mobile: Services, Work, Small Business, Testimonials, About

## Hero (`hero.ts`)

- Title: Blue Wave Dev
- Subtitle: Software & AI Consulting
- Text: I help teams scope, build and run software with AI in it. Python and FastAPI on the back end, TypeScript and Next.js on the front, and the infrastructure to keep it running.
- Button: GET IN TOUCH
- TODO(johnathan): the hero image is a laptop showing the Julien Verschooris site. It no longer matches the positioning. Replace or drop in the design pass.

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

TODO(johnathan): engagement model. Hourly, fixed scope, retainer, or "let's talk"? The site currently says nothing about how you work or price, which is fine for a draft but the design will want a line.

## Selected work (`clients.ts`)

Heading: SELECTED WORK
Intro: Consulting and engineering engagements. Text only by design.

### Caseway

> **REQUIRES JOHNATHAN SIGN-OFF.** Every line comes from the resume. No logo, no screenshots, no product link, nothing about how or when the engagement ended. Do not merge to main without explicit approval.
> TODO(johnathan): confirm which points are cleared for public use, and whether "Casey" may be named.

Role: Lead Software Engineer

Summary: Lead engineer on Casey, an AI legal research platform used by lawyers and researchers across Canada. Took over an existing Next.js and FastAPI codebase and became the primary author of the backend, from search infrastructure to the user-facing research agent.

- Re-architected the agent stack with dual-model routing, prompt caching, Redis-backed summary caching and auto-compaction for long conversations, cutting daily LLM API spend from about $150 to about $60.
- Built an unattended court-data pipeline on Azure that ingested 7.8 million case PDFs and matching metadata, about 2 TB, with byte-accurate resume and two-tier validation.
- Designed and ran the Elasticsearch-backed public case law search, including rate limiting and query caps on an unauthenticated endpoint.
- Owned the DigitalOcean infrastructure, wrote the GitHub Actions CI/CD pipelines, held release authority for production, and led an end-to-end infrastructure and security audit.
- Onboarded and led a four-person offshore development team, wrote the platform documentation, and ran product demos including the Web Summit Vancouver booth.

### NextTier Sports

Role: AI consulting
Summary: AI feature scoping and architecture guidance.
TODO(johnathan): what was the feature, and what did the guidance cover? Is there a public site to link?

### Unity Clothing

Role: E-commerce consulting
Summary: Shopify e-commerce consulting.
TODO(johnathan): what did the Shopify work involve (theme, apps, checkout, integrations)? Is there a public site to link?

TODO(johnathan): the resume also lists SEO and metadata restructuring for Provincial Health Services Authority SharePoint systems under Blue Wave Dev. Include it as a fourth entry?

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

Photo: existing headshot. TODO(johnathan): keep this photo, or supply a newer one for the design pass?
Link: LinkedIn (existing). TODO(johnathan): also link GitHub (github.com/johnathanbryce) and jbryce.dev?

## Contact modal (`site.ts`)

- Title: Get in touch
- Placeholders: Name, Email, "What are you building, and where is it stuck?"
- Button: Send
- Thanks: Thanks for reaching out. I read every message and will reply as soon as I can. - Johnathan Bryce

TODO(johnathan): the form posts to formsubmit.co with your Gmail address and opens their confirmation page in a new tab. Keep that, or move to a proper endpoint in phase 2? Keep the phone number public?

## 404

Unchanged.

---

## Open TODOs, in one place

1. Caseway block: sign-off required. Which points are public, and may "Casey" be named?
2. NextTier Sports: what was the feature and the guidance? Public link?
3. Unity Clothing: what did the Shopify work involve? Public link?
4. Include PHSA SharePoint work as a fourth entry?
5. Area served: Vancouver only, or Canada?
6. Engagement model line (hourly, fixed scope, retainer)?
7. Hero image: replace or drop?
8. Headshot: keep or replace?
9. Link GitHub and jbryce.dev from About?
10. Contact form: keep formsubmit.co? Keep phone public?
