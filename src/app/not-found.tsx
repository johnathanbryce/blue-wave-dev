import styles from '../styles/not-found.module.css'
// internal components
import Button from '@/components/Button/Button'
// content
import { notFound, site } from '@/content/site'

export default function NotFound() {
  return (
    <section className={styles.notFound}>
      <h2 className={styles.title}>{notFound.title}</h2>
      <p className={styles.subtitle}>{notFound.subtitle}</p>
      <Button href="/">{site.name}</Button>
    </section>
  )
}
