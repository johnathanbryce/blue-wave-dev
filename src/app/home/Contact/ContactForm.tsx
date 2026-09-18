'use client'
import { useEffect, useRef, useState } from 'react'
import styles from './Contact.module.css'
// internal components
import Frame from '@/components/Frame/Frame'
import Button from '@/components/Button/Button'
// content
import { contact } from '@/content/contact'
import { site } from '@/content/site'

const SEND_MS = 650

/* Native POST to formsubmit.co (unchanged from the old modal, including the
   new-tab target). The pending state is cosmetic and wraps that request. */
function ContactForm() {
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current)
    }
  }, [])

  const handleSubmit = () => {
    if (sending) return
    setSending(true)
    timer.current = setTimeout(() => {
      setSending(false)
      setSent(true)
    }, SEND_MS)
  }

  if (sent) {
    return (
      <Frame className={styles.thanks}>
        <h3 className={styles.thanksTitle}>{contact.thanks.title}</h3>
        <p className={styles.thanksBody}>{contact.thanks.body}</p>
        <p className={styles.signature}>{contact.thanks.signature}</p>
      </Frame>
    )
  }

  return (
    <Frame
      as="form"
      className={styles.form}
      action={site.contact.formAction}
      method="post"
      target="_blank"
      onSubmit={handleSubmit}
    >
      <div className={styles.fieldRow}>
        <label className={styles.label}>
          {contact.form.nameLabel}
          <input type="text" name="name" required autoComplete="name" className={styles.input} />
        </label>
        <label className={styles.label}>
          {contact.form.emailLabel}
          <input type="email" name="email" required autoComplete="email" className={styles.input} />
        </label>
      </div>
      <label className={styles.label}>
        {contact.form.messageLabel}
        <textarea
          name="message"
          required
          rows={5}
          placeholder={contact.form.messagePlaceholder}
          className={`${styles.input} ${styles.textarea}`}
        />
      </label>
      <Button type="submit" disabled={sending} className={styles.submit}>
        {sending ? contact.form.submitPendingLabel : contact.form.submitLabel}
      </Button>
    </Frame>
  )
}

export default ContactForm
