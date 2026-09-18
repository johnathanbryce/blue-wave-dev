# Blue Wave Dev redesign: brief for Claude Design

You are designing the new bluewavedev.ca. Read this whole brief, then ask your clarifying questions before producing anything.

## What Blue Wave Dev is

A one-person software and AI consulting practice in Vancouver, BC, run by Johnathan Bryce, a full stack and AI software engineer. The lean is AI: feature scoping, architecture, RAG and search systems, LLM agents, full stack delivery (Python/FastAPI, TypeScript/Next.js/React) and the infrastructure and CI/CD to run it. Small business web development is still offered, but it is the secondary line, not the headline.

The current site was built in 2023 as a small-business web design shop. It is being repositioned. Your job is the new design and the final copy.

## Inputs

- Live site (old design, old positioning): https://www.bluewavedev.ca
- Preview of the repositioned draft copy on the current design (ugly, but the structure and copy are current): https://johnbryce-web-el2hrx1fp-johnathanbryces-projects.vercel.app
- Repo: https://github.com/johnathanbryce/blue-wave-dev
  - `src/content/*.ts`: every piece of copy, typed. `site.ts` (name, contact, nav, SEO, contact modal), `hero.ts`, `services.ts`, `clients.ts`, `newProject.ts`, `smallBusiness.ts`, `testimonials.ts`, `about.ts`
  - `docs/content-draft.md`: the same copy in prose with open TODOs
  - `src/styles/vars.css`: the design tokens the components consume
  - `src/app/home/*`: the current sections. `src/components/*`: shared pieces (Header, Footer, Button, ContactModal, SectionHeader, PortfolioCard, Carousel)
- Reference sites Johnathan likes: [Johnathan: add two or three, one line each on what to take]

## The brief

Modern, sharp, succinct. Someone landing on the page should know within five seconds what Johnathan does and that he can ship it. No section should be longer than it needs to be. Enough text to carry SEO for "software consulting Vancouver", "AI consulting Vancouver", "AI engineer", "RAG", "LLM agents"; not a word more.

Single page is the default. Go multi-page only if a page earns it (for example a `/work` page if the client entries need room, or `/services` if you want each service to rank on its own). If you go multi-page, say why.

Sections to cover, in whatever order and form you think best:
1. Hero: who, what, one call to action
2. Services: six items, each a title and one or two sentences
3. Selected work: Caseway, Next Tier Stats, Unity Clothing. Text only, see constraints
4. Small business websites: four existing projects with screenshots, plus the four existing testimonials. Present clearly as the secondary line
5. About: short bio, photo, title "Full Stack & AI Software Engineer"
6. Contact: a form (name, email, message) and email/phone
7. Footer

Kill anything that does not serve those. The current pricing cards, "why hand code" pitch and pulsing glow shadows are already gone.

## Deliverables

1. **Tokens**: a complete replacement for `src/styles/vars.css`. Colours, type scale, spacing scale, radius, shadows, motion durations. CSS custom properties only. Include light values on `:root`; add dark values under `prefers-color-scheme: dark` only if you design for dark.
2. **Layout spec**: per section, what it contains, how it lays out at 1440, 1024, 768 and 390 wide, and which existing component it maps to or replaces. A short list of new components with their props.
3. **Final copy**: one block per content file, keeping the same keys and shapes as the current `src/content/*.ts`, so it drops in without code changes. Where a fact is missing, write `TODO(johnathan): <question>` in place of the value. Do not fill the gap with plausible text.
4. **Metadata**: title, description, keywords, and the JSON-LD description, in `site.ts` shape.
5. **Assets**: any icons as inline SVG. If you want new photography or illustration, describe it; do not generate a stand-in.
6. **Delete list**: components, styles and images that the new design makes unused.
7. **Font choice**: one or two families available on Google Fonts, with fallback stacks. The site loads fonts through `next/font`.

## Hard constraints

- Stack is fixed: Next.js 16 App Router, React 19, TypeScript, CSS Modules, `next/font`, `next/image`, framer-motion available. No Tailwind, no component library, no CSS-in-JS.
- Content must come from `src/content/*.ts`. No copy lives in components.
- Caseway: text only. No logo, no screenshots, no product imagery, no link into their product, nothing about how or when the engagement ended. Only facts already in `clients.ts`. This block still needs Johnathan's sign-off; design around it as if it may shrink.
- No client logos anywhere unless Johnathan supplies them with permission.
- Never invent facts, metrics, client names, quotes or testimonials. The four testimonials in `testimonials.ts` are the only ones that exist.
- Voice: first person singular ("I") or "Blue Wave Dev". Never "we" or "our team". Plain English. No em-dashes. No agency filler ("cutting-edge", "passionate", "solutions that drive results").
- Accessibility: WCAG AA contrast, visible focus states, pinch zoom allowed, no motion that cannot be turned off by `prefers-reduced-motion`.
- Performance: the hero must not depend on a large image or video to make sense. Target a Lighthouse performance score in the 90s on mobile.
- Mobile at 390 wide is a first-class layout, not an afterthought.
- Existing IDs `services`, `clients`, `portfolio`, `testimonials`, `about` are scroll targets for the nav. Keep them or say what replaces them.

## Copy guidance

- Hero: one line of what, one line of how, one button. Under 30 words total.
- Services: six items, title plus at most 25 words each.
- Work entries: name, role, one summary sentence, up to five bullets for Caseway, one line each for the others until Johnathan supplies more.
- About: under 120 words.
- Everything else: as short as it can be while still reading as a sentence.

## Process

Before designing, ask Johnathan anything you need answered. Likely questions: reference sites, whether he wants a dark theme, whether the phone number stays public, whether the current headshot stays, engagement model wording (hourly, fixed scope, retainer), and how much of the Caseway block is cleared.

Then deliver the seven items above as markdown plus code blocks. Johnathan reviews. Claude Code builds it in the repo.
