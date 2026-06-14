import React from 'react'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const skillsRef = React.useRef(null);
  return (
    <div className="overflow-x-hidden w-full">
      <Preloader />
      <Navbar />
      <Hero />
      <About skillsRef={skillsRef} />
      <Skills sectionRef={skillsRef} />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
