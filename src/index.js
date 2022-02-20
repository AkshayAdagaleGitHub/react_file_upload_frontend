import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NavigationBar from './components/navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import Upload from './components/upload';
// import {  BrowserRouter,  Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFoundPage from './components/pagenotfound'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NavigationBar/>
      <Upload/>
        <Routes>
          <Route exact path="/" component={App} />
            <Route path="/upload" component={Upload} />     
            <Route component={NotFoundPage} />     
          </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
