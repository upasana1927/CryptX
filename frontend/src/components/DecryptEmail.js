import React, { useState } from "react";
import { Container, Typography, TextField, Button } from "@mui/material";
import axios from "axios";

function DecryptEmail() {
  const [encryptedMessage, setEncryptedMessage] = useState("");
  const [decryptedMessage, setDecryptedMessage] = useState("");
  const [error, setError] = useState("");

  const handleDecrypt = async () => {
    setError(""); // Clear previous errors
    try {
      const response = await axios.post("http://localhost:5000/decrypt", {
        encryptedMessage: encryptedMessage,
      });
      setDecryptedMessage(response.data.decryptedMessage);
    } catch (error) {
      console.error("Error decrypting message:", error);
      setError("Failed to decrypt. Ensure the message is correct.");
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Decrypt Email</Typography>
      <TextField
        label="Encrypted Message"
        variant="outlined"
        fullWidth
        value={encryptedMessage}
        onChange={(e) => setEncryptedMessage(e.target.value)}
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleDecrypt}>Decrypt</Button>
      {error && <Typography color="error">{error}</Typography>}
      {decryptedMessage && (
        <Typography variant="body1" sx={{ marginTop: 2 }}>
          <strong>Decrypted Message:</strong> {decryptedMessage}
        </Typography>
      )}
    </Container>
  );
}

export default DecryptEmail;
