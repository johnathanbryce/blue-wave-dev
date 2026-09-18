import Image from 'next/image'
import styles from './About.module.css'
// internal components
import LayoutContainer from '@/components/LayoutContainer/LayoutContainer'
import SectionHeader from '@/components/SectionHeader/SectionHeader'
import Frame from '@/components/Frame/Frame'
import ArrowLink from '@/components/ArrowLink/ArrowLink'
// content
import { about } from '@/content/about'

function About() {
  return (
    <LayoutContainer as="section" id="about" className={styles.section}>
      <Frame className={styles.photo}>
        <div className={styles.photoInner}>
          <Image
            src={about.image}
            alt={about.imageAlt}
            className={styles.photoImg}
            sizes="(max-width: 700px) 100vw, 420px"
            loading="lazy"
          />
        </div>
        <div className={styles.captionStrip}>
          <span>{about.imageCaption.left}</span>
          <span>{about.imageCaption.right}</span>
        </div>
      </Frame>

      <div className={styles.text}>
        <SectionHeader kicker={about.heading.kicker} title={about.heading.title}>
          <p className={styles.role}>{about.role}</p>
        </SectionHeader>
        {about.bio.map((paragraph) => (
          <p key={paragraph} className={styles.bio}>
            {paragraph}
          </p>
        ))}
        <div className={styles.links}>
          {about.links.map((link) => (
            <ArrowLink key={link.label} href={link.url} external className={styles.link}>
              {link.label}
            </ArrowLink>
          ))}
        </div>
      </div>
    </LayoutContainer>
  )
}

export default About
