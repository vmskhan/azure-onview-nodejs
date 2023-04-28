import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteQuestionWithGivenQid, getQuestions, getTests, getUsers, updateTest } from "../../store/AdminDashboardActions";
import { Offcanvas } from "bootstrap";

import { useRef } from "react";
import AdminDynamicComponent, { adminQuestionComponents } from "../data/AdminDynamicComponent";
import QuestionSection from "./QuestionSection";
import MarksSection from "./MarksSection";

import { adminDashboardActions } from "../../store/AdminDashboardSlice";
import { sendNewQuestion, updateQuestion } from "../../store/AdminDashboardActions";
import ModalHeader from "./ModalHeader";
import QuestionNavigator from "./QuestionNavigator";

const AdminQuestion = () => {

  const baseUrl=process.env.REACT_APP_IMAGE_UPLOADS_BASE_URL;
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
// const [question,setQuestion]=useState({});
const [marks,setMarks]=useState(0);
const [dynamicComponentData,setDynamicComponentData]=useState({options:{},answer:{}});

// useEffect(()=>{
//   console.log(currentQuestion);
// },[currentQuestion]);

useEffect(()=>{
  if(!test)
      fetchTest();
  if(usersList.length===0)
    fetchUsers();
},[usersList])

useEffect(()=>{
// console.log('Test:');
// console.log(test);
if(test)
{
  // console.log(test.pid)
  setPid(test.pid);
}
},[test])

useEffect(()=>{
  console.log(pid);
},[pid])

useEffect(()=>{
  fetchQuestions();
},[])

// useEffect(()=>{
//   console.log('Questions:');
//   console.log(questions);
// },[questions])

// useEffect(()=>{
// console.log(dynamicComponentData);
// },[dynamicComponentData])

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
  // console.log(newTest);
  dispatch(updateTest(newTest)); 
}

  const saveQuestionHandler=()=>{
    const data={
      question:currentQuestion.question,
      options:dynamicComponentData.options,
      answer:dynamicComponentData.answer,
      marks,
      tid:testId,
    }
    // console.log(data);
    // console.log(currentQuestion)
    if(mode && mode==='new')
      dispatch(sendNewQuestion(data));
    else if(mode && mode==='edit')
    {
    console.log("edit question data")
    data._id=currentQuestion._id;  
    console.log(data);
      dispatch(updateQuestion(data));
    }
  }
 
  const questionProps={
    'setQuestionObj':setCurrentQuestion,
    'questionObj':currentQuestion,
    'questionType':questionType
    };
  const dynamicComponentProps={
    'dynamicComponentData':dynamicComponentData,
    'setDynamicComponentData':setDynamicComponentData,
    'mode':mode,
    'questionType':questionType
  };

  return(
    <>
    {test &&
    <div className="container-fluid">      
        <div className="px-5 mt-4">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item "><Link to="/admin/adminDashboard" className="decor-none text-info">Dashboard</Link></li>
              <li className="breadcrumb-item active text-light" aria-current="page">Interview</li>
            </ol>
          </nav>
        </div>
        <div className="row mt-2 px-5">
            <div className="col-12">
                <div className="d-flex justify-content-between">
                  <div>
                     <div className="h5 text-light">Interview : <span className="text-warning">{test.tname}</span></div> 
                    <small className="text-light">Create and edit questions for the Interview</small>
                  </div>
                  <div className="col-4">
                  {test.state === 'edit' &&
                    <div className="input-group mb-3 text-info">
                    <span className="input-group-text text-d">Participant </span>
                    
                      <select className="form-select" name="pid" value={pid} onChange={(e) => setPid(e.target.value)}>
                    { usersList.map((user)=>{
                      return(
                        <option value={user._id} label={user.name}></option>
                      );
                    })
                    }
                    </select>
                    <button className="btn btn-outline-success text-white" type="button" onClick={ChangeParticipantHandler}>Change</button>
                    </div>
                   }
                   { test.state!=='edit' && 
                    <span className="h5 text-light">Participant: {usersList.filter((user)=>user._id===pid)[0]!==undefined && usersList.filter((user)=>user._id===pid)[0].name}</span>
                   } 
                  </div>
                    {test.state === 'edit' &&
                      <div>                         
                          <button className="btn bg-r text-white btn-sm" onClick={(e)=>changeTestState('start')}><i className="bi bi-play-circle"></i> Start Interview</button>
                      </div>
                    }
                    {test.state === 'start' &&
                      <div>
                          <button className="btn bg-r text-white  btn-sm" onClick={(e)=>changeTestState('end')}><i className="bi bi-box-arrow-left"></i> End Interview</button>
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
                    <div className="h5 text-light">Questions</div>
                    {test.state === 'edit' &&
                      <div><button className="btn text-white bg-success btn-sm" data-bs-toggle="modal" data-bs-target="#QuestionModal" aria-controls="offcanvasRight" onClick={newQuestionHandler}> <i className="bi bi-plus-circle"></i> Add Question</button></div>
                    }
                </div>
            </div>
        </div>

        <div className="row px-5">
            <div className="col-12">
                <table className="table table-dark table-striped">
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
                          <td>{question.question.text}</td>
                          <td>
                            {question.question.hasImage ?
                            (<img className="w-75" src={baseUrl+question.question.image}/>):(<p>No Image</p>)
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

          

{/* <!-- Modal --> */}
<div className="modal fade" id="QuestionModal" tabIndex="-1" aria-labelledby="QuestionModal" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <ModalHeader title={questionType}/>
      <div className="modal-body">
        <QuestionNavigator qtypes={Object.keys(adminQuestionComponents)} setQuestionType={setQuestionType}/>
        <QuestionSection {...questionProps} />
        <AdminDynamicComponent {...dynamicComponentProps}/>
        <MarksSection marks={marks} setMarks={setMarks}/>    
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary btn-sm col-4" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-success text-light btn-sm px-5 col-4" onClick={saveQuestionHandler} ><i className="fas fa-save"></i> Save</button>   
      </div>
    </div>
  </div>
</div>
    </div>
            }
            </>
    );
}

export default AdminQuestion;