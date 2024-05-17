import React from 'react'
import styles from './Testimonials.module.css'
// internal components
import Carousel from '@/components/Carousels/Carousel/Carousel'
import ClientPictureCircle from '@/components/ClientPictureCircle/ClientPictureCircle'
// internal assets
import matthewPic from '../../../assets/matthew.jpeg'
import julienPic from '../../../assets/julien.jpeg'
import jasonPic from '../../../assets/jason.jpeg'
import sydPic from '../../../assets/sydney.jpeg'

function Testimonials() {
  return (
        <section className={styles.testimonials} id="testimonials">
            <h2 className={styles.testimonials_header}>Client Testimonials</h2>
            <Carousel>
            <article className={styles.testimonial}>
                <blockquote className={styles.testimonial_quote}>
                    &quot;Working with John on my portfolio site was a great experience. He nailed the details and captured the essence of my work. The project moved quickly and smoothly, thanks to John&apos;s skill and dedication.&quot;
                </blockquote>
                <figcaption className={styles.testimonial_author}>
                        <ClientPictureCircle src={julienPic} alt="A picture of Julien Verschooris, a musical composer and client."/>
                        <div className={styles.author_name_container}>
                            <p><b>Julien Verschooris</b></p>
                            <a href="https://www.julienverschooris.com/" target="_blank" rel="noopener noreferrer">Composer</a>
                        </div>
                       
                </figcaption>
            </article>

            <article className={styles.testimonial}>
                <blockquote className={styles.testimonial_quote}>
                &quot;As a  member of the founding development team at Romp, John has been instrumental in shaping the direction and success of Romp. John&apos;s expertise in front-end development has greatly enhanced our user experience. John&apos;s collaborative approach to integrating APIs and his valuable contributions to our UI/UX design have been pivotal in our Romp&apos;s progress and success. John&apos;s dedication and innovative thinking have been vital to the evolution of Romp and I look forward to our continued success together.&quot;
                </blockquote>
                <figcaption className={styles.testimonial_author}>
                    <ClientPictureCircle src={jasonPic} alt="A picture of Jason Tulloch, the founder of Romp."/>
                    <div className={styles.author_name_container}>
                        <p><b>Jason Tulloch</b> </p> 
                        <a href="https://rompathlete.com/" target="_blank" rel="noopener noreferrer">Romp</a>
                    </div>
                </figcaption>
            </article>

            <article className={styles.testimonial}>
                <blockquote className={styles.testimonial_quote}>
                    &quot;John has been a pleasure to work with on the Labridge Farms website. He communicated with me every step of the way and was always open to feedback and changes. His dedication and genuine interest in capturing the essence of our dog breeding and farm business made the process smooth and enjoyable. We continue to collaborate on updates to the website, big or small, and John handles them smoothly and efficiently. I couldn&apos;t be happier with the end result and highly recommend his services.&quot;
                </blockquote>
                <figcaption className={styles.testimonial_author}>
                    <ClientPictureCircle src={matthewPic} alt="A picture of Matthew Durant, owner and operator of Labridge Farms."/>
                    <div className={styles.author_name_container}>
                        <p><b>Matthew Durant</b></p> 
                        <a href="https://labridgefarms.com/" target="_blank" rel="noopener noreferrer">Labridge Farms</a>
                    </div>
                </figcaption>
            </article>

            <article className={styles.testimonial}>
                <blockquote className={styles.testimonial_quote}>
                    &quot;John did an amazing job on my website! His creativity and attention to detail truly brought my vision to life. The process was smooth and enjoyable, and the final product exceeded my expectations. Highly recommend!&quot;
                </blockquote>
                <figcaption className={styles.testimonial_author}>
                    <ClientPictureCircle src={sydPic} alt="A picture of Sydney Fisher, owner of SolLuna Essence."/>
                    <div className={styles.author_name_container}>
                       <p><b>Sydney Fisher</b></p> 
                       <a href="https://www.sollunaessence.com/" target="_blank" rel="noopener noreferrer">SolLuna Essence</a>
                    </div>
                </figcaption>
            </article>
        </Carousel>
    </section>
  )
}

export default Testimonials