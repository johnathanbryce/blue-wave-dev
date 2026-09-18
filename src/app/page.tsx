// internal components
import Header from '@/components/Header/Header'
import WaveDivider from '@/components/WaveDivider/WaveDivider'
import Footer from '@/components/Footer/Footer'
// internal pages
import Hero from './home/Hero/Hero'
import Services from './home/Services/Services'
import Work from './home/Work/Work'
import SmallBusiness from './home/SmallBusiness/SmallBusiness'
import About from './home/About/About'
import Contact from './home/Contact/Contact'

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <WaveDivider cadence={1} />
        <Services />
        <WaveDivider cadence={2} />
        <Work />
        <WaveDivider cadence={3} />
        <SmallBusiness />
        <WaveDivider cadence={4} />
        <About />
        <WaveDivider cadence={5} />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
