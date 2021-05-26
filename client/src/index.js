import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import { UserContextProvider } from './contexts/UserContext';
import 'antd/dist/antd.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
