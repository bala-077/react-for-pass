import React, { useState } from 'react'
import styles from '../css/LoginPage.module.css'
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { useLocation, useNavigate } from 'react-router-dom';

const Loginpage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const location = useLocation();
    const { IpAddress } = location.state || {};
    const [ address , setAddress] = useState(IpAddress);
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        
        if (username == '') {
            alert("Username is Empty")
        }
        else if (password == '') {
            alert("Password is Empty")
        }
        else {
            const handleResult = await CheckAuth(username, password, IpAddress)
            if(handleResult === '{"message":[200,"Login Successfull"]}'){
                navigate('/datamodels',{ state: { address } })
            }
            else{
                console.log("fail")
            }
        };
    }
    return (
        <>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.header}>
                        <h1>LOGIN</h1>
                    </div>
                    <form onSubmit={handleLogin}>
                        <div className={styles.username}>
                            <label htmlFor="username">USERNAME:</label>
                            <div className={styles.name}>
                                <input type="text" placeholder='Enter UserName' onChange={(e) => setUsername(e.target.value)} />
                                <FaRegUser className={styles.icons} />
                            </div>
                        </div>
                        <div className={styles.userpassword}>
                            <label htmlFor="username">PASSWORD:</label>
                            <div className={styles.name}>
                                <input type="password" value={password} placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} />
                                <RiLockPasswordLine className={styles.icons} />
                            </div>
                        </div>
                        <div className={styles.button}>
                            <button type='submit'>SUBMIT</button>
                        </div>
                        {/* <input type="text" value={address} onChange={(e) => setAddress(e.target.value)}/> */}
                    </form>
                </div>
            </div>
        </>
    )
}
export default Loginpage;



function CheckAuth(username, password, url) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "full_name=Guest; sid=Guest; system_user=no; user_id=Guest; user_image=");
    const raw = JSON.stringify({
        "data": {
          "Name": username,
          "Password": password
        }
      });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    return fetch(`http://${url}/api/method/jinpass.jinpass.api.user_auth`, requestOptions)
    .then((response) => response.text())
    .then((result) => {return result})
    .catch((error) => console.error(error));
}