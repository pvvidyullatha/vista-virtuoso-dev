import React, { useState } from 'react'

const Contact: React.FC = () => {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    
    // For Netlify Forms - this will work on vydyaworks.online
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data as any).toString()
      })
      setStatus('Message sent! I will reply soon.')
      form.reset()
    } catch {
      setStatus('Failed to send. Please email directly.')
    }
  }

  return (
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
            <a href="https://wa.me/917382448733" target="_blank" rel="noreferrer" style={{ padding:'10px 20px', border:'1px solid #ddd', borderRadius:8, textDecoration:'none', color:'#0F172A' }}>WhatsApp</a>
          </div>
          {status && <p style={{ marginTop:20, padding:12, background:'#dcfce7', borderRadius:8, color:'#166534' }}>{status}</p>}
        </div>

        {/* Netlify Form - WORKS on vydyaworks.online */}
        <form 
          name="contact" 
          method="POST" 
          data-netlify="true" 
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="card" 
          style={{ display:'flex', flexDirection:'column', gap:12 }}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p style={{ display:'none' }}><label>Don't fill this out: <input name="bot-field" /></label></p>
          
          <input name="name" required placeholder="Your Name" style={{ padding:10, borderRadius:8, border:'1px solid #ddd' }} />
          <input name="email" required type="email" placeholder="Your Email" style={{ padding:10, borderRadius:8, border:'1px solid #ddd' }} />
          <select name="projectType" style={{ padding:10, borderRadius:8, border:'1px solid #ddd' }}>
            <option>Website Development</option>
            <option>React.js Development</option>
            <option>Landing Page</option>
            <option>E-Commerce</option>
            <option>UI Development</option>
            <option>Maintenance</option>
            <option>Digital Invitation</option>
            <option>Other</option>
          </select>
          <textarea name="message" required placeholder="Tell me about your project..." rows={4} style={{ padding:10, borderRadius:8, border:'1px solid #ddd' }}></textarea>
          <button type="submit" style={{ padding:'12px', background:'#0F172A', color:'white', borderRadius:8, border:'none', cursor:'pointer' }}>Send Message</button>
          <small style={{ color:'#64748b' }}>This will email you via Netlify. Check Netlify Dashboard → Forms after first submission.</small>
        </form>
      </div>
    </section>
  )
}
export default Contact
