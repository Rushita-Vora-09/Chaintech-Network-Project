// src/components/Register.js
import React, { useState } from 'react';
import { register } from '../Services/authService';
import { useNavigate, Link } from 'react-router-dom';

export default function Register() {
  const [user, setUser] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register(user);
    navigate('/login');
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" className="form-control" name="name" value={user.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" className="form-control" name="email" value={user.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" className="form-control" name="password" value={user.password} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Register</button>
      </form>
      <p className="mt-3">
        Already have an account?{' '}
        <Link to="/login" className="text-decoration-none">
          Sign in here
        </Link>
        .
      </p>
    </div>
  );
}
