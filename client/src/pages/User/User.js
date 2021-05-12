import React from 'react';
import { useHistory } from 'react-router-dom';

const User = ({ username }) => {
  const history = useHistory();

  const logOut = () => {
    localStorage.setItem('user-auth', false);
    history.push('/login');
  };

  return (
    <div>
      Hello {username}
      <button onClick={logOut} type="button">
        Logout
      </button>
    </div>
  );
};

export default User;
