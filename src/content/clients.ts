export type Client = {
  name: string
  role: string
  summary: string
  url: string | null   // null renders the name as plain text, no link
}

export const clients = {
  heading: { kicker: '02 / WORK', title: 'Selected work' },
  items: [
    // REQUIRES JOHNATHAN SIGN-OFF before merge.
    // Text only: no logo, no screenshots, no product imagery, nothing about
    // how or when an engagement ended.
    {
      name: 'Caseway',
      role: 'Lead Software Engineer',
      summary:
        'Lead engineer on an AI legal research platform, owning the AI research agent, the case law search, the data pipeline behind both, and the production infrastructure.',
      url: 'https://caseway.ai/',
    },
    {
      name: 'Next Tier Stats',
      role: 'AI consulting',
      summary: 'AI feature scoping and architecture guidance.',
      url: 'https://nexttierstats.com/',
    },
    {
      name: 'Unity Clothing',
      role: 'E-commerce consulting',
      summary: 'Shopify e-commerce consulting.',
      url: 'https://unityclothing.ca/',
    },
    {
      name: 'Provincial Health Services Authority',
      role: 'SharePoint consulting',
      summary: 'Audited and restructured SharePoint metadata and search for internal systems.',
      url: null, // no external link by decision
      // TODO(johnathan): confirm "and search" is accurate; if not, cut to metadata only.
    },
  ] satisfies Client[],
} as const
