// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Account from './Components/Account';
import { isAuthenticated } from './Services/authService';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={isAuthenticated() ? <Account /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
