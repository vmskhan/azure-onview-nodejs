import React, { useEffect } from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store/AuthSlice";

import './App.css';

import CommonLogin from "./pages/common/Login";
import CommonRegisterUser from "./pages/common/RegisterUser";
import CommonRegisterAdmin from "./pages/common/RegisterAdmin";

import AdminDashboard from "./pages/admin/Dashboard";
import PendingTests from "./pages/admin/PendingTests";
import CompletedTests from "./pages/admin/CompletedTests";
import InterviewControls from "./pages/admin/InterviewControls";
import AdminInterviewResults from "./pages/admin/InterviewResults";
import Meeting from "./pages/admin/Meeting";
import SubmissionEvaluation from "./pages/admin/SubmissionEvaluation";

import UserDashboard from "./pages/users/Dashboard";
import PreviousTest from "./pages/users/PreviousTest";
import UserInterviewResult from "./pages/users/InterviewResult";
import Payment from "./pages/users/Payment";
import JoinInterview from "./pages/users/JoinInterview";
import UserInterview from "./pages/users/Interview";
import ViewSubmission from "./pages/admin/ViewSubmission";
import PendingSubmissions from "./pages/admin/PendingSubmissions";



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
    <Route path = "/" element = {<CommonLogin/>} exact />
      <Route path ="/registerUser" element={<CommonRegisterUser/>} exact/>
      <Route path ="/registerAdmin" element={<CommonRegisterAdmin/>} exact/>
      {isLoggedIn &&
      <>
     
      <Route path ="/admin/adminDashboard" element={<AdminDashboard/>} exact/>
      <Route path ="/admin/adminHistory" element={<CompletedTests/>} exact/>
      <Route path ="/admin/adminEvaluation" element={<PendingTests/>} exact/>
      <Route path ="/admin/adminEvaluateAnswer" element={<SubmissionEvaluation/>} exact/>
      <Route path ="/admin/adminPendingSubmissions" element={<PendingSubmissions/>} exact/>
      <Route path ="/admin/adminMeet" element={<Meeting/>} exact/>
      <Route path ="/admin/adminQuestion" element={<InterviewControls/>} exact/>
      <Route path ="/admin/adminResult" element={<AdminInterviewResults/>} exact/>
      <Route path ="/admin/adminSubmission" element={<ViewSubmission/>} exact/>
    
      <Route path ="/user/userDashboard" element={<UserDashboard/>} exact/>
      <Route path ="/user/userHistory" element={<PreviousTest/>} exact/>
      <Route path ="/user/userResult" element={<UserInterviewResult/>} exact/>
      <Route path ="/user/userPayment" element={<Payment/>} exact/>
      <Route path ="/user/startTest" element={<JoinInterview/>} exact/>
      <Route path ="/user/testPage" element={<UserInterview/>} exact/>
      </>
    }
      </Routes>
     </BrowserRouter>
     );
}



export default App;
