'use client'
import { useState } from 'react'
import styles from './OurServices.module.css'
import Image from 'next/image'
// internal components
import Button from '@/components/Button/Button'
import SectionHeader from '@/components/SectionHeader/SectionHeader'
import WhyHandCodeModal from '@/components/WhyHandCodeModal/WhyHandCodeModal'
import ContactModal from '@/components/ContactModal/ContactModal'
import ServiceCard from '@/components/ServiceCard/ServiceCard'
// content
import { services } from '@/content/services'
// external libraries
import { motion } from "framer-motion"

const [responsiveDetail, performanceDetail] = services.details

function OurServices() {
  // open and close modals
  const [isWhyHandCodeModalActive, setIsWhyHandCodeModalActive] = useState(false);
  const [isContactUsModalActive, setIsContactUsModalActive] = useState(false);

  const onClickOpenModal = (modalType: string) => {
    if (modalType === 'WHY_HAND_CODE') {
      setIsWhyHandCodeModalActive(true);
    } else if (modalType === 'CONTACT_US') {
      setIsContactUsModalActive(true);
    }
  };
  
  const onClickCloseModal = (modalType: string) => {
    if (modalType === 'WHY_HAND_CODE') {
      setIsWhyHandCodeModalActive(false);
    } else if (modalType === 'CONTACT_US') {
      setIsContactUsModalActive(false);
    }
  };
  
  return (
    <section className={styles.services} id="services">
      {/* toggle WhyHandCode modal */}
      {isWhyHandCodeModalActive && <WhyHandCodeModal onClickCloseModal={() => onClickCloseModal('WHY_HAND_CODE')}/>}
      {/* toggle ContactUs modal */}
      {isContactUsModalActive && <ContactModal onClickCloseModal={() => onClickCloseModal('CONTACT_US')}/>}

      <SectionHeader standout={services.heading.standout} title={services.heading.title} />
      <div className={styles.service_detail_top}>
        {services.intro.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
      <Button label={services.whyHandCodeLabel} onClick={() => onClickOpenModal('WHY_HAND_CODE')} bgColorBlue={true}/>

      <div className={styles.service_detail_container}>
        <div className={styles.service_detail}>
        <motion.div
            className={styles.services_icon_wrapper}
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              scaleX: [1, 1.5, 1],
              scaleY: [1, 1, 1.5, 1],
            }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          >
            <Image src={responsiveDetail.icon} className={styles.services_icon} alt={responsiveDetail.iconAlt}/>
          </motion.div>
          <h5> {responsiveDetail.title} </h5>
          <p> {responsiveDetail.text}</p>
        </div>

        <div className={styles.service_detail}>
          <motion.div
            className={styles.services_icon_wrapper}
            initial={{ x: '-100%', rotate: 0 }}
            whileInView={{
              x: ['-100%', '0%', '100%', '0%'],
              rotate: [0, -20, 0],
            }}
            transition={{ duration: 1.25, ease: 'easeInOut' }}
          >
            <Image src={performanceDetail.icon} className={styles.services_icon} alt={performanceDetail.iconAlt}/>
          </motion.div>
          <h5> {performanceDetail.title} </h5>
          <p> {performanceDetail.text}</p>
        </div>
      </div>
      <div className={`${styles.service_detail_container} ${styles.second_container_margin}`}>
          {services.pricing.map((card) => (
            <ServiceCard 
              key={card.title}
              title={card.title}
              subtitle={card.subtitle}
              price={card.price}
              pricePer={card.pricePer}
              list={card.features}
              ctaLabel={services.pricingCtaLabel}
              onClick={() => onClickOpenModal('CONTACT_US')}
            />
          ))}
      </div>
    </section>
  )
}

export default OurServices
