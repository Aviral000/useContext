import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

export default function LoginControl() {
const { isAuthenticated, login, logout } = useContext(AuthContext);

  return (
    <div>
      {isAuthenticated ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  )
}
