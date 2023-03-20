import { useEffect, useState } from "react";

const UserTestComp=(props)=>{
    const [participation,setParticipation]=useState({last_attempted:0,paymentDone:'true'});
    useEffect(()=>{
        console.log(props.testobj);
    },[]);
    
  const handleClickTest=()=>{
      localStorage.setItem('currentTest',props.testobj._id);
  }        
        return(

            <div className="col-4 mt-4">
            <div className="shadow border rounded-3 border-4 border-danger">
              <div className="card-header border-bottom border-dark text-img text-d" style={{height: '120px'}}>
                <a href={props.titleUrl} onClick={handleClickTest} className="decor-none">
                    <h4>{props.testobj.tname}</h4> 
                </a>
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
                <div className="mt-2 d-flex justify-content-between">
                    <small>Total Marks : {props.testobj.totalMarks}</small>
                    {props.testobj.needPayment === 'false' &&
                        <>
                            {participation.last_attempted === 0 && 
                                <a href="/user/test/${test.test.tid}/s">
                                <button className="btn btn-sm bg-success text-white"><i className="fas fa-play"></i> Start Interview</button>
                                </a> 
                            }
                            {participation.last_attempted !== 0 &&
                                <a href="/user/test/${test.test.tid}/qn">
                                <button className="btn btn-sm bg-b text-white"><i className="fab fa-rev"></i> Resume Interview</button>
                                </a>
                            }
                        </>
                    }
                    
                    {props.testobj.needPayment === 'true' &&
                        <>
                            {participation.paymentDone === 'false' &&
                            <a href="/user/test/${test.test.tid}/payment">
                            <button className="btn btn-sm bg-y text-white">Pay Rs ${props.testobj.amount}</button>
                            </a>
                            }
                            {participation.paymentDone === 'true' &&
                            <>
                                {participation.last_attempted === 0 &&
                                <a href="/user/test/${test.test.tid}/s">
                                    <button className="btn btn-sm bg-success text-white"><i className="fas fa-play"></i> Start Interview</button>
                                </a>
                                }
                                {participation.last_attempted !== 0 &&
                                <a href="/user/test/${test.test.tid}/qn">
                                    <button className="btn btn-sm bg-b text-white"><i className="fab fa-rev"></i> Resume Interview</button>
                                </a>
                                }
                            </>
                            }
                        </>
                    }
                </div>
              </div>
            </div>
          </div>
    );
}

export default UserTestComp;


        