const SubjectiveQuestion=(props)=>{
    const baseUrl=process.env.REACT_APP_IMAGE_UPLOADS_BASE_URL;
    return(<div>
        <div className="text-light">
                    <div className="d-flex justify-content-between">
                       <div className="h5">Question {props.question.idx}</div> 
                      <p>Mark : <strong>{props.question.marks}</strong></p>
                    </div>
                    <div className="mt-2">
                      { props.question.question.hasText &&
                      <p>{props.question.question.text}</p>
                      } 
                    </div>
                    
                    <div className="mt-2">
                      { props.question.question.hasImage &&
                      <img className="img-fluid" src={baseUrl+props.question.question.image}/>
                    }
                    </div>
                  
                  </div>

                  <div className="">
                    <div className="d-flex justify-content-between">
                      <div className="h5">Answer</div>
                    </div>

                          <div className="card px-2 py-2 mb-2 bg-transparent border-light">
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