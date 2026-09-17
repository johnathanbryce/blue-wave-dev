'use client'
import { useState } from 'react'
import styles from './Footer.module.css'
// internal components
import CurveBackgroundBottom from '../CurveBackgroundBottom/CurveBackgroundBottom'
import ContactModal from '../ContactModal/ContactModal'
// content
import { site, nav, footer } from '@/content/site'
// external libraries
import { Link } from 'react-scroll'

function Footer() {
  // open and close contact modal
  const [isContactModalActive, setIsContactModalActive] = useState(false);

  const onClickOpenModal = () => {
    setIsContactModalActive(true);                                               
  }

  const onClickCloseModal = () => {
    setIsContactModalActive(false);                                               
  }
  return (
      <footer className={styles.footer}>
          {/* toggle contact modal */}
          {isContactModalActive && <ContactModal onClickCloseModal={onClickCloseModal}/>}
          <CurveBackgroundBottom />
          <div className={styles.footer_content}>
            <div className={styles.logo_wrapper}>
              <h4> {footer.brandTitle} </h4>
              <p> {site.tagline} </p>
            </div>
            <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
            <a href={`tel:${site.contact.phoneTel}`}> {site.contact.phoneDisplay}</a>
          </div>
          <div className={styles.footer_content}>
            <h4> {footer.navigationTitle} </h4>
            <nav className={styles.navbar}>
            <ul>
                {nav.desktop.map((item) => (
                  <li key={item.to}><Link to={item.to} spy={true} smooth={true} duration={500} offset={-10} > {item.label} </Link></li>
                ))}
                <li><Link to="" onClick={onClickOpenModal}> {nav.contactLabel} </Link></li>  
            </ul>
            </nav>
          </div>
      </footer>
  )
}

export default Footer
