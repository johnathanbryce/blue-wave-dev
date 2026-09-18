import Image from 'next/image'
import styles from './SmallBusiness.module.css'
// internal components
import LayoutContainer from '@/components/LayoutContainer/LayoutContainer'
import SectionHeader from '@/components/SectionHeader/SectionHeader'
import Frame from '@/components/Frame/Frame'
import ArrowLink from '@/components/ArrowLink/ArrowLink'
// content
import { smallBusiness } from '@/content/smallBusiness'

function SmallBusiness() {
  return (
    <LayoutContainer as="section" id="portfolio" className={styles.section}>
      <SectionHeader
        kicker={smallBusiness.heading.kicker}
        title={smallBusiness.heading.title}
        intro={smallBusiness.intro}
        className={styles.head}
      />
      {/* keeps the old #testimonials nav target on the grid that absorbed that section */}
      <div id="testimonials" className={styles.grid}>
        {smallBusiness.projects.map((project) => (
          <Frame as="article" key={project.name} className={styles.card}>
            <a
              href={project.url}
              target="_blank"
              rel="noopener"
              className={styles.shot}
              aria-label={`${project.visitLabel} ${project.name}`}
            >
              <Image
                src={project.image}
                alt={project.imageAlt}
                className={styles.shotImg}
                sizes="(max-width: 900px) 100vw, 586px"
                loading="lazy"
              />
            </a>
            <div className={styles.body}>
              <div className={styles.titleRow}>
                <h3 className={styles.title}>{project.name}</h3>
                <ArrowLink href={project.url} external className={styles.visit}>
                  {project.visitLabel}
                </ArrowLink>
              </div>
              <p className={styles.description}>{project.description}</p>
              <figure className={styles.testimonial}>
                <blockquote className={styles.quote}>“{project.quote}”</blockquote>
                <figcaption className={styles.caption}>
                  <Image
                    src={project.avatar}
                    alt={project.avatarAlt}
                    width={36}
                    height={36}
                    className={styles.avatar}
                    loading="lazy"
                  />
                  <span className={styles.person}>
                    <strong className={styles.personName}>{project.person}</strong>
                    <span className={styles.personMeta}>
                      {project.organization} · {project.location}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </div>
          </Frame>
        ))}
      </div>
    </LayoutContainer>
  )
}

export default SmallBusiness
