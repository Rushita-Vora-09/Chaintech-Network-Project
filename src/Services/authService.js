// src/services/authService.js

export const register = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
  };
  
  export const login = (email, password) => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.email === email && user.password === password) {
      localStorage.setItem('isAuthenticated', 'true');
      return user.name;
    }
    return null;
  };
  
  export const logout = () => {
    localStorage.removeItem('isAuthenticated');
  };
  
  export const isAuthenticated = () => {
    return localStorage.getItem('isAuthenticated') === 'true';
  };
  
  export const getUser = () => JSON.parse(localStorage.getItem('user'));
  
  export const updateUser = (updatedUser) => {
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };
  