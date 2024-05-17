'use client'
import React, {useEffect, useState} from 'react'
import styles from './Carousel.module.css'
// External Libraries
import useEmblaCarousel from 'embla-carousel-react';

interface CarouselProps{
    children: any,
}

function Carousel( {children}: CarouselProps) {
    const [emblaRef, embla] = useEmblaCarousel();
    const [selectedIndex, setSelectedIndex] = useState<number>(0);

    // handles selected embla child
    useEffect(() => {
      if (embla) {
          const onSelect = () => {
              setSelectedIndex(embla.selectedScrollSnap());
          };

          embla.on('select', onSelect);
          return () => {
              embla.off('select', onSelect);
          };
      }
    }, [embla]);
  
    const handleDotClick = (index: number) => {
      if (embla) {
        embla.scrollTo(index);
      }
    };



  return (
    <div ref={emblaRef} className={styles.embla} >
        <div className={styles.embla_container}>
          {children}
        </div>
        <div className={styles.dots_container}>
          {embla &&
            embla.scrollSnapList().map((_snap, index) => (
              <div
                key={index}
                className={`${styles.dot} ${index === selectedIndex ? styles.active : ''}`}
                onClick={() => handleDotClick(index)}
              />
          ))}
        </div>
        
    </div>
  )
}

export default Carousel;