import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const NotFound: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div style={{ minHeight:'80vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:40, textAlign:'center' }}>
      <h1 style={{ fontSize:120, fontWeight:'bold', background:'linear-gradient(135deg,#7C3AED,#06B6D4)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>404</h1>
      <h2>Page Not Found</h2>
      <p style={{ color:'#64748b', maxWidth:400, marginTop:8 }}>The page you are looking for doesn't exist. Go back to portfolio.</p>
      <div style={{ display:'flex', gap:12, marginTop:24 }}>
        <button onClick={() => navigate(-1)} style={{ padding:'12px 24px', borderRadius:8, border:'1px solid #ddd', background:'white', cursor:'pointer' }}>Go Back</button>
        <Link to="/" style={{ padding:'12px 24px', borderRadius:8, background:'black', color:'white', textDecoration:'none' }}>Go Home</Link>
      </div>
    </div>
  )
}
export default NotFound
