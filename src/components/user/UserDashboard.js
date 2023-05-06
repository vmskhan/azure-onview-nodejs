import { useEffect, useState } from "react";
import UserTestComp from "../test/UserTestComp";
import { useDispatch, useSelector } from "react-redux";
import { getUserTests } from "../../store/User-actions";

const UserDashBoard = () => {
  const dispatch=useDispatch();
  const tests=useSelector(state=>state.user.tests);
  const [uid,setUid]=useState("");
  const [loading,setLoading]=useState(false);
  const searchValue=useSelector((state)=>state.user.searchValue) 
  const user=useSelector((state)=>state.auth.userInfo);
  useEffect(()=>{
   if(tests.length===0)
    dispatch(getUserTests(user._id));
    
},[]);

    return(
        <div>
    
        <div className="row mt-3 px-5">
            <div className="col-12">
                <div className="d-flex justify-content-between">
                    <div className="h5 text-light">Interview Live</div>
                    {/* <Link to="/user/userPayment">userPayment</Link> */}
                </div>
            </div>
        </div>

        <div className="row px-5">
          {tests.filter((test)=>test.state==='start').length === 0 &&
            <div className="text-center text-light fs-6 mt-5">
              You don't have any interviews live now :-)
            </div>
         }
         { tests.map((test,index)=>{
          if(test.state==='start' && (test.tname.includes(searchValue) || searchValue===''))
          return <UserTestComp testobj={test} index={index} titleUrl={"/user/startTest"}/>
        })
         }
        </div>


        <div className="row mt-3 px-5">
          <div className="col-12">
              <div className="d-flex justify-content-between">
                  <div className="h5 text-light">Interviews Scheduled</div>
              </div>
          </div>
      </div>

      <div className="row px-5">
        {tests.filter((test)=>test.state==='edit').length === 0 &&
          <div className="text-center text-light fs-6 mt-5">
            You don't have any scheduled interviews :-)
          </div>
        }
        { tests.map((test,index)=>{
          if(test.state==='edit' && (test.tname.includes(searchValue) || searchValue===''))
          return <UserTestComp testobj={test} index={index} titleUrl={"#"}/>
        })
         }
      </div>
        </div>
    )
}

export default UserDashBoard;