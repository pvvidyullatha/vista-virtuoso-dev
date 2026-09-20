import React from 'react'
const Projects: React.FC = () => (
  <section id="projects" style={{ padding:'80px 32px', background:'#f8fafc' }}>
    <h2 style={{ fontSize:36 }}>Projects / Portfolio</h2>
    <p style={{ color:'#64748b' }}>Professional Experience Projects</p>
    <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:20, marginTop:32 }}>
      <div className="card"><h3>Enterprise Survey & Module Manager</h3><p style={{ color:'#7C3AED' }}>React.js, Bootstrap, REST APIs</p><p style={{ marginTop:8, color:'#475569' }}>Core UI from scratch, dynamic survey forms, multi-level approval, accessibility.</p></div>
      <div className="card"><h3>Toll Clothing - E-Commerce</h3><p style={{ color:'#7C3AED' }}>React.js, Redux, AJAX, JSON</p><p style={{ marginTop:8, color:'#475569' }}>Responsive catalog, filtering, time-slot features, checkout improvements.</p></div>
      <div className="card"><h3>Online Exam & Quiz Portal</h3><p style={{ color:'#7C3AED' }}>React.js, JSON, REST APIs</p><p style={{ marginTop:8, color:'#475569' }}>Timed exam, distraction-free UI, auto submission, dynamic retrieval.</p></div>
    </div>
  </section>
)
export default Projects
