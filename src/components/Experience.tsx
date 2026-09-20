import React from 'react'
const Experience: React.FC = () => (
  <section id="experience" style={{ padding:'80px 32px' }}>
    <h2 style={{ fontSize:36 }}>Professional Experience</h2>
    <div style={{ marginTop:32, borderLeft:'2px solid #e2e8f0', paddingLeft:24 }}>
      <div style={{ marginBottom:40 }}>
        <h3>Plasticon Technologies - UI / Frontend Developer</h3>
        <p style={{ color:'#7C3AED' }}>Sep 2017 - Dec 2021 | Hyderabad</p>
        <ul style={{ marginTop:8, color:'#475569' }}><li>Built dynamic responsive SPAs with React.js, JS, HTML5, CSS3, Bootstrap</li><li>Enterprise platforms, e-commerce, e-learning portals</li><li>REST API integration, dynamic data, bug fixes, accessibility</li></ul>
      </div>
      <div>
        <h3>Wipro Technologies - Senior Project Engineer</h3>
        <p style={{ color:'#7C3AED' }}>Dec 2021 - May 2022 | Hyderabad</p>
        <ul style={{ marginTop:8, color:'#475569' }}><li>Delivered UI/frontend for enterprise software</li><li>React.js and JavaScript ecosystem expertise</li></ul>
      </div>
    </div>
  </section>
)
export default Experience
