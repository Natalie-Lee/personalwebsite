import React from 'react'
import CV from '../../assets/Resume_Natalie_Lee.pdf'

export const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className="btn">Download CV</a>
        <a href="#contact" className="btn btn-primary">Let's talk</a>
    </div>
  )
}
