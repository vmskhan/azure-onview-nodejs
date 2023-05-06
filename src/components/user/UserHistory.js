import { useEffect, useState } from "react";
import UserTestResultComp from "../test/UserTestResultComp";
import { useDispatch, useSelector } from "react-redux";
import { getUserTests } from "../../store/User-actions";

const UserHistory = () =>{
  const tests=useSelector(state=>state.user.tests);
  const dispatch=useDispatch();
  const [uid,setUid]=useState("");
  const [loading,setLoading]=useState(false);
  const [fetchAgain,setFetchAgain] = useState(false);
  const searchValue=useSelector((state)=>state.user.searchValue);
  const user=useSelector((state)=>state.auth.userInfo);
  useEffect(()=>{
    if(tests.length===0)
      dispatch(getUserTests(user._id));

  console.log('fetched');
},[fetchAgain]);

    return(

    <div className="container-fluid mb-5">

        <div className="row mt-3 px-5">
            <div className="col-12">
                <div className="d-flex justify-content-between">
                    <div className="h5 text-light">Completed Interview</div>
                </div>
            </div>
        </div>

        <div className="row px-5">
          {tests.filter((test)=>test.state==='end').length === 0 &&
            <div className="text-center text-light fs-6 mt-5">
              You don't have any completed Interviews :-)
            </div>
          }
          { tests.map((test,index)=>{
          if(test.state==='end' && (test.tname.includes(searchValue) || searchValue===''))
          return <UserTestResultComp testobj={test} index={index} titleUrl={"/user/userResult"} /> 
        })
         }
        </div>
      </div>
    )
}

export default UserHistory;