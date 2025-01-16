import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';


const AuthContext = createContext(null);


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    checkAuth();
  }, []);


  const checkAuth = async () => {
    try {
      const response = await axios.get('/api/user');
      setUser(response.data);
    } catch (error) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };


  const login = async (credentials) => {
    try {
      // First, get CSRF cookie
      await axios.get('/sanctum/csrf-cookie');
      
      // Then attempt login
      await axios.post('/login', credentials);
      
      // If successful, get user data
      const response = await axios.get('/api/user');
      setUser(response.data);
      return true;
    } catch (error) {
      throw error;
    }
  };


  const logout = async () => {
    try {
      await axios.post('/logout');
      setUser(null);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };


  const value = {
    user,
    loading,
    login,
    logout,
    checkAuth
  };


  if (loading) {
    return <div>Loading...</div>; // Or your loading component
  }


  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
