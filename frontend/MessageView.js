import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Inbox.css";

const MessageView = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const message = location.state?.message;

  return (
    <div className="inbox-container">
      <button className="back-btn" onClick={() => navigate("/inbox")}>
  ← Back to Inbox
</button>

      {message ? (
        <div className="message-card">
          <h2>{message.subject}</h2>
          <p><strong>From:</strong> {message.from}</p>
          <p><strong>Date:</strong> {message.date}</p>
          <hr />
          <p style={{ whiteSpace: "pre-wrap" }}>{message.text}</p>
        </div>
      ) : (
        <p className="error">No message data. Please go back to Inbox.</p>
      )}
    </div>
  );
};

export default MessageView;
