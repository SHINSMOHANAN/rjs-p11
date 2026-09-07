import "./App.css";
import React, { useRef, useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const inputRef = useRef();

  const handleLogin = () => {
    setName(inputRef.current.value);
    setLoggedIn(true);
  };

  return (
    <div>
      {loggedIn ? (
        <h1>Welcome {name}</h1>
      ) : (
        <>
          <input
            type="text"
            ref={inputRef}
            placeholder="Enter your name"
          />
          <button onClick={handleLogin}>
            Login
          </button>
        </>
      )}
    </div>
  );
}

export default App;
