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
// internal assets
import pageSpeed from '../../../../public/images/pageSpeed.png'
import responsive from '../../../../public/images/responsive.png'
// external libraries
import { motion } from "framer-motion"

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

      <SectionHeader title={'EXPERTISE'} isOur={true} />
      <div className={styles.service_detail_top}>
        <p>We specialize in creating accessible and mobile-friendly websites.</p>
        <p> Every line of code is written by hand to ensure exceptional performance.</p>
      </div>
      <Button label={'WHY HAND CODE?'} onClick={() => onClickOpenModal('WHY_HAND_CODE')} bgColorBlue={true}/>

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
            <Image src={responsive} className={styles.services_icon} alt="an icon of a computer and phone"/>
          </motion.div>
          <h5> Fully Responsive </h5>
          <p> Your website will have a responsive design that adapts seamlessly to different screen sizes, enabling visitors to access it effortlessly on mobile phones, tablets, and desktop computers.</p>
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
            <Image src={pageSpeed} className={styles.services_icon} alt="an icon indicating website performance and optimization"/>
          </motion.div>
          <h5> Performance & Optimization </h5>
          <p> Manually writing the code for our websites and leveraging modern technology ensures better web performance and improved search engine optimization.</p>
        </div>
      </div>
      <div className={`${styles.service_detail_container} ${styles.second_container_margin}`}>
          <ServiceCard 
            title="STANDARD"
            subtitle='STARTING AT'
            price='$1K'
            list={['One-time payment', 'Custom Design', 'Custom Features', 'Expedited Delivery']}
            onClick={() => onClickOpenModal('CONTACT_US')}
          />
          <ServiceCard 
            title="MONTHLY"
            subtitle='5 PAGES'
            price='$140'
            pricePer=" / month"
            list={['Unlimited Updates', 'Unlimited Edits', '24/7 Support', 'Includes Hosting' ]}  
            onClick={() => onClickOpenModal('CONTACT_US')}
          />
      </div>
    </section>
  )
}

export default OurServices