import AdminHeader from "./AdminHeader"
import { Link } from "react-router-dom";

const AdminResult = () => {
    return(
        <div>
            <AdminHeader/>
           

    <div className="container-fluid">
      <div className="px-5 mt-4">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item text-primary"><Link to="/admin/adminHistory" className="decor-none"> Completed</Link></li>
            <li className="breadcrumb-item active" aria-current="page"><Link to="/admin/adminHistory" className="decor-none">Back</Link></li>
          </ol>
        </nav>
      </div>

      <div className="row mt-3 px-5">
          <div className="col-12">
              <div className="h5 text-b">Result</div>
              <small className="text-secondary">Submissions of Interview takers</small>
          </div>
      </div>

      <div className="row mt-5 px-5">
          <div className="col-12">
              <div className="d-flex justify-content-between">
                   <div className="h5 text-b">Interview : <span className="text-primary">{/*${test.tname}*/}</span></div> 
                  <div> <Link to="/admin/excelExport/placeholder" /*${test.tid}*/ className="btn bg-success text-white btn-sm"><i className="fas fa-download"></i> Download Result</Link></div>
              </div>
          </div>
      </div>
      
      <div className="row px-5">
          <div className="col-12">
              <table className="table  table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Score</th>
                      <th scope="col">Rank</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* <c:forEach items="${users}" var="users" varStatus="loop"> */}
                      <tr>
                         <td scope="row">{/*${users.user.name}*/}</td> 
                        <td>{/*${users.user.emailid}*/}</td>
                        <td>{/*${users.participation.score}*/}</td>
                        <td>{/*${loop.index+1}*/}</td>
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

export default AdminResult;