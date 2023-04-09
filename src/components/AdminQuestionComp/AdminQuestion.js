import axios from "axios";
import { useEffect, useState } from "react";
import OffcanvasHeader from "./OffcanvasHeader";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteQuestionWithGivenQid, getQuestions, getTests, getUsers, updateTest } from "../../store/AdminDashboardActions";
import { Offcanvas } from "bootstrap";

import { useRef } from "react";
import AdminDynamicComponent, { adminQuestionComponents } from "../data/AdminDynamicComponent";
const { default: AdminHeader } = require("../admin/AdminHeader")

const AdminQuestion = () => {

  
const testId=localStorage.getItem('currentTest');  
const test=useSelector(state=>state.adminDashboard.tests.filter((test)=>test._id===testId)[0]);
const usersList=useSelector(state=>state.adminDashboard.usersList);
const questions=useSelector(state=>state.adminDashboard.questions);

const dispatch=useDispatch();

const [questionType,setQuestionType]=useState('Objective Type-A');

const [loading,setLoading]=useState(false);  
const [mode,setMode]=useState("new");
const [pid,setPid]=useState(undefined);
const [currentQuestion,setCurrentQuestion]=useState(null);
const user=JSON.parse(localStorage.getItem('userInfo'));
const questionRef=useRef(null);

useEffect(()=>{
  if(!test)
      fetchTest();
  if(usersList.length===0)
    fetchUsers();
},[usersList])

useEffect(()=>{
console.log('Test:');
console.log(test);
if(test)
{
  console.log(test.pid)
  setPid(test.pid);
}
},[test])

useEffect(()=>{
  console.log(pid);
},[pid])

useEffect(()=>{
  fetchQuestions();
},[])

useEffect(()=>{
  console.log('Questions:');
  console.log(questions);
},[questions])

const fetchTest=()=>{
    dispatch(getTests(user._id))
}

const fetchUsers=()=>{
  dispatch(getUsers());
}

const fetchQuestions=()=>{
  dispatch(getQuestions(testId));
}


const changeTestState=(newState)=>{
  let newTest=Object.assign({},test,{state:newState});
  console.log(newTest);
  dispatch(updateTest(newTest));
} 
const deleteQuestion=(index)=>{
  let qid=questions[index]._id;
  // console.log('delete methood called for'+qid);
  dispatch(deleteQuestionWithGivenQid(qid,testId));
  
}

const editQuestion=(index)=>{
  setMode('edit');
  setCurrentQuestion(questions[index]);
  setQuestionType(questions[index].questionFormat);
  // setMyDynamicComponent(questionComponents[questions[index].questionFormat]);
 const offcanvas= questionRef.current;
 var bsOffCanvas=new Offcanvas(offcanvas);
 bsOffCanvas.show();
}
const newQuestionHandler=()=>{
  setMode('new');
  setCurrentQuestion(null);
}
const ChangeParticipantHandler=()=>
{
  let newTest=Object.assign({},test,{pid});
  console.log(newTest);
  dispatch(updateTest(newTest)); 
}

  return(
    <>
    {test &&
        <div>
  <AdminHeader/>

    <div className="container-fluid">      
        <div className="px-5 mt-4">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item "><Link to="/admin/adminDashboard" className="decor-none">Dashboard</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Interview</li>
            </ol>
          </nav>
        </div>
        <div className="row mt-2 px-5">
            <div className="col-12">
                <div className="d-flex justify-content-between">
                  <div>
                     <div className="h5 text-b">Interview : <span className="text-primary">{test.tname}</span></div> 
                    <small className="text-secondary">Create and edit questions for the Interview</small>
                  </div>
                  <div className="col-4">
                  {test.state === 'edit' &&
                    <div className="input-group mb-3">
                    <span className="input-group-text text-b">Participant </span>
                    
                      <select className="form-select" name="pid" value={pid} onChange={(e) => setPid(e.target.value)}>
                    { usersList.map((user)=>{
                      return(
                        <option value={user._id} label={user.name}></option>
                      );
                    })
                    }
                    </select>
                    <button class="btn btn-outline-success" type="button" onClick={ChangeParticipantHandler}>Change</button>
                    </div>
                   }
                   { test.state!=='edit' && 
                    <span className="h5 text-b">Participant: {usersList.filter((user)=>user._id===pid)[0]!==undefined && usersList.filter((user)=>user._id===pid)[0].name}</span>
                   } 
                  </div>
                    {test.state === 'edit' &&
                      <div>                         
                          <button className="btn bg-r text-white btn-sm" onClick={(e)=>changeTestState('start')}><i className="fab fa-cloudscale"></i> Start Interview</button>
                      </div>
                    }
                    {test.state === 'start' &&
                      <div>
                          <button className="btn bg-r text-white  btn-sm" onClick={(e)=>changeTestState('end')}><i className="fab fa-cloudscale"></i> End Interview</button>
                        <Link to="/admin/startMeet">
                          <button className="btn bg-info text-white  btn-sm"><i className="far fa-handshake"></i> Start Zoom Meeting</button>
                        </Link>
                      </div>  
                    }  
                </div>
            </div>
        </div>

        <div className="row mt-5 px-5">
            <div className="col-12">
                <div className="d-flex justify-content-between">
                    <div className="h5 text-b">Questions</div>
                    {test.state === 'edit' &&
                      <div><button className="btn text-white bg-success btn-sm" data-bs-toggle="offcanvas" data-bs-target="#newQuestionOffCanvas" aria-controls="offcanvasRight" onClick={newQuestionHandler}> <i className="fas fa-plus"></i> Add Question</button></div>
                    }
                </div>
            </div>
        </div>

        <div className="row px-5">
            <div className="col-12">
                <table className="table table-striped">
                    <thead >
                      <tr >
                        <th scope="col" >S.No</th>
                        <th scope="col" >Question</th>
                        <th scope="col" className="w-25">Image</th>
                        <th scope="col" >Marks</th>
                        {test.state === 'edit' &&
                          <th scope="col" >Action</th>
                        }
                      </tr>
                    </thead>
                    <tbody>
                      { questions.map((question,index)=>{
                        return(<tr key={index}>
                          <td scope="row">
                            {index+1}
                          </td>
                          <td>{question.questionText}</td>
                          <td>
                            {question.questionImage!=null ?
                            (<img className="w-75" src="/img/qs${q.qid}.jpg"/>):(<p>No Image</p>)
                              }
                          </td>
                           <td>{question.marks}</td>
                          {test.state === 'edit' &&
                            <td colSpan="2" >
                               <button className="btn btn-primary btn-sm" onClick={()=>editQuestion(index)}><i className="bi bi-pencil-square"></i> edit</button>
                              <span className="px-2"></span>
                                <button className="btn btn-danger btn-sm" onClick={()=>deleteQuestion(index)}><i className="bi bi-trash3"></i> delete</button>
                            </td>  
                            }
                        </tr>
                        );
                      })
                    }
                    </tbody>
                </table>
            </div>
        </div>

        <div className="offcanvas offcanvas-end overflow-scroll" tabIndex="-1" id="newQuestionOffCanvas" aria-labelledby="offcanvasRightLabel" ref={questionRef}>
            <OffcanvasHeader title={questionType} qtypes={Object.keys(adminQuestionComponents)} setQuestionType={setQuestionType}/>
            <div className="offcanvas-body">
              <AdminDynamicComponent questionType={questionType} question={currentQuestion} mode={mode}/>
            </div>
          </div>
          
    </div>
      
        </div>
            }
            </>
    );
}

export default AdminQuestion;