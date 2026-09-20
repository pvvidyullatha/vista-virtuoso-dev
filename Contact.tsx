import React from 'react'

const Contact: React.FC = () => {
  return (
    <section id="contact" style={{ padding:'80px 32px', background:'#0F172A', color:'white' }}>
      <h2 style={{ fontSize:36 }}>Let's Build Something Great Together</h2>
      <p style={{ color:'#94a3b8', marginTop:12 }}>Have a project? I'd love to hear from you.</p>
      
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:32, marginTop:32 }}>
        <div>
          <p><strong>Email:</strong> pvvidyullatha1991@gmail.com</p>
          <p><strong>Phone:</strong> +91 7382448733</p>
          <p><strong>Location:</strong> Hyderabad, India</p>
          
          <div style={{ display:'flex', gap:12, marginTop:20 }}>
            <a href="mailto:pvvidyullatha1991@gmail.com" style={{ padding:'12px 20px', background:'#7C3AED', color:'white', borderRadius:8, textDecoration:'none' }}>Email Me Directly</a>
            <a href="https://wa.me/917382448733" target="_blank" style={{ padding:'12px 20px', background:'white', color:'#0F172A', borderRadius:8, textDecoration:'none' }}>WhatsApp</a>
          </div>
        </div>

        <form 
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const name = (form.elements.namedItem('name') as HTMLInputElement).value;
            const email = (form.elements.namedItem('email') as HTMLInputElement).value;
            const message = (form.elements.namedItem('message') as HTMLInputElement).value;
            window.location.href = `mailto:pvvidyullatha1991@gmail.com?subject=Project from ${name} (${email})&body=${encodeURIComponent(message)}`;
          }}
          style={{ display:'flex', flexDirection:'column', gap:12 }}
        >
          <input name="name" required placeholder="Your Name" style={{ padding:12, borderRadius:8, border:'none' }} />
          <input name="email" required type="email" placeholder="Your Email" style={{ padding:12, borderRadius:8, border:'none' }} />
          <textarea name="message" required placeholder="Tell me about your project..." rows={4} style={{ padding:12, borderRadius:8, border:'none' }}></textarea>
          <button type="submit" style={{ padding:12, background:'linear-gradient(135deg,#7C3AED,#06B6D4)', color:'white', borderRadius:8, border:'none', cursor:'pointer' }}>Send Email</button>
        </form>
      </div>
    </section>
  )
}
export default Contact
