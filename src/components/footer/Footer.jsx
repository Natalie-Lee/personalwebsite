import React from 'react'
import './footer.css'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'

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
        <a href="htttps://facebook.com"><BsFacebook/></a>
        <a href="htttps://instagram.com"><BsInstagram/></a>
        <a href="htttps://twitter.com"><BsTwitter/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Natalie Lee. All rights reserved.</small>
      </div>
    </footer>
  )
}
