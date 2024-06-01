import './Login.css';
import { FaUser,FaLock} from "react-icons/fa";
import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';


const LoginPage=()=>{
  const[username,setUsername]=useState('')
  const[password,setPassword]=useState('')
  const navigate=useNavigate();



const handleLogin=(event)=>{
  event.preventDefault();
  if (username==='vicky'&& password==='80980'){
    navigate('/edit-password/:id')
  }else{
    alert('Invalid credentials')
  }
};

return (
  <div className="login-wrapper">
  <div className="wrapper">
      <form onSubmit={handleLogin}>
          <h1>Login</h1>
          <div className="input-box">
              <input type="text" placeholder='user name' 
              value={username} onChange={(e)=>setUsername(e.target.value)} />
              <FaUser className='icon-1' />
          </div>
          <div className="input-box">
              <input type="password" placeholder='password'
               value={password} onChange={(e)=>setPassword(e.target.value)}/>
              <FaLock className='icon-2' />

          </div>
          
          <button type="submit">Login</button>
      

      </form>
  </div>  
  </div>  
)

}
export default  LoginPage;
    

