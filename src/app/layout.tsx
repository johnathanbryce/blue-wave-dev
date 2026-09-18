import type { Metadata, Viewport } from 'next'
// global styles
import '../styles/reset.css'
import '../styles/vars.css'
import '../styles/globals.css'
import { Barlow, Barlow_Condensed } from 'next/font/google'
// content
import { site, seo } from '@/content/site'
// images
import logo from '@public/images/logo.png'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-barlow',
})
const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
  variable: '--font-barlow-condensed',
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  robots: 'index, follow',
  openGraph: {
    url: site.url,
    type: 'website',
    locale: 'en_US',
    images: [logo.src],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

const jsonLd = {
  "@context": "http://schema.org",
  "@type": "Organization",
  "name": site.name,
  "url": site.url,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": seo.address.locality,
    "addressRegion": seo.address.region,
    "addressCountry": seo.address.country
  },
  "telephone": site.contact.phoneJsonLd,
  "description": seo.jsonLdDescription,
  "sameAs": [
    site.social.linkedInCompany,
    site.social.linkedInPersonal
  ]
}

// Applies the persisted theme override (localStorage "bwd-theme") before first
// paint so there is no flash of the wrong theme. No override = system default.
const themeScript = `try{var t=localStorage.getItem("bwd-theme");if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t)}catch(e){}`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${barlow.variable} ${barlowCondensed.variable}`} suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
