import type { ComponentPropsWithoutRef, ElementType } from 'react'
import styles from './LayoutContainer.module.css'

type LayoutContainerProps<T extends ElementType> = {
  as?: T
} & ComponentPropsWithoutRef<T>

/* The 1200px centred column with 24px gutters (16px at ≤640px). */
function LayoutContainer<T extends ElementType = 'div'>({
  as,
  className,
  children,
  ...rest
}: LayoutContainerProps<T>) {
  const Tag = (as ?? 'div') as ElementType
  return (
    <Tag className={`${styles.container}${className ? ` ${className}` : ''}`} {...rest}>
      {children}
    </Tag>
  )
}

export default LayoutContainer
