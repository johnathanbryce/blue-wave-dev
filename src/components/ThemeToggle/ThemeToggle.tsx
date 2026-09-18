'use client'
import { useSyncExternalStore } from 'react'
import styles from './ThemeToggle.module.css'
import { Sun, Moon } from '../Icons/Icons'
import { nav } from '@/content/site'

type Theme = 'light' | 'dark'

const STORAGE_KEY = 'bwd-theme'
const listeners = new Set<() => void>()

/* Manual override (data-theme on <html>, persisted as "bwd-theme") wins over
   the system preference. The inline script in layout.tsx applies the override
   before first paint; the icon is chosen by CSS so it is right on first paint. */
function resolvedTheme(): Theme {
  const override = document.documentElement.getAttribute('data-theme')
  if (override === 'light' || override === 'dark') return override
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function subscribe(onChange: () => void) {
  listeners.add(onChange)
  const mq = window.matchMedia('(prefers-color-scheme: dark)')
  mq.addEventListener('change', onChange)
  return () => {
    listeners.delete(onChange)
    mq.removeEventListener('change', onChange)
  }
}

function ThemeToggle() {
  const resolved = useSyncExternalStore(subscribe, resolvedTheme, () => 'light' as Theme)

  const toggle = () => {
    const next: Theme = resolvedTheme() === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {}
    listeners.forEach((notify) => notify())
  }

  const label = resolved === 'dark' ? nav.themeToggleToLight : nav.themeToggleToDark

  return (
    <button type="button" className={styles.toggle} onClick={toggle} aria-label={label} title={label}>
      <Sun size={18} className={styles.sun} />
      <Moon size={18} className={styles.moon} />
    </button>
  )
}

export default ThemeToggle
