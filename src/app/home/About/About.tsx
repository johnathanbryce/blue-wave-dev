import styles from './About.module.css'
import Image from 'next/image'
// internal components
import SectionHeader from '@/components/SectionHeader/SectionHeader'
// content
import { about } from '@/content/about'

function About() {
  return (
    <section className={styles.about} id="about">
        <SectionHeader standout={about.heading.standout} title={about.heading.title} />
        <div className={styles.text_container}>
            <p>{about.bio}</p>
        </div>
        <a href={about.linkUrl} target="_blank" rel="noreferrer">
          <Image src={about.image} className={styles.bio_pic} alt={about.imageAlt}/>
        </a>
        <div className={styles.text_container_bottom}>
            <h5> {about.name}</h5>
            <h6> {about.role} </h6>
            <ul className={styles.links}>
              {about.links.map((link) => (
                <li key={link.url}><a href={link.url} target="_blank" rel="noreferrer">{link.label}</a></li>
              ))}
            </ul>
        </div>
    </section>
  )
}

export default About
