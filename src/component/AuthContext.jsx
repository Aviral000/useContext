import React, { useState, createContext } from 'react'

const AuthContext = createContext();

function AuthProvider({ children }) {
const [isAuthenticated, setIsAuthenticated] = useState(false);

const login = () => {
    setIsAuthenticated(true);
}

const logout = () => {
    setIsAuthenticated(false);
}

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider };