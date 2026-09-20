import React from 'react'
const Contact: React.FC = () => (
  <section id="contact" style={{ padding:'80px 32px' }}>
    <h2 style={{ fontSize:36 }}>Let's Build Something Great Together</h2>
    <p style={{ color:'#64748b' }}>Have a website, frontend or digital design project? I'd love to hear.</p>
    <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:32, marginTop:32 }}>
      <div>
        <p><strong>Email:</strong> pvvidyullatha1991@gmail.com</p>
        <p><strong>Phone:</strong> +91 7382448733</p>
        <p><strong>Location:</strong> Hyderabad, Telangana, India</p>
        <div style={{ display:'flex', gap:12, marginTop:16 }}>
          <a href="mailto:pvvidyullatha1991@gmail.com" style={{ padding:'10px 20px', background:'linear-gradient(135deg,#7C3AED,#06B6D4)', color:'white', borderRadius:8, textDecoration:'none' }}>Email Me</a>
          <a href="https://wa.me/917382448733" style={{ padding:'10px 20px', border:'1px solid #ddd', borderRadius:8, textDecoration:'none', color:'#0F172A' }}>WhatsApp</a>
        </div>
      </div>
      <form className="card" style={{ display:'flex', flexDirection:'column', gap:12 }}>
        <input placeholder="Name" style={{ padding:10, borderRadius:8, border:'1px solid #ddd' }} />
        <input placeholder="Email" style={{ padding:10, borderRadius:8, border:'1px solid #ddd' }} />
        <select style={{ padding:10, borderRadius:8, border:'1px solid #ddd' }}><option>Website Development</option><option>React.js Development</option><option>Landing Page</option><option>E-Commerce</option><option>UI Development</option><option>Maintenance</option><option>Digital Invitation</option><option>Other</option></select>
        <textarea placeholder="Message" rows={4} style={{ padding:10, borderRadius:8, border:'1px solid #ddd' }}></textarea>
        <button style={{ padding:'12px', background:'#0F172A', color:'white', borderRadius:8, border:'none', cursor:'pointer' }}>Send Message</button>
      </form>
    </div>
  </section>
)
export default Contact
