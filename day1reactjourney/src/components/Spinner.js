import React,{useState} from 'react'
import logo from '../logo.svg';
export const Spinner = () => {
 const [tra, settra] = useState(false)
  return (
    <div className="App">
    
    <header className="App-header">
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"20px",}}>
    <button style={{padding:"15px 60px",borderRadius:"20px",fontSize:"20px",fontWieght:"600"}} onClick={()=>{
    
    settra(true)
  }}>Start Spin</button>
  <button style={{padding:"15px 60px",borderRadius:"20px",fontSize:"20px",fontWieght:"600"}} onClick={()=>settra(false)}>Stop Spin</button>
  </div>
      <img src={logo} className={tra?"App-logo active":"App-logo"} alt="logo" />
   
    </header>
  </div>
  )
}
