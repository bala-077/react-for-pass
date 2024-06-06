import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import style from '../component/EditPage.module.css'

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
                <div className={style.container}>
                    <div className={style.contents}>
                        <div className={style.details}>
                           
                            <label htmlFor="user">Username
                                <div className={style.content}>
                                    <input type="text" name='username' value={formData.username} onChange={handleChange} />
                                </div>
                            </label>
                        </div>
                        <div className={style.details}>
                            <label htmlFor="user">Password
                                <div className={style.content}>
                                    <input type="text" name='password' value={formData.password} onChange={handleChange} />
                                </div>
                            </label>
                        </div>
                        <div className={style.details}>
                            <label htmlFor="user">URL
                                <div className={style.content}>
                                    <input type="text" name='url' value={formData.url} onChange={handleChange} />
                                </div>
                            </label>
                        </div>
                        <div className={style.fav}>
                            <input type="checkbox" />
                            <span>Favorite</span>
                        </div>
                        <div className={style.notes}>
                            <label htmlFor="notes">Notes
                                <div className={style.textbox}><textarea name="notes" id="notes" value={formData.notes} onChange={handleChange}></textarea></div>
                            </label>
                        </div>
                        <div className={style.container1}>
                        <div className={style.update}>
                            <button type='submit'>Update</button>
                        </div>
                        <div className={style.generate}>
                                <button class="bttn" onClick={handleClick}>Generate Password</button>
                        </div>
                        </div>


                    </div>
                </div>
            </form>
        </>
    )
}
export default EditPage;
