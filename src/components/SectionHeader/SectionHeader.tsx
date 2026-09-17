import styles from './SectionHeader.module.css'
// internal components
import LineHeadingBreak from '../LineHeadingBreak/LineHeadingBreak'

interface SectionHeaderProps {
    standout: string,
    title: string,
}

function SectionHeader({standout, title}: SectionHeaderProps) {
  return (
    <div className={styles.section_header}>
        <h2><span className={styles.title_standout_color}>{standout}</span> {title}</h2>
        <LineHeadingBreak />
    </div>
  )
}

export default SectionHeader
