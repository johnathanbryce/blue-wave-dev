'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './Header.module.css'
// internal components
import LayoutContainer from '../LayoutContainer/LayoutContainer'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import Button from '../Button/Button'
import { Menu } from '../Icons/Icons'
// content
import { site, nav } from '@/content/site'
// internal assets
import wavesLogo from '@public/images/wavesLogoTransparentBlue.png'

const SPY_IDS = ['services', 'clients', 'portfolio', 'about', 'contact']

function isActive(to: string, active: string) {
  if (to === 'clients') return active === 'clients' || active === 'portfolio'
  return active === to
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  // scroll spy: drives the desktop nav underline
  useEffect(() => {
    const els = SPY_IDS.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => el !== null)
    if (!els.length) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <header className={styles.header} data-open={menuOpen || undefined}>
      <LayoutContainer className={styles.bar}>
        <a href="#top" className={styles.brand} aria-label={`${site.name}, back to top`}>
          <Image src={wavesLogo} alt={site.logoAlt} width={34} height={34} className={styles.logo} preload />
          <span className={styles.wordmark}>{site.name}</span>
        </a>

        <nav className={styles.desktopNav} aria-label="Primary">
          {nav.desktop.map((item) => (
            <a
              key={item.to}
              href={`#${item.to}`}
              className={styles.navLink}
              data-active={isActive(item.to, activeSection) || undefined}
            >
              {item.label}
              <span className={styles.underline} aria-hidden="true" />
            </a>
          ))}
          <Button href="#contact" size="sm">
            {nav.contactLabel}
          </Button>
        </nav>

        <ThemeToggle />

        <button
          type="button"
          className={styles.burger}
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Menu size={22} />
        </button>
      </LayoutContainer>

      {menuOpen && (
        <LayoutContainer as="nav" className={styles.mobileNav} aria-label="Mobile">
          {nav.mobile.map((item) => (
            <a key={item.to} href={`#${item.to}`} className={styles.mobileLink} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </LayoutContainer>
      )}
    </header>
  )
}

export default Header
