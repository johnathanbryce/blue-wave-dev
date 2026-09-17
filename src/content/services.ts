import type { StaticImageData } from 'next/image'
import pageSpeed from '@public/images/pageSpeed.png'
import responsive from '@public/images/responsive.png'
import whyHandCode from '@public/images/whyHandCode.png'

export type ServiceDetail = {
  icon: StaticImageData
  iconAlt: string
  title: string
  text: string
}

export type PricingCard = {
  title: string
  subtitle: string
  price: string
  pricePer?: string
  features: string[]
}

export const services = {
  heading: { standout: 'OUR', title: 'EXPERTISE' },
  intro: [
    'We specialize in creating accessible and mobile-friendly websites.',
    'Every line of code is written by hand to ensure exceptional performance.',
  ],
  whyHandCodeLabel: 'WHY HAND CODE?',
  details: [
    {
      icon: responsive,
      iconAlt: 'an icon of a computer and phone',
      title: 'Fully Responsive',
      text: 'Your website will have a responsive design that adapts seamlessly to different screen sizes, enabling visitors to access it effortlessly on mobile phones, tablets, and desktop computers.',
    },
    {
      icon: pageSpeed,
      iconAlt: 'an icon indicating website performance and optimization',
      title: 'Performance & Optimization',
      text: 'Manually writing the code for our websites and leveraging modern technology ensures better web performance and improved search engine optimization.',
    },
  ] satisfies ServiceDetail[],
  pricing: [
    {
      title: 'STANDARD',
      subtitle: 'STARTING AT',
      price: '$1K',
      features: ['One-time payment', 'Custom Design', 'Custom Features', 'Expedited Delivery'],
    },
    {
      title: 'MONTHLY',
      subtitle: '5 PAGES',
      price: '$140',
      pricePer: ' / month',
      features: ['Unlimited Updates', 'Unlimited Edits', '24/7 Support', 'Includes Hosting'],
    },
  ] satisfies PricingCard[],
  pricingCtaLabel: 'CONTACT US',
} as const

export const whyHandCodeModal = {
  titleHighlight: 'Elevated',
  titleRest: 'Web Design & Development',
  paragraphs: [
    'What sets us apart in the development realm is our distinct approach: no WordPress or page builders. We craft each line of code meticulously, granting us unparalleled control over design and lightning-fast website performance.',
    'Hand-built websites surpass most WordPress sites and drag-and-drop builders, delivering superior results without hefty price tags. In the realm of the web, speed and organization reign supreme.',
  ],
  image: whyHandCode,
  imageAlt: 'a rocket ship blasting off',
  bullets: ['Fully customizable', 'Responsive', 'Optimized performance', 'Scalable', 'SEO-Friendly'],
} as const
