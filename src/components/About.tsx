import React from 'react'
const About: React.FC = () => (
  <section id="about" style={{ padding:'80px 32px' }}>
    <h2 style={{ fontSize:36 }}>About Me</h2>
    <p style={{ marginTop:16, maxWidth:800, color:'#475569' }}>UI/Frontend Developer with 4+ years at Plasticon Technologies and Senior Project Engineer at Wipro. I specialize in React.js, JavaScript, HTML5, CSS3, Bootstrap, Redux, REST APIs. I enjoy turning visual designs into functional websites and building my freelance career.</p>
    <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:16, marginTop:32 }}>
      <div className="card"><h3>4+ Years</h3><p>UI/Frontend Experience</p></div>
      <div className="card"><h3>React.js</h3><p>Specialist</p></div>
      <div className="card"><h3>3+ Domains</h3><p>Enterprise, E-commerce, E-learning</p></div>
      <div className="card"><h3>Freelance</h3><p>Open to Projects</p></div>
    </div>
  </section>
)
export default About
