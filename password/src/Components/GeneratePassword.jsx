import React, { useState } from 'react';
import styles from '../Css/GeneratePassword.module.css'

function GeneratePassword() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12); 
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const GeneratePassword = () => {
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()-_+=<>?';

    let characters = lowercaseLetters + uppercaseLetters;
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      generatedPassword += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setPassword(generatedPassword);
  };

  return (
    <div className={styles.set}>
      <h2>Password Generator</h2>
<div className={styles.set1}>
  {password && <div><strong>Password:</strong> {password}</div>}
</div>
      <div className={styles.set2}>
        
        <label htmlFor="length">Password Length:</label>
        <input
          type="number"
          id="length"
          value={length}
          onChange={(e) => setLength(parseInt(e.target.value))}
          min={6}
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
          />
          Include Numbers
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={(e) => setIncludeSymbols(e.target.checked)}
          />
          Include Symbols
        </label>
      </div>
      <button onClick={GeneratePassword}>Generate Password</button>
      
    </div>
  );
}
function summit (username,password,url){
  const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Cookie", "full_name=Guest; sid=Guest; system_user=no; user_id=Guest; user_image=");

const raw = JSON.stringify({
  "data": {
    "Name": "Vishwa",
    "Password": "password"
  }
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("http://34.125.164.132/api/method/jinpass.jinpass.api.user_auth", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));  
}

export default GeneratePassword;