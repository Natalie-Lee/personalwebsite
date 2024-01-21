import React from 'react'
import './about.css'
import ME from '../../assets/meChurro.JPG'
import { AiFillTrophy } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { AiFillProject } from 'react-icons/ai'

export const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <AiFillTrophy className="about__icon"/>
              <h5>High Achiever</h5>
            </article>

            <article className="about__card">
              <AiOutlineUser className="about__icon"/>
              <h5>Team Player</h5>
            </article>

            <article className="about__card">
              <AiFillProject className="about__icon"/>
              <h5>Logical Thinker</h5>
            </article>
          </div>

          <p> Hey there! 
            <br></br><br></br>
            I am a dedicated fullstack developer with a passion for creating seamless experiences. 
            Currently, I contribute to the <a href="https://www.salesforce.com/products/call-center-integration/">(Voice) </a>
            team at Salesforce, where our focus is on integrating intelligent telephony into Salesforce to enhance the agent experience.
            
            <br></br><br></br>
            Prior to my role at Salesforce, I spent four years in Finance, Audit, and Tax. This experience has equipped me with a robust
             skill set in financial report composition, tax filing, and corporate finance analysis.
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}
