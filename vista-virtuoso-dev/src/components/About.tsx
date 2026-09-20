import React from 'react'
const About: React.FC = () => {
  return (
    <section id="about" style={{ padding:'80px 32px', background:'#f8fafc' }}>
      <h2 style={{ fontSize:36 }}>About Me</h2>
      <p style={{ marginTop:16, color:'#64748b', maxWidth:700, lineHeight:1.6 }}>
        I'm Vidyullatha, a passionate UI & Frontend Developer based in Hyderabad. I specialize in React.js, TypeScript, and modern frontend technologies.
        I build responsive, interactive websites for businesses and individuals.
      </p>
      <div style={{ display:'flex', gap:16, marginTop:24, flexWrap:'wrap' }}>
        <span style={{ padding:'8px 16px', background:'white', borderRadius:20, border:'1px solid #e2e8f0' }}>React.js</span>
        <span style={{ padding:'8px 16px', background:'white', borderRadius:20, border:'1px solid #e2e8f0' }}>TypeScript</span>
        <span style={{ padding:'8px 16px', background:'white', borderRadius:20, border:'1px solid #e2e8f0' }}>Tailwind</span>
        <span style={{ padding:'8px 16px', background:'white', borderRadius:20, border:'1px solid #e2e8f0' }}>UI/UX</span>
      </div>
    </section>
  )
}
export default About
