import React from 'react'
import './about.css'
import ME from '../../assets/doodleME.jpg'
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
              <h5>Experience</h5>
              <small>4 year of working</small>
            </article>

            <article className="about__card">
              <AiOutlineUser className="about__icon"/>
              <h5>Eduction</h5>
              <small>Carnegie Mellon University</small>
            </article>

            <article className="about__card">
              <AiFillProject className="about__icon"/>
              <h5>Projects</h5>
              <small>Food Ordering Platform</small>
            </article>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus modi impedit dolorem odio tenetur quaerat laborum, 
            perspiciatis culpa tempora ut quidem ea perferendis veniam nostrum nihil eos voluptas dicta a.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}
