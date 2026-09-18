import type { ReactNode } from 'react'
import styles from './SectionHeader.module.css'

interface SectionHeaderProps {
  kicker: string
  title: string
  intro?: string
  balance?: boolean
  className?: string
  children?: ReactNode
}

/* Mono kicker over an H2. With `intro` it becomes the two-column head used by
   Services and Small business. `children` render under the H2 (About's role line). */
function SectionHeader({ kicker, title, intro, balance, className, children }: SectionHeaderProps) {
  return (
    <div className={`${styles.head}${intro ? ` ${styles.split}` : ''}${className ? ` ${className}` : ''}`}>
      <div>
        <p className={styles.kicker}>{kicker}</p>
        <h2 className={`${styles.title}${balance ? ` ${styles.balance}` : ''}`}>{title}</h2>
        {children}
      </div>
      {intro && <p className={styles.intro}>{intro}</p>}
    </div>
  )
}

export default SectionHeader
