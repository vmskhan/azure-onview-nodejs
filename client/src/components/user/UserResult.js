import "./user.css";
const UserResult = () =>{
    return(
        <div>
            
  <nav className="navbar navbar-expand-lg navbar-dark text-l bg-success  px-5">
    <div className="container-fluid">
      <a className="navbar-brand " href="#">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-workspace" viewBox="0 0 16 16">
          <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
          <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z"/>
        </svg> Onview
    </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <span className="px-4"></span>
        <div className="me-auto"></div>
        <a href="/logout">
            <button className="btn btn-outline-light btn-sm" type="submit">Logout</button>
        </a>
      </div>
    </div>
</nav>
    <div className="container-fluid">
      <div className="px-5 mt-4">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item text-primary"><a href="/user/dashboard" className="decor-none"> Dashboard</a></li>
            <li className="breadcrumb-item active" aria-current="page"><a href="/user/history" className="decor-none">Back</a></li>
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
                  <div> <a href="/user/sendMail/plhl1/plhl2" /*${tid}   ${uid} */ className="btn bg-success text-white btn-sm"><i className="fa fa-share-alt"></i> Share Result</a>
                    <a href="/user/exportpdf/plhl1/plhl2" /*${tid}   ${uid} */ className="btn bg-success text-white btn-sm"><i className="fas fa-download"></i> Download Result</a></div>
                  
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