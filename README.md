# Blue Wave Dev

Marketing site for [Blue Wave Dev](https://www.bluewavedev.ca), a software and AI consulting practice in Vancouver, BC, run by Johnathan Bryce. Single-page Next.js site.

## Stack

- Next.js (App Router), React, TypeScript
- CSS Modules, design tokens in `src/styles/vars.css` (light/dark), `next/font` (Barlow, Barlow Condensed)

## Local setup

```bash
git clone https://github.com/johnathanbryce/blue-wave-dev.git
cd blue-wave-dev
npm install
npm run dev     # http://localhost:3000
npm run build
npm run lint
```

## Project structure

```
src/
  app/            layout, page, not-found
  app/home/       page sections (Hero, Services, Work, SmallBusiness, About, Contact)
  components/     shared UI (Header, Footer, WaveDivider, Frame, Button, ...)
  content/        all user-facing copy and image references, typed
  styles/         globals, reset, vars (tokens)
public/images/    static images
```

## Deployment

Vercel, deployed automatically from `main`.

## Contact

Johnathan Bryce, johnathanbryce@gmail.com
