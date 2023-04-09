import { useEffect, useState } from "react";
import UserTestComp from "../test/UserTestComp";
import UserHeader from "./UserHeader"
import { useDispatch, useSelector } from "react-redux";
import { getUserTests } from "../../store/User-actions";
import { Link } from "react-router-dom";

const UserDashBoard = () => {
  const dispatch=useDispatch();
  const tests=useSelector(state=>state.user.tests);
  const [uid,setUid]=useState("");
  const [loading,setLoading]=useState(false);
  
  const user=JSON.parse(localStorage.getItem('userInfo'));
  useEffect(()=>{
   if(tests.length===0)
    dispatch(getUserTests(user._id));
    
},[]);

    return(
        <div>
            <UserHeader/>
    
        <div className="row mt-3 px-5">
            <div className="col-12">
                <div className="d-flex justify-content-between">
                    <div className="h5 text-b">Interview Live</div>
                    {/* <Link to="/user/userPayment">userPayment</Link> */}
                </div>
            </div>
        </div>

        <div className="row px-5">
          {tests.length === 0 &&
            <div className="text-center text-secondary mt-5">
              You don't have any interviews live now.
            </div>
         }
         { tests.map((test,index)=>{
          if(test.state==='start')
          return <UserTestComp testobj={test} index={index} titleUrl={"/user/startTest"}/>
        })
         }
        </div>


        <div className="row mt-3 px-5">
          <div className="col-12">
              <div className="d-flex justify-content-between">
                  <div className="h5 text-b">Interviews Scheduled</div>
              </div>
          </div>
      </div>

      <div className="row px-5">
        {tests.length === 0 &&
          <div className="text-center text-secondary mt-5">
            You don't have any scheduled interviews.
          </div>
        }
        { tests.map((test,index)=>{
          if(test.state==='edit')
          return <UserTestComp testobj={test} index={index} titleUrl={"#"}/>
        })
         }
      </div>
        </div>
    )
}

export default UserDashBoard;