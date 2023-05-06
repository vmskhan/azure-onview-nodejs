import { Link } from "react-router-dom";
import "./user.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getQuestionsUser, getUserSubmission, getUserTests } from "../../store/User-actions";

const UserResult = () =>{
  const submission=useSelector((state)=>state.user.submission);
  const dispatch=useDispatch();
  const user=useSelector((state)=>state.auth.userInfo);
  const tid=localStorage.getItem('currentTest');
  const test=useSelector((state)=>state.user.tests.filter((test)=>test._id===tid)[0]);
  const questions=useSelector((state)=>state.user.questions);
  useEffect(()=>{
    // if(JSON.stringify(submission)==='{}')
      dispatch(getUserSubmission(tid,user._id));
    // if(!test)
      dispatch(getUserTests(user._id));
    // if(questions.length===0)
      dispatch(getQuestionsUser(tid));
  },[])
    return(<>
    { test && JSON.stringify(submission)!=='{}' && questions.length!==0 &&
    <div className="container-fluid text-light">
      <div className="px-5 mt-4">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item text-primary"><Link to="/user/userHistory" className="text-info"> Completed</Link></li>
            <li className="breadcrumb-item active text-light" aria-current="page">Result</li>
          </ol>
        </nav>
      </div>

      <div className="row mt-3 px-5">
          <div className="col-12">
              <div className="h5">Submission</div>
              <small className="text-light">Submissions of your Interview for each Question</small>
          </div>
      </div>

      <div className="row mt-3 px-5 bg-dark">
        <div className="h5 text-center">
            Analysis
        </div>
          <div className="d-flex justify-content-between">
              <div className="h6">
                <div className="mb-1">
                Total No. of Questions: {questions.length}
                </div>
                <div className="mb-1">
                Total Marks: {test.totalMarks}
                </div>
              </div>
              <div className="h6">
                <div className="mb-1">
                Marks Scored: {submission.totalMarks}
                </div>
                <div className="mb-1">
                Total Correct: {submission.submissions.filter((sub)=>sub.answerStatus==='correct').length}
                </div>
                <div className="mb-1">
                Total Wrong: {submission.submissions.filter((sub)=>sub.answerStatus==='wrong').length}
                </div>
                <div className="mb-1">
                Percentage: {(submission.submissions.filter((sub)=>sub.answerStatus==='correct').length/questions.length)*100}%
                </div>
              </div>
              
          </div>
      </div>

      <div className="row mt-5 px-5">
          <div className="col-12">
              <div className="d-flex justify-content-between">
                   <div className="h5">Interview : <span className="text-primary">{test.tname}</span></div> 
                  {/* <div> <Link to="/user/sendMail/plhl1/plhl2" className="btn bg-success text-white btn-sm m-1"><i class="bi bi-share-fill"></i> Share Result</Link>
                    <Link to="/user/exportpdf/plhl1/plhl2"  className="btn bg-success text-white btn-sm m-1"><i class="bi bi-download"></i> Download Result</Link></div> */}
              </div>
          </div>
      </div>
      
      <div className="row px-5">
          <div className="col-12">
              <table className="table table-dark table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Question</th>
                      <th scope="col">Correct Answer</th>
                      <th scope="col">Your Answer</th>
                      <th scope="col">Status</th>
                      <th scope="col">Marks</th>
                    </tr>
                  </thead>
                  <tbody>
                    { submission.submissions.map((sub)=>{
                      let question=questions.filter((ques)=>ques._id===sub.qid)[0];
                      return(
                        question &&
                      <tr>
                         <td scope="row">{question.question.text}</td> 
                        <td>{sub.rightAnswer}</td>
                        <td>{sub.choice}</td>
                        <td>{sub.answerStatus}</td>
                        <td>{sub.marks}</td>
                      </tr>
                      )})
                    }
                  </tbody>
              </table>
          </div>
      </div> 
    </div>
  }
    </>
    );
}

export default UserResult;