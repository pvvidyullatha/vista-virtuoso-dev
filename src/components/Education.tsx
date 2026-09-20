import React from 'react'
const Education: React.FC = () => (
  <section style={{ padding:'80px 32px' }}>
    <h2 style={{ fontSize:36 }}>Education</h2>
    <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:20, marginTop:32 }}>
      <div className="card"><h3>M.Tech - CSE (Web Technologies)</h3><p>2014-2017</p><p style={{ color:'#64748b' }}>Specialization in Web Technologies</p></div>
      <div className="card"><h3>B.Tech - CSE</h3><p>Pujya Shri Madavanji College, JNTUH</p><p>2010-2014</p></div>
    </div>
  </section>
)
export default Education
