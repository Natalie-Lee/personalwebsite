import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

const headerSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/natalie-lee-cmu/"><BsLinkedin/></a>
        <a href="https://github.com/Natalie-Lee"><BsGithub/></a>
    </div>
  )
}

export default headerSocials