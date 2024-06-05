import React, { useState } from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { FaSquareXTwitter } from "react-icons/fa6";
import styles from '../Css/Login.module.css';
import { useNavigate } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";
import { TiLockClosed } from "react-icons/ti";
import { BsDisplay } from 'react-icons/bs';


function Login(){
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const navigate = useNavigate();
   
   const handleLogin =(event)=>{
    event.preventDefault();
    if(username === "kannan" && password === "1234"){
      navigate('/Data');
    }
    else if(username == '')
      {
        alert("Username is Empty")
      }
      else if(password == '')
        {
          alert('Password is Empty')
        }
        else{
          alert("Invalid Username OR Password")
        };
   }
  

  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <h1>Login</h1>
        </div>
        <div className={styles.inp}>
          <input type="text"  placeholder='Username' onChange={(e)=>setUsername(e.target.value)} required /><FaRegUser />
          
        </div>
        <div className={styles.pass}>
        <input type="password" value={password} placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)} required/><TiLockClosed />
       
        </div>
        <div className={styles.buton}>
          <button onClick={handleLogin}type='submit'>Login</button>
        </div>
        <div className='p'>Don't have an account?<a href='/'>Register</a></div>
        <div className={styles.link}>
        <a href='https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fdirect%2Finbox%2F%3F__coig_login%3D1'></a> 
        <FaInstagramSquare style={{width:"50px",height:"40px"}}/>    
         <a href='https://www.google.com/search?q=facebook+login&oq=face&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIGCAEQRRhAMgYIAhBFGDkyBggDEEUYPDIGCAQQRRg8MgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEIMTE0M2owajeoAgCwAgA&sourceid=chrome&ie=UTF-8'>
          </a> <ImFacebook2 style={{width:"50px",height:"40px"}} />
         <a href='https://x.com/?lang=en-in'>
          </a> <FaSquareXTwitter style={{width:"50px",height:"40px"}} />
        </div>

    </div>
  )
}
function sumit(username,password,url){
      
}

export default Login
