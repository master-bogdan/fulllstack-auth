import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import {
  Switch,
  Route,
  useHistory,
} from 'react-router-dom';
import Login from 'pages/Login';
import User from 'pages/User';

const layoutStyles = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const Routes = ({ username }) => (
  <Layout style={layoutStyles}>
    <Switch>
      <Route exact path="/" render={() => <User username={username} />} />
      <Route path="/login" component={Login} />
    </Switch>
  </Layout>
);

export default Routes;
