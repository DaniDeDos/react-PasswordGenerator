import React, { useState } from 'react';

const App = () => {
 const [password, setPassword] = useState('');
 const [length, setLength] = useState(8);
 const [lowercase, setLowercase] = useState(true);
 const [uppercase, setUppercase] = useState(true);
 const [numbers, setNumbers] = useState(true);
 const [symbols, setSymbols] = useState(true);

 const generatePassword = () => {
    let characters = '';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+';

    if (lowercase) characters += lowercaseChars;
    if (uppercase) characters += uppercaseChars;
    if (numbers) characters += numberChars;
    if (symbols) characters += symbolChars;

    let password = '';
    for (let i = 0; i < length; i++) {
      const pos = Math.floor(Math.random() * characters.length);
      password += characters[pos];
    }

    setPassword(password);
 };

 const copyToClipboard = () => {
    navigator.clipboard.writeText(password).then(() => {
      alert('Contraseña copiada al portapapeles');
    });
 };

 return (
    <div className="generator">
      <div className="password">
        <input type="text" value={password} readOnly />
        <button onClick={copyToClipboard}>Copiar</button>
      </div>
      <div className="range">
        <input
          type="range"
          min="4"
          max="32"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
        <span>{length}</span>
      </div>
      <div className="options">
        <div className="option">
          <label>
            <input
              type="checkbox"
              checked={lowercase}
              onChange={(e) => setLowercase(e.target.checked)}
            />
            <span>a-z</span>
          </label>
        </div>
        <div className="option">
          <label>
            <input
              type="checkbox"
              checked={uppercase}
              onChange={(e) => setUppercase(e.target.checked)}
            />
            <span>A-Z</span>
          </label>
        </div>
        <div className="option">
          <label>
            <input
              type="checkbox"
              checked={numbers}
              onChange={(e) => setNumbers(e.target.checked)}
            />
            <span>0-9</span>
          </label>
        </div>
        <div className="option">
          <label>
            <input
              type="checkbox"
              checked={symbols}
              onChange={(e) => setSymbols(e.target.checked)}
            />
            <span>!@#$%</span>
          </label>
        </div>
      </div>
      <button onClick={generatePassword}>Generar</button>
    </div>
 );
};

export default App;
