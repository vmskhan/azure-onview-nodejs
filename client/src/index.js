import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap"
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from "./components/Login/Login";
import RegisterUser from "./components/Register/RegisterUser";
import RegisterAdmin from "./components/Register/RegisterAdmin";
import { Route,Router, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BrowserRouter>
<Routes>
  <Route path = "/" element = {<App/>} exact />
  
  </Routes>
 </BrowserRouter>);

 const root1=ReactDOM.createRoot(document.getElementById('root1'));
 root1.render(<BrowserRouter>
  <Routes>
  
    <Route path = "registerUser" element = {<RegisterUser/>} />
    <Route path = "registerAdmin" element = {<RegisterAdmin/>} />
    </Routes>
   </BrowserRouter>);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
