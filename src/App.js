import React, { useEffect } from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store/AuthSlice";

import './App.css';


import Login from "./components/Login/Login";
import RegisterUser from "./components/Register/RegisterUser";
import RegisterAdmin from "./components/Register/RegisterAdmin";


import UserDashBoard from "./components/user/UserDashboard";
import UserHistory from "./components/user/UserHistory";
import UserResult from "./components/user/UserResult";
import UserPayment from "./components/user/UserPayment";
import StartTest from "./components/user/StartTest";
import TestPage from "./components/user/TestPage";


import AdminDashboard from "./pages/admin/Dashboard";
import PendingTests from "./pages/admin/PendingTests";
import CompletedTests from "./pages/admin/CompletedTests";
import InterviewControls from "./pages/admin/InterviewControls";
import AdminInterviewResults from "./pages/admin/InterviewResults";
import Meeting from "./pages/admin/Meeting";
import SubmissionEvaluation from "./pages/admin/SubmissionEvaluation";


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
      <Route path ="/admin/adminHistory" element={<CompletedTests/>} exact/>
      <Route path ="/admin/adminEvaluation" element={<PendingTests/>} exact/>
      <Route path ="/admin/adminEvaluateAnswer" element={<SubmissionEvaluation/>} exact/>
      <Route path ="/admin/adminMeet" element={<Meeting/>} exact/>
      <Route path ="/admin/adminQuestion" element={<InterviewControls/>} exact/>
      <Route path ="/admin/adminResult" element={<AdminInterviewResults/>} exact/>
    
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
