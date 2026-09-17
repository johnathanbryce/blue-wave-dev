import React from 'react'
import styles from './Testimonials.module.css'
// internal components
import Carousel from '@/components/Carousels/Carousel/Carousel'
import ClientPictureCircle from '@/components/ClientPictureCircle/ClientPictureCircle'
// content
import { testimonials } from '@/content/testimonials'

function Testimonials() {
  return (
        <section className={styles.testimonials} id="testimonials">
            <h2 className={styles.testimonials_header}>{testimonials.heading}</h2>
            <Carousel>
            {testimonials.items.map((item) => (
              <article key={item.name} className={styles.testimonial}>
                  <blockquote className={styles.testimonial_quote}>
                      &quot;{item.quote}&quot;
                  </blockquote>
                  <figcaption className={styles.testimonial_author}>
                          <ClientPictureCircle src={item.image} alt={item.imageAlt}/>
                          <div className={styles.author_name_container}>
                              <p><b>{item.name}</b></p>
                              <a href={item.url} target="_blank" rel="noopener noreferrer">{item.organization}</a>
                          </div>
                  </figcaption>
              </article>
            ))}
        </Carousel>
    </section>
  )
}

export default Testimonials
