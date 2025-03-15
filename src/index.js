import {GoogleOAuthProvider} from '@react-oauth/google'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const CLIENT_ID = '191167735459-f4vhujqfna4r8pm2u2dnjjt26pnukva9.apps.googleusercontent.com'; // Reemplaza con tu Client ID de Google

root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId = {CLIENT_ID}>
    <App />
    </GoogleOAuthProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
