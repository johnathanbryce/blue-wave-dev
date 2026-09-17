import type { Metadata, Viewport } from 'next'
// global styles 
import '../styles/globals.css'
import '../styles/reset.css'
import '../styles/vars.css'
import { Roboto } from 'next/font/google'
// content
import { site, seo } from '@/content/site'
// images
import logo from '@public/images/logo.png'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
