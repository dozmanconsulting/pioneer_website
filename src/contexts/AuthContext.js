import React, { createContext, useContext, useState, useEffect } from 'react';
import userStore from '../services/UserStore';

export const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    const sessionId = localStorage.getItem('sessionId');
    if (sessionId) {
      const user = userStore.validateSession(sessionId);
      if (user) {
        setUser(user);
      } else {
        localStorage.removeItem('sessionId');
      }
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const sessionId = await userStore.login(email, password);
    localStorage.setItem('sessionId', sessionId);
    const user = userStore.validateSession(sessionId);
    setUser(user);
    return sessionId;
  };

  const register = async (email, password, company, selectedTier) => {
    const sessionId = await userStore.register(email, password, company, selectedTier);
    localStorage.setItem('sessionId', sessionId);
    const user = userStore.validateSession(sessionId);
    setUser(user);
    return sessionId;
  };

  const logout = () => {
    const sessionId = localStorage.getItem('sessionId');
    if (sessionId) {
      userStore.logout(sessionId);
      localStorage.removeItem('sessionId');
    }
    setUser(null);
  };

  const value = {
    user,
    login,
    register,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
