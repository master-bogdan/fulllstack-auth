import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from 'contexts/UserContext';
import { Button, Typography, Space } from 'antd';

const { Title, Text } = Typography;

const User = () => {
  const history = useHistory();
  const { user } = useContext(UserContext);

  const logOut = () => {
    localStorage.setItem('user-auth', false);
    history.push('/login');
  };

  return (
    <div>
      <Title style={{ textAlign: 'center' }} level={2}>
        <Text>Hello</Text>
        <br />
        <Text type="success">
          {user.name}
        </Text>
      </Title>
      <Button onClick={logOut} type="primary" block>
        Logout
      </Button>
    </div>
  );
};

export default User;
