import { useEffect, useState } from "react";
import TestHeader from "./TestHeader";
import axios from "axios";
import "./user.css";

const TestPage =() =>{
  const [questions,setQuestions]=useState([{options:{},questionFormat:'d'}]);
  const [index,setIndex]=useState(0);
  const testId=localStorage.getItem('currentTest');
  const offcanvasStyle={width: '250px', marginTop : '104px', overflow: 'hidden'};  
  const offcanvasBodyStyle={marginLeft: '25px', overflow: 'hidden'};
  const offcanvasBodyChildDivStyle={minHeight: '250px', maxHeight: '250px' , width: '100%', overflow: 'scroll', overflowX : 'hidden' ,paddingRight: '17px', boxSizing: 'content-box' }
  
  useEffect(()=>{
    fetchQuestions();
  },[]);
  
  const fetchQuestions=()=>{
    axios.get('/api/admin/questions/'+testId,{
      method: "GET",
      // Adding headers to the request
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
  }).then((res) => res.data)
    .then((data)=> {
       setQuestions(data.resData);
       console.log(data.resData);
    })
  }
const incrementIndex=(e)=>{
  e.preventDefault();
  setIndex(index+1);
}

  return(
    <>
        <div>
          <TestHeader/>
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
                       <div className="h5 text-b">Question {questions[index].idx}</div> 
                      <p>Mark : <strong>{questions[index].marks}</strong></p>
                    </div>
                    <div className="mt-2">
                      <p>{questions[index].questionText}</p>
                    </div>
                    
                    <div className="mt-2">
                      { questions[index].questionImage!=null &&
                      <img className="w-50" src="/img/qs${question.qid}.jpg"/>
                    }
                    </div>
                  
                  </div>

                  <div className="">
                    <div className="d-flex justify-content-between">
                      <div className="h5 text-b">Options</div>
                    </div>
                    {questions[index].questionFormat ==='obj-a' &&
                      <form className="mt-2" >
                        {/* action="/user/test/tid/qn"  */}
                        {questions[index].options.map((option,index)=>{
                          return(<div className="card px-2 py-2 mb-2 border-danger">
                            <div className="form-check">
                              <input className="form-check-input" type="radio"  id={index+1} value={option.text} name="answerText" required />
                              <label className="form-check-label mb-2" htmlFor={index+1}>{option.text}</label>
                              <div className="w-100"></div>
                              {option.hasImage &&
                              <img className="w-50" src="/img/os${option.oid}.jpg"/>
                              }
                            </div>
                          </div>);
                        })}
                        <button  className="btn btn-primary btn-sm mt-5 px-5"  onClick={incrementIndex}>Next</button>
                      </form>
                    }

                    {questions[index].questionFormat === 'obj-b' &&
                      <form className="mt-2" method="POST" action="/user/test/${tid}/qn" >
                        {questions[index].options.map((option,index)=>{
                          return(<div className="card px-2 py-2 mb-2">
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox"  id={index+1} value={option.text} name="answerText" />
                              <label className="form-check-label mb-2" htmlFor={index+1}>{option.text}</label>
                              {option.hasImage &&    
                              <img className="w-100" src="/img/os${option.oid}.jpg"/> 
                             }
                            </div>
                          </div>);
                        })}
                        <button className="btn btn-primary btn-sm mt-5 px-5" onClick={incrementIndex}>Next</button>
                      </form>
                    }

                    {questions[index].questionFormat === 'sub-a' &&
                      <form className="mt-2" method="POST" action="/user/test/tid/qn" encType="multipart/form-data">
                        
                          <div className="card px-2 py-2 mb-2">
                            <div className="form-check">
                              <label className="form-check-label mb-2" htmlFor="ans">Answer: </label><br/>
                              <textarea className="form-control"  id="ans"  name="answerText" required></textarea>
                              <label className="form-check-label mb-2" htmlFor="fileupld">Upload files: </label>
                              <input className="form-control" type="file" name="answerImage" id="fileupld"/>
                              
                            </div>
                          </div>
                        
                        <button className="btn btn-primary btn-sm mt-5 px-5" onClick={incrementIndex}>Next</button>
                      </form>
                    }

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
        </>
    )
}

export default TestPage;