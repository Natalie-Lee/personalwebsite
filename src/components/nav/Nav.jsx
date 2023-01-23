import React from 'react'
import './nav.css'
import { AiTwotoneHome } from 'react-icons/ai'
import { SiAboutdotme } from 'react-icons/si'
import { AiOutlineUser } from 'react-icons/ai'
import { MdOutlineWork } from 'react-icons/md'
import { FaHeartbeat } from 'react-icons/fa'
import { AiOutlineContacts } from 'react-icons/ai'
import { useState } from 'react'

export const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === "#" ? 'active' : ''}><AiTwotoneHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? 'active' : ''}><SiAboutdotme/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === "#experience" ? 'active' : ''}><MdOutlineWork/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === "#portfolio" ? 'active' : ''}><FaHeartbeat/></a>
      <a href="#testimonials" onClick={() => setActiveNav('#testimonials')} className={activeNav === "#testimonials" ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === "#contact" ? 'active' : ''}><AiOutlineContacts/></a>
    </nav>
  )
}
