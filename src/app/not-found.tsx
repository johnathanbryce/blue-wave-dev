import React from 'react'
import styles from '../styles/not-found.module.css'
// Next.js
import Link from 'next/link'
// content
import { notFound } from '@/content/site'
// External Libraries
import {AiOutlineHome} from 'react-icons/ai'

export default function NotFound() {
  return (
    <section className={styles.not_found}>
      <h2> {notFound.title} </h2>
      <div className={styles.sub_header_wrapper}>
        <h4> {notFound.subtitle} </h4>
        <Link href='/'>
            <AiOutlineHome className={styles.icon} /> 
        </Link> 
      </div>
    </section>
  )
}
