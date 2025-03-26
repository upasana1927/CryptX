import React from "react";
import { Container, Typography, Card, CardContent, Box } from "@mui/material";
import { Lock as LockIcon, Email as EmailIcon, Security as SecurityIcon } from "@mui/icons-material";

const About = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 5, mb: 5 }}>
      <Card sx={{ p: 3, borderRadius: 2, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            <strong>CryptX: Secure Email Messaging System</strong>
          </Typography>

          <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold" }}>
            What is CryptX?
          </Typography>
          <Typography variant="body1" paragraph>
            CryptX is a secure email messaging system that encrypts emails using the
            <strong> RSA encryption algorithm</strong>, ensuring that only the
            intended recipient can read the message. This system protects sensitive
            communication from cyber threats and unauthorized access.
          </Typography>

          <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold" }}>
            How CryptX Works?
          </Typography>
          <Box sx={{ pl: 2 }}>
            <Typography variant="body1" display="flex" alignItems="center">
              <LockIcon sx={{ mr: 1, color: "primary.main" }} />
              <strong>RSA Encryption:</strong> The sender encrypts the email using the recipient’s public key.
            </Typography>
            <Typography variant="body1" display="flex" alignItems="center">
              <EmailIcon sx={{ mr: 1, color: "secondary.main" }} />
              <strong>Secure Email Transmission:</strong> The encrypted message is sent via SMTP.
            </Typography>
            <Typography variant="body1" display="flex" alignItems="center">
              <SecurityIcon sx={{ mr: 1, color: "success.main" }} />
              <strong>RSA Decryption:</strong> The recipient decrypts the email using their private key via IMAP.
            </Typography>
          </Box>

          <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold" }}>
            Key Features
          </Typography>
          <ul>
            <li><Typography variant="body1"><strong>✅ End-to-End Encryption:</strong> Only the intended recipient can read the email.</Typography></li>
            <li><Typography variant="body1"><strong>✅ Public & Private Key Pair:</strong> Uses RSA key generation for security.</Typography></li>
            <li><Typography variant="body1"><strong>✅ Secure Email Transmission:</strong> Uses SMTP & IMAP protocols.</Typography></li>
            <li><Typography variant="body1"><strong>✅ User-Friendly Interface:</strong> Simple frontend in React.js.</Typography></li>
          </ul>

          <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold" }}>
            Why Choose CryptX?
          </Typography>
          <ul>
            <li><Typography variant="body1">🔹 Prevents <strong>man-in-the-middle attacks</strong> and data breaches.</Typography></li>
            <li><Typography variant="body1">🔹 Protects <strong>confidential information</strong> from unauthorized access.</Typography></li>
            <li><Typography variant="body1">🔹 Uses industry-standard <strong>cryptographic algorithms</strong> to enhance security.</Typography></li>
          </ul>
        </CardContent>
      </Card>
    </Container>
  );
};

export default About;
