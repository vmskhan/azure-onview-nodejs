import React, { useEffect } from "react";
// import logo from './logo.svg';
import './App.css';


import Login from "./components/Login/Login";
import RegisterUser from "./components/Register/RegisterUser";
import RegisterAdmin from "./components/Register/RegisterAdmin";
import { Route, Routes } from "react-router";
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
import UserPayment from "./components/user/UserPayment";
import StartTest from "./components/user/StartTest";
import TestPage from "./components/user/TestPage";

import AdminQuestion from "./components/AdminQuestionComp/AdminQuestion";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store/AuthSlice";


const App = () => {
    const isLoggedIn=useSelector(state=>state.auth.isLoggedIn);
    const dispatch=useDispatch();
    useEffect(()=>{
      let userInfo=localStorage.getItem("userInfo");
       console.log(userInfo);
      if(userInfo)
          dispatch(authActions.login());
    },[])
  return( 
  <BrowserRouter>
    <Routes>
    <Route path = "/" element = {<Login/>} exact />
      <Route path ="/registerUser" element={<RegisterUser/>} exact/>
      <Route path ="/registerAdmin" element={<RegisterAdmin/>} exact/>
      {/* <Route path = "/new" element = {<NewLogin/>} exact /> */}
      {isLoggedIn &&
      <>
     
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
      </>
    }
      </Routes>
     </BrowserRouter>
     );
}



export default App;
