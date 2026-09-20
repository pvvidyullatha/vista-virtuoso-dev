import React from 'react'

const Hero: React.FC = () => {
  return (
    <section style={{ minHeight:'90vh', display:'flex', alignItems:'center', padding:'60px 32px', gap:40, flexWrap:'wrap' }}>
      <div style={{ flex:1, minWidth:300 }}>
        <h1 style={{ fontSize:'48px', lineHeight:1.1 }}>Hi, I'm Vidyullatha —<br/><span style={{ background:'linear-gradient(135deg,#7C3AED,#06B6D4)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>UI & Frontend Developer</span></h1>
        <p style={{ marginTop:20, color:'#64748b', fontSize:18, maxWidth:600 }}>I build responsive, interactive and user-friendly web experiences with React.js and modern frontend technologies. Available for freelance website development, frontend solutions and creative digital design projects.</p>
        <div style={{ display:'flex', gap:12, marginTop:24 }}>
          <a href="#projects" style={{ padding:'12px 24px', borderRadius:8, background:'#0F172A', color:'white', textDecoration:'none' }}>View My Work</a>
          <a href="#contact" style={{ padding:'12px 24px', borderRadius:8, background:'linear-gradient(135deg,#7C3AED,#06B6D4)', color:'white', textDecoration:'none' }}>Let's Work Together</a>
        </div>
      </div>
      <div style={{ flex:1, minWidth:300, display:'flex', justifyContent:'center' }}>
        <div style={{ width:340, height:340, borderRadius:'32px', overflow:'hidden', border:'2px solid #7C3AED30', position:'relative', background:'linear-gradient(135deg,#7C3AED22,#06B6D422)' }}>
          {/* Photo from public folder - WILL NOT BREAK BUILD */}
          <img 
            src="/vidyullatha-profile.jpg" 
            alt="Vidyullatha" 
            style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const parent = target.parentElement;
              if(parent){
                const fallback = document.createElement('div');
                fallback.innerHTML = '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;flex-direction:column;background:linear-gradient(135deg,#7C3AED22,#06B6D422)"><div style="width:80px;height:80px;border-radius:50%;background:linear-gradient(135deg,#7C3AED,#06B6D4);display:flex;align-items:center;justify-content:center;font-size:32px;color:white;margin-bottom:12px">VP</div><span style="color:#7C3AED;font-weight:600;font-size:14px;text-align:center">Add photo as<br/>public/vidyullatha-profile.jpg</span></div>';
                parent.appendChild(fallback);
              }
            }}
          />
        </div>
      </div>
    </section>
  )
}
export default Hero
