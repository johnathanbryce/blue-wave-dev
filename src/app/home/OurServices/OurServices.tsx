import styles from './OurServices.module.css'
// internal components
import SectionHeader from '@/components/SectionHeader/SectionHeader'
// content
import { services } from '@/content/services'

function OurServices() {
  return (
    <section className={styles.services} id="services">
      <SectionHeader standout={services.heading.standout} title={services.heading.title} />
      <div className={styles.service_detail_top}>
        {services.intro.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>

      <div className={styles.service_detail_container}>
        {services.items.map((item) => (
          <div key={item.title} className={styles.service_detail}>
            <h5> {item.title} </h5>
            <p> {item.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default OurServices
