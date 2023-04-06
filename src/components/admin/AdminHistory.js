import { useEffect, useState } from "react";
import TestComp from "../test/TestComp";
import { useSelector,useDispatch } from "react-redux";
import { getTests } from "../../store/AdminDashboardActions";
const { default: AdminHeader } = require("./AdminHeader")

const AdminHistory = () => {
  const tests=useSelector(state=>state.adminDashboard.tests);
  const dispatch=useDispatch();
  const [uid,setUid]=useState("");
  const [loading,setLoading]=useState(false);


  const user=JSON.parse(localStorage.getItem('userInfo'));

useEffect(()=>{
  fetchTests();
},[]);

useEffect(()=>{
  console.log(tests);
},[tests]);


const fetchTests=()=>{
  if(tests.length===0)
    dispatch(getTests(user._id));
}


  return(
    <div>
    <AdminHeader/>
    <div className="container-fluid mb-5">

        <div className="row mt-4 px-5">
          <div className="col-12">
              <div className="h5 text-b">My Interview</div>
              <small className="text-secondary">List of all my Interviews completed</small>
          </div>
        </div>

        <div className="row mt-3 px-5">
            <div className="col-12">
                    <div className="h5 text-b">Completed Interviews</div>
            </div>
        </div>

        <div className="row px-5">
          {tests.length === 0  &&
            <div className="text-center text-secondary mt-5">
              You don't have any Interviews yet.
            </div>
          }
          {tests.map((test,index)=>{
            if(test.state==='end')
            return <TestComp testobj={test} index={index} titleUrl={'/admin/adminResult'}/>
          })
          }
        </div>
    </div> 

</div>
    )
}

export default AdminHistory;