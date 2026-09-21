import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null);

  // useCallback
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "(){}[]:;'-_+=!@#$%&*~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 9);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    const timer = setTimeout(() => {
      passwordGenerator();
    }, 0);
    return () => clearTimeout(timer);
  }, [passwordGenerator]);

  return (
    <div className="min-h-screen bg-black pt-1">
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-slate-800">
        <h1 className="text-white text-center text-lg my-3">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 text-black bg-white"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0"
          >
            Copy
          </button>
        </div>
        <div className="flex items-center text-sm gap-x-2 ">
          <div className="flex items-center gap-x-1 mb-3">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(Number(e.target.value));
              }}
            />
            <label className="text-orange-500">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1 mb-3">
            <input
              type="checkbox"
              checked={numAllowed}
              id="numberInput"
              onChange={() => {
                setNumAllowed((prev) => !prev);
              }}
            />
            <label className="text-orange-500" htmlFor="numberInput">
              Numbers
            </label>
          </div>
          <div className="flex items-center gap-x-1 mb-3">
            <input
              type="checkbox"
              checked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label className="text-orange-500" htmlFor="charInput">
              Characters
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
