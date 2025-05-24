import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import RegisterPage from "./RegisterPage";
import HomePage from "./Home";
import InboxPage from "./InboxPage";
import MessageView from "./MessageView";
import ProtectedRoute from "./ProtectedRoute";
import SendMessage from "./SendMessage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
        <Route path="/send" element={<ProtectedRoute><SendMessage /></ProtectedRoute>} />
        <Route path="/inbox" element={<ProtectedRoute><InboxPage /></ProtectedRoute>} />
        <Route path="/inbox/:uid" element={<ProtectedRoute><MessageView /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
