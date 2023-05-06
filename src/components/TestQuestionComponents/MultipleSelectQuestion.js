const MultipleSelectQuestion=(props)=>{
  const baseUrl=process.env.REACT_APP_IMAGE_UPLOADS_BASE_URL;
  const MultipleAnswerHandler=(e)=>{
   
    let temp=props.answer;
    if(temp.includes(e.target.value))
      {
        let newAnswerText=temp.replace(e.target.value+",","");
        props.setAnswer(newAnswerText);
      }
      else
      {
        console.log(e.target.value);
          props.setAnswer(temp.concat(e.target.value+','));
      }
  }
    return(
        <div>
             <div className="text-light">
                    <div className="d-flex justify-content-between">
                       <div className="h5">Question {props.question.idx}</div> 
                      <p>Mark : <strong>{props.question.marks}</strong></p>
                    </div>
                    <div className="mt-2">
                      {props.question.question.hasText&&
                      <p>{props.question.question.text}</p>
                      }
                    </div>
                    
                    <div className="mt-2">
                      { props.question.question.hasImage &&
                      <img className="img-fluid" src={baseUrl+props.question.question.image}/>
                    }
                    </div>
                  
                  </div>
                    
                  <div className="mt-3">
                    <div className="d-flex justify-content-between">
                      <div className="h5 mb-3">Options</div>
                    </div>
                        {props.question.options.map((option,index)=>{
                          return(<div className="card px-2 py-2 mb-2 bg-transparent border-light">
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox"  id={option.id} value={option.id} onChange={(e)=>MultipleAnswerHandler(e)} name="answerText" />
                              { option.hasText &&
                              <label className="form-check-label mb-2" htmlFor={index+1}>{option.text}</label>
                              }
                              {option.hasImage &&    
                              <img className="w-100" src={baseUrl+option.image} /> 
                             }
                            </div>
                          </div>);
                        })}
                    
                  </div>
        </div>
    );
}

export default MultipleSelectQuestion;