import AdminHeader from "./AdminHeader";
import { useState, useEffect } from "react";
import axios from "axios";
import TestComp from "../test/TestComp";
import Loading from "../Login/Loading";


const AdminDashboard = () => {
  const [tests,setTests] = useState([]);
  const [tname,setTname]=useState("");
  const [amount,setAmount]=useState(0);
  const [date,setDate]=useState("");
  const [duration,setDuration]=useState(0);
  const [needPayment, setNeedPayment]=useState(false);
  const [start_time,setStart_time]=useState("");
  const [state,setState]=useState("");
  const [totalMarks,setTotalMarks]=useState(0);
  const [pid,setPid]=useState("");
  const [uid,setUid]=useState("");
  const [loading,setLoading]=useState(false);
  const [fetchAgain,setFetchAgain] = useState(false);
const [userList,setUserList]=useState([]);

  const user=JSON.parse(localStorage.getItem('userInfo'));
  
  const newTestHandler=async(e)=>{
    e.preventDefault();
    try{
      const config={
        headers:{
            "Content-type": "application/json",
        },  
    };
    setUid(user._id);
    // setPid(user._id);
    setTotalMarks(0);
    setState('edit');
    if(amount>0)
    {
      setNeedPayment(true);
    }

    const {data} = await axios.post(
      "/api/admin/test",
      {tname,amount,date,duration,needPayment,start_time,state,totalMarks,pid,uid},
      config
  );
  console.log(data);
  setFetchAgain(true);
  // setFetchAgain(false);
    }
    catch(error){
      console.log(error);
    }
  }
  
  useEffect(()=>{
    setLoading(true);
    //fetch participants
    fetch('/api/users/getAllUsers').then((res)=>res.json())
    .then((data)=>setUserList(data.users))
    
    //fetch tests
    fetch('/api/admin/tests/'+user._id,{
     
    // Adding method type
    method: "GET",
         
    // Adding headers to the request
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
}).then((res) => res.json())
  .then((data)=> {
     setTests(data.resData);
     console.log(data.resData);
    // console.log(tests);
    setLoading(false);
  })
  
  //console.log(tests);
  console.log('fetched');
},[fetchAgain]);


    return(
<div>
<AdminHeader/>
<div className="container-fluid mb-5">

    <div className="row mt-4 px-5">
      <div className="col-12">
          <div className="h5 text-b">My Interview</div>
          <small className="text-secondary">List of all my interviews</small>
      </div>
    </div>

    <div className="row mt-3 px-5">
        <div className="col-12">
            <div className="d-flex justify-content-between">
                <div className="h5 text-b">Current Interview</div>
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
            <div className="mb-3">
              <label htmlFor="amount" className="form-label">Payment (in Rs)</label>
              <input type='text' name="amount" onChange={(e) => setAmount(e.target.value)} className="form-control form-control-sm" id="amount" />
              <small className="mt-1 text-secondary">Leave empty if you don't want have any fee to take this Interview</small>
            </div>

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
</div>

    );
}

export default AdminDashboard;