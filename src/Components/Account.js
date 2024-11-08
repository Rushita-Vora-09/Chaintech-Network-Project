// src/components/Account.js
import React, { useState, useEffect } from 'react';
import { getUser, updateUser, logout } from '../Services/authService';
import { useNavigate } from 'react-router-dom';

export default function Account() {
  const [user, setUser] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = getUser();
    if (currentUser) setUser(currentUser);
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(user);
    alert('Profile updated!');
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="container mt-5">
      <h2>Account Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" className="form-control" name="name" value={user.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" className="form-control" name="email" value={user.email} readOnly />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" className="form-control" name="password" value={user.password} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Update</button>
        <button type="button" className="btn btn-danger mt-3 ms-3" onClick={handleLogout}>Logout</button>
      </form>
    </div>
  );
}
