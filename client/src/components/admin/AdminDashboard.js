import AdminHeader from "./AdminHeader";
const AdminDashboard = () => {
    return(
<div>
<AdminHeader/>
<div className="container-fluid mb-5">

    <div className="row mt-4 px-5">
      <div className="col-12">
          <div className="h5 text-b">My Interview</div>
          <small className="text-secondary">List of all my interviews</small>
      </div>
    </div>

    <div className="row mt-3 px-5">
        <div className="col-12">
            <div className="d-flex justify-content-between">
                <div className="h5 text-b">Current Interview</div>
                <div>
                  <button className="btn bg-r text-white btn-sm" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    <i className="fas fa-plus"></i> Create Interview
                  </button>
                </div>
            </div>
        </div>
    </div>

    <div className="row px-5">
      {/* <!-- <c:if test="${tests.size() == 0 }"> --> */}
        <div className="text-center text-secondary mt-5">
          You don't have any Interviews yet.
        </div>
        <div className="text-center text-secondary mt-3">
          <button className="btn bg-r text-white btn-sm" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
            <i className="fas fa-plus"></i> Create Interview
          </button>
        </div>
      {/* <!-- </c:if>
      <c:if test="${tests.size() > 0 }"> --> */}
      {/* <!-- <c:forEach items="${tests}" var="test"> --> */}
          <div className="col-4 mt-4">
            <div className="shadow">
              <div className="card-header text-img text-d" style={{height: '120px'}}>
               <a href="/admin/test/${test.tid}" className="decor-none">
                 {/* <!-- <h4>${test.tname}</h4> --> */}
               </a>
              </div>
              <div className="px-3 py-2">
                <div className="d-flex justify-content-between">
                  <div>
                     {/* <!-- <small>Date : <strong>${test.date}</strong></small> --> */}
                  </div>
                  <div>
                    {/* <!-- <c:if test="${test.state == 'start'}"> --> */}
                      <span className="badge rounded-pill bg-r">live</span>
                    {/* <!-- </c:if> -->
                    <!-- <c:if test="${test.needPayment == 'true'}">
                      <span className="badge rounded-pill bg-y">Rs ${test.amount}</span>
                    </c:if> --> */}
                  </div>
                </div>
                <div className="mt-1">
                  {/* <!-- <small>Start Time : ${test.start_time}</small> --> */}
                </div>
                <div className="mt-1">
                   {/* <!-- <small>Duration : ${test.duration} hr</small> --> */}
                </div>
                <div className="mt-1">
                   {/* <!-- <small>Total Marks : <c:if test="${test.state == 'start'}">${test.totalMarks}</c:if>
                    <c:if test="${test.state != 'start'}">-</c:if> --> */}
                  {/* </small> */}
                </div>
              </div>
            </div>
          </div>
        {/* </c:forEach> */}
      {/* </c:if> */}
      
    </div>

    

{/* <!-- MODAL --> */}
<div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div className="offcanvas-header">
      <h5 id="offcanvasRightLabel text-b">Add Test</h5>
      <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div className="offcanvas-body">
        <form name="dashboard" method="POST" action="/admin/dashboard">
            <div className="mb-3">
                <label htmlFor="testName" className="form-label">Interview Name</label>
                 <input placeholder="Eg. Aptitude-Kec" type="text" className="form-control form-control-sm" />
            </div>
            <div className="mb-3">
                <label htmlFor="date" className="form-label">Date</label>
                <input type="date" className="form-control form-control-sm" id="date" />
            </div>
            <div className="mb-3">
                <label htmlFor="time" className="form-label">Start Time</label>
                <input type="time" className="form-control form-control-sm" id="time" />
            </div> 
            <div className="mb-3">
                <label htmlFor="duration" className="form-label">Duration (Eg. 1.30) </label>
                <input type='text' placeholder="eg. 1 hr" className="form-control form-control-sm" id="duration" />
            </div>
            <div className="mb-3">
              <label htmlFor="duration" className="form-label">Payment (in Rs)</label>
              <input type='text' className="form-control form-control-sm" id="duration" />
              <small className="mt-1 text-secondary">Leave empty if you don't want have any fee to take this Interview</small>
            </div>

            <div className="mb-3">
              <label htmlFor="participant_id" className="form-label">Interviewee</label>
               <select className="form-control form-control-sm" id="participant_id" >
                {/* <c:forEach var="user" items="${participants}"> */}
                  <option value="${user.uid}" label="${user.name}"></option>
                {/* </c:forEach>  */}
              </select>
            </div>

            <button type="submit" className="btn bg-success text-white btn-sm px-5">Create Interview</button>
          </form>
    </div>
  </div>
</div>
</div>

    );
}

export default AdminDashboard;