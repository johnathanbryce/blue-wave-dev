import styles from './Contact.module.css'
// internal components
import LayoutContainer from '@/components/LayoutContainer/LayoutContainer'
import SectionHeader from '@/components/SectionHeader/SectionHeader'
import ContactForm from './ContactForm'
// content
import { contact } from '@/content/contact'
import { site } from '@/content/site'

function Contact() {
  return (
    <LayoutContainer as="section" id="contact" className={styles.section}>
      <div className={styles.copy}>
        <SectionHeader kicker={contact.heading.kicker} title={contact.heading.title} balance />
        <p className={styles.text}>{contact.text}</p>
        <dl className={styles.details}>
          <dt className={styles.dt}>{contact.labels.email}</dt>
          <dd className={styles.dd}>
            <a href={`mailto:${site.contact.email}`} className={styles.detailLink}>
              {site.contact.email}
            </a>
          </dd>
          <dt className={styles.dt}>{contact.labels.phone}</dt>
          <dd className={styles.dd}>
            <a href={`tel:${site.contact.phoneTel}`} className={styles.detailLink}>
              {site.contact.phoneDisplay}
            </a>
          </dd>
        </dl>
      </div>

      <ContactForm />
    </LayoutContainer>
  )
}

export default Contact
