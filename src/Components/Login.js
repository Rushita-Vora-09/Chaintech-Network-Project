// src/components/Login.js
import React, { useState } from 'react';
import { login } from '../Services/authService';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [message, setMessage] = useState({ text: '', type: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = login(credentials.email, credentials.password);
    if (username) {
      setMessage({ text: `${username} logged in successfully!`, type: 'success' });
      setTimeout(() => {
        navigate('/account');
      }, 2000);
    } else {
      setMessage({ text: 'Invalid credentials', type: 'error' });
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            value={credentials.email}
            onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            className="form-control"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Login</button>
        {message.text && (
          <p className={`mt-2 ${message.type === 'error' ? 'text-danger' : 'text-success'}`}>{message.text}</p>
        )}
      </form>
      <p className="mt-3">
        Don’t have an account?{' '}
        <Link to="/register" className="text-decoration-none">
          Create one here
        </Link>
        .
      </p>
    </div>
  );
}
