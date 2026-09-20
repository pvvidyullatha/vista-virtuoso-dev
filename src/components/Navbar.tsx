import React from 'react'
import { Link } from 'react-router-dom'

interface Props { theme: 'light'|'dark'; toggleTheme: () => void }

const Navbar: React.FC<Props> = ({ theme, toggleTheme }) => {
  return (
    <nav style={{ position:'sticky', top:0, zIndex:50, display:'flex', justifyContent:'space-between', alignItems:'center', padding:'16px 32px', backdropFilter:'blur(12px)', background: theme==='dark' ? 'rgba(15,23,42,0.8)' : 'rgba(248,250,252,0.8)', borderBottom:'1px solid #e2e8f0' }}>
      <Link to="/" style={{ fontWeight:'bold', textDecoration:'none', color: theme==='dark' ? 'white' : '#0F172A', fontSize:18 }}>Vidyullatha</Link>
      <div style={{ display:'flex', gap:20, alignItems:'center' }}>
        <a href="#about" style={{ textDecoration:'none', color:'inherit' }}>About</a>
        <a href="#skills" style={{ textDecoration:'none', color:'inherit' }}>Skills</a>
        <a href="#projects" style={{ textDecoration:'none', color:'inherit' }}>Projects</a>
        <a href="#services" style={{ textDecoration:'none', color:'inherit' }}>Services</a>
        <button onClick={toggleTheme} style={{ padding:'6px 12px', borderRadius:20, border:'1px solid #ddd', cursor:'pointer' }}>{theme==='dark' ? '☀️' : '🌙'}</button>
        <a href="#contact" style={{ padding:'10px 20px', borderRadius:8, background:'linear-gradient(135deg,#7C3AED,#06B6D4)', color:'white', textDecoration:'none' }}>Let's Work Together</a>
      </div>
    </nav>
  )
}
export default Navbar
