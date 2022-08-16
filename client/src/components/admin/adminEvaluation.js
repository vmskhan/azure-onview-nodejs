import AdminHeader from "./AdminHeader";

const AdminEvaluation = () => {
    return(
        <div>
            <AdminHeader/>

<div className="container-fluid mb-5">

    <div className="row mt-4 px-5">
      <div className="col-12">
          <div className="h5 text-b">Pending Interviews</div>
          <small className="text-secondary">List of all my Interviews pending for Evaluation</small>
      </div>
    </div>

    <div className="row mt-3 px-5">
        <div className="col-12">
                <div className="h5 text-b">Pending Interview evaluations</div>
        </div>
    </div>

    <div className="row px-5">
      {/* <!-- <c:if test="${pendingtests.size() == 0 }"> */}
        <div className="text-center text-secondary mt-5">
          You don't have any pending Interview evaluations.
        </div>
      {/* </c:if> */}
      {/* <c:if test="${pendingtests.size() > 0 }"> */}
        {/* <c:forEach items="${pendingtests}" var="test"> --> */}
            <div className="col-4 mt-4">
              <div className="shadow">
                <div className="card-header text-img text-d d-flex justify-content-between" style={{height: '120px'}}>
                 <a href="/admin/testeval/" /*${test.tid}*/ className="decor-none">
                   {/* <!-- <h4>${test.tname}</h4> --> */}
                 </a>
                 {/* <!-- <a href="/admin/deleteTestFromHistory/${test.tid}"> */}
                 {/* <button type="button" className="btn-close bg-white" aria-label="Close"></button>
                </a> --> */}
                </div>
                <div className="px-3 py-2">
                  <div className="d-flex justify-content-between">
                    <div>
                       <small>Date : <strong>{/*${test.date}*/}</strong></small>
                    </div>
                    <div>
                       <small>Total Marks : {/*${test.totalMarks}*/}</small>
                    </div>
                    
                  </div>
                  <div className="mt-1">
                    <small>Start Time : {/*${test.start_time}*/}</small>
                  </div>
                  <div className="mt-1">
                     <small>Duration : {/*${test.duration} hr*/}</small>
                  </div>
                </div>
              </div>
            </div>
        {/* </c:forEach> */}
      {/* </c:if> */}
      
    </div>

   {/* <!--<div className="row mt-5 px-5">
        <div className="col-12">
          <div className="d-flex justify-content-between">
            <div className="h5 text-b">Completed</div>
        </div>
      </div>
    </div>

    <div className="row px-5">
        <div className="col-12">
            <table className="table  table-striped">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Date</th>
                    <th scope="col">Start Time</th>
                    <th scope="col">Duration</th>
                    <th scope="col">Questions</th>
                  </tr>
                </thead>
                <tbody>

                  <c:forEach items="${completedtests}" var="test">
                    <c:if test="${test.state == 'end'}">
                      <tr>
                        <td scope="row">
                          <a href="/admin/result/${test.tid}">${test.tname}</a>
                        </td>
                        <td>${test.date}</td>
                        <td>${test.start_time}</td>
                        <td>${test.duration}</td>
                        <td>30</td>
                      </tr>
                    </c:if>
                 </c:forEach>

                </tbody>
            </table>
        </div>
    </div>
</div>
-->  */}


        </div>
</div>
    )
}

export default AdminEvaluation;