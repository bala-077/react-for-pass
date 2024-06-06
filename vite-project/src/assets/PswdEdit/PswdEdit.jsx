import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from '../PswdEdit/PswdEdit.module.css'
import { GoCopy } from "react-icons/go";

function EditPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const nav = useNavigate();
    const [formData, setFormData] = useState(location.state.data);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleClick = (e) => {
        nav('/generatepassword')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/update', { state: { updatedData: formData } });
    };

   

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className={styles.container}>
                    <div className={styles.contents}>
                        <div className={styles.details}>
                           
                            <label htmlFor="user">Username
                                <div className={styles.content}>
                                    <input type="text" name='username' value={formData.username} onChange={handleChange} />
                                </div>
                            </label>
                        </div>
                        <div className={styles.details}>
                            <label htmlFor="user">Password
                                <div className={styles.content}>
                                    <input type="text" name='password' value={formData.password} onChange={handleChange} />
                                </div>
                            </label>
                        </div>
                        <div className={styles.details}>
                            <label htmlFor="user">URL
                                <div className={styles.content}>
                                    <input type="text" name='url' value={formData.url} onChange={handleChange} />
                                </div>
                            </label>
                        </div>
                        <div className={styles.fav}>
                            <input type="checkbox" />
                            <span>Favorite</span>
                        </div>
                        <div className={styles.notes}>
                            <label htmlFor="notes">Notes
                                <div className="textbox"><textarea name="notes" id="notes" value={formData.notes} onChange={handleChange}></textarea></div>
                            </label>
                        </div>
                        <div className={styles.container1}>
                        <div className={styles.update}>
                            <button type='submit'>Update</button>
                        </div>
                        <div className={styles.generate}>
                                <button class="button" onClick={handleClick}>Generate Password</button>
                        </div>
                        </div>


                    </div>
                </div>
            </form>
        </>
    )
}
export default EditPage;