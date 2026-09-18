import type { ReactNode } from 'react'
import styles from './Button.module.css'
import { CornerMarks } from '../Frame/Frame'

interface ButtonProps {
  variant?: 'primary' | 'quiet'
  size?: 'sm' | 'md'
  marks?: boolean
  href?: string
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit'
  className?: string
  children: ReactNode
}

function Button({
  variant = 'primary',
  size = 'md',
  marks = false,
  href,
  onClick,
  disabled,
  type = 'button',
  className,
  children,
}: ButtonProps) {
  const cls = [styles.btn, styles[variant], styles[size], className].filter(Boolean).join(' ')
  const inner = (
    <>
      {children}
      {marks && <CornerMarks />}
    </>
  )
  if (href) {
    return (
      <a href={href} className={cls} onClick={onClick}>
        {inner}
      </a>
    )
  }
  return (
    <button type={type} className={cls} onClick={onClick} disabled={disabled}>
      {inner}
    </button>
  )
}

export default Button
