import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

export default function AuthStatus() {
const { isAuthenticated } = useContext(AuthContext);

  return (
    <div>
      <h1>{isAuthenticated ? "You are logged in" : "You are not logged in"}</h1>
    </div>
  )
}
