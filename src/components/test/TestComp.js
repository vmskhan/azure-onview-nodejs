import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { adminDashboardActions } from "../../store/AdminDashboardSlice";
import { deleteTestWithTid } from "../../store/AdminDashboardActions";
import { useSelector } from "react-redux";

const TestComp= (props) => {
    
  const dispatch=useDispatch();
  const user=useSelector((state)=>state.auth.userInfo);
  useEffect(()=>{
        console.log(props.testobj);
    },[])
  const handleClickTest=()=>{
      localStorage.setItem('currentTest',props.testobj._id);
  }    
  const deleteTestHandler=()=>{
    dispatch(deleteTestWithTid(user._id,props.testobj._id));
  }

    return(
        <div className="col-4 mt-4" key={props.index}>
            <div className="shadow-lg">
              <div className="card-header text-img text-d" style={{height: '120px'}}>
                <div className="d-flex justify-content-between">
                    <Link to={props.titleUrl} onClick={handleClickTest} className="decor-none" >
                        <h4>{props.testobj.tname}</h4> 
                    </Link>
                    {props.testobj.state==='end' &&
                    <button className="btn" onClick={deleteTestHandler}><i class="bi bi-x-circle-fill"></i></button>
                    }
                </div>
              </div>
              <div className="px-3 py-2 text-light bg-dark">
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