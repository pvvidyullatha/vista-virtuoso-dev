import React from 'react'
const WhyWorkWithMe: React.FC = () => (
  <section style={{ padding:'80px 32px', background:'#f1f5f9' }}>
    <h2 style={{ fontSize:36 }}>Why Work With Me</h2>
    <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))', gap:16, marginTop:32 }}>
      <div className="card"><h4>Professional Experience</h4><p>Enterprise, e-commerce, e-learning interfaces.</p></div>
      <div className="card"><h4>React Expertise</h4><p>Strong practical experience with modern frontend.</p></div>
      <div className="card"><h4>Responsive First</h4><p>Desktop, tablet, mobile optimized.</p></div>
      <div className="card"><h4>Problem Solver</h4><p>Debugging, accessibility, frontend challenges.</p></div>
      <div className="card"><h4>Client-Focused</h4><p>Understanding requirements, user-friendly solutions.</p></div>
      <div className="card"><h4>Continuous Learner</h4><p>Improving technical and creative skills.</p></div>
    </div>
    <div style={{ textAlign:'center', marginTop:32 }}><a href="#contact" style={{ padding:'12px 24px', background:'#0F172A', color:'white', borderRadius:8, textDecoration:'none' }}>Have a website idea? Let's build it together.</a></div>
  </section>
)
export default WhyWorkWithMe
