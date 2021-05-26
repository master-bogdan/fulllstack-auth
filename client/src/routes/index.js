import React from 'react';
import { Layout } from 'antd';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Login from 'pages/Login';
import User from 'pages/User';

const layoutStyles = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const Routes = () => (
  <Layout style={layoutStyles}>
    <Switch>
      <Route exact path="/" component={User} />
      <Route path="/login" component={Login} />
    </Switch>
  </Layout>
);

export default Routes;
