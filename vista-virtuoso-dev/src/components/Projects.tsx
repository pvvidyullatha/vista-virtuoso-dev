import React from 'react'
const Projects: React.FC = () => {
  return (
    <section id="projects" style={{ padding:'80px 32px' }}>
      <h2 style={{ fontSize:36 }}>Featured Projects</h2>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap:24, marginTop:32 }}>
        <div style={{ padding:24, border:'1px solid #e2e8f0', borderRadius:16 }}>
          <h3>Business Websites</h3>
          <p style={{ color:'#64748b', marginTop:8 }}>Responsive websites for local businesses</p>
        </div>
        <div style={{ padding:24, border:'1px solid #e2e8f0', borderRadius:16 }}>
          <h3>React Dashboards</h3>
          <p style={{ color:'#64748b', marginTop:8 }}>Interactive admin panels with React.js</p>
        </div>
        <div style={{ padding:24, border:'1px solid #e2e8f0', borderRadius:16 }}>
          <h3>Digital Invitations</h3>
          <p style={{ color:'#64748b', marginTop:8 }}>Creative wedding & event invitations</p>
        </div>
      </div>
    </section>
  )
}
export default Projects
