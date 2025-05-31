import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert("Please fill in all fields");
      return;
    }
    // TODO: Send to backend
    console.log("Logging in with", username, password);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <div className="input-group">
          <FaUser />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-group">
          <FaLock />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="login-button" onClick={handleLogin}>
          LOGIN
        </button>
        <div className="links">
          <Link to="/ForgotPassword">Forgot Password ?</Link>
          <Link to="/Register">Register</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
