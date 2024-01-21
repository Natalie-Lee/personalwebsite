import React from 'react'
import './portfolio.css'
import IMG1 from "../../assets/portfolio1.jpeg"
import IMG2 from "../../assets/portfolio2_2.jpeg"
import IMG3 from "../../assets/portfolio5.png"

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Service Cloud Voice Health Check',
    source: 'https://help.salesforce.com/s/articleView?id=sf.voice_test_parent.htm&type=5',
    description: ''
  },
  {
    id: 2,
    image: IMG2,
    title: 'Traffic Flow Estimation with Vehicle Telematics Data',
    source: 'https://medium.com/99p-labs/cmu-heinz-capstone-project-traffic-flow-estimation-using-vehicle-telematics-data-2cb984b30c2b',
    description: ''
  },
  {
    id: 3,
    image: IMG3,
    title: 'Crypto Currency Api Implementation',
    source: 'https://github.com/Natalie-Lee?tab=repositories',
    description: ''
  },
]

export const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Reccent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, source, description}) => {
            return(
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} className=".portfolio__image" alt="" />
                </div>
                <div className="portfolio__title"><h3>{title}</h3></div>
                <div className="portfolio__item-cta">
                  <a className="btn-primary" href={source}>Check out</a>
                  <a>{description}</a>
                </div>
              </article>
            )
          })
        }

      </div>
    </section>
  )
}
