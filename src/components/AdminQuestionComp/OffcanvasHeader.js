const OffcanvasHeader=(props)=>{
    return(
        <div className="offcanvas-header flex-wrap">
               
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
              <h5 id="offcanvasRightLabel text-b">Add {props.title}</h5>
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" ></button>
            </div>
    );
}
export default OffcanvasHeader;