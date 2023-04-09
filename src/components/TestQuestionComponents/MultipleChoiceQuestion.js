import { useEffect, useState } from "react";

const MultipleChoiceQuestion=(props)=>{
  const [options,setOptions]=useState([]);
  useEffect(()=>{
    setOptions(props.question.options);
  },[props.question])
    return(
        <div>
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
                        {options.map((option,index)=>{
                          return(<div key={index} className="card px-2 py-2 mb-2 border-danger">
                            <div className="form-check">
                              <input className="form-check-input" type="radio"  id={index+1} value={option.text} onChange={(e)=>props.setAnswer(e.target.value)} name="answerText" required defaultChecked={false}/>
                              <label className="form-check-label mb-2" htmlFor={index+1}>{option.text}</label>
                              <div className="w-100"></div>
                              {option.hasImage &&
                              <img className="w-50" src="/img/os${option.oid}.jpg"/>
                              }
                            </div>
                          </div>);
                        })}
                  </div>
        </div>
    );
}

export default MultipleChoiceQuestion;