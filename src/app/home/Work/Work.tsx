import styles from './Work.module.css'
// internal components
import LayoutContainer from '@/components/LayoutContainer/LayoutContainer'
import SectionHeader from '@/components/SectionHeader/SectionHeader'
import ArrowLink from '@/components/ArrowLink/ArrowLink'
// content
import { clients } from '@/content/clients'

function Work() {
  return (
    <LayoutContainer as="section" id="clients" className={styles.section}>
      <SectionHeader kicker={clients.heading.kicker} title={clients.heading.title} className={styles.head} />
      {clients.items.map((client) => (
        <article key={client.name} className={styles.row}>
          <div className={styles.meta}>
            <h3 className={styles.name}>
              {client.url ? (
                <ArrowLink href={client.url} external iconSize={20} className={styles.nameLink}>
                  {client.name}
                </ArrowLink>
              ) : (
                client.name
              )}
            </h3>
            <p className={styles.role}>{client.role}</p>
          </div>
          <p className={styles.summary}>{client.summary}</p>
        </article>
      ))}
    </LayoutContainer>
  )
}

export default Work
