import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import AppDetails from './pages/AppDetails';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AppProvider from './context/AppProvider';


ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <AppProvider>
        <Routes>
          <Route exact path="/" element={ <App /> } />
          <Route path=":name" element={ <AppDetails /> } />
        </Routes>
      </AppProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
