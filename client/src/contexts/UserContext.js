import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export const UserContext = React.createContext({});

export const UserContextProvider = ({ children }) => {
  const history = useHistory();
  const [user, setUser] = useState({});

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user-auth');

    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      if (foundUser) {
        setUser(foundUser);
        history.push('/');
      } else {
        history.push('/login');
      }
    } else {
      history.push('/login');
    }
  }, [history]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
