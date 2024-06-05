import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from '../css/EditPage.module.css';

function EditPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const { value, username, url, notes, password } = location.state || {};

    const [formData, setFormData] = useState({
        value : value || '' ,
        username: username || '',
        password: password || '',
        url: url || '',
        notes: notes || ''
    });
    console.log(value)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleClick = () => {
        navigate('/generatepassword');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/edit-page', { state: { u } });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.container}>
                <p>{formData.data}wekhdeh</p>
                <button onClick={handleClick}>Generate Password</button>
                <div className={styles.contents}>
                    <div className={styles.details}>
                        <label htmlFor="username">Username</label>
                        <div className={styles.content}>
                            <input type="text" name="username" value={formData.username} onChange={handleChange} />
                        </div>
                    </div>
                    <div className={styles.details}>
                        <label htmlFor="password">Password</label>
                        <div className={styles.content}>
                            <input type="password" name="password" value={formData.password} onChange={handleChange} />
                        </div>
                    </div>
                    <div className={styles.details}>
                        <label htmlFor="url">URL</label>
                        <div className={styles.content}>
                            <input type="text" name="url" value={formData.url} onChange={handleChange} />
                        </div>
                    </div>
                    <div className={styles.fav}>
                        <label>
                            <input type="checkbox" />
                            <span>Favorite</span>
                        </label>
                    </div>
                    <div className={styles.notes}>
                        <label htmlFor="notes">Notes</label>
                        <div className="textbox">
                            <textarea name="notes" value={formData.notes} onChange={handleChange}></textarea>
                        </div>
                    </div>
                    <div className={styles.button}>
                        <button type="submit">Update</button>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default EditPage;
