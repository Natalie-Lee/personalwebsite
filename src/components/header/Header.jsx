import React from 'react'
import './header.css'
import { CTA } from './CTA'
import HEAD from './../../assets/HEAD.jpg'
import HeaderSocial from './HeaderSocials'
import { BsFillArrowDownCircleFill } from "react-icons/bs";

export const Header = () => {
  return (
    <header>
      <div className="me">
      <HeaderSocial/>
        <div className="floatWord">
          <h4 className="text-light">Fullstack Developer</h4>
          <h1>Natalie Lee</h1>
          <CTA/>
        </div>
          <img src={HEAD} alt="me" />
      </div>
      <a href="#contact" className="scroll__down"><BsFillArrowDownCircleFill/></a>
      <div className="container header__container">
      
      
      </div>
    </header>
  )
}
