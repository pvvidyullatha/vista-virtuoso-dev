import React from 'react'

const Hero: React.FC = () => {
  return (
    <section style={{ minHeight:'90vh', display:'flex', alignItems:'center', padding:'60px 32px', gap:40, flexWrap:'wrap' }}>
      <div style={{ flex:1, minWidth:300 }}>
        <h1 style={{ fontSize:'48px', lineHeight:1.1 }}>Hi, I'm Vidyullatha —<br/><span style={{ background:'linear-gradient(135deg,#7C3AED,#06B6D4)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>UI & Frontend Developer</span></h1>
        <p style={{ marginTop:20, color:'#64748b', fontSize:18, maxWidth:600 }}>I build responsive, interactive and user-friendly web experiences with React.js and modern frontend technologies. Available for freelance website development, frontend solutions and creative digital design projects.</p>
        <div style={{ display:'flex', gap:12, marginTop:24 }}>
          <a href="#projects" style={{ padding:'12px 24px', borderRadius:8, background:'#0F172A', color:'white', textDecoration:'none' }}>View My Work</a>
          <a href="#contact" style={{ padding:'12px 24px', borderRadius:8, background:'linear-gradient(135deg,#7C3AED,#06B6D4)', color:'white', textDecoration:'none' }}>Let's Work Together</a>
        </div>
        <button style={{ marginTop:16, padding:'10px 20px', borderRadius:8, border:'1px solid #ddd', background:'white', cursor:'pointer' }}>Download CV</button>
      </div>
      <div style={{ flex:1, minWidth:300, display:'flex', justifyContent:'center' }}>
        <div style={{ width:320, height:320, borderRadius:'32px', background:'linear-gradient(135deg,#7C3AED22,#06B6D422)', border:'2px solid #7C3AED30', display:'flex', alignItems:'center', justifyContent:'center', position:'relative' }}>
          <div style={{ position:'absolute', inset:-8, borderRadius:40, background:'linear-gradient(135deg,#7C3AED,#06B6D4)', opacity:0.15, filter:'blur(20px)' }}></div>
          <span style={{ color:'#7C3AED', fontWeight:600 }}>Professional Photo<br/>Placeholder</span>
        </div>
      </div>
    </section>
  )
}
export default Hero
