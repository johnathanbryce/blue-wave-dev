import React from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from './ClientPictureCircle.module.css';

interface ClientPictureCircleProps {
    src: string | StaticImageData;
    alt: string,
}

function ClientPictureCircle({ src, alt }: ClientPictureCircleProps) {
  return (
    <figure className={styles.picture_container}>
      <Image src={src} alt={alt} className={styles.picture} width={100} height={100} />
    </figure>
  );
}

export default ClientPictureCircle;
