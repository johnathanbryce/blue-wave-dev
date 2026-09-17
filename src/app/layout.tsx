import type { Metadata, Viewport } from 'next'
// global styles 
import '../styles/globals.css'
import '../styles/reset.css'
import '../styles/vars.css'
import { Roboto } from 'next/font/google'
// images
import logo from '../../public/images/logo.png'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

const SITE_URL = 'https://www.bluewavedev.ca'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Blue Wave Dev | Custom Web Design & Development Services',
  description: 'Blue Wave Dev specializes in custom web design and development services for businesses and individuals. Discover how we can help your business thrive online.',
  keywords: 'Vancouver web design, Vancouver web development, custom web development Vancouver, responsive web design Vancouver, eCommerce development BC, SEO services Vancouver, Next.js, React, small business web solutions, professional website design, website development Vancouver, BC, Canada, Blue Wave Dev',
  robots: 'index, follow',
  openGraph: {
    url: SITE_URL,
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
  "name": "Blue Wave Dev",
  "url": SITE_URL,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Vancouver",
    "addressRegion": "BC",
    "addressCountry": "CA"
  },
  "telephone": "6042207425",
  "description": "A web design and development agency based in Vancouver, specializing in creating custom websites for businesses.",
  "areaServed": "Vancouver, BC",
  "sameAs": [
    "https://www.linkedin.com/company/blue-wave-dev",
    "https://www.linkedin.com/in/johnathanbryce/"
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
