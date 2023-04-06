import { Link } from "react-router-dom";
import "./user.css";
import UserHeader from "./UserHeader";
const UserResult = () =>{
    return(
        <div>
            
  <UserHeader/>
    <div className="container-fluid">
      <div className="px-5 mt-4">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item text-primary"><Link to="/user/userDashboard" className="decor-none"> Dashboard</Link></li>
            <li className="breadcrumb-item active" aria-current="page"><Link to="/user/userHistory" className="decor-none">Back</Link></li>
          </ol>
        </nav>
      </div>

      <div className="row mt-3 px-5">
          <div className="col-12">
              <div className="h5 text-b">Submission</div>
              <small className="text-secondary">Submissions of your Interview Question-wise</small>
          </div>
      </div>

      <div className="row mt-5 px-5">
          <div className="col-12">
              <div className="d-flex justify-content-between">
                   <div className="h5 text-b">Interview : <span className="text-primary">{/*${tname}*/}</span></div> 
                  <div> <Link to="/user/sendMail/plhl1/plhl2" /*${tid}   ${uid} */ className="btn bg-success text-white btn-sm"><i className="fa fa-share-alt"></i> Share Result</Link>
                    <Link to="/user/exportpdf/plhl1/plhl2" /*${tid}   ${uid} */ className="btn bg-success text-white btn-sm"><i className="fas fa-download"></i> Download Result</Link></div>
                  
              </div>
          </div>
      </div>
      
      <div className="row px-5">
          <div className="col-12">
              <table className="table  table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Question</th>
                      <th scope="col">Correct Answer</th>
                      <th scope="col">Your Choice</th>
                      <th scope="col">Status</th>
                      <th scope="col">Mark</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* <c:forEach items="placeholder" /*${reports}  var="reports" varStatus="loop"> */}
                      <tr>
                         <td scope="row">{/*${reports.question.questionText}*/}</td> 
                        <td>{/*${reports.submission.rightanswer}*/}</td>
                        <td>{/*${reports.submission.choice}*/}</td>
                        <td>{/*${reports.submission.state}*/}</td>
                        <td>{/*${reports.submission.mark}*/}</td>
                      </tr>
                    {/* </c:forEach> */}
                  </tbody>
              </table>
          </div>
      </div> 
    </div>

        </div>
    )
}

export default UserResult;