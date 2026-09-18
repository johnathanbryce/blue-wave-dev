import type { ComponentPropsWithoutRef, ElementType } from 'react'
import styles from './Frame.module.css'

/* The four blueprint corner registration marks. Parent must be position:relative. */
export function CornerMarks() {
  return (
    <>
      <i className={`${styles.corner} ${styles.tl}`} aria-hidden="true" />
      <i className={`${styles.corner} ${styles.tr}`} aria-hidden="true" />
      <i className={`${styles.corner} ${styles.bl}`} aria-hidden="true" />
      <i className={`${styles.corner} ${styles.br}`} aria-hidden="true" />
    </>
  )
}

type FrameProps<T extends ElementType> = {
  as?: T
} & ComponentPropsWithoutRef<T>

/* 1px --divider border, square, plus the four corner marks. */
function Frame<T extends ElementType = 'div'>({ as, className, children, ...rest }: FrameProps<T>) {
  const Tag = (as ?? 'div') as ElementType
  return (
    <Tag className={`${styles.frame}${className ? ` ${className}` : ''}`} {...rest}>
      {children}
      <CornerMarks />
    </Tag>
  )
}

export default Frame
