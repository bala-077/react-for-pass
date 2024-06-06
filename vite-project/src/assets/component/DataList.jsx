import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import styles from '../component/DataList.module.css'
 

   function PasswordList(){
    const passwords = [
  {
    id:1,
    name:'Instagram'
  },
  {
    id:2,
    name:'Linkedin'
  },
  {
    id:3,
    name:'Nakuri'
  }
]
    const navigate = useNavigate();
    const handleEdit = (id) =>{
      navigate('/edit-password ');
    }
    const nav =useNavigate();
    const handlego=()=>{
      nav('/generatepassword')
    }
  return (
    <>
    <div className={styles.header}>
      <h1>PASSWORD LIST</h1>
    </div>
    <div className={styles.container}>
      <div className={styles.divisons}>
      {passwords.map((item) =>(
        <div key={item.id}  onClick={() =>handleEdit(item.id)} className={styles.contents} ><p>{item.name}</p></div>
        
      ))}
      </div>
      <div className={styles.btn}>
        <button onClick={handlego}>GENERATE</button>
      </div>
    </div>

    </>
  )
}
export default PasswordList;