import { useState } from "react"
import "./App.css"
import Icon from './assets/lock.png'
import { useNavigate} from 'react-router-dom'
import { FaLink } from "react-icons/fa6";


//export default function Dashboard () {
  const MyComponent = () => {
    const [IpAddress, setIpAddress] = useState('');
    const navigate = useNavigate();

    const Handlenext = () => {
        navigate('/login', { state: { IpAddress } });
    }
  return (
    <>
    <form onSubmit={Handlenext}>
    <div className="container">
      <div className="nav-container">
        
         <nav className="nav">
         <img src={Icon}alt="icon" />
           <h1>Blinkz.info</h1>
           </nav>
           f
           <div className="url-text">
            
           <input type="text" placeholder="Enter your url code" value={IpAddress} onChange={(e)=>setIpAddress(e.target.value)}/>
           <FaLink className="linkurl"/> 
           
           <button className="Btn-get" type="submit" onClick={Handlenext}>GO</button>
          
           </div>
          
         </div>
    </div>
    </form>

    </>  
  )
}
export default MyComponent;