import React from 'react'
import {useNavigate} from 'react-router-dom'
import styles from '../Css/Data.module.css'
 
const passwords = [
  {
    id:1,
    name:'Twitter'
  },
  {
    id:2,
    name:'Meta'
  },
  {
    id:3,
    name:'indeed'
  },{
    id:4,
    name:'instagram'
    
  }
]
   function Data(){
    const navigate = useNavigate();
    const handleEdit = (id) =>{
      navigate(`/PassWordEdit/${id}`);
    }
  return (
    <>
    <div className={styles.head}>
      <h1>PASSWORD MANAGE</h1>
    </div>
    <div className={styles.container}>
      <div className={styles.pssw}>
      {passwords.map((item) =>( 
        <div key={item.id} onClick={() =>handleEdit(item.id)} className={styles.contents}><p>{item.name}</p></div>
      ))}
      </div>
    </div>
    </>
  )
}
export default Data;
