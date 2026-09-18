import type { StaticImageData } from 'next/image'
import julienV from '@public/images/julienV.webp'
import romp from '@public/images/romp.webp'
import sollunnaEssence from '@public/images/sollunnaEssence.webp'
import labridgeFarms from '@public/images/labridgeFarms.webp'
import julienPic from '@public/images/julien.jpeg'
import jasonPic from '@public/images/jason.jpeg'
import matthewPic from '@public/images/matthew.jpeg'
import sydPic from '@public/images/sydney.jpeg'

/* One card per site, with that owner's testimonial attached. This replaces the
   old separate Portfolio + Testimonials sections. All four quotes are the
   existing ones from testimonials.ts, unedited. */
export type SmallBusinessProject = {
  image: StaticImageData
  imageAlt: string
  name: string
  location: string
  description: string
  url: string
  visitLabel: string
  quote: string
  person: string
  organization: string
  avatar: StaticImageData
  avatarAlt: string
}

export const smallBusiness = {
  heading: { kicker: '03 / ALSO', title: 'Small business websites' },
  intro:
    'Blue Wave Dev started as a web design shop, and I still build and maintain sites for small businesses. A few highlights, with what their owners said.',
  projects: [
    {
      image: julienV,
      imageAlt: 'The Julien Verschooris website',
      name: 'Julien Verschooris',
      location: 'Toronto, ON',
      description: 'Personal and professional music compositions of Julien Verschooris, a multi-award-winning composer.',
      url: 'https://www.julienverschooris.com/',
      visitLabel: 'Visit',
      quote: "Working with John on my portfolio site was a great experience. He nailed the details and captured the essence of my work. The project moved quickly and smoothly, thanks to John's skill and dedication.",
      person: 'Julien Verschooris',
      organization: 'Composer',
      avatar: julienPic,
      avatarAlt: 'Julien Verschooris',
    },
    {
      image: sollunnaEssence,
      imageAlt: 'The SolLuna Essence website',
      name: 'SolLuna Essence',
      location: 'Vancouver, BC',
      description: 'Sydney Fisher is a certified Bio-Energy Healing Practitioner, yoga instructor and intuitive reader in Vancouver, BC.',
      url: 'https://www.sollunaessence.com/',
      visitLabel: 'Visit',
      quote: 'John did an amazing job on my website! His creativity and attention to detail truly brought my vision to life. The process was smooth and enjoyable, and the final product exceeded my expectations. Highly recommend!',
      person: 'Sydney Fisher',
      organization: 'SolLuna Essence',
      avatar: sydPic,
      avatarAlt: 'Sydney Fisher',
    },
    {
      image: romp,
      imageAlt: 'The Romp website',
      name: 'Romp',
      location: 'Salt Lake City, UT',
      description: 'An activity planning social platform for creating and sharing activities and events.',
      url: 'https://rompathlete.com/',
      visitLabel: 'Visit',
      quote: "As a member of the founding development team at Romp, John has been instrumental in shaping the direction and success of Romp. John's expertise in front-end development has greatly enhanced our user experience. John's collaborative approach to integrating APIs and his valuable contributions to our UI/UX design have been pivotal in our Romp's progress and success. John's dedication and innovative thinking have been vital to the evolution of Romp and I look forward to our continued success together.",
      person: 'Jason Tulloch',
      organization: 'Romp',
      avatar: jasonPic,
      avatarAlt: 'Jason Tulloch',
    },
    {
      image: labridgeFarms,
      imageAlt: 'The Labridge Farms website',
      name: 'Labridge Farms',
      location: 'Glenmount, NS',
      description: 'The digital gateway to Labridge Farms: farm-raised meats and Labrador Retrievers.',
      url: 'https://labridgefarms.com/farm',
      visitLabel: 'Visit',
      quote: "John has been a pleasure to work with on the Labridge Farms website. He communicated with me every step of the way and was always open to feedback and changes. His dedication and genuine interest in capturing the essence of our dog breeding and farm business made the process smooth and enjoyable. We continue to collaborate on updates to the website, big or small, and John handles them smoothly and efficiently. I couldn't be happier with the end result and highly recommend his services.",
      person: 'Matthew Durant',
      organization: 'Labridge Farms',
      avatar: matthewPic,
      avatarAlt: 'Matthew Durant',
    },
  ] satisfies SmallBusinessProject[],
} as const
