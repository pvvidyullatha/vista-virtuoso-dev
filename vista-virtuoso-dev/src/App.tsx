import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div>
      <nav style={{ padding:'16px 32px', display:'flex', justifyContent:'space-between', alignItems:'center', position:'sticky', top:0, background:'rgba(255,255,255,0.9)', backdropFilter:'blur(10px)', zIndex:10, borderBottom:'1px solid #f1f5f9' }}>
        <strong style={{ fontSize:20 }}>VydyaWorks</strong>
        <div style={{ display:'flex', gap:24 }}>
          <a href="#about" style={{ textDecoration:'none', color:'#0F172A' }}>About</a>
          <a href="#projects" style={{ textDecoration:'none', color:'#0F172A' }}>Projects</a>
          <a href="#contact" style={{ textDecoration:'none', color:'#0F172A' }}>Contact</a>
        </div>
      </nav>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer style={{ padding:'32px', textAlign:'center', borderTop:'1px solid #f1f5f9', color:'#64748b' }}>
        © 2026 Vidyullatha | vydyaworks.online
      </footer>
    </div>
  )
}

export default App
