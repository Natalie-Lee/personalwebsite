import React from 'react'
import './skill.css'
import {BsPatchCheckFill} from 'react-icons/bs'

export const Skill = () => {
  return (
    <section id="skill">
      <h5>What skills I have</h5>
      <h2>My skill</h2>
      <div className="container skill__container">
        <div className="skill__block">
          <h3>Languages and Frameworks</h3>
          <div className="skill__content">
          <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icon" />
              <div>
                <h4>React</h4>
                {/* <small className='text-light'>skilld</small> */}
              </div>
            </article>
            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icon" />
              <div>
                <h4>Aura</h4>
                {/* <small className='text-light'>skilld</small> */}
              </div>  
            </article>
            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icon" />
              <div>
                <h4>Lightning</h4>
                {/* <small className='text-light'>skilld</small> */}
              </div>
            </article>
            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icon" />
              <div>
                <h4>Javascript</h4>
                {/* <small className='text-light'>skilld</small> */}
              </div>
            </article>
            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                {/* <small className='text-light'>skilld</small> */}
              </div>
            </article>
            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icon" />
              <div>
                <h4>HTML/CSS</h4>
                {/* <small className='text-light'>skilld</small> */}
              </div>
            </article>
            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icon" />
              <div>
                <h4>Java</h4>
                {/* <small className='text-light'>skilld</small> */}
              </div>
            </article>
            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icon" />
              <div>
                <h4>Python</h4>
                {/* <small className='text-light'>skilld</small> */}
              </div>
            </article>
            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icon" />
              <div>
                <h4>Node.js</h4>
                {/* <small className='text-light'>skilld</small> */}
              </div>
            </article>

          </div>
        </div>
        <div className="skill__block">
          <h3>Other Technologies</h3>
          <div className="skill__content">
            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icon" />
              <div>
                <h4>AWS</h4>
                <h5> S3,CloudWatch,Lambda,Connect</h5>
                {/* <small className='text-light'>skilld</small> */}
              </div>
            </article>
            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icon" />
              <div>
                <h4>Docker</h4>
                {/* <small className='text-light'>skilld</small> */}
              </div>
            </article>
            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icon" />
              <div>
                <h4>Workbench</h4>
                {/* <small className='text-light'>skilld</small> */}
              </div>
            </article>
            <article className="skill__details">
              <BsPatchCheckFill className="skill__details-icon" />
              <div>
                <h4>MySQL</h4>
                {/* <small className='text-light'>skilld</small> */}
              </div>
            </article>
            </div>
        </div>
      </div>
    </section>
  )
}
