import React, { useState } from 'react';
import "./PasswrdGenerator.css"

function PasswordGenerator() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12); 
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const generatePassword = () => {
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
    <div className='generator-header'>
        <div className="generator-nav">
      <h2>Password Generator</h2>
      </div>
      
      <div className='generator-container'>
        <div className="generator-password">
        {password && <div><strong>Password:</strong> {password}</div>}
        </div>
        <div className="generator-one">
        <label htmlFor="length">Password Length:</label>
        <input
          type="number"
          id="length"
          value={length}
          onChange={(e) => setLength(parseInt(e.target.value))}
          min={6}/>
      </div>
      <div className='generator-two'>
        <label>
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
          />
          Include Numbers
        </label>
      </div>
      <div className='generator-three'>
        <label>
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={(e) => setIncludeSymbols(e.target.checked)}
          />
          Include Symbols
        </label>
      </div>
      <button className='generator-button' onClick={generatePassword}>Generate Password</button>
     
    </div>
    </div>     
  );
}

export default PasswordGenerator;