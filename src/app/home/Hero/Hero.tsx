import styles from './Hero.module.css'
// internal components
import LayoutContainer from '@/components/LayoutContainer/LayoutContainer'
import Button from '@/components/Button/Button'
import ArrowLink from '@/components/ArrowLink/ArrowLink'
import EngagementPlate from './EngagementPlate'
// content
import { hero } from '@/content/hero'

function Hero() {
  return (
    <section className={styles.hero}>
      {/* the mark field: two rotated SVG patterns, masked so it fades out before the section edge */}
      <div className={styles.backdrop} aria-hidden="true">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="bwd-marks" width="86" height="86" patternUnits="userSpaceOnUse" patternTransform="rotate(12)">
              <path d="M43 36.5v13M36.5 43h13" stroke="var(--divider)" strokeWidth="1" fill="none" />
            </pattern>
            <pattern id="bwd-marks-fine" width="86" height="86" patternUnits="userSpaceOnUse" patternTransform="rotate(12)">
              <circle cx="0" cy="0" r="1.1" fill="var(--divider)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#bwd-marks)" />
          <rect width="100%" height="100%" fill="url(#bwd-marks-fine)" opacity="0.6" />
        </svg>
      </div>

      <LayoutContainer className={styles.inner}>
      <div className={styles.copy}>
        <p className={styles.kicker}>{hero.kicker}</p>
        <h1 className={styles.title}>{hero.title}</h1>
        <p className={styles.lead}>{hero.text}</p>
        <div className={styles.actions}>
          <Button href="#contact" marks>
            {hero.ctaLabel}
          </Button>
          <ArrowLink href="#clients" iconSize={18} className={styles.secondary}>
            {hero.secondaryCtaLabel}
          </ArrowLink>
        </div>
      </div>

      <EngagementPlate title={hero.plateTitle} steps={hero.steps} />
      </LayoutContainer>
    </section>
  )
}

export default Hero
