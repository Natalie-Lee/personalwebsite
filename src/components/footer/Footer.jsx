import React from 'react'
import './footer.css'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'

export const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">NATALIE</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/melody811118"><BsFacebook/></a>
        <a href="https://www.instagram.com/natalie______lee/"><BsInstagram/></a>
        <a href="https://www.linkedin.com/in/natalie-lee-cmu/"><BsLinkedin/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Natalie Lee. All rights reserved.</small>
      </div>
    </footer>
  )
}
