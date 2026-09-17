import styles from './Portfolio.module.css'
// internal components
import SectionHeader from '@/components/SectionHeader/SectionHeader'
import PortfolioCard from '@/components/PortfolioCard/PortfolioCard'
// content
import { smallBusiness } from '@/content/smallBusiness'

function Portfolio() {
  return (
    <section className={styles.portfolio} id="portfolio">
        <SectionHeader standout={smallBusiness.heading.standout} title={smallBusiness.heading.title} />
        <div className={styles.portfolio_card_container}>
            {smallBusiness.projects.map((project) => (
              <PortfolioCard 
                  key={project.name}
                  image={project.image}
                  imageAlt={project.imageAlt}
                  header={project.name}
                  location={project.location}
                  description={project.description}
                  visitLabel={smallBusiness.visitLabel}
                  buttonLabel={project.buttonLabel}
                  buttonSrc={project.url}
              />
            ))}
        </div>
    </section>
  )
}

export default Portfolio
