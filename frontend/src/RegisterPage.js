import React, { useState } from "react";
import "./Register.css";
import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [appPassword, setAppPassword] = useState("");


  const handleRegister = async () => {
    if (!name || !username || !email || !password || !confirmPassword) {
      setError("Please fill all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, username, email, password, appPassword }),

      });

      const data = await response.json();

      if (response.ok) {
        setError("");
        navigate("/");
      } else {
        setError(data.message || "Registration failed");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to connect to server");
    }
  };

  return (
    <div className="register-page">
      <div className="register-box">
        <h2>Register</h2>
        <div className="input-group"><input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} /><FaUser className="icon" /></div>
        <div className="input-group"><input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} /><FaUser className="icon" /></div>
        <div className="input-group"><input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><FaUser className="icon" /></div>
        <div className="input-group"><input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><FaLock className="icon" /></div>
        <div className="input-group"><input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /><FaLock className="icon" /></div>
        <div className="input-group">
  <input
    type="password"
    placeholder="Gmail App Password"
    value={appPassword}
    onChange={(e) => setAppPassword(e.target.value)}
  />
  <FaLock className="icon" />
</div>

        {error && <p style={{ color: "red" }}>{error}</p>}
        <button className="register-btn" onClick={handleRegister}>Register</button>
        <p>Already have an account? <Link to="/">Login</Link></p>
      </div>
    </div>
  );
};

export default RegisterPage;
