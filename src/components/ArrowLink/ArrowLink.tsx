import type { ReactNode } from 'react'
import styles from './ArrowLink.module.css'
import { ArrowUpRight } from '../Icons/Icons'

interface ArrowLinkProps {
  href: string
  external?: boolean
  iconSize?: number
  className?: string
  children: ReactNode
}

/* Text link with a trailing Lucide arrow-up-right. Type styling belongs to the caller. */
function ArrowLink({ href, external = false, iconSize = 16, className, children }: ArrowLinkProps) {
  return (
    <a
      href={href}
      className={`${styles.link}${className ? ` ${className}` : ''}`}
      {...(external ? { target: '_blank', rel: 'noopener' } : {})}
    >
      {children}
      <ArrowUpRight size={iconSize} />
    </a>
  )
}

export default ArrowLink
