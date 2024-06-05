import React from 'react'
import { useState } from 'react';
import styles from '../Css/EditPage.module.css'
import { useNavigate,useLocation } from 'react-router-dom';




function EditPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const nav = useNavigate();
    const [formData, setFormData] = useState(location.state.data);

    
    const handleChange = (e) => {                                     
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleClick = (e)=>{
        e.preventDefault();
        nav('/GeneratePassword')
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/updatePage', { state: { updateData: formData }});
    }


  return (
  
    <div className={styles.slide}>
            <div className={styles.over}>
            <form onSubmit={handleSubmit} >
                      <div className={styles.detail}>
                    
                   <label htmlFor="user">  Username </label>
                        <div className={styles.int}>
                            <input type="text" name='username' value={formData.username}onChange={handleChange} />
                          
                        </div>
                        </div>

                        <div className={styles.detail}>
                   <label htmlFor="text"> password  </label>
                        <div className={styles.int}>
                            <input type="text" name="password" value={formData.password}onChange={handleChange}/>
                         
                            
                        </div>
                        </div>
                        <div className={styles.detail}>
                   <label htmlFor="text"> URL </label>
                        <div className={styles.int}>
                            <input type="text" name="url"value={formData.url}onChange={handleChange} />
                           
                        </div>
                        </div>
                        <div className={styles.favourite}>
                            <input type="checkbox" />
                            <span>Favourite</span>
                        </div>
                        <div className={styles.note}>
                            <label htmlFor="notes">Notes</label>
                            <div className="text">
                            <textarea name="notes" value={formData.notes}onChange={handleChange}  ></textarea>
                            </div>
                        </div>
                        <div className={styles.bttn}>
                                <button>UPDATE</button>
                            </div>
                           <button className={styles.Btn} onClick={handleClick}>Generator password</button>
                  
                           </form>      
            </div>
        </div>
       
  );
}

export default EditPage;
