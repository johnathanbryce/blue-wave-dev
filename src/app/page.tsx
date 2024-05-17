import styles from '../styles/page.module.css'
// internal components
import Header from "@/components/Header/Header"
import LayoutContainer from "@/components/LayoutContainer/LayoutContainer"
// internal pages
import Hero from "./home/Hero/Hero"
import OurServices from "./home/OurServices/OurServices"
import NewProject from "./home/NewProject/NewProject"
import Portfolio from './home/Portfolio/Portfolio'
import Testimonials from './home/Testimonials/Testimonials'
import About from './home/About/About'
import Footer from '@/components/Footer/Footer'

export default function Home() {
  return (
    <>
     <Header />
     <main>
      <LayoutContainer>
        <Hero />  
        <OurServices />
      </LayoutContainer>
      <NewProject />
      <LayoutContainer>
        <Portfolio />
      </LayoutContainer>
      <Testimonials />
      <LayoutContainer>
        <About />
      </LayoutContainer>
    </main>
     <Footer />
    </>

  )
}
