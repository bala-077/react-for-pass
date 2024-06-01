import React from 'react'
import {useNavigate} from 'react-router-dom'
import styles from '../css/DataList.module.css'
 
const passwords = [
  {
    id:1,
    name:'google'
  },
  {
    id:2,
    name:'chrome'
  },
  {
    id:3,
    name:'indeed'
  }
]
   function PasswordList(){
    const navigate = useNavigate();
    const handleEdit = (id) =>{
      navigate(`/edit-password/${id}`);
    }
  return (
    <>
    <div className={styles.header}>
      <h1>PASSWORD LIST</h1>
    </div>
    <div className={styles.container}>
      <div className={styles.divisons}>
      {passwords.map((item) =>(
        <div key={item.id} onClick={() =>handleEdit(item.id)} className={styles.contents}><p>{item.name}</p></div>
      ))}
      </div>
    </div>
    </>
  )
}
export default PasswordList;