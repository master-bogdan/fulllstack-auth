import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Routes from 'routes';

const App = () => {
  const history = useHistory();
  const [user, setUser] = useState({});

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user-auth');
    const foundUser = JSON.parse(loggedInUser);

    if (foundUser.auth) {
      setUser(foundUser);
    } else {
      history.push('/login');
    }
  }, []);

  return (
    <>
      <Routes username={user.name} />
    </>
  );
};

export default App;
