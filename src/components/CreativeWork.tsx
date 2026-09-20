import React from 'react'
const CreativeWork: React.FC = () => (
  <section style={{ padding:'80px 32px', background:'linear-gradient(135deg,#0F172A,#1e1b4b)', color:'white' }}>
    <h2 style={{ fontSize:36 }}>Beyond Code — Creative Design</h2>
    <p style={{ color:'#cbd5e1', marginTop:8 }}>Expanding into digital invitation cards, event designs and promotional graphics.</p>
    <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:16, marginTop:24 }}>
      {["Wedding Invitations","Birthday Invitations","Engagement","Corporate","Banners","Social Graphics"].map(i => (
        <div key={i} style={{ padding:24, borderRadius:16, background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.1)', textAlign:'center' }}>
          <p>{i}</p><small style={{ color:'#94a3b8' }}>Coming Soon</small>
        </div>
      ))}
    </div>
  </section>
)
export default CreativeWork
