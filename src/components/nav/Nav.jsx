import React from 'react'
import './nav.css'
import { AiTwotoneHome } from 'react-icons/ai'
import { SiAboutdotme } from 'react-icons/si'
import { AiOutlineUser } from 'react-icons/ai'
import { MdOutlineWork } from 'react-icons/md'
import { IoSchool } from "react-icons/io5";
import { GrProjects } from "react-icons/gr";
import { FaPhone } from "react-icons/fa";
import { VscTools } from "react-icons/vsc";
import { useState } from 'react'

export const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  // const [activeNav, handleScroll] = useState('#');
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === "#" ? 'active' : '' }><AiTwotoneHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? 'active' : ''}><SiAboutdotme/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === "#experience" ? 'active' : ''}><MdOutlineWork/></a>
      <a href="#education" onClick={() => setActiveNav('#education')} className={activeNav === "#education" ? 'active' : ''}><IoSchool/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === "#portfolio" ? 'active' : ''}><GrProjects/></a>
      {/* <a href="#testimonials" onClick={() => setActiveNav('#testimonials')} className={activeNav === "#testimonials" ? 'active' : ''}><AiOutlineUser/></a> */}
      <a href="#skill" onClick={() => setActiveNav('#skill')} className={activeNav === "#skill" ? 'active' : ''}><VscTools/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === "#contact" ? 'active' : ''}><FaPhone/></a>
    </nav>
  )
}
