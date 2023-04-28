import { useEffect, useState } from "react";
import "./user.css"
import { Navigate, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { createNewEmptySubmission, getUserTests } from "../../store/User-actions";

const StartTest = () => {
    const dispatch=useDispatch();
    const testId=localStorage.getItem('currentTest');
    const user=JSON.parse(localStorage.getItem('userInfo'));
    const test=useSelector(state=>state.user.tests.filter((test)=>test._id===testId)[0]);
    const [loading,setLoading]=useState(false);

    
    let navigate=useNavigate();
    useEffect(()=>{
        if(!test)
        fetchTest();
        console.log(test);
    },[]);
 
    const fetchTest=async()=>{
        dispatch(getUserTests(user._id));
      }
      const startTestHandler=(link)=>{
        console.log(link);       
       navigate('/user/testPage');
       dispatch(createNewEmptySubmission(testId,user._id));     
      }

    return(<>
        {test &&
            <>
    <div className="container-fluid px-5 text-light">
        <div className="mt-5 border-bottom pb-4 text-center h4">
            Read the instructions carefully.
        </div>
        <div className="row mt-5">
            <div className="col-7">
                <div className="h5">Test Details</div>
                <div className="row mt-3">
                    <div className="col-3">Name</div>
                    <div className="col-3">Date</div>
                    <div className="col-3">Duration</div>
                    <div className="col-3">Total Marks</div>
                </div>
                <div className="row mt-3 text-light">
                     <div className="col-3">{test.tname}</div> 
                    <div className="col-3">{test.date}</div>
                    <div className="col-3">{test.duration}</div>
                    <div className="col-3">{test.totalMarks}</div>
                </div>
                <div className="h5 mt-5">Test Specific Instructions</div>
                <div className="mt-3">
                    <p>* You cannot change your answer once submitted</p>
                    <p>* You can move to next question if and only if you completed current question</p>
                    <p>* If you lost network connectivity, you can resume the test once you reconnected</p>
                </div>
            </div>
            <div className="col-5">
                <div className="px-2 py-4 shadow text-center rounded bg-dark">
                    You can start the test now. Wish you luck ;-)
                   
                        <div className="mt-3 d-grid">
                            <button className="btn btn-block bg-danger text-white" onClick={(e)=>startTestHandler("/user/test/start/tid")}><i class="bi bi-play-circle"></i> Start Test</button>
                        </div>
                    
                </div>
            </div>
        </div>
    </div>
        </>
}
</>
    );
}

export default StartTest;