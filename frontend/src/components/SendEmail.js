import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Container, Typography, Snackbar, Alert } from "@mui/material";

function SendEmail() {
  const [emailSender, setEmailSender] = useState("");
  const [emailReceiver, setEmailReceiver] = useState("");
  const [emailPassword, setEmailPassword] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/send", {
        email_sender: emailSender,
        email_receiver: emailReceiver,
        email_password: emailPassword,
        message,
      });
      setAlertMessage(response.data.message);
      setOpen(true);
    } catch (error) {
      setAlertMessage("Error sending email");
      setOpen(true);
    }
  };

  return (
    <Container>
      <Typography variant="h5" gutterBottom>Send Encrypted Email</Typography>
      <form onSubmit={handleSubmit}>
        <TextField fullWidth margin="normal" label="Your Email" value={emailSender} onChange={(e) => setEmailSender(e.target.value)} required />
        <TextField fullWidth margin="normal" label="Receiver Email" value={emailReceiver} onChange={(e) => setEmailReceiver(e.target.value)} required />
        <TextField fullWidth margin="normal" type="password" label="Your Email Password" value={emailPassword} onChange={(e) => setEmailPassword(e.target.value)} required />
        <TextField fullWidth margin="normal" multiline rows={4} label="Message" value={message} onChange={(e) => setMessage(e.target.value)} required />
        <Button variant="contained" color="primary" type="submit">Send Email</Button>
      </form>
      <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
        <Alert onClose={() => setOpen(false)} severity="success">{alertMessage}</Alert>
      </Snackbar>
    </Container>
  );
}

export default SendEmail;