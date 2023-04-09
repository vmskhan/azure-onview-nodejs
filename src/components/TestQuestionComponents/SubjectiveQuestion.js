const SubjectiveQuestion=(props)=>{
    return(<div>
        <div className="">
                    <div className="d-flex justify-content-between">
                       <div className="h5 text-b">Question {props.question.idx}</div> 
                      <p>Mark : <strong>{props.question.marks}</strong></p>
                    </div>
                    <div className="mt-2">
                      <p>{props.question.questionText}</p>
                    </div>
                    
                    <div className="mt-2">
                      { props.question.questionImage!=null &&
                      <img className="w-50" src="/img/qs${question.qid}.jpg"/>
                    }
                    </div>
                  
                  </div>

                  <div className="">
                    <div className="d-flex justify-content-between">
                      <div className="h5 text-b">Options</div>
                    </div>
                    
                      {/* <form className="mt-2" method="POST" action="/user/test/tid/qn" encType="multipart/form-data"> */}
                        
                          <div className="card px-2 py-2 mb-2">
                            <div className="form-check">
                              <label className="form-check-label mb-2" htmlFor="ans">Answer: </label><br/>
                              <textarea className="form-control"  value={props.answer} onChange={(e)=>props.setAnswer(e.target.value)} id="ans"  name="answerText" required></textarea>
                              <label className="form-check-label mb-2" htmlFor="fileupld">Upload files: </label>
                              <input className="form-control" type="file" name="answerImage" id="fileupld"/>
                              
                            </div>
                          </div>               
                    
                  </div>
    </div>);
}

export default SubjectiveQuestion;