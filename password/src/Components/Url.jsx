import React, { useState } from 'react'
import styles from '../Css/Url.module.css';
import { FaLink } from "react-icons/fa6";


import {useNavigate} from "react-router-dom"

const Url=()=>{
    const[ipAddress,setipAddress] =useState('')
    const navigate=useNavigate();
    const handleChange=(event)=>{
    setipAddress(event.target.value)
    };

    const handlesubmit=(event)=>{
        event.preventDefault();
        if(ipAddress.trim()===''){
            alert("enter your Url")
        }
        else{
            navigate('/Login')
        }
    }

    return (
       <>
       <div className={styles.container} >
        <div className={styles.navbox}>
            <nav>
                <h1>URL</h1>
            </nav>
            <form >
                <div className={styles.urltext}>
                <input type="text" placeholder='Enter your Url code' value={ipAddress} onChange={handleChange} />

                <FaLink />

            <button onClick={handlesubmit}type='submit'>Get</button>
                </div>
            </form>

        </div>
       </div>
       
       
       </>
      )
}

export default Url
