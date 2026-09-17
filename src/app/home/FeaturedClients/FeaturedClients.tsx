import styles from './FeaturedClients.module.css'
// internal components
import SectionHeader from '@/components/SectionHeader/SectionHeader'
// content
import { clients } from '@/content/clients'

function FeaturedClients() {
  return (
    <section className={styles.clients} id="clients">
      <SectionHeader standout={clients.heading.standout} title={clients.heading.title} />
      <p className={styles.intro}>{clients.intro}</p>
      <div className={styles.client_list}>
        {clients.items.map((client) => (
          <article key={client.name} className={styles.client}>
            <h5>
              {client.url
                ? <a href={client.url} target="_blank" rel="noreferrer" className={styles.name_link}>{client.name}</a>
                : client.name}
            </h5>
            <p className={styles.role}>{client.role}</p>
            <p>{client.summary}</p>
            {client.points.length > 0 && (
              <ul className={styles.points}>
                {client.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

export default FeaturedClients
