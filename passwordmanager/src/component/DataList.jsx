import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from '../css/DataList.module.css';

function PasswordList() {
    const navigate = useNavigate();
    const location = useLocation();
    const { address } = location.state || {};
    const [passwords, setPasswords] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const myHeaders = new Headers();
                myHeaders.append("Cookie", "full_name=Guest; sid=Guest; system_user=no; user_id=Guest; user_image=");

                const requestOptions = {
                    method: "GET",
                    headers: myHeaders,
                    redirect: "follow"
                };

                const response = await fetch(`http://${address}/api/method/jinpass.jinpass.api.get_all_passwords`, requestOptions);
                const result = await response.json();

                console.log('Response:', result);

                if (result && Array.isArray(result.message)) {
                    setPasswords(result.message);
                } else {
                    console.error('Unexpected response format:', result);
                }
            } catch (error) {
                console.error('Error fetching passwords:', error);
            }
        };

        fetchData();
    }, []);

    const handleEdit = (name) => {
        const selectedItem = passwords.find(item => item.name === name);
        console.log("value", selectedItem)

        if (selectedItem) {
            navigate(`/edit-password/${name}`, {
                state: { address, selectedItem }
            });
            console.log("selected item", selectedItem)
        }

    };

    return (
        <>
            <div className={styles.header}>
                <h1>PASSWORD LIST</h1>
            </div>
            <div className={styles.container}>
                <div className={styles.divisions}>
                    {passwords.map((item) => (
                        <div key={item.name} onClick={() => handleEdit(item.name)} className={styles.contents}>
                            <p>{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default PasswordList;
