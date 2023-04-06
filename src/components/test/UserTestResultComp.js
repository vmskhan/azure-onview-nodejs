import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UserTestResultComp=(props)=>{
  const [participation,setParticipation]=useState({score:5});
    useEffect(()=>{
        console.log(props.testobj);
    },[]);
    
    const handleClickTest=()=>{
        localStorage.setItem('currentTest',props.testobj._id);
    }
    return(
        
            <div className="col-4 mt-4">
            <div className="shadow border rounded-3 border-4 border-primary">
              <div className="card-header border-bottom border-dark text-img text-d" style={{height: '120px'}}>
              <Link to={props.titleUrl} onClick={handleClickTest} className="decor-none">
                    <h4>{props.testobj.tname}</h4> 
                </Link>
              </div>
              <div className="px-3 py-2">
                <div className="d-flex justify-content-between">
                  <div className="mt-1">
                    <small>Total Marks : {props.testobj.totalMarks}</small>
                  </div>
                  <div className="mt-1">
                    <small>Marks Scored : <strong>{participation.score}</strong></small>
                  </div>
                </div>
                <div className="mt-1">
                    <small>Date : {props.testobj.date}</small>
                </div>
                
              </div>
            </div>
          </div>
    );
}
export default UserTestResultComp;