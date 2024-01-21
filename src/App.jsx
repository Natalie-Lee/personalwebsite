import React from 'react'
import { Header } from './components/header/Header'
import { Nav } from './components/nav/Nav'
import { About } from './components/about/About'
import { Experience } from './components/experience/Experience'
import { Education } from './components/education/Education'
import { Skill } from './components/skill/Skill'
import { Portfolio } from './components/portfolio/Portfolio'
import { Contact } from './components/contact/Contact'
import { Footer } from './components/footer/Footer'
import { Testimonials } from './components/testimonials/Testimonials'


const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Education />
        <Portfolio />
        <Skill />
        <Contact />
        <Footer />
    </>
  )
}


export default App