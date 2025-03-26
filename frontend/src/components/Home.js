import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import SendIcon from "../components/encrypt.jpg";
import DecryptIcon from "../components/decrypt.jpg";

function Home() {
  return (
    <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "80vh", textAlign: "center" }}>
      <Typography variant="h3" gutterBottom>Welcome to CryptX</Typography>
      <Box sx={{ display: "flex", gap: 4, marginTop: 4, flexWrap: "wrap", justifyContent: "center" }}>
        <Button 
          variant="contained" 
          color="primary" 
          component={Link} 
          to="/send" 
          sx={{ 
            fontSize: "1.2rem", 
            padding: "12px 24px", 
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.3)",
            width: "200px", 
            height: "150px"
          }}
        >
          <img 
            src={SendIcon} 
            alt="Send Email" 
            width="80" 
            height="80" 
            style={{ marginBottom: 8, boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.3)", borderRadius: "8px" }}
          />
          Send Email
        </Button>
        <Button 
          variant="contained" 
          color="secondary" 
          component={Link} 
          to="/decrypt" 
          sx={{ 
            fontSize: "1.2rem", 
            padding: "12px 24px", 
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.3)",
            width: "200px", 
            height: "150px"
          }}
        >
          <img 
            src={DecryptIcon} 
            alt="Decrypt Email" 
            width="80" 
            height="80" 
            style={{ marginBottom: 8, boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.3)", borderRadius: "8px" }}
          />
          Decrypt Email
        </Button>
      </Box>
    </Container>
  );
}

export default Home;