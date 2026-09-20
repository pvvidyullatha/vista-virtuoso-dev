import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.tsx'
import Hero from './components/Hero.tsx'
import About from './components/About.tsx'
import Skills from './components/Skills.tsx'
import Experience from './components/Experience.tsx'
import Projects from './components/Projects.tsx'
import Services from './components/Services.tsx'
import CreativeWork from './components/CreativeWork.tsx'
import Education from './components/Education.tsx'
import WhyWorkWithMe from './components/WhyWorkWithMe.tsx'
import Contact from './components/Contact.tsx'
import Footer from './components/Footer.tsx'
import NotFound from './pages/NotFound.tsx'

const HomePage: React.FC = () => (
  <>
    <Hero />
    <About />
    <Skills />
    <Experience />
    <Projects />
    <Services />
    <CreativeWork />
    <Education />
    <WhyWorkWithMe />
    <Contact />
  </>
)

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light'|'dark'>('light')
  
  useEffect(() => {
    const saved = localStorage.getItem('theme') as 'light'|'dark' | null
    if (saved) setTheme(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.documentElement.className = theme
  }, [theme])

  return (
    <BrowserRouter>
      <div className={theme}>
        <Navbar theme={theme} toggleTheme={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
