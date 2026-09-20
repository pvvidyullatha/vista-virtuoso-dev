import React, { useState } from 'react'

const Contact: React.FC = () => {
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data as any).toString()
      })
      setSent(true)
      form.reset()
    } catch {
      alert('Please email directly: pvvidyullatha1991@gmail.com')
    }
  }

  return (
    <section id="contact" style={{ padding:'80px 32px', background:'#0F172A', color:'white' }}>
      <h2 style={{ fontSize:36 }}>Let's Build Something Great Together</h2>
      <p style={{ color:'#94a3b8', marginTop:12 }}>Have a project? Email: pvvidyullatha1991@gmail.com | +91 7382448733</p>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:32, marginTop:32 }}>
        <div>
          <p>Email: pvvidyullatha1991@gmail.com</p>
          <p>Phone: +91 7382448733</p>
          <p>Location: Hyderabad, India</p>
          {sent && <p style={{ marginTop:20, background:'#16a34a', padding:12, borderRadius:8 }}>Message sent! I will reply soon.</p>}
        </div>
        <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:12 }}>
          <input type="hidden" name="form-name" value="contact" />
          <input name="name" required placeholder="Your Name" style={{ padding:12, borderRadius:8, border:'none' }} />
          <input name="email" required type="email" placeholder="Your Email" style={{ padding:12, borderRadius:8, border:'none' }} />
          <textarea name="message" required placeholder="Tell me about your project..." rows={4} style={{ padding:12, borderRadius:8, border:'none' }}></textarea>
          <button type="submit" style={{ padding:12, background:'linear-gradient(135deg,#7C3AED,#06B6D4)', color:'white', borderRadius:8, border:'none', cursor:'pointer' }}>Send Message</button>
        </form>
      </div>
    </section>
  )
}
export default Contact
