import React from 'react'
import styles from '../Datamodel/Pswd.module.css'
const PasswordList = () => {
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
  return (
    <>
    <div className={styles.container}>
        <div className={styles.pd1}>
            <h1>PasswordList</h1>
        </div>
        <div className={styles.container1}>
        <ul>
            {list.map((item)=>(
                <li key={item.id}>{item.name} </li>
            ))}
        </ul>
        </div>

    </div>
    </>
  )
}

export default PasswordList
