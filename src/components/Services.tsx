import React from 'react'
const services = ["React.js Frontend Development","Website Development","UI Development & Design-to-Code","Responsive Web Design","Landing Pages","E-Commerce Frontend","API Integration","Website Maintenance & Bug Fixing","Digital Invitation & Banner Design"]
const Services: React.FC = () => (
  <section id="services" style={{ padding:'80px 32px' }}>
    <h2 style={{ fontSize:36 }}>How I Can Help Your Business</h2>
    <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))', gap:16, marginTop:32 }}>
      {services.map(s => <div key={s} className="card" style={{ borderTop:'3px solid #7C3AED' }}><h4>{s}</h4><p style={{ color:'#64748b', marginTop:8, fontSize:14 }}>Professional {s.toLowerCase()} services tailored to your needs.</p></div>)}
    </div>
  </section>
)
export default Services
