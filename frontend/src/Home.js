import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const HomePage = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    navigate("/");
  };

  return (
    <div className="home-container">
      <button className="logout-btn" onClick={handleLogout}>Logout</button>
      <button className="profile-btn">👤 {username}</button>
      <h1 className="home-title">Welcome to CryptX</h1>
      <div className="button-group">        
  <button className="home-button send-btn" onClick={() => navigate("/send")}>
  Send Message
</button>
  <button className="home-button inbox-btn" onClick={() => navigate("/inbox")}>
  Inbox
</button>

</div>
    </div>
  );
};

export default HomePage;
