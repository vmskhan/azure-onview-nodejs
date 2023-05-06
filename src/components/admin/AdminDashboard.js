import { useState, useEffect } from "react";
import proxyAxios from "../../axiosMiddleware";
import TestComp from "../test/TestComp";
import Loading from "../Login/Loading";
import { useDispatch,useSelector } from "react-redux";
import { getTests, getUsers } from "../../store/AdminDashboardActions";

const AdminDashboard = () => {
  const userList=useSelector(state=>state.adminDashboard.usersList);
  const isLoggedIn=useSelector(state=>state.auth.isLoggedIn);
  const tests = useSelector(state=>state.adminDashboard.tests);
  const dispatch=useDispatch();

  const [tname,setTname]=useState("");
  const [amount,setAmount]=useState(0);
  const [date,setDate]=useState("");
  const [duration,setDuration]=useState(0);
  const [needPayment, setNeedPayment]=useState(false);
  const [start_time,setStart_time]=useState("");

  const [loading,setLoading]=useState(false);
const [pid,setPid]=useState("");

  const user=JSON.parse(localStorage.getItem('userInfo'));
  useEffect(()=>{
    console.log(userList);
    console.log("isLoggedIn:"+isLoggedIn);
  },[])

  useEffect(()=>{
    console.log(tests);
  },[tests]);  
  
  useEffect(()=>{
    console.log(userList);
    if(userList.length!==0)
      setPid(userList[0]._id)
  },[userList]);

  useEffect(()=>{
    if(tests.length===0)
      fetchTests();
},[]);
  
useEffect(()=>{
  if(userList.length===0)
    fetchUsers();
},[]);
  

const fetchUsers=()=>{
  dispatch(getUsers());
};


const fetchTests=()=>{
  dispatch(getTests(user._id));
}
  
  
  const newTestHandler=async(e)=>{
    e.preventDefault();
    
      const config={
        headers:{
            "Content-type": "application/json",
        },  
    };

    if(amount>0)
    {
      setNeedPayment(true);
    }
  let data={tname,amount,date,duration,needPayment,start_time,pid,uid:user._id}
  console.log(data);
     proxyAxios.post("/api/admin/test",data,config)
  .then((res)=>res.data)
  .then((data)=>{
  console.log(data);
  fetchTests();

  })
    .catch((error)=>{
      console.log(error);
    });
  }

  

    return(

<div className="container-fluid col-12 bg-none mx-auto">

    <div className="row px-5">
      <div className="col-12">
          <div className="h5 text-light">My Interview</div>
          <small className="text-light">List of all my interviews</small>
      </div>
    </div>

    <div className="row mt-3 px-5">
        <div className="col-12">
            <div className="d-flex justify-content-between">
                <div className="h5 text-white">Current Interview</div>
                <div>
                  <button className="btn bg-r text-white btn-sm" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    <i className="fas fa-plus"></i> Create Interview
                  </button>
                </div>
            </div>
        </div>
    </div>

    <div className="row px-5">
      { tests.length === 0 && 
        <div>
        <div className="text-center text-secondary mt-5">
          You don't have any Interviews yet.
        </div>
        <div className="text-center text-secondary mt-3">
          <button className="btn bg-r text-white btn-sm" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
            <i className="fas fa-plus"></i> Create Interview
          </button>
        </div>
        </div>
      }
      { tests.length > 0 &&
      <>
        
          {
          tests.map((test,index)=>{
            if(test.state==='start' || test.state==='edit')
          return <TestComp testobj={test} index={index} titleUrl={"/admin/adminQuestion"} />     
         })} 
      </>
      }
    </div>
{
  loading && <Loading />
}
    

{/* <!-- MODAL --> */}
<div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div className="offcanvas-header">
      <h5 id="offcanvasRightLabel text-b">Add Test</h5>
      <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div className="offcanvas-body">
        <form name="dashboard"  onSubmit={(e)=> newTestHandler(e)}>
            <div className="mb-3">
                <label htmlFor="testName" className="form-label">Interview Name</label>
                 <input name="tname" onChange={(e) => setTname(e.target.value)} placeholder="Eg. Aptitude-Kec" type="text" className="form-control form-control-sm" />
            </div>
            <div className="mb-3">
                <label htmlFor="date" className="form-label">Date</label>
                <input type="date" name="date" onChange={(e) => setDate(e.target.value)} className="form-control form-control-sm" id="date" />
            </div>
            <div className="mb-3">
                <label htmlFor="time" className="form-label">Start Time</label>
                <input type="time" name="time" onChange={(e) => setStart_time(e.target.value)} className="form-control form-control-sm" id="time" />
            </div> 
            <div className="mb-3">
                <label htmlFor="duration" className="form-label">Duration (Eg. 1.30) </label>
                <input type='text' name="duration" onChange={(e) => setDuration(e.target.value)} placeholder="eg. 1 hr" className="form-control form-control-sm" id="duration" />
            </div>
            {/* <div className="mb-3">
              <label htmlFor="amount" className="form-label">Payment (in Rs)</label>
              <input type='text' name="amount" onChange={(e) => setAmount(e.target.value)} className="form-control form-control-sm" id="amount" />
              <small className="mt-1 text-secondary">Leave empty if you don't want have any fee to take this Interview</small>
            </div> */}

            <div className="mb-3">
              <label htmlFor="participant_id" className="form-label">Interviewee</label>
               <select className="form-control form-control-sm" name="pid"  onChange={(e) => setPid(e.target.value)} id="participant_id" >
                { 
                userList.map((user)=>{
                    return <option value={user._id} label={user.name}></option>
                })
                  
                }
              </select>
            </div>

            <button type="submit" className="btn bg-success text-white btn-sm px-5">Create Interview</button>
          </form>
    </div>
  </div>
</div>

    );
}

export default AdminDashboard;