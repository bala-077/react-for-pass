import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './PasswordMngr.css';

function PasswordList() {
    const navigate = useNavigate();
    const location = useLocation();
    const { address } = location.state || {};
    const [Ipaddress, setIpAddress] = useState(address);
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

                const response = await fetch("http://34.125.164.132/api/method/jinpass.jinpass.api.get_all_passwords", requestOptions);
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
        navigate(`/read-page/${name}`, { state: { address } });
        console.log(address);
    };

    return (
        <>
            <div className="password-header">
                <div className='password-footer'>
                    <h1>PASSWORD LIST</h1>
                </div>
                <div className="password-container">
                    <div className="password-division">
                        {passwords.map((item) => (
                            <div key={item.name} onClick={() => handleEdit(item.name)} className='password-contents'>
                                <p>{item.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default PasswordList;
