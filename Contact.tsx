import React from 'react'

const Contact: React.FC = () => {
  return (
    <section id="contact" style={{ padding:'80px 32px', background:'#0F172A', color:'white' }}>
      <div style={{ maxWidth:1100, margin:'0 auto' }}>
        <h2 style={{ fontSize:36, fontWeight:700 }}>Let's Build Something Great Together</h2>
        <p style={{ color:'#94a3b8', marginTop:12, fontSize:18 }}>Have a website, frontend or digital design project? I'd love to hear from you.</p>
        
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:40, marginTop:40 }}>
          <div>
            <h3 style={{ fontSize:20, marginBottom:16 }}>Contact Information</h3>
            <div style={{ display:'flex', flexDirection:'column', gap:12, color:'#cbd5e1' }}>
              <p><strong style={{ color:'white' }}>Email:</strong> pvvidyullatha1991@gmail.com</p>
              <p><strong style={{ color:'white' }}>Phone:</strong> +91 7382448733</p>
              <p><strong style={{ color:'white' }}>Location:</strong> Hyderabad, Telangana, India</p>
              <p><strong style={{ color:'white' }}>Website:</strong> vydyaworks.online</p>
            </div>

            <div style={{ display:'flex', gap:12, marginTop:24 }}>
              <a href="mailto:pvvidyullatha1991@gmail.com" style={{ padding:'12px 20px', background:'linear-gradient(135deg,#7C3AED,#06B6D4)', color:'white', borderRadius:8, textDecoration:'none', fontWeight:600 }}>Email Me</a>
              <a href="https://wa.me/917382448733" target="_blank" rel="noreferrer" style={{ padding:'12px 20px', background:'white', color:'#0F172A', borderRadius:8, textDecoration:'none', fontWeight:600 }}>WhatsApp</a>
            </div>
          </div>

          <form 
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              const fd = new FormData(form);
              const name = fd.get('name') as string;
              const email = fd.get('email') as string;
              const message = fd.get('message') as string;
              const subject = `New Project Inquiry from ${name}`;
              const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(message)}`;
              window.location.href = `mailto:pvvidyullatha1991@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
            }}
            style={{ display:'flex', flexDirection:'column', gap:14, background:'rgba(255,255,255,0.05)', padding:24, borderRadius:16, border:'1px solid rgba(255,255,255,0.1)' }}
          >
            <input name="name" required placeholder="Your Name" style={{ padding:'12px 16px', borderRadius:8, border:'1px solid #334155', background:'#1e293b', color:'white', outline:'none' }} />
            <input name="email" required type="email" placeholder="Your Email" style={{ padding:'12px 16px', borderRadius:8, border:'1px solid #334155', background:'#1e293b', color:'white', outline:'none' }} />
            <textarea name="message" required placeholder="Tell me about your project..." rows={5} style={{ padding:'12px 16px', borderRadius:8, border:'1px solid #334155', background:'#1e293b', color:'white', outline:'none', resize:'none' }}></textarea>
            <button type="submit" style={{ padding:'14px', background:'linear-gradient(135deg,#7C3AED,#06B6D4)', color:'white', borderRadius:8, border:'none', cursor:'pointer', fontWeight:600, fontSize:16 }}>Send Message</button>
            <small style={{ color:'#94a3b8', textAlign:'center' }}>This will open your email app and send directly to me</small>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
