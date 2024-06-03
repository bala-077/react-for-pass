import React, { useState } from 'react'
import styles from '../component/PasswordEdit.module.css'
// import { IoIosCopy } from "react-icons/io";
import {useNavigate} from 'react-router-dom';


function CopyClipBoard  () {
    const [UserName ,setUserName] = useState('zara');
    const [Password,setPassword] = useState('zara@123');
    const [Url,setUrl] = useState('http://sample.com');
    const [notes ,setNotes] = useState('write something');
    const navigate = useNavigate();

const huge = (event) =>{
    setUserName(event.target.value);
    setPassword(event.target.value)
    setUrl(event.target.value)
    navigate('/EditPass')
}

const copy =() =>{
    navigator.clipboard.writeText(UserName).then(() =>{
        console.log('text copy to clipboard');
    },
    (err) =>{
        console.error('failed to copy text',err);
    }
);
};
const copy1 =() =>{
    navigator.clipboard.writeText(Password).then(() =>{
        console.log('text copy to clipboard');
    },
    (err) =>{
        console.error('failed to copy text',err);
    }
);
};
const copy2 =() =>{
    navigator.clipboard.writeText(Url).then(() =>{
        console.log('text copy to clipboard');
    },
    (err) =>{
        console.error('failed to copy text',err);
    }
);
};

  return (
    
      <div className={styles.container}>
        <div className={styles.cont}>
            <div className={styles.header}>
                <h1>PASSWORD EDIT</h1>
             
                    <div className={styles.details}>
                        <label htmlFor='user'>USERNAME:</label>
                        <div className={styles.intxt}>
                            <input type='text' readOnly value={UserName} onChange={huge}/>
                            {/* <IoIosCopy OnClick={copy}/> */}
                            </div></div>
                        
                        <div className={styles.details}>
                            <label htmlFor='user'>PASSWORD:</label>
                            <div className={styles.intxt}>
                                <input type='number' readOnly value={Password} onChange={huge}/>
                                {/* <IoIosCopy OnClick={copy1}/> */}
                                </div></div>

                        <div className={styles.details}>
                            <label htmlFor='user'>URL:</label>
                            <div className={styles.intxt}>
                                <input type='text' readOnly value={Url} onCanPlay={huge}/>
                                {/* <IoIosCopy OnClick={copy2}/> */}
                                </div></div>

                            <div className={styles.fav}>
                                <input type="checkbox" />
                                <span>favourite</span>

                                <div className={styles.note}>
                                    <label htmlFor='user'>NOTE:</label>
                                    <div className='text'>
                                    <textarea name='textbox' id='note' value={notes} readOnly></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.btn}>
                               <button onClick={huge}>EDIT</button></div>
                                </div>
                            </div>
                         </div>
                    
              

  )
}

export default CopyClipBoard
