import './Login.css';
import { FaUser,FaLock} from "react-icons/fa";
import React,{useState} from 'react';
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
          alert("user name is empty")
      }
      else if (password == '') {
          alert("Password is Empty")
      }
      else {
          const handleResult = await CheckAuth(username, password, IpAddress)
          if(handleResult === '{"message":[200,"Login Successfull"]}'){
              navigate("/list-page",{ state: { address } })
          }
          else{
              console.log("fail")
          }
      };
  }

return (
  <div className="login-wrapper">
  <div className="wrapper">
      <form onSubmit={handleLogin}>
          <h1>Login</h1>
          <div className="input-box">
              <input type="text" placeholder='user name' 
              value={username} onChange={(e)=>setUsername(e.target.value)} />
              <FaUser className='icon-1' />
          </div>
          <div className="input-box">
              <input type="password" placeholder='password'
               value={password} onChange={(e)=>setPassword(e.target.value)}/>
              <FaLock className='icon-2' />

          </div>
          
          <button className='wrapper-button' type="submit">Login</button>
      

      </form>
  </div>  
  </div>  
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

