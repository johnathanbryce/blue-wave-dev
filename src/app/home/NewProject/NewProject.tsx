'use client'
import { useState } from 'react'
import styles from './NewProject.module.css'
// internal components
import ContactModal from '@/components/ContactModal/ContactModal'
import Button from '@/components/Button/Button'
// content
import { newProject } from '@/content/newProject'

function NewProject() {
  const [isContactModalActive, setIsContactModalActive] = useState(false);

  const onClickOpenModal = () => {
    setIsContactModalActive(true);                                               
  }

  const onClickCloseModal = () => {
    setIsContactModalActive(false);                                               
  }

  return (
    <section className={styles.new_project}>
        {isContactModalActive && <ContactModal onClickCloseModal={onClickCloseModal}/>}
        <div className={styles.new_project_content_left}>
            <h2 className={styles.new_project_title}> {newProject.title} </h2>
            <p className={styles.white_font_bold}> {newProject.text}</p>
            <div className={styles.contact_container}>
                <Button label={newProject.ctaLabel} onClick={onClickOpenModal} />
                <p className={styles.white_font_bold}> {newProject.phoneLine}</p>
            </div>
        </div>
    </section>
  )
}

export default NewProject
