import type { StaticImageData } from 'next/image'
import julienV from '@public/images/julienV.jpeg'
import romp from '@public/images/romp.jpeg'
import sollunnaEssence from '@public/images/sollunnaEssence.jpeg'
import labridgeFarms from '@public/images/labridgeFarms.png'

export type Project = {
  image: StaticImageData
  imageAlt: string
  name: string
  location: string
  description: string
  buttonLabel: string
  url: string
}

export const smallBusiness = {
  heading: { standout: 'SMALL BUSINESS', title: 'WEBSITES' },
  intro: 'Blue Wave Dev started as a web design shop, and I still build and maintain sites for small businesses. A few of them:',
  visitLabel: 'VISIT',
  projects: [
    {
      image: julienV,
      imageAlt: 'A preview of a website built by Blue Wave Dev',
      name: 'Julien Verschooris',
      location: ' Toronto, ON',
      description: 'This website showcases the latest personal and professional music compositions of Julien Verschooris, a multi-award-winning composer.',
      buttonLabel: 'JULIEN VERSCHOORIS',
      url: 'https://www.julienverschooris.com/',
    },
    {
      image: romp,
      imageAlt: 'A preview of a website built by Blue Wave Dev',
      name: 'Romp',
      location: 'Salt Lake City, UT',
      description: 'Romp is an activity planning social platform that allows you to create and share activities and events.',
      buttonLabel: 'ROMP',
      url: 'https://rompathlete.com/',
    },
    {
      image: labridgeFarms,
      imageAlt: 'A preview of a website built by Blue Wave Dev',
      name: 'Labridge Farms',
      location: 'Glenmount, NS',
      description: 'The digital gateway to Labridge Farms, highlighting their premium farm-raised meats and high-quality Labrador Retrievers.',
      buttonLabel: 'LABRIDGE FARMS',
      url: 'https://labridgefarms.com/farm',
    },
    {
      image: sollunnaEssence,
      imageAlt: 'A preview of a website built by Blue Wave Dev',
      name: 'SolLuna Essence',
      location: 'Vancouver, BC',
      description: 'Sydney Fisher is a certified Bio-Energy Healing Practitioner, Yoga instructor, and Intuitive reader based in Vancouver, BC',
      buttonLabel: 'SOLLUNA ESSENCE',
      url: 'https://www.sollunaessence.com/',
    },
  ] satisfies Project[],
} as const
