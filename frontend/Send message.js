import React, { useState } from "react";
import "./SendMessage.css";

const SendMessage = () => {
  const [form, setForm] = useState({
    receiver_email: "",
    message: ""
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    fetch("http://localhost:5000/api/send-message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: localStorage.getItem("username"),
        receiver_email: form.receiver_email,
        message: form.message
      })
    })
      .then((res) => res.json())
      .then((data) => setStatus(data.message))
      .catch((err) => setStatus("Something went wrong"));
  };

  return (
    <div className="send-container">
      <button className="back-btn" onClick={() => window.history.back()}>
        ⬅ Back
      </button>
      <h2>Send Encrypted Message</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="receiver_email"
          placeholder="Receiver Email"
          value={form.receiver_email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Type your message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send</button>
        {status && <p className="status-msg">{status}</p>}
      </form>
    </div>
  );
};

export default SendMessage;