import { useEffect, useState } from "react";
import "./user.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { endSubmission, getQuestionsUser, updateSubmission } from "../../store/User-actions";
import { useNavigate } from "react-router";
import UserDynamicComponent from "../data/UserDynamicComponent";

const TestPage =() =>{
  const questions=useSelector(state=>state.user.questions);
  const dispatch=useDispatch();
  const baseUrl=process.env.REACT_APP_IMAGE_UPLOADS_BASE_URL;
  const [index,setIndex]=useState(0);
  const [questionType,setQuestionType]=useState('Objective Type-A');
  
  
  const testId=localStorage.getItem('currentTest');
  const offcanvasStyle={width: '250px', marginTop : '104px', overflow: 'hidden'};  
  const offcanvasBodyStyle={marginLeft: '25px', overflow: 'hidden'};
  const offcanvasBodyChildDivStyle={minHeight: '250px', maxHeight: '250px' , width: '100%', overflow: 'scroll', overflowX : 'hidden' ,paddingRight: '17px', boxSizing: 'content-box' }
  const user=JSON.parse(localStorage.getItem('userInfo'));
  const [answer,setAnswer]=useState("");
  const navigate=useNavigate();
const getdynamo=()=>{
    const element=React.createElement('Objective Type-A');
    return element;
}
  useEffect(()=>{
    fetchQuestions();
  },[]);
  
  const fetchQuestions=()=>{
    dispatch(getQuestionsUser(testId));
  }
useEffect(()=>{
  console.log(questions);
},[questions]);

const incrementIndex=()=>{
  if(index<questions.length-1)
  {
  setIndex(index+1);
  setQuestionType(questions[index+1].questionFormat);
  setAnswer("");
  }
}
const submissionHandler=()=>{
  const data={
    uid:user._id,
    question:questions[index],
    choice:answer,
  }
  console.log(data);
  console.log(user);
  incrementIndex();
dispatch(updateSubmission(data));
}
const endTestHandler=()=>{
  
  const data={
    uid:user._id,
    question:questions[index],
    choice:answer,
  }
  console.log(data);
  dispatch(updateSubmission(data));
  dispatch(endSubmission({'tid':testId,'uid':user._id}));
  navigate('/user/userDashboard',{replace:true});
}
  return(
    <>
    {questions &&
        <div>
    <div className="container-fluid text-light">
        <div className="row mt-5 px-5">
          <div className="col-12">
            <div className="card w-100 px-2 py-3 border-0 bg-transparent overflow-auto" style={{height:'100vh'}}>
              <div className="row">
{/* <!-- zoom --> */}
                <div className="col-6" id="meetingSDKElement">

                </div>

                <div className="col-6 border border-1 border-light">
                <div className="">
                {/* {getdynamo()} */}
                 {questions.length>0  &&
                 <UserDynamicComponent question={questions[index]} answer={answer} setAnswer={setAnswer} />}
                    
                {index<questions.length-1?(
                    <button className="col-12 btn btn-primary btn-sm mt-5 px-5" role="button" onClick={submissionHandler}>Next</button>
                ):(
                  <button className="col-12 btn btn-primary btn-sm mt-5 px-5" role="button" onClick={endTestHandler}>End</button>
                )
                    }
                    <br/><br/>
                  </div>
                </div>


             </div>
            </div>
          </div>
        </div>        
    </div>

    <button className="btn btn-primary nav-btn px-1 py-4 bg-white text-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" ><i className="fas fa-arrow-left"></i></button>

        <div className="offcanvas offcanvas-end" style={offcanvasStyle}  data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
          
          <div className="offcanvas-body w-100 pt-0 pl-0" style={offcanvasBodyStyle} >
                <div style={offcanvasBodyChildDivStyle} className="border">
                  <div className="bg-b text-white text-center">Navigation</div>
                  <div className="row mt-2 px-3">
                    {/* <c:forEach begin="0" end="${participation.totalQn - 1}" varStatus="loop"> */}
                      {/* <c:if test="${ loop.index < participation.last_attempted}"> */}
                        <div className="col-3 text-white mt-2">
                          {/* <button className="btn btn-primary rounded-circle">${loop.index+1}</button> */}
                        </div>                        
                      {/* </c:if> */}
                      {/* <c:if test="${ loop.index == participation.last_attempted}"> */}
                        <div className="col-3 text-white mt-2">
                           <button className="btn bg-r text-white rounded-circle">{/*${loop.index+1}*/}</button> 
                        </div>                        
                      {/* </c:if> */}
                      {/* <c:if test="${ loop.index > participation.last_attempted}"> */}
                        <div className="col-3 text-white mt-2">
                          <button className="btn btn-outline-primary rounded-circle">{/*${loop.index+1}*/}</button>
                        </div>                        
                      {/* </c:if> */}
                   {/* </c:forEach> */}
                  </div>              
              

              <div className="border" style={{paddingRight: '17px'}}>
                <div className="bg-b text-white text-center">Summary</div>
                <div className="row py-1 px-1">
                  <div className="col-8">
                    <div className="text-secondary">Total questions</div>
                  </div>
                  {/* <div className="col-4 text-end">${participation.totalQn}</div> */}
                </div> 
                <div className="row py-1 px-1">
                  <div className="col-8">
                    <div className="text-secondary">Answered</div>
                  </div>
                  {/* <div className="col-4 text-end">${participation.last_attempted}</div> */}
                </div> 
                <div className="row py-1 px-1">
                  <div className="col-8">
                    <div className="text-secondary">Saved</div>
                  </div>
                  {/* <div className="col-4 text-end">${participation.last_attempted}</div> */}
                </div>    
                <div className="row py-1 px-1">
                  <div className="col-8">
                    <div className="text-secondary">Unanswered</div>
                  </div>
                  {/* <div className="col-4 text-end">${ participation.totalQn - participation.last_attempted}</div> */}
                </div>    
            </div>
          </div>  
          <button className="btn btn-primary bg-white text-primary px-1 py-4 inner-nav-btn" data-bs-dismiss="offcanvas"><i className="fas fa-arrow-right"></i></button>
        </div>
    </div>
    <script src="https://source.zoom.us/2.3.5/lib/vendor/react.min.js"></script>
    <script src="https://source.zoom.us/2.3.5/lib/vendor/react-dom.min.js"></script>
    <script src="https://source.zoom.us/2.3.5/lib/vendor/redux.min.js"></script>
    <script src="https://source.zoom.us/2.3.5/lib/vendor/redux-thunk.min.js"></script>
    <script src="https://source.zoom.us/2.3.5/lib/vendor/lodash.min.js"></script>
    
    <script src="https://source.zoom.us/2.3.5/zoom-meeting-embedded-2.3.5.min.js"></script>
    <script src="plac/joinClient.js"></script>
  {/*${pageContext.request.contextPath}*/}
        
       </div> 
}
        </>
    )
}

export default TestPage;