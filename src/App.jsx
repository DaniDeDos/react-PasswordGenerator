import React, { useState } from "react";

const App = () => {
 const [password, setPassword] = useState("");
 const [length, setLength] = useState(8);
 const [lowercase, setLowercase] = useState(true);
 const [uppercase, setUppercase] = useState(true);
 const [numbers, setNumbers] = useState(true);
 const [symbols, setSymbols] = useState(true);

 const generatePassword = () => {
    let characters = "";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+";

    if (lowercase) characters += lowercaseChars;
    if (uppercase) characters += uppercaseChars;
    if (numbers) characters += numberChars;
    if (symbols) characters += symbolChars;

    let password = "";
    for (let i = 0; i < length; i++) {
      const pos = Math.floor(Math.random() * characters.length);
      password += characters[pos];
    }

    setPassword(password);
 };

 const copyToClipboard = () => {
    navigator.clipboard.writeText(password).then(() => {
      alert("Contraseña copiada al portapapeles");
    });
 };

 return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">Generador de Contraseñas</h2>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="length">
              Longitud:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="length"
              type="range"
              min="4"
              max="32"
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <span className="text-gray-700">{length}</span>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lowercase">
              <input
                className="mr-2 leading-tight"
                type="checkbox"
                id="lowercase"
                checked={lowercase}
                onChange={(e) => setLowercase(e.target.checked)}
              />
              Minúsculas
            </label>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="uppercase">
              <input
                className="mr-2 leading-tight"
                type="checkbox"
                id="uppercase"
                checked={uppercase}
                onChange={(e) => setUppercase(e.target.checked)}
              />
              Mayúsculas
            </label>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="numbers">
              <input
                className="mr-2 leading-tight"
                type="checkbox"
                id="numbers"
                checked={numbers}
                onChange={(e) => setNumbers(e.target.checked)}
              />
              Números
            </label>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="symbols">
              <input
                className="mr-2 leading-tight"
                type="checkbox"
                id="symbols"
                checked={symbols}
                onChange={(e) => setSymbols(e.target.checked)}
              />
              Símbolos
            </label>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={generatePassword}
            >
              Generar
            </button>
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={copyToClipboard}
            >
              Copiar
            </button>
          </div>
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Contraseña:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="text"
              value={password}
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
 );
};

export default App;
