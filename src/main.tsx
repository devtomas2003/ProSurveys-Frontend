import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './routes';

ReactDOM.createRoot(document.getElementById('applicationRoot')!).render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);