'use client'
import { useState } from 'react';
import styles from './ContactModal.module.css'
// internal components
import Button from '../Button/Button';
// content
import { site, contactModal } from '@/content/site'
// External Libraries
import { AiOutlineClose } from 'react-icons/ai';
// external libraries
import { motion } from "framer-motion"

interface ContactModalProps {
    onClickCloseModal: (e: any) => void,  
}

function ContactModal({onClickCloseModal}:ContactModalProps) {
const [formSubmitted, setFormSubmitted] = useState(false);

const handleFormSubmit = () => {
    setTimeout(() => {
    setFormSubmitted(true);
    }, 100);
};

    // renders when form is submitted
  if (formSubmitted) {
    return (
      <div className={styles.contact_modal_container}>
        <div className={styles.modal_background} onClick={onClickCloseModal} />
        <div className={styles.form_submit_container}>
          <div className={styles.close_btn_container}>
             <AiOutlineClose onClick={onClickCloseModal} className={styles.close_btn} />
          </div>
          <h3> {contactModal.thanksTitle} </h3>
          <p> {contactModal.thanksBody} </p>
          <p> {contactModal.thanksSignature}</p>
        </div>
      </div>
    );
  }

  return (
    <aside className={styles.contact_modal_container}>
        <div className={styles.modal_background} onClick={onClickCloseModal} />
        <motion.div 
          className={styles.contact_form_container}
          initial={{y: "50", opacity: 0, scale: 0.5}}
          whileInView={{y: 0, opacity: 1, scale: 1}}
          transition={{duration: 0.25, ease: 'easeOut'}}
        >
            <div className={styles.close_btn_container}>
                    <AiOutlineClose onClick={onClickCloseModal} className={styles.close_btn} />
            </div>
            <h2 className={styles.title}><span className={styles.highlight_title}>{contactModal.titleHighlight}</span> {contactModal.titleRest}</h2>
            <div className={styles.contact_info}>
              <a href={`mailto:${site.contact.email}`} target="_blank">{site.contact.email}</a>
              <div></div>
              <a href={`tel:${site.contact.phoneTel}`}> {site.contact.phoneDisplay}</a>
            </div>
            <form className={styles.form} action={site.contact.formAction} onSubmit={handleFormSubmit} method="post" target="_blank">
                <div className={styles.form_group}>
                  <input type="text" id="name" name="name" placeholder={contactModal.namePlaceholder} className={styles.input} required />
                  <input type="email" id="email" name="email" placeholder={contactModal.emailPlaceholder} className={styles.input} required />
                </div>
                <textarea id="message" name="message" placeholder={contactModal.messagePlaceholder} className={styles.textarea} required></textarea>
                <Button label={contactModal.submitLabel} bgColorBlue={true} />
            </form>
        </motion.div>
    </aside>
  )
}

export default ContactModal
