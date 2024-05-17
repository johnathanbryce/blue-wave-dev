import styles from './About.module.css'
import Image from 'next/image'
// internal components
import SectionHeader from '@/components/SectionHeader/SectionHeader'
// internal assets
import jbBioPic from '../../../../public/images/jbBioPic.jpg'

function About() {
  return (
    <section className={styles.about} id="about">
        <SectionHeader title={'WE ARE'} isWho={true}/>
        <div className={styles.text_container}>
            <p>My name is John and I am a web developer based in Vancouver, BC. I started this business out of a passion for creating modern websites with meticulous attention to detail. Constantly seeking new challenges and projects, I am committed to continuous learning in the ever-evolving field of web development.</p>
        </div>
        <a href="https://www.linkedin.com/in/johnathanbryce/" target="_blank" rel="noreferrer">
          <Image src={jbBioPic} className={styles.bio_pic} alt='John Bryce smiling with a backdrop of Downtown Vancouver'/>
        </a>
        <div className={styles.text_container_bottom}>
            <h5> John B.</h5>
            <h6> Owner & Developer </h6>
        </div>
    </section>
  )
}

export default About