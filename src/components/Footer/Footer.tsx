import Image from 'next/image'
import styles from './Footer.module.css'
// internal components
import LayoutContainer from '../LayoutContainer/LayoutContainer'
// content
import { site, nav, footer } from '@/content/site'
// internal assets
import wavesLogo from '@public/images/wavesLogoTransparentBlue.png'

function Footer() {
  return (
    <footer className={styles.footer}>
      <LayoutContainer className={styles.inner}>
        <div className={styles.brand}>
          <div className={styles.brandRow}>
            <Image src={wavesLogo} alt="" width={26} height={26} className={styles.logo} aria-hidden="true" />
            <span className={styles.wordmark}>{footer.brandTitle}</span>
          </div>
          <p className={styles.brandLine}>{footer.brandLine}</p>
        </div>

        <nav className={styles.nav} aria-label="Footer">
          {nav.mobile.map((item) => (
            <a key={item.to} href={`#${item.to}`} className={styles.link}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.contact}>
          <a href={`mailto:${site.contact.email}`} className={styles.link}>
            {site.contact.email}
          </a>
          <a href={`tel:${site.contact.phoneTel}`} className={styles.link}>
            {site.contact.phoneDisplay}
          </a>
          <span className={styles.copyright}>{footer.copyright}</span>
        </div>
      </LayoutContainer>
    </footer>
  )
}

export default Footer
