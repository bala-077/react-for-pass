import React, { useState } from 'react'
// import image from '../assets/link.png'
import styles from '../URL/Url.module.css'
import {useNavigate} from 'react-router-dom'
import Link from '../assets/link.png'
const Component = () => {
  const [IpAddress, setIpAddress]=useState('');
  const navigate = useNavigate();
  const handleChange = (event) => {
    setIpAddress(event.target.value);
  }
  const handleSubmit = (event) =>{

    event.preventDefault();
    if(IpAddress.trim()===''){
      alert("Enter your url")
    }
    else{
      navigate('/login ')
    }
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
    <div className={styles.container}>
     <div className={styles.div1}>
      <div className={styles.cont1}>
      <h1>url links</h1>
      </div> 
        <div className={styles.div2}>

        <div className={styles.cont2}>
        <div className={styles.txt}>
        <p>Enter your Url and access through it</p>
        </div>
        <div className={styles.cont3}>
          
         {/* <img src={Link} alt="" className={styles.img}/> */}
          <input type="text"  value={IpAddress} onChange={handleChange} />
          <button className={styles.button1} type='submit' >next</button>
          
        </div>
      
      </div>
     </div>

      </div>
      </div>
      </form>
    </>
  )
}   

export default Component;