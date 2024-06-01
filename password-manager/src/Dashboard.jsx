import { useState } from "react"
import "./App.css"
import Icon from './assets/lock.png'
import { useNavigate} from 'react-router-dom'
import { FaLink } from "react-icons/fa6";


//export default function Dashboard () {
  const Mycomponent=()=>{
    const [ipAddress,setipAddress]=useState('')
    const navigate=useNavigate();
    const handleChange=(event)=>{
    setipAddress(event.target.value);

  };
  const handlesubmit=(event)=>{
      event.preventDefault();
       if (ipAddress.trim()===''){
       alert("enter your url")
  }
  else{
    navigate("/login")
  }
}
  return (
    <>
    
    <div className="container">
      <div className="nav-container">
        
         <nav className="nav">
         <img src={Icon}alt="icon" />
           <h1>Blinkz.info</h1>
           </nav>
           <form  onSubmit={handlesubmit} className="form" >
           <div className="url-text">
            
           <input type="text" placeholder="Enter your url code" value={ipAddress} onChange={handleChange}/>
           <FaLink className="linkurl"/> 
           
           <button  type="submit">GET</button>
          
           </div>
           </form>
         </div>
    </div>
    

    </>  
  )
}
export default Mycomponent;