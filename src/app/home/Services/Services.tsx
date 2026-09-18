import styles from './Services.module.css'
// internal components
import LayoutContainer from '@/components/LayoutContainer/LayoutContainer'
import SectionHeader from '@/components/SectionHeader/SectionHeader'
import Frame from '@/components/Frame/Frame'
// content
import { services } from '@/content/services'

function Services() {
  return (
    <LayoutContainer as="section" id="services" className={styles.section}>
      <SectionHeader
        kicker={services.heading.kicker}
        title={services.heading.title}
        intro={services.intro}
        className={styles.head}
      />
      {/* 1px gap over --divider plus opaque cells draws the grid lines */}
      <Frame className={styles.grid}>
        {services.items.map((item) => (
          <article key={item.title} className={styles.cell}>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
          </article>
        ))}
      </Frame>
    </LayoutContainer>
  )
}

export default Services
