'use client'
import { useEffect, useState, useSyncExternalStore } from 'react'
import styles from './EngagementPlate.module.css'
import Frame from '@/components/Frame/Frame'

interface EngagementPlateProps {
  title: string
  steps: readonly { key: string; text: string }[]
}

const STEP_GAP_MS = 420
const REDUCE = '(prefers-reduced-motion: reduce)'

function subscribeReducedMotion(onChange: () => void) {
  const mq = window.matchMedia(REDUCE)
  mq.addEventListener('change', onChange)
  return () => mq.removeEventListener('change', onChange)
}

function useReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia(REDUCE).matches,
    () => false,
  )
}

/* The hero's mono spec sheet. Rows reveal one at a time; all at once under
   prefers-reduced-motion. */
function EngagementPlate({ title, steps }: EngagementPlateProps) {
  const reduceMotion = useReducedMotion()
  const [revealed, setRevealed] = useState(0)
  const shown = reduceMotion ? steps.length : revealed
  const done = shown >= steps.length

  useEffect(() => {
    if (reduceMotion) return
    const timer = setInterval(() => {
      setRevealed((n) => {
        if (n + 1 >= steps.length) clearInterval(timer)
        return n + 1
      })
    }, STEP_GAP_MS)
    return () => clearInterval(timer)
  }, [reduceMotion, steps.length])

  return (
    <Frame className={styles.plate}>
      <div className={styles.head}>
        <span>{title}</span>
        <span>{done ? `${steps.length} steps` : 'writing…'}</span>
      </div>
      <div className={styles.body} aria-label={`${title}, in ${steps.length} steps`}>
        {steps.slice(0, shown).map((step) => (
          <div key={step.key} className={styles.row}>
            <span className={styles.key}>{step.key}</span>
            <span className={styles.text}>{step.text}</span>
          </div>
        ))}
        {!done && <span aria-hidden="true">▌</span>}
      </div>
    </Frame>
  )
}

export default EngagementPlate
