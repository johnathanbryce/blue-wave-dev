import type { StaticImageData } from 'next/image'
import matthewPic from '@public/images/matthew.jpeg'
import julienPic from '@public/images/julien.jpeg'
import jasonPic from '@public/images/jason.jpeg'
import sydPic from '@public/images/sydney.jpeg'

export type Testimonial = {
  quote: string
  name: string
  organization: string
  url: string
  image: StaticImageData
  imageAlt: string
}

export const testimonials = {
  heading: 'Client Testimonials',
  items: [
    {
      quote: "Working with John on my portfolio site was a great experience. He nailed the details and captured the essence of my work. The project moved quickly and smoothly, thanks to John's skill and dedication.",
      name: 'Julien Verschooris',
      organization: 'Composer',
      url: 'https://www.julienverschooris.com/',
      image: julienPic,
      imageAlt: 'A picture of Julien Verschooris, a musical composer and client.',
    },
    {
      quote: "As a  member of the founding development team at Romp, John has been instrumental in shaping the direction and success of Romp. John's expertise in front-end development has greatly enhanced our user experience. John's collaborative approach to integrating APIs and his valuable contributions to our UI/UX design have been pivotal in our Romp's progress and success. John's dedication and innovative thinking have been vital to the evolution of Romp and I look forward to our continued success together.",
      name: 'Jason Tulloch',
      organization: 'Romp',
      url: 'https://rompathlete.com/',
      image: jasonPic,
      imageAlt: 'A picture of Jason Tulloch, the founder of Romp.',
    },
    {
      quote: "John has been a pleasure to work with on the Labridge Farms website. He communicated with me every step of the way and was always open to feedback and changes. His dedication and genuine interest in capturing the essence of our dog breeding and farm business made the process smooth and enjoyable. We continue to collaborate on updates to the website, big or small, and John handles them smoothly and efficiently. I couldn't be happier with the end result and highly recommend his services.",
      name: 'Matthew Durant',
      organization: 'Labridge Farms',
      url: 'https://labridgefarms.com/',
      image: matthewPic,
      imageAlt: 'A picture of Matthew Durant, owner and operator of Labridge Farms.',
    },
    {
      quote: 'John did an amazing job on my website! His creativity and attention to detail truly brought my vision to life. The process was smooth and enjoyable, and the final product exceeded my expectations. Highly recommend!',
      name: 'Sydney Fisher',
      organization: 'SolLuna Essence',
      url: 'https://www.sollunaessence.com/',
      image: sydPic,
      imageAlt: 'A picture of Sydney Fisher, owner of SolLuna Essence.',
    },
  ] satisfies Testimonial[],
} as const
