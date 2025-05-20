// ✅ InboxPage.js (with optimized message navigation)
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Inbox.css";

const InboxPage = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const username = localStorage.getItem("username");
    fetch("http://localhost:5000/api/inbox", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.messages) setMessages(data.messages);
        else setError(data.error || "Failed to load inbox.");
      })
      .catch((err) => {
        console.error(err);
        setError("Server error");
      });
  }, []);

  const handleDelete = (uid) => {
    const username = localStorage.getItem("username");
    fetch("http://localhost:5000/api/delete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, uid }),
    })
      .then((res) => res.json())
      .then(() => {
        setMessages((prev) => prev.filter((msg) => msg.uid !== uid));
      });
  };

  const handleBack = () => {
    navigate("/home");
  };

  return (
    <div className="inbox-container">
      <button className="back-btn" onClick={handleBack}>
        ← Back
      </button>
      <h1>Inbox</h1>
      {error && <p className="error">{error}</p>}
      {messages.map((msg, idx) => (
        <div key={idx} className="message-card">
          <div
            onClick={() => navigate(`/inbox/${msg.uid}`, { state: { message: msg } })}
            style={{ cursor: "pointer" }}
          >
            <h3>{msg.subject}</h3>
            <p>
              <strong>Date:</strong> {msg.date}
            </p>
          </div>
          <button className="delete-btn" onClick={() => handleDelete(msg.uid)}>
            🗑️ Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default InboxPage;
