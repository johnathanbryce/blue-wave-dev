'use client'
import styles from './PortfolioCard.module.css'
import Image from 'next/image'
import Link from 'next/link'
// external libraries
import { motion } from "framer-motion"


interface PortfolioCardProps {
    image: any,
    header: string,
    location: string,
    description: string,
    buttonLabel: string,
    buttonSrc: string,
}

function PortfolioCard({image, header, location, description, buttonLabel, buttonSrc}: PortfolioCardProps) {
  return (
    <motion.div 
      className={styles.portfolio_card}
      initial={{y: "50", opacity: 0, scale: 0.5}}
      whileInView={{y: 0, opacity: 1, scale: 1}}
      exit={{y: "50", opacity: 0, transition: {duration: 0.1}}}
      transition={{duration: 0.5, ease: 'easeOut'}}
    >
        <Image 
         className={styles.portfolio_img}
          src={image} 
          alt='A preview of a website built by Blue Wave Dev'
          width={500}
          height={500}
        />
        <div>
          <h5>{header}</h5>
          <p className={styles.location}>{location}</p>
        </div>
        <p> {description} </p>
        <Link 
          href={buttonSrc} 
          className={styles.portfolio_btn}
          target="_blank" 
          rel="noreferrer"
          >
          <span>VISIT</span> {buttonLabel}
        </Link>
    </motion.div>
  )
}

export default PortfolioCard