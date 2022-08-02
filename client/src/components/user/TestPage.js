import "./user.css";
const TestPage =() =>{
  const offcanvasStyle={width: '250px', marginTop : '104px', overflow: 'hidden'};  
  const offcanvasBodyStyle={marginLeft: '25px', overflow: 'hidden'};
  const offcanvasBodyChildDivStyle={minHeight: '250px', maxHeight: '250px' , width: '100%', overflow: 'scroll', overflowX : 'hidden' ,paddingRight: '17px', boxSizing: 'content-box' }
  return(
        <div>
    <nav className="navbar navbar-expand-lg navbar-dark text-l bg-success  px-5">
        <div className="container-fluid">11
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
            <div className="me-auto"></div>
            {/* <!-- <a href="/user/test/${tid}/end">
                <button className="btn btn-outline-light btn-sm" type="submit">End Test</button>
            </a> --> */}
          </div>
        </div>
        
    </nav>
    <div className="container-fluid">
        <div className="row mt-5 px-5">
          <div className="col-12">
            <div className="card w-100 px-2 py-3 border-success border-5 overflow-auto" style={{height:'100vh'}}>
              <div className="row">
{/* <!-- zoom --> */}
                <div className="col-6 border-end border-dark" id="meetingSDKElement">

                </div>



                <div className="col-6">
                  <div className="">
                    <div className="d-flex justify-content-between">
                       <div className="h5 text-b">Question{/* ${question.idx}*/}</div> 
                      <p>Mark : <strong>{/*${question.mark}*/}</strong></p>
                    </div>
                    <div className="mt-2">
                      <p>{/*${question.questionText}*/}</p>
                    </div>
                    
                    <div className="mt-2">
                      {/* <c:if test="${question.questionImage!=null}">
                      <img className="w-50" src="/img/qs${question.qid}.jpg"/>
                    </c:if> */}
                    </div>
                  
                  </div>

                  <div className="">
                    <div className="d-flex justify-content-between">
                      <div className="h5 text-b">Options</div>
                    </div>
                    {/* <c:if test="${question.questionFormat.equals('obj-a')}"> */}
                      <form className="mt-2" method="POST" action="/user/test/placeholder/qn" /*${tid} */ >
                        {/* <c:forEach items="${options}" var="option" varStatus="loop"> */}
                          <div className="card px-2 py-2 mb-2 border-danger">
                            <div className="form-check">
                              {/* <input className="form-check-input" type="radio"  id="${loop.index+1}" value="${option.answerText}" name="answerText" required /> */}
                              {/* <label className="form-check-label mb-2" htmlFor="${loop.index+1}">${option.answerText}</label> */}
                              <div className="w-100"></div>
                              {/* <c:if test="${option.answerImage!=null}">
                              <img className="w-50" src="/img/os${option.oid}.jpg"/>
                            </c:if> */}
                            </div>
                          </div>
                        {/* </c:forEach> */}
                        <input type="submit" className="btn btn-primary btn-sm mt-5 px-5" label="Next" />
                      </form>
                    {/* </c:if> */}

                    {/* <c:if test="${question.questionFormat.equals('obj-b')}"> */}
                      <form className="mt-2" method="POST" action="/user/test/${tid}/qn" modelAttribute="opt">
                        {/* <c:forEach items="${options}" var="option" varStatus="loop"> */}
                          <div className="card px-2 py-2 mb-2">
                            <div className="form-check">
                              {/* <input className="form-check-input" type="checkbox"  id="${loop.index+1}" value="${option.answerText}" name="answerText" /> */}
                              {/* <label className="form-check-label mb-2" htmlFor="${loop.index+1}">${option.answerText}</label> */}
                              {/* <c:if test="${option.answerImage!=null}"> */}
                                
                              {/* <img className="w-100" src="/img/os${option.oid}.jpg"/> */}
                            {/* </c:if> */}
                            </div>
                          </div>
                        {/* </c:forEach> */}
                        <input type="submit" className="btn btn-primary btn-sm mt-5 px-5" label="Next" />
                      </form>
                    {/* </c:if> */}

                    {/* <c:if test="${question.questionFormat.equals('sub-a')}"> */}
                      <form className="mt-2" method="POST" action="/user/test/plac/qn" /*${tid} */ modelAttribute="opt" enctype="multipart/form-data">
                        
                          <div className="card px-2 py-2 mb-2">
                            <div className="form-check">
                              <label className="form-check-label mb-2" htmlFor="ans">Answer: </label><br/>
                              <textarea className="form-control"  id="ans"  name="answerText" required></textarea>
                              <label className="form-check-label mb-2" htmlFor="fileupld">Upload files: </label>
                              <input className="form-control" type="file" name="answerImage" id="fileupld"/>
                              
                            </div>
                          </div>
                        
                        <input type="submit" className="btn btn-primary btn-sm mt-5 px-5" label="Next" />
                      </form>
                    {/* </c:if> */}

                  </div>
                </div>


             </div>
            </div>
          </div>
        </div>        
    </div>
    <button className="btn btn-primary nav-btn px-1 py-4 bg-white text-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" ><i className="fas fa-arrow-left"></i></button>

        <div className="offcanvas offcanvas-end" style={offcanvasStyle}  data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
          
          <div className="offcanvas-body w-100 pt-0 pl-0" style={offcanvasBodyStyle} >
                <div style={offcanvasBodyChildDivStyle} className="border">
                  <div className="bg-b text-white text-center">Navigation</div>
                  <div className="row mt-2 px-3">
                    {/* <c:forEach begin="0" end="${participation.totalQn - 1}" varStatus="loop"> */}
                      {/* <c:if test="${ loop.index < participation.last_attempted}"> */}
                        <div className="col-3 text-white mt-2">
                          {/* <button className="btn btn-primary rounded-circle">${loop.index+1}</button> */}
                        </div>                        
                      {/* </c:if> */}
                      {/* <c:if test="${ loop.index == participation.last_attempted}"> */}
                        <div className="col-3 text-white mt-2">
                           <button className="btn bg-r text-white rounded-circle">{/*${loop.index+1}*/}</button> 
                        </div>                        
                      {/* </c:if> */}
                      {/* <c:if test="${ loop.index > participation.last_attempted}"> */}
                        <div className="col-3 text-white mt-2">
                          <button className="btn btn-outline-primary rounded-circle">{/*${loop.index+1}*/}</button>
                        </div>                        
                      {/* </c:if> */}
                   {/* </c:forEach> */}
                  </div>              
              

              <div className="border" style={{paddingRight: '17px'}}>
                <div className="bg-b text-white text-center">Summary</div>
                <div className="row py-1 px-1">
                  <div className="col-8">
                    <div className="text-secondary">Total questions</div>
                  </div>
                  {/* <div className="col-4 text-end">${participation.totalQn}</div> */}
                </div> 
                <div className="row py-1 px-1">
                  <div className="col-8">
                    <div className="text-secondary">Answered</div>
                  </div>
                  {/* <div className="col-4 text-end">${participation.last_attempted}</div> */}
                </div> 
                <div className="row py-1 px-1">
                  <div className="col-8">
                    <div className="text-secondary">Saved</div>
                  </div>
                  {/* <div className="col-4 text-end">${participation.last_attempted}</div> */}
                </div>    
                <div className="row py-1 px-1">
                  <div className="col-8">
                    <div className="text-secondary">Unanswered</div>
                  </div>
                  {/* <div className="col-4 text-end">${ participation.totalQn - participation.last_attempted}</div> */}
                </div>    
            </div>
          </div>  
          <button className="btn btn-primary bg-white text-primary px-1 py-4 inner-nav-btn" data-bs-dismiss="offcanvas"><i className="fas fa-arrow-right"></i></button>
        </div>
    </div>
    <script src="https://source.zoom.us/2.3.5/lib/vendor/react.min.js"></script>
    <script src="https://source.zoom.us/2.3.5/lib/vendor/react-dom.min.js"></script>
    <script src="https://source.zoom.us/2.3.5/lib/vendor/redux.min.js"></script>
    <script src="https://source.zoom.us/2.3.5/lib/vendor/redux-thunk.min.js"></script>
    <script src="https://source.zoom.us/2.3.5/lib/vendor/lodash.min.js"></script>
    
    <script src="https://source.zoom.us/2.3.5/zoom-meeting-embedded-2.3.5.min.js"></script>
    <script src="plac/joinClient.js"></script>
  {/*${pageContext.request.contextPath}*/}
        
        </div>
    )
}

export default TestPage;