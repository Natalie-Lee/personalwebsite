import React from 'react'
import CV from '../../assets/Resume_Natalie_Lee.pdf'
import { IoDownloadOutline } from "react-icons/io5";

export const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download>Download CV<IoDownloadOutline/></a>
    </div>
  )
}
