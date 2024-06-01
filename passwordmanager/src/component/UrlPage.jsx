import React, { useState } from 'react'
import Lock from '../assets/padlock.png'
import link from '../assets/link.png'
import styles from '../css/Urlpage.module.css'
import { useNavigate } from 'react-router-dom'
import { IoCopyOutline } from "react-icons/io5";
// import '../css/Urlpage.css'


    const MyComponent = () =>{
        const [IpAddress, setIpAddress] = useState('');
        const navigate = useNavigate(); 
        const hanleChange = (event) =>{
            setIpAddress(event.target.value);
        };
        const handleSubmit = (event) =>{
           
            event.preventDefault();
            if(IpAddress.trim() === ''){
                alert("Enter Your Url")
            }
            else{
                navigate('/login')
            }
        }
  return (
    <>
    <form onSubmit={handleSubmit}>
    <div className={styles.division}>
    <div className={styles.header}>
        <h1>PASSWORD MANAGER</h1>
    </div>
        <div className={styles.subdivision}>
            <div className={styles.container

            }>
                <div className={styles.contents}>
                    <div className={styles.images}>
                        <img src={Lock} alt="" />
                    </div>
                    <div className={styles.urlfield}>
                        <div className={styles.inputs}>
                            <img src={link} alt="" />
                            <input type="text"  value={IpAddress} onChange={hanleChange}/>
                            <button type='submit'>GO</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </form>

    </>
  )
}
export default MyComponent;