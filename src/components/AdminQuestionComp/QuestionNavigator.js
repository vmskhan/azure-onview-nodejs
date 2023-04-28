const QuestionNavigator=(props)=>{
    return(
              <div className="navbar navbar-dark bg-success container-fluid justify-content-between mb-2">
                {props.qtypes.map((element,index) => {
                return(
                  <>
                     <button key={index} className="btn text-white btn-sm" onClick={()=>props.setQuestionType(element)} > 
                     {element}
                  </button>  
                  <div className="vr text-white"></div>
                  </>
                );
                })
                }
              </div>
    );
}

export default QuestionNavigator;