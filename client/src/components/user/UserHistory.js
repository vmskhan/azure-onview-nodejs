import UserHeader from "./UserHeader"

const UserHistory = () =>{
    return(
        <div>
            <UserHeader/>
            
      
    <div className="container-fluid mb-5">

        {/* <!-- <div className="row mt-4 px-5">
            <div className="col-12">
                <div className="h5 text-b">My Test</div>
            </div>
            <div className="col-12">
                <p>List of all my completed tests</p>
            </div>
        </div> --> */}

        <div className="row mt-3 px-5">
            <div className="col-12">
                <div className="d-flex justify-content-between">
                    <div className="h5 text-b text-decoration-underline">Completed Interview</div>
                </div>
            </div>
        </div>

        <div className="row px-5">
          {/* <c:if test="${completedTest.size() == 0}"> */}
            <div className="text-center text-secondary mt-5">
              You don't have any completed Interviews.
            </div>
          {/* </c:if> */}
          {/* <c:if test="${completedTest.size() > 0}"> */}
            {/* <c:forEach items="${completedTest}" var="test"> */}
              <div className="col-4 mt-4">
                <div className="shadow border rounded-3 border-4 border-primary">
                  <div className="card-header border-bottom border-dark text-img text-d" style={{height: '120px'}}>
                      {/* <a href="/user/studentresult/${test.test.tid}/${test.participation.pk.uid}" className="decor-none">
                          <h4>${test.test.tname}</h4>
                        </a> */}
                  </div>
                  <div className="px-3 py-2">
                    <div className="d-flex justify-content-between">
                      <div className="mt-1">
                        {/* <small>Total Marks : ${test.test.totalMarks}</small> */}
                      </div>
                      <div className="mt-1">
                        {/* <small>Marks Scored : <strong>${test.participation.score}</strong></small> */}
                      </div>
                    </div>
                    <div className="mt-1">
                        {/* <small>Date : ${test.test.date}</small> */}
                    </div>
                    
                  </div>
                </div>
              </div>
            {/* </c:forEach>           */}
          {/* </c:if> */}
        </div>
      </div>

        </div>
    )
}

export default UserHistory;