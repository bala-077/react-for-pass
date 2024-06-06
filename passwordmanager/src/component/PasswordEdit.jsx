import React, { useState, useEffect } from 'react';
import { IoCopyOutline } from "react-icons/io5";
import styles from '../css/PasswordEdit.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { BsEye } from "react-icons/bs";
import { AiOutlineEyeInvisible } from "react-icons/ai";

function PasswordManager() {
    const location = useLocation();
    const { address, selectedItem } = location.state || {};
    console.log("value",address,selectedItem)

    const [selectedPassword, setSelectedPassword] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    console.log('Before')
    useEffect(() => {
        console.log('Start')
        const fetchPasswordDetails = async () => {
            console.log("Success")
            try {
                const myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                myHeaders.append("Cookie", "full_name=Guest; sid=Guest; system_user=no; user_id=Guest; user_image=");

                const raw = JSON.stringify({
                    "data": {
                        "name": selectedItem.name
                    }
                });

                const requestOptions = {
                    method: "POST",
                    headers: myHeaders,
                    body: raw,
                    redirect: "follow"
                };

                const response = await fetch(`http://${address}/api/method/jinpass.jinpass.api.show_password`, requestOptions);
                const message = await response.json();
                const result = message.message;
                console.log("message:",message,"Result:",result)

                if (response.ok) {
                    setSelectedPassword({
                        name: result.Name,
                        username: result['User Name'],
                        password: result.Password,
                        url: result.URL,
                        notes: result.Notes
                    });
                } else {
                    console.error('Failed to fetch password details:', result);
                }
            } catch (error) {
                console.error('Error fetching password details:', error);
            }
        };

        if (selectedItem) {
            fetchPasswordDetails();
        }
    }, [address, selectedItem]);

    const handleCopy = (value) => {
        navigator.clipboard.writeText(value).then(() => {
            console.log('Text copied to clipboard');
        }).catch((err) => {
            console.error('Failed to copy text', err);
        });
    };

    const nav = useNavigate();
    const handleClick = () => {
        nav('/edit', {
            state: {
                address: address,
                usertitle: selectedPassword.name,
                username: selectedPassword.username,
                url: selectedPassword.url,
                notes: selectedPassword.notes,
                password: selectedPassword.password
            }
        },{state : {address}});
    };

    const togglePasswordVisibility = () => {
        setShowPassword(prevShowPassword => !prevShowPassword);
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Password Manager</h1>
            </div>
            {selectedPassword ? (
                <div className={styles.contents}>
                    <p className={styles.para}>{selectedPassword.name || ''}</p>
                    <form>
                        <div className={styles.details}>
                            <label htmlFor="username">Username</label>
                            <div className={styles.content}>
                                <input type="text" name="username" value={selectedPassword.username || ''} readOnly />
                                <IoCopyOutline className={styles.icons} onClick={() => handleCopy(selectedPassword.username)} />
                            </div>
                        </div>
                        <div className={styles.details}>
                            <label htmlFor="password">Password</label>
                            <div className={styles.content}>
                                <div className={styles.passwords}>
                                <input 
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={selectedPassword.password || ''}
                                    readOnly
                                />
                                <div type="button" className={styles.toggleButton} onClick={togglePasswordVisibility}>
                                    {showPassword ? <AiOutlineEyeInvisible /> : <BsEye />}
                                </div>
                                <IoCopyOutline className={styles.icons} onClick={() => handleCopy(selectedPassword.password)} />
                            </div>
                            </div>
                        </div>
                        <div className={styles.details}>
                            <label htmlFor="url">URL</label>
                            <div className={styles.content}>
                                <input type="text" name="url" value={selectedPassword.url || ''} readOnly />
                                <IoCopyOutline className={styles.icons} onClick={() => handleCopy(selectedPassword.url)} />
                            </div>
                        </div>
                        <div className={styles.notes}>
                            <label htmlFor="notes">Notes</label>
                            <div className="textbox">
                                <textarea name="notes" value={selectedPassword.notes || ''} readOnly></textarea>
                            </div>
                        </div>
                        <div className={styles.button}>
                            <button type="button" onClick={handleClick} className={styles.Btn}>Edit
                                <svg className={styles.svg} viewBox="0 0 512 512">
                                    <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path></svg>
                            </button>
                        </div>
                    </form>
                </div>
            ) : (
                <div className={styles.container}>
                    <div className={styles.divisions}>
                        <p>Please wait</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PasswordManager;
