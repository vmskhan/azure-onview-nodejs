const OffcanvasHeader=(props)=>{
    return(
        <div className="offcanvas-header flex-wrap">
               
              <div className="navbar navbar-dark bg-success container-fluid justify-content-between mb-2">
                <button className="btn text-white btn-sm" data-bs-toggle="offcanvas" data-bs-target="#qformat_a" aria-controls="offcanvasRight"> 
                   Objective-a
                </button>
                <div className="vr text-white"></div>
                  <button className="btn text-white btn-sm" data-bs-toggle="offcanvas" data-bs-target="#qformat_b" aria-controls="offcanvasRight"> 
                     Objective-b
                  </button>
                  <div className="vr text-white"></div>
                  <button className="btn text-white btn-sm" data-bs-toggle="offcanvas" data-bs-target="#qformat_c" aria-controls="offcanvasRight"> 
                    subjective-a
                 </button>
              </div>
              <h5 id="offcanvasRightLabel text-b">Add {props.title}</h5>
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" ></button>
            </div>
    );
}
export default OffcanvasHeader;