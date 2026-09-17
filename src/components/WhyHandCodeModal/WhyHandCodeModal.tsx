import styles from './WhyHandCodeModal.module.css'
import Image from 'next/image';
// External Libraries
import { AiOutlineClose } from 'react-icons/ai';
// content
import { whyHandCodeModal } from '@/content/services'
// external libraries
import { motion } from "framer-motion"

interface WhyHandCodeModalProps {
    onClickCloseModal: (e: any) => void,  
}

function WhyHandCodeModal({onClickCloseModal}: WhyHandCodeModalProps) {
  return (
    <aside className={styles.modal_container}>
        <div className={styles.modal_background} onClick={onClickCloseModal} />
        <motion.div 
          className={styles.content_container}
          initial={{y: "50", opacity: 0, scale: 0.5}}
          whileInView={{y: 0, opacity: 1, scale: 1}}
          transition={{duration: 0.25, ease: 'easeOut'}}
        >
          <div className={styles.close_btn_container}>
                <AiOutlineClose onClick={onClickCloseModal} className={styles.close_btn} />
          </div>
          <div className={styles.text_wrapper}>
            <h2><span className={styles.highlight_title}>{whyHandCodeModal.titleHighlight}</span> {whyHandCodeModal.titleRest}</h2>
            {whyHandCodeModal.paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
          <div className={styles.right_side_bg_container}>
            <Image src={whyHandCodeModal.image} className={styles.why_hand_code_img} priority alt={whyHandCodeModal.imageAlt}/>
            <ul className={styles.right_side_list_container}>
              {whyHandCodeModal.bullets.map((bullet) => (
                <li key={bullet}> {bullet}</li>
              ))}
            </ul>
          </div>
        </motion.div>
    </aside>
  )
}

export default WhyHandCodeModal
