import React, { useState, useEffect } from 'react';
import { IoCopyOutline } from "react-icons/io5";
import styles from '../css/PasswordEdit.module.css';
import { useLocation, useNavigate } from 'react-router-dom';

function PasswordManager() {
    const location = useLocation();
    const { address, selectedItem } = location.state || {};

    const [selectedPassword, setSelectedPassword] = useState(null);
    console.log(address, selectedItem, selectedPassword)


    useEffect(() => {
        const fetchPasswordDetails = async () => {
            try {
                const myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                myHeaders.append("Cookie", "full_name=Guest; sid=Guest; system_user=no; user_id=Guest; user_image=");

                const raw = JSON.stringify({
                    "data": {
                        "name": selectedItem.name
                    }
                });
                console.log(raw)
                const requestOptions = {
                    method: "POST",
                    headers: myHeaders,
                    body: raw,
                    redirect: "follow"
                };

                const response = await fetch(`http://${address}/api/method/jinpass.jinpass.api.show_password`, requestOptions);
                const message = await response.json();
                const result = message.message;
                console.log("result:", result)
                console.log("Response:", response, "Result:", result, "message:", result.message)
                if (response.ok) {
                    setSelectedPassword({
                        name: result.Name,
                        username: result['User Name'],
                        password: result.Password,
                        url: result.URL,
                        notes: result.Notes
                    });
                    console.log(result.Name, result.Password, result.URL, result.Notes)
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
    const nav = useNavigate()
    const handleClick = () => {
        nav('/edit', {
            state: {
                name: selectedPassword.name,
                username: selectedPassword.username,
                url: selectedPassword.url,
                notes: selectedPassword.notes,
                password: selectedPassword.password
            }
        });
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Password Manager</h1>
            </div>
            {selectedPassword ? (
                <div className={styles.contents}>
                    <form>
                        <div className={styles.details}>
                            <p>{selectedPassword.name}</p>
                            <label htmlFor="username">Username</label>
                            <div className={styles.content}>
                                <input type="text" name="username" value={selectedPassword.username || ''} readOnly />
                                <IoCopyOutline className={styles.icons} onClick={() => handleCopy(selectedPassword.username)} />
                            </div>
                        </div>
                        <div className={styles.details}>
                            <label htmlFor="password">Password</label>
                            <div className={styles.content}>
                                <input type="password" name="password" value={selectedPassword.password || ''} readOnly />
                                <IoCopyOutline className={styles.icons} onClick={() => handleCopy(selectedPassword.password)} />
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
                        <button onClick={handleClick}>edit</button>
                    </form>
                </div>
            ) : (
                <div className={styles.container}>
                    <div className={styles.divisions}>
                        <p>No password selected</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PasswordManager;
