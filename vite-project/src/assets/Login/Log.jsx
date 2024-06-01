import React, { useState } from 'react'
import { CiUser } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";

import styles from '../Login/Log.module.css'
import { useNavigate } from 'react-router-dom';

 const Log = () => {
    const[username,setusername]=useState('')
    const[password,setpassword]=useState('')
    const navigate=useNavigate()

    const handleLogin = (event) =>{
        event.preventDefault();
        if (username === "username" && password === "12345"){
            navigate('/Datamodels');
        }
        else{
            alert("Invalid Username OR Password");
        };
    }


  return (
    <>
    <div className={styles.divison}>
    <div className={styles.container}>
        <div className={styles.container1}>
            <div className="login">
                <h1>Login</h1></div>
            </div>
            <form onSubmit={handleLogin}>
            <div className={styles.container2}>
                <input type="text" placeholder='username' onChange={(e)=>setusername(e.target.value)}/><CiUser  className={styles.icon}/>
            </div>
            <div className={styles.container2}>
                <input type="text" placeholder='password'  onChange={(e)=>setpassword(e.target.value)}/><CiLock className={styles.icon} />
            </div>
             <div className={styles.container3}>
                <label><input type="checkbox" className='check' />Remember me</label>
                <a href="x">forget password</a>
            </div>
              <div className={styles.button}>
              <button>Login</button>
              </div>

              
            <div className={styles.container4}>
                <p>Don't have an account?</p>
                <a href="y">Register</a>
            </div>
 
            <p className={styles.signup}>Or signup Using</p>
             <div className={styles.container5}> 
             <a href="https://www.facebook.com"><FaFacebook className={styles.fb} /></a>
             <a href="https://twitter.com/?lang=en-in"> <AiFillTwitterCircle className={styles.twitt} /></a> 
             <a href="https://www.instagram.com/"><RiInstagramFill className={styles.insta} /></a> 
            </div> 
            </form>
        </div>
        </div>
    </>
  )
}

export default Log;
