import { useState, useEffect, useContext, createContext } from 'react';
import { navigate, routes } from '@redwoodjs/router';

const authContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => useContext(authContext);


function useProvideAuth() {
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)

  const signin = (email, password) => {

  };

  const signout = () => {

  };

  return {
    user,
    error,
    signin,
    signout,
  }
}
