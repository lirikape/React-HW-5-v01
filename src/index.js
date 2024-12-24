import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from 'context/UserProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/React-HW-5-v01">
    <UserProvider>
      <App />
    </UserProvider>
  </BrowserRouter>
);
