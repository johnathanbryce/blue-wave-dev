import styles from './WaveDivider.module.css'

interface WaveDividerProps {
  cadence: 1 | 2 | 3 | 4 | 5
}

const FRONT = 'M0 15 C 25 3 75 27 100 15 S 175 3 200 15 S 275 27 300 15 S 375 3 400 15'
const BACK = 'M0 18 C 30 7 70 29 100 18 S 170 5 200 18 S 270 29 300 18 S 370 5 400 18'

/* Decorative drifting wave between sections, full viewport width. */
function WaveDivider({ cadence }: WaveDividerProps) {
  return (
    <div className={styles.wrapper} data-cadence={cadence} aria-hidden="true">
      <div className={styles.lane}>
        <div className={styles.swell}>
          <svg
            className={styles.front}
            viewBox="0 0 400 30"
            preserveAspectRatio="none"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="1"
            strokeOpacity="0.5"
          >
            <path d={FRONT} />
          </svg>
        </div>
        <div className={`${styles.swell} ${styles.swellBack}`}>
          <svg
            className={styles.back}
            viewBox="0 0 400 30"
            preserveAspectRatio="none"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="0.8"
            strokeOpacity="0.28"
          >
            <path d={BACK} />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default WaveDivider
