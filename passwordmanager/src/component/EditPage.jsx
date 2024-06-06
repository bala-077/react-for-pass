import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from '../css/EditPage.module.css';
import { BsEye } from "react-icons/bs";
import { AiOutlineEyeInvisible } from "react-icons/ai";

function EditPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const addressUrl = useLocation();
    const {address} = addressUrl.state || {};
    const { usertitle, username, url, notes, password } = location.state || {};
    console.log("address",address)

    const [formData, setFormData] = useState({
        address: address,
        usertitle: usertitle || '',
        username: username || '',
        password: password || '',
        url: url || '',
        notes: notes || ''
    });

    const [showPassword, setShowPassword] = useState(false);

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
        navigate('/edit', { state: { formData } });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(prevShowPassword => !prevShowPassword);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.container}>
                <div className={styles.contents}>
                    <div className={styles.button1}>
                        <button type="button" onClick={handleClick}>Generate Password</button>
                    </div>
                    <p>{formData.usertitle}</p>
                    <div className={styles.details}>
                        <label htmlFor="username">Username</label>
                        <div className={styles.content}>
                            <input type="text" name="username" value={formData.username} onChange={handleChange} />
                        </div>
                    </div>
                    <div className={styles.details}>
                        <label htmlFor="password">Password</label>
                        <div className={styles.content}>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            <div type="button" className={styles.click} onClick={togglePasswordVisibility}>
                                {showPassword ? <AiOutlineEyeInvisible /> : <BsEye />}
                            </div>
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

function Handlepage(url,Updateusername,Updatepassword,Updateurl,Updatenotes){

}
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Cookie", "full_name=Guest; sid=Guest; system_user=no; user_id=Guest; user_image=");

const raw = JSON.stringify({
  "data": {
    "User Name": Updateusername,
    "Password": Updatepassword,
    "URL": Updateurl,
    "Notes": Updatenotes
  }
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch(`http://${url}/api/method/jinpass.jinpass.api.edit_password`, requestOptions)
  .then((response) => response.text())
  .then((result) => {return result})
  .catch((error) => console.error(error));