import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getUserTests } from "../../store/User-actions";
import { getSubmissionForTid, getTests, updateTest } from "../../store/AdminDashboardActions";
import { getUsers } from "../../store/AdminDashboardActions";

const AdminResult = () => {
  const testId=localStorage.getItem("currentTest");
  const submissions=useSelector(state=>state.adminDashboard.submissions);
  const user=useSelector((state)=>state.auth.userInfo);
  const test=useSelector(state=>state.adminDashboard.tests.filter((test)=>test._id===testId)[0])
  const usersList=useSelector(state=>state.adminDashboard.usersList);
  
  const dispatch=useDispatch();
  useEffect(()=>{
    console.log(user)
    if(!test)
      dispatch(getTests(user._id));
    if(usersList.length==0)
      dispatch(getUsers());
      dispatch(getSubmissionForTid(testId));
  },[])

useEffect(()=>{
  console.log(test);
},[test])

useEffect(()=>{
  console.log(submissions);
},[submissions])
useEffect(()=>{
  console.log(usersList);
},[usersList])

const viewSubmissionHandler=(subId)=>{
  localStorage.setItem('currentSubmission',subId)
  console.log(subId);
}
const restartHandler=()=>{
  let temp=Object.assign({},test,{'state':'edit'})
  dispatch(updateTest(temp));
}

    return(
        
        <div>
          {test && usersList &&
          <>
    <div className="container-fluid">
      <div className="px-5 mt-4">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/admin/adminHistory" className="decor-none text-light"> Completed</Link></li>
            <li className="breadcrumb-item active" aria-current="page"><Link to="/admin/adminHistory" className="decor-none  text-light">Back</Link></li>
          </ol>
        </nav>
      </div>

      <div className="row mt-3 px-5">
          <div className="d-flex justify-content-between">
              <div>
                <span className="h5 text-light">Result: <span className="text-warning">{test.tname}</span></span>
                <br/><small className="text-light">Results of Interview takers</small>
              </div>
              <div className="fs-2">
                <span className="badge bg-light rounded-pill text-dark fw-normal">{test.state}</span>
              </div>
      </div>
      <div className="row mt-4 px-5 fs-5 bg-light rounded">
              <div className="d-flex justify-content-between fw-bolder">
                <span>Date: <span className="fw-normal">{test.date}</span></span>
                <span>Start Time: <span className="fw-normal">{test.start_time}</span></span>
                <span>Duration: <span className="fw-normal">{test.duration} hr</span></span>
                {/* <span>Amount: <span className="fw-normal">{test.amount} Rs</span></span> */}
                <span>Total Marks: <span className="fw-normal">{test.totalMarks}</span></span>
              </div>
          </div>
    </div>
      <div className="row mt-5 px-5">
          <div className="col-12">
              <div className="d-flex justify-content-between">
                   <div className="h5 text-light">Ranking</div> 
                   <Link className="btn btn-outline-light" onClick={restartHandler}>Restart Interview</Link>
                  {/* <div> <Link to="/admin/ExcelExport" className="btn bg-success text-light btn-sm"><i class="bi bi-download"></i> Download Result</Link></div> */}
              </div>
          </div>
      </div>
      
      <div className="row px-5 mt-3">
          <div className="col-12">
              <table className="table table-dark table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Score</th>
                      <th scope="col">Rank</th>
                      <th scopr="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {submissions.map((sub,index)=>{
                      let user=usersList.filter((users)=>users._id===sub.uid)[0]
                      console.log(user);
                      return(
                      <tr>
                         <td scope="row">{user.name}</td> 
                        <td>{user.email}</td>
                        <td>{sub.totalMarks}</td>
                        <td>{index+1}</td>
                        <td><Link to="/admin/adminSubmission" onClick={()=>viewSubmissionHandler(sub._id)} className="btn btn-success">view submission</Link></td>
                      </tr>
                      );
                      })
                     }
                  </tbody>
              </table>
          </div>
      </div> 
    </div>
    </>
    }
        
      </div>
    );
}

export default AdminResult;