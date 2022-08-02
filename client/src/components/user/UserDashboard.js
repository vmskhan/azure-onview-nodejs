import UserHeader from "./UserHeader"

const UserDashBoard = () => {
    return(
        <div>
            <UserHeader/>
    
      
    {/* <!-- <div className="container-fluid mb-5">

        <div className="row mt-4 px-5">
            <div className="col-12">
                <div className="h5 text-b">My Interviews</div>
            </div>
            <div className="col-12">
                <p>List of all my tests</p>
            </div>
        </div> --> */}

        <div className="row mt-3 px-5">
            <div className="col-12">
                <div className="d-flex justify-content-between">
                    <div className="h5 text-b">Interview Live</div>
                </div>
            </div>
        </div>

        <div className="row px-5">
          {/* <c:if test="${currentTest.size() == 0}"> */}
            <div className="text-center text-secondary mt-5">
              You don't have any interviews live now.
            </div>
          {/* </c:if> */}
          {/* <c:if test="${currentTest.size() > 0}">    */}
            {/* <c:forEach items="${currentTest}" var="test"> */}
              <div className="col-4 mt-4">
                <div className="shadow border rounded-3 border-4 border-danger">
                  <div className="card-header border-bottom border-dark text-img text-d" style={{height: '120px'}}>
                      {/* <h4>${test.test.tname}</h4> */}
                  </div>
                  <div className="px-3 py-2">
                    <div className="d-flex justify-content-between">
                      <div>
                          {/* <small>Date : <strong>${test.test.date}</strong></small> */}
                      </div>
                      <div>
                        {/* <c:if test="${test.test.needPayment == 'true'}">
                          <span className="badge rounded-pill bg-y">Rs ${test.test.amount}</span>
                        </c:if> */}
                      </div>
                    </div>
                    <div className="mt-1">
                      {/* <small>Start Time : ${test.test.start_time}</small> */}
                    </div>
                    <div className="mt-1">
                        {/* <small>Duration : ${test.test.duration} hr</small> */}
                    </div>
                    <div className="mt-2 d-flex justify-content-between">
                        {/* <small>Total Marks : ${test.test.totalMarks}</small> */}
                        {/* <c:if test="${test.test.needPayment == 'false'}"> */}
                          {/* <c:if test="${test.participation.last_attempted == 0 }"> */}
                            {/* <a href="/user/test/${test.test.tid}/s">
                              <button className="btn btn-sm bg-success text-white"><i className="fas fa-play"></i> Start Interview</button>
                            </a> */}
                          {/* </c:if> */}
                          {/* <c:if test="${test.participation.last_attempted != 0 }"> */}
                            {/* <a href="/user/test/${test.test.tid}/qn">
                              <button className="btn btn-sm bg-b text-white"><i className="fab fa-rev"></i> Resume Interview</button>
                            </a>
                          </c:if>
                        </c:if>
                        <c:if test="${test.test.needPayment == 'true'}">
                          <c:if test="${test.participation.paymentDone == 'false'}">
                            <a href="/user/test/${test.test.tid}/payment">
                              <button className="btn btn-sm bg-y text-white">Pay Rs ${test.test.amount}</button>
                            </a>
                          </c:if>
                          <c:if test="${test.participation.paymentDone == 'true'}">
                            <c:if test="${test.participation.last_attempted == 0 }">
                              <a href="/user/test/${test.test.tid}/s">
                                <button className="btn btn-sm bg-success text-white"><i className="fas fa-play"></i> Start Interview</button>
                              </a>
                            </c:if>
                            <c:if test="${test.participation.last_attempted != 0 }">
                              <a href="/user/test/${test.test.tid}/qn">
                                <button className="btn btn-sm bg-b text-white"><i className="fab fa-rev"></i> Resume Interview</button>
                              </a>
                            </c:if>
                          </c:if>
                        </c:if> */}
                    </div>
                  </div>
                </div>
              </div>
            {/* </c:forEach> */}
          {/* </c:if> */}
          
        </div>


        <div className="row mt-3 px-5">
          <div className="col-12">
              <div className="d-flex justify-content-between">
                  <div className="h5 text-b">Interviews Scheduled</div>
              </div>
          </div>
      </div>

      <div className="row px-5">
        {/* <c:if test="${currentTest.size() == 0}"> */}
          <div className="text-center text-secondary mt-5">
            You don't have any scheduled interviews.
          </div>
        {/* </c:if> */}
        {/* <c:if test="${currentTest.size() > 0}">    */}
          {/* <c:forEach items="${currentTest}" var="test"> */}
            <div className="col-4 mt-4">
              <div className="shadow border rounded-3 border-4 border-danger">
                <div className="card-header border-bottom border-dark text-img text-d" style={{height: '120px'}}>
                    {/* <h4>${test.test.tname}</h4> */}
                </div>
                <div className="px-3 py-2">
                  <div className="d-flex justify-content-between">
                    <div>
                        {/* <small>Date : <strong>${test.test.date}</strong></small> */}
                    </div>
                    <div>
                      {/* <c:if test="${test.test.needPayment == 'true'}">
                        <span className="badge rounded-pill bg-y">Rs ${test.test.amount}</span>
                      </c:if> */}
                    </div>
                  </div>
                  <div className="mt-1">
                    {/* <small>Start Time : ${test.test.start_time}</small> */}
                  </div>
                  <div className="mt-1">
                      {/* <small>Duration : ${test.test.duration} hr</small> */}
                  </div>
                  <div className="mt-2 d-flex justify-content-between">
                      {/* <small>Total Marks : ${test.test.totalMarks}</small>
                      <c:if test="${test.test.needPayment == 'false'}">
                        <c:if test="${test.participation.last_attempted == 0 }">
                          <a href="/user/test/${test.test.tid}/s">
                            <button className="btn btn-sm bg-success text-white"><i className="fas fa-play"></i> Start Interview</button>
                          </a>
                        </c:if>
                        <c:if test="${test.participation.last_attempted != 0 }">
                          <a href="/user/test/${test.test.tid}/qn">
                            <button className="btn btn-sm bg-b text-white"><i className="fab fa-rev"></i> Resume Interview</button>
                          </a>
                        </c:if>
                      </c:if>
                      <c:if test="${test.test.needPayment == 'true'}">
                        <c:if test="${test.participation.paymentDone == 'false'}">
                          <a href="/user/test/${test.test.tid}/payment">
                            <button className="btn btn-sm bg-y text-white">Pay Rs ${test.test.amount}</button>
                          </a>
                        </c:if>
                        <c:if test="${test.participation.paymentDone == 'true'}">
                          <c:if test="${test.participation.last_attempted == 0 }">
                            <a href="/user/test/${test.test.tid}/s">
                              <button className="btn btn-sm bg-success text-white"><i className="fas fa-play"></i> Start Interview</button>
                            </a>
                          </c:if>
                          <c:if test="${test.participation.last_attempted != 0 }">
                            <a href="/user/test/${test.test.tid}/qn">
                              <button className="btn btn-sm bg-b text-white"><i className="fab fa-rev"></i> Resume Interview</button>
                            </a>
                          </c:if>
                        </c:if>
                      </c:if> */}
                  </div>
                </div>
              </div>
            </div>
          {/* </c:forEach> */}
        {/* </c:if> */}
        
      </div>


{/* 
        <!-- <div className="row px-5">
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
                      <c:forEach items="${currentTest}" var="test">
                          <tr>
                            <td scope="row"> ${test.test.tname}</td>
                            <td>${test.test.date}</td>
                            <td>${test.test.start_time}</td>
                            <td>${test.test.duration}</td>
                            <td>30</td>
                            <c:if test="${test.test.needPayment == 'false'}">
                              <td> 
                                <div>
                                  <a href="/user/test/${test.test.tid}/start">
                                    <button className="btn btn-primary btn-sm"><i className="fab fa-cloudscale"></i> Start Test</button>
                                  </a>
                                </div>
                              </td>
                            </c:if>
                            <c:if test="${test.test.needPayment == 'true'}">
                             
                              <c:if test="${test.participation.paymentDone == 'false'}">
                                <td> 
                                  <div>
                                    <a href="/user/test/${test.test.tid}/payment">
                                      <button className="btn btn-warning btn-sm text-white"><i className="fas fa-rupee-sign"></i> Pay ${test.test.amount}</button>
                                    </a>
                                  </div>
                                </td>
                              </c:if>
                              <c:if test="${test.participation.paymentDone == 'true'}">
                                <td> 
                                  <div>
                                    <a href="/user/test/${test.test.tid}/start">
                                      <button className="btn btn-primary btn-sm"><i className="fab fa-cloudscale"></i> Start Test</button>
                                    </a>
                                  </div>
                                </td>
                              </c:if>
                            </c:if>
                            
                          </tr>
                    </c:forEach>
                    </tbody>
                </table>
            </div>
        </div>

        <div className="row mt-5 px-5">
            <div className="col-12">
                <div className="h5 text-b">Completed</div>
            </div>
        </div>

        <div className="row px-5">
            <div className="col-12">
                <table className="table  table-striped">
                    <thead>
                     
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Date</th>
                        <th scope="col">Total Marks</th>
                        <th scope="col">Marks Scored</th>
                         <th scope="col">Rank</th> 
                      </tr>
                      
                    </thead>
                    <tbody>
                      <c:forEach items="${completedTest}" var="test">
                      <tr>
                        <td scope="row"><a href="/user/studentresult/${test.test.tid}/${test.participation.pk.uid}">${test.test.tname}</a></td>
                        <td>${test.test.date}</td>
                        <td>${test.test.totalMarks}</td>
                        <td>${test.participation.score}</td>
                         <td>3</td> 
                      </tr>
                     </c:forEach>
                    </tbody>
                </table>
            </div>
        </div>
    </div> -->
 */}

        </div>
    )
}

export default UserDashBoard;