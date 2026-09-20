import React from 'react'
const skills = {
  "Frontend Technologies": ["React.js", "JavaScript ES6+", "HTML5", "CSS3", "Bootstrap", "JSX"],
  "UI / Web Development": ["Responsive Design", "SPA", "Component Architecture", "Virtual DOM", "Design-to-Code", "a11y"],
  "State & Data": ["Redux", "JSON", "AJAX", "REST APIs", "Node.js"],
  "Tools": ["Git", "GitHub", "VS Code", "Visual Studio"]
}
const Skills: React.FC = () => (
  <section id="skills" style={{ padding:'80px 32px', background:'#f1f5f9' }}>
    <h2 style={{ fontSize:36 }}>Skills & Expertise</h2>
    <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))', gap:20, marginTop:32 }}>
      {Object.entries(skills).map(([cat, list]) => (
        <div key={cat} className="card">
          <h3 style={{ color:'#7C3AED' }}>{cat}</h3>
          <div style={{ display:'flex', flexWrap:'wrap', gap:8, marginTop:12 }}>
            {list.map(s => <span key={s} style={{ padding:'6px 12px', borderRadius:20, background:'#ede9fe', color:'#6d28d9', fontSize:12 }}>{s}</span>)}
          </div>
        </div>
      ))}
    </div>
  </section>
)
export default Skills
