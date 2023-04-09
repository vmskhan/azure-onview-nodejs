const MultipleSelectQuestion=(props)=>{

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
                    
                    
                      {/* <form className="mt-2" method="POST" action="/user/test/${tid}/qn" > */}
                        {props.question.options.map((option,index)=>{
                          return(<div className="card px-2 py-2 mb-2">
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox"  id={index+1} value={option.text} onChange={(e)=>MultipleAnswerHandler(e)} name="answerText" />
                              <label className="form-check-label mb-2" htmlFor={index+1}>{option.text}</label>
                              {option.hasImage &&    
                              <img className="w-100" src="/img/os${option.oid}.jpg"/> 
                             }
                            </div>
                          </div>);
                        })}
                    
                  </div>
        </div>
    );
}

export default MultipleSelectQuestion;