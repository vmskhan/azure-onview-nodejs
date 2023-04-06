import { useEffect } from "react";
import { Link } from "react-router-dom";

const TestComp= (props) => {
    useEffect(()=>{
        console.log(props.testobj);
    },[])
  const handleClickTest=()=>{
      localStorage.setItem('currentTest',props.testobj._id);
  }    
    return(
        <div className="col-4 mt-4" key={props.index}>
            <div className="shadow">
              <div className="card-header text-img text-d" style={{height: '120px'}}>
               <Link to={props.titleUrl} onClick={handleClickTest} className="decor-none" >
                  <h4>{props.testobj.tname}</h4> 
               </Link>
              </div>
              <div className="px-3 py-2">
                <div className="d-flex justify-content-between">
                  <div>
                     <small>Date : <strong>{props.testobj.date}</strong></small>
                  </div>
                  <div>
                    { props.testobj.state === 'start' &&
                      <span className="badge rounded-pill bg-r">live</span>
                      }
                    {
                     props.testobj.needPayment == 'true' &&
                      <span className="badge rounded-pill bg-y">Rs {props.testobj.amount}</span>
                    }
                  </div>
                </div>
                <div className="mt-1">
                  <small>Start Time : {props.testobj.start_time}</small>
                </div>
                <div className="mt-1">
                   <small>Duration : {props.testobj.duration} hr</small>
                </div>
                <div className="mt-1">
                    <small>Total Marks : {props.testobj.state == 'start' && props.testobj.totalMarks }
                    {props.testobj.state != 'start' && '-'}
                   </small> 
                </div>
              </div>
            </div>
          </div>
    );
}

export default TestComp;