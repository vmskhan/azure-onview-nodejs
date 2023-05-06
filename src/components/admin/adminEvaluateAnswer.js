import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteSubmissionWithId, getQuestions, getSubmissionForTid, getTests, getUsers, updateSubmissionState, updateTest } from "../../store/AdminDashboardActions";

const AdminEvaluateAnswer = () => {
  const baseUrl=process.env.REACT_APP_IMAGE_UPLOADS_BASE_URL;
  const testId=localStorage.getItem("currentTest");
  const submissionId=localStorage.getItem("currentSubmission");
  const submission=useSelector(state=>state.adminDashboard.submissions.filter((sub)=>sub._id===submissionId)[0]);
  const user=useSelector((state)=>state.auth.userInfo);
  const test=useSelector(state=>state.adminDashboard.tests.filter((test)=>test._id===testId)[0])
  const participant=useSelector(state=>state.adminDashboard.usersList.filter((us)=>us._id===submission.uid)[0]);
  const questions=useSelector(state=>state.adminDashboard.questions);
  const dispatch=useDispatch();
  
  useEffect(()=>{
    console.log(user)
    if(!test)
      dispatch(getTests(user._id));
    if(!participant)
      dispatch(getUsers());
      dispatch(getSubmissionForTid(testId));
      dispatch(getQuestions(testId));
      console.log(baseUrl)
  },[])
useEffect(()=>{
  console.log(participant);
},[participant]);

    const submissionStateHandler=(state,index,questionMarks)=>{
      let data={
        'tid':testId,
        'uid':test.pid,
        index,
        'newState':state,
        questionMarks
      }
      console.log(data);
      dispatch(updateSubmissionState(data))
    }

    const deleteSubmissionHandler=()=>{
      dispatch(deleteSubmissionWithId(submission._id,test))
    }
    const finishHandler=()=>{
      let temp=Object.assign({},test,{'state':"end"});
      console.log(temp)
      dispatch(updateTest(temp));
    }

  return(
    <>
    {submission && test && participant &&
      <>
    
        <div>
    <div className="container-fluid">      
        <div className="px-5 mt-4">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item "><Link to="/admin/adminHistory" className="text-info">Pending</Link></li>
              <li className="breadcrumb-item "><Link to="/admin/adminPendingSubmissions" className="text-info">Submissions</Link></li>
              <li className="breadcrumb-item active text-light" aria-current="page">Evaluation</li>
            </ol>
          </nav>
        </div>
        <div className="row mt-2 px-5">
            <div className="col-12">
                <div className="d-flex justify-content-between">
                  <div>
                    <div className="h5 text-light">Interview : <span className="text-warning">{test.tname}</span> </div>
                    <small className="text-light">Evaluate answers of the Interviewee</small>
                  </div>
                  <div>
                     <div className="h5 text-light">Interviewee : <span className="text-warning">{participant.name}</span></div> 
                    <button className="btn btn-outline-light fw-bolder m-2" onClick={()=>{finishHandler()}}>Finish Evaluation</button>
                    <button className="btn btn-outline-light fw-bolder m-2" onClick={()=>{deleteSubmissionHandler()}}>Delete Submission</button>
                  </div>
                    
                </div>
            </div>
        </div>
        <div className="row mt-2 px-5">
            <div className="col-12">
                <div className="d-flex justify-content-between">
                  <div>
                    <div className="h5 text-light">Marks Scored: <span className="text-warning">{submission.totalMarks}</span> </div>
                    <div className="h5 text-light">Total Marks: <span className="text-warning">{test.totalMarks}</span> </div>

                  </div>
                  <div>
                  <span className="h5 text-light">Evaluation Status : </span>
                     <div className="btn fs-5 text-light rounded-pill bg-success">{submission.submissionState}</div> 
                    {/* <button className="btn btn-outline-light fw-bolder m-2" onClick={()=>{finishHandler()}}>Finish Evaluation</button>
                    <button className="btn btn-outline-light fw-bolder m-2" onClick={()=>{deleteSubmissionHandler()}}>Delete Submission</button> */}
                  </div>
                    
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className="row mt-5 px-5">
              <div className="col-12">
                
                  
                  
                 {questions.map((question,index)=>{
                  return(<>
                  <div className="card px-2 py-3 d-flex mb-2">
                    
                  <div className="row">
                    
                    <div className="col-6 border-end border-5 border-success">
                      <div className="">
                        <div className="d-flex justify-content-between">
                          <div className="h5 text-b">Question {index+1}</div>
                          {/* {question.idx}</div> */}
                          <p>Mark : <strong>{question.marks}</strong></p>
                        </div>
                        <div className="mt-2">
                          <p>{question.question.text}</p>
                        </div>
                        
                        <div className="mt-2">
                           {question.question.hasImage && 
                          <img className="img-fluid" src={baseUrl+question.question.image} />
                           }
                            </div>
                        </div> 

                        <div>
                          <div className="h5 text-b">Answer</div>
                          <div className="mt-2">  
                            <p>{question.answer.text}</p>
                          </div>
                          <div className="mt-2">
                            {question.answer.hasImage && 
                            <img className="img-fluid" src={baseUrl+question.answer.image} />
                            }
                          </div>
                        </div>

                      </div>
                    
                    <div className="col-6 border-end border-dark" >
                      <div className="">
                        <div className="d-flex justify-content-between">
                          <div className="h5 text-b">Answer By Participant</div>
                          {submission.submissions.filter((sub)=>sub.qid===question._id)[0].answerStatus==='correct'?(
                            <div className="h5 bg-success text-light rounded p-2">{submission.submissions.filter((sub)=>sub.qid===question._id)[0].answerStatus}</div>
                          ):(
                            <div className="h5 bg-danger text-light rounded p-2">{submission.submissions.filter((sub)=>sub.qid===question._id)[0].answerStatus}</div>
                          )
                          
                            }
                          
                        </div>
                        {question.question.format==='Objective Type-A'&&
                        <>
                            {question.options.map((option)=>{
                              return(
                              <>
                              <div className="card px-2 py-2 mb-2 border-danger">
                                <div className="form-check">
                                  {submission.submissions.filter((sub)=>sub.qid===question._id)[0].choice==option.id?
                                  (
                                    <input className="form-check-input" type="radio"  id={option.id} value={option.text} name="optionText" disabled checked/>
                                  ):(
                                    <input className="form-check-input" type="radio"  id={option.id} value={option.text} name="optionText" disabled/>
                                  ) 
                                  }
                                  <label className="form-check-label mb-2"> {option.text} </label> 
                                  <div className="w-100"></div>
                                  {option.hasImage &&
                                  <img className="img-fluid" src={baseUrl+option.image}/>
                                  }
                                </div>
                              </div>
                              </>)
                            })
                            }
                            {/* <!-- <input type="submit" className="btn btn-primary btn-sm mt-5 px-5" label="Next" /> --> */}
                          
                          </>
                        }
    
                        {question.question.format==='Objective Type-B' &&
                        <>
                            {question.options.map((option)=>{
                              return(<>
                              
                              <div className="card px-2 py-2 mb-2 border-danger">
                                <div className="form-check">
                                  {submission.submissions.filter((sub)=>sub.qid===question._id)[0].choice.includes(option.id)?(
                                    <input className="form-check-input" type="checkbox"  id={option.id} value={option.text} name="optionText" disabled checked/>
                                  ):(
                                    <input className="form-check-input" type="checkbox"  id={option.id} value={option.text} name="optionText" disabled/>
                                  )
                                  }
                                   <label className="form-check-label mb-2"> {option.text}</label> 
                                  {option.hasImage &&
                                    
                                  <img className="img-fluid" src={baseUrl+option.image}/>
                                  }
                                </div>
                              </div>
                              
                              </>)
                              })
                              }
                         
                          </>
                        }
                        {question.question.format==='Subjective Type-A' &&
                        <>
                          
                            
                              <div className="card px-2 py-2 mb-2 border-danger">
                                <div className="form-check">
                                  <label className="form-check-label mb-2" htmlFor="ans">Answer: </label><br/>
                                  <textarea className="form-control"  id="ans"  name="answerText"  value={submission.submissions.filter((sub)=>sub.qid===question._id)[0].choice} disabled/>
                                  {/* <label className="form-check-label mb-2" htmlFor="fileupld">Upload files: </label> */}
                                  {/* <input className="form-control" type="file" name="answerImage" id="fileupld"/> */}
                                </div>
                              </div>
                          
                          </>
                        }
                        {/* <!-- correct/wrong selection buttons --> */}
                        <div className="mt-2 text-end">
                          <button className="btn btn-success m-2" onClick={()=>submissionStateHandler('correct',submission.submissions.findIndex((sub)=>sub.qid===question._id),question.marks)}><i className="bi bi-check-circle"></i> Correct Answer </button>
                          <button className="btn btn-danger m-2" onClick={()=>submissionStateHandler('wrong',submission.submissions.findIndex((sub)=>sub.qid===question._id),question.marks)}><i className="bi bi-x-circle"></i> Wrong Answer</button>
                        </div>
                      </div>
                    </div>    


                  </div>
                  
                  </div>
                  {/*   <!--end card--> */}
                <br/><br/>
                
                </>);
                 })
                 }
    
                  
                </div>
              </div>
            </div>        
        </div>

</div>
</>
}
</>
    )
}

export default AdminEvaluateAnswer;