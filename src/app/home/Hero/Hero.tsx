'use client'
import { useState } from 'react'
import styles from './Hero.module.css'
import Image from 'next/image'
// internal components
import CurveBackgroundTop from '@/components/CurveBackgroundTop/CurveBackgroundTop'
import Button from '@/components/Button/Button'
import ContactModal from '@/components/ContactModal/ContactModal'
// content
import { hero } from '@/content/hero'

function Hero() {
    // open and close contact modal
    const [isContactModalActive, setIsContactModalActive] = useState(false);

    const onClickOpenModal = () => {
      setIsContactModalActive(true);                                               
    }
  
    const onClickCloseModal = () => {
      setIsContactModalActive(false);                                               
    }

  return (
    <section className={styles.hero} id="home">
      {/* toggle contact modal */}
      {isContactModalActive && <ContactModal onClickCloseModal={onClickCloseModal}/>}
      <CurveBackgroundTop />
      <div className={styles.hero_text_container}>
          <h1> {hero.title}  </h1>
          <h3 className={styles.subheader}> {hero.subtitle} </h3>
          <p className={styles.hero_text}> {hero.text}</p>
          <Button label={hero.ctaLabel} onClick={onClickOpenModal}/>
      </div>
      <div className={styles.img_container}>
        <Image className={styles.hero_img} 
          src={hero.image} 
          alt={hero.imageAlt} 
          width={500}
          height={500}
          priority
        />
      </div>
    </section>
  )
}

export default Hero
