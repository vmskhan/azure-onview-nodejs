import { useEffect, useState } from "react";

const MultipleChoiceQuestion=(props)=>{
  const [options,setOptions]=useState([]);
  const baseUrl=process.env.REACT_APP_IMAGE_UPLOADS_BASE_URL
  useEffect(()=>{
    setOptions(props.question.options);
  },[props.question])
  useEffect(()=>{
    console.log(options);
  },[options]);
    return(
        <div className="text-light">
                <div className="">
                    <div className="d-flex justify-content-between">
                       <div className="h5">Question {props.question.idx}</div> 
                      <p>Mark : <strong>{props.question.marks}</strong></p>
                    </div>
                    <div className="mt-2">
                      <p>{props.question.question.text}</p>
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
                        {options.map((option,index)=>{
                          return(<div key={index} className="card px-2 py-2 mb-2 bg-transparent border-light">
                            <div className="form-check">
                              <input className="form-check-input" type="radio"  id={index+1} value={option.text} onChange={(e)=>props.setAnswer(e.target.value)} name="answerText" required />
                              {option.hasText &&
                              <label className="form-check-label mb-2" htmlFor={index+1}>{option.text}</label>
                              }
                              <div className="w-100"></div>
                              {option.hasImage &&
                              <img className="img-fluid" src={baseUrl+option.image}/>
                              }
                            </div>
                          </div>);
                        })}
                  </div>
        </div>
    );
}

export default MultipleChoiceQuestion;