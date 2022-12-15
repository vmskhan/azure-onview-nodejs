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
import AdminDashboard from "./components/admin/AdminDashboard";
import AdminHistory from "./components/admin/AdminHistory";
import AdminEvaluation from "./components/admin/adminEvaluation";
import AdminEvaluateAnswer from "./components/admin/adminEvaluateAnswer";
import AdminMeet from "./components/admin/AdminMeet";

import AdminResult from "./components/admin/AdminResult";
import UserDashBoard from "./components/user/UserDashboard";
import UserHistory from "./components/user/UserHistory";
import UserResult from "./components/user/UserResult";
import UserPayment from "./components/user/userPayment";
import StartTest from "./components/user/StartTest";
import TestPage from "./components/user/TestPage";
import NewLogin from "./components/Login/NewLogin";
import AdminQuestion from "./components/QuestionComp/AdminQuestion";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BrowserRouter>
<Routes>
  <Route path = "/" element = {<App/>} exact />
  <Route path = "/new" element = {<NewLogin/>} exact />
  <Route path ="/registerUser" element={<RegisterUser/>} exact/>
  <Route path ="/registerAdmin" element={<RegisterAdmin/>} exact/>
  <Route path ="/admin/adminDashboard" element={<AdminDashboard/>} exact/>
  <Route path ="/admin/adminHistory" element={<AdminHistory/>} exact/>
  <Route path ="/admin/adminEvaluation" element={<AdminEvaluation/>} exact/>
  <Route path ="/admin/adminEvaluateAnswer" element={<AdminEvaluateAnswer/>} exact/>
  <Route path ="/admin/adminMeet" element={<AdminMeet/>} exact/>
  <Route path ="/admin/adminQuestion" element={<AdminQuestion/>} exact/>
  <Route path ="/admin/adminResult" element={<AdminResult/>} exact/>

  <Route path ="/user/userDashboard" element={<UserDashBoard/>} exact/>
  <Route path ="/user/userHistory" element={<UserHistory/>} exact/>
  <Route path ="/user/userResult" element={<UserResult/>} exact/>
  <Route path ="/user/userPayment" element={<UserPayment/>} exact/>
  <Route path ="/user/startTest" element={<StartTest/>} exact/>
  <Route path ="/user/testPage" element={<TestPage/>} exact/>
  </Routes>
 </BrowserRouter>);

 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
