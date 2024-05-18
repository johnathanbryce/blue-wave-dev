'use client'
import { useState } from 'react'
import styles from './OurServices.module.css'
import Image from 'next/image'
// internal components
import Button from '@/components/Button/Button'
import SectionHeader from '@/components/SectionHeader/SectionHeader'
import WhyHandCodeModal from '@/components/WhyHandCodeModal/WhyHandCodeModal'
// internal assets
import pageSpeed from '../../../../public/images/pageSpeed.png'
import responsive from '../../../../public/images/responsive.png'
// external libraries
import { motion } from "framer-motion"

function OurServices() {
  // open and close contact modal
  const [isWhyHandCodeModalActive, setIsWhyHandCodeModalActive] = useState(false);

  const onClickOpenModal = () => {
      setIsWhyHandCodeModalActive(true);                                               
  }
  
  const onClickCloseModal = () => {
      setIsWhyHandCodeModalActive(false);                                               
  }
  
  return (
    <section className={styles.services} id="services">
      {/* toggle WhyHandCode modal */}
      {isWhyHandCodeModalActive && <WhyHandCodeModal onClickCloseModal={onClickCloseModal}/>}

      <SectionHeader title={'EXPERTISE'} isOur={true} />
      <div className={styles.services_card_top}>
        <p>We specialize in creating accessible and mobile-friendly websites.</p>
        <p> Every line of code is written by hand to ensure exceptional performance.</p>
      </div>
      <Button label={'WHY HAND CODE?'} onClick={onClickOpenModal} bgColorBlue={true}/>

      <aside className={styles.services_card_container}>
        <div className={styles.services_card}>
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
            <Image src={responsive} className={styles.services_icon} alt="an icon of a computer and phone"/>
          </motion.div>
          <h5> Fully Responsive </h5>
          <p> Your website will have a responsive design that adapts seamlessly to different screen sizes, enabling visitors to access it effortlessly on mobile phones, tablets, and desktop computers.</p>
        </div>

        <div className={styles.services_card}>
          <motion.div
            className={styles.services_icon_wrapper}
            initial={{ x: '-100%', rotate: 0 }}
            whileInView={{
              x: ['-100%', '0%', '100%', '0%'],
              rotate: [0, -20, 0],
            }}
            transition={{ duration: 1.25, ease: 'easeInOut' }}
          >
            <Image src={pageSpeed} className={styles.services_icon} alt="an icon indicating website performance and optimization"/>
          </motion.div>
          <h5> Performance & Optimization </h5>
          <p> Manually writing the code for our websites and leveraging modern technology ensures better web performance and improved search engine optimization.</p>
        </div>
      </aside>
    </section>
  )
}

export default OurServices