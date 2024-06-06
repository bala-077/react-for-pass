import React from 'react'
import styles from '../Datamodel/Pswd.module.css'
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
function PasswordList() {
    const list=[{
        id:1,
        name:"insta"
    },
    {
        id:2,
        name:"twitter"
        
    },
    {
        id:3,
        name:"Google"
    },
    {
        id:4,
        name:"Facebook"
    }
   ] 
    const navigate=useNavigate()
    const handlepage = (id) =>{
        navigate(`/Editpassword/${id}`)
    
    }
    const nav = useNavigate();
    const handlego=()=>{
        nav(`/generatepassword`)
    }
  return (
    <>
    <div className={styles.container}>
        <div className={styles.pd1}>
            <h1>PasswordList<RiLockPasswordFill className={styles.lock} /></h1>
        </div>
        <div className={styles.contents}>
        <div className={styles.container1}>
        <ul>
            {list.map((item)=>(
                <li key={item.id} onClick={() => handlepage(item.id)}>{item.name} </li>
            ))}
           
        </ul>
        <div className={styles.gpl}>
        <button onClick={handlego}>generatepassword</button>
        </div>


        </div>
        </div>
    </div>
    </>
  )
}


export default PasswordList;
