import React, {useRef,useState } from "react";
import "./App.css";
function App() {
  const [isLoggedIn, setLogin] = useState(false);
  const [name, setName] = useState("");

  return (
    <div className="title">
      <div>
        <h2>WELCOME TO THE FORM</h2>
      </div>

      <div>
        <form>
          <label>Name:</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />

          <label>Dept:</label>
          <input
            type="text"
            placeholder="Enter your department name"
          />
          <br />

          <label>RollNo:</label>
          <input
            type="text"
            placeholder="Enter your rollno"
          />
          <br />

          {isLoggedIn ? (
            <h2>Welcome Student {name}</h2>
          ) : (
            <button
              type="button"
              onClick={() => setLogin(true)}
            >
              Login
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default App;
