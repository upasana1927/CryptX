import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Container, CssBaseline } from "@mui/material";
import Home from "./components/Home";
import About from "./components/About";
import SendEmail from "./components/SendEmail";
import DecryptEmail from "./components/DecryptEmail";


function App() {
  return (
    <Router>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, textAlign: "center" }}>CryptX</Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/send" element={<SendEmail />} />
          <Route path="/decrypt" element={<DecryptEmail />} />
          
        </Routes>
      </Container>
    </Router>
  );
}

export default App;