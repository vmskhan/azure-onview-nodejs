import { useEffect, useState } from "react";
import TestComp from "../test/TestComp";
import AdminHeader from "./AdminHeader";

const AdminEvaluation = () => {
  const [tests,setTests] = useState([]);
  const [uid,setUid]=useState("");
  const [loading,setLoading]=useState(false);
  const [fetchAgain,setFetchAgain] = useState(false);

  const user=JSON.parse(localStorage.getItem('userInfo'));
  useEffect(()=>{
    setLoading(true);
    fetch('/api/admin/tests/'+user._id,{

    method: "GET",
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
}).then((res) => res.json())
  .then((data)=> {
     setTests(data.resData);
     console.log(data.resData);
    setLoading(false);
  })
  
  console.log('fetched');
},[fetchAgain]);

  return(
        <div>
            <AdminHeader/>

<div className="container-fluid mb-5">

    <div className="row mt-4 px-5">
      <div className="col-12">
          <div className="h5 text-b">Pending Interviews</div>
          <small className="text-secondary">List of all my Interviews pending for Evaluation</small>
      </div>
    </div>

    <div className="row mt-3 px-5">
        <div className="col-12">
                <div className="h5 text-b">Pending Interview evaluations</div>
        </div>
    </div>

    <div className="row px-5">
      {tests.length === 0 && 
        <div className="text-center text-secondary mt-5">
          You don't have any pending Interview evaluations.
        </div>
      }
      {tests.map((test,index)=>{
            if(test.state==='pending')
            return <TestComp testobj={test} index={index} titleUrl={'/admin/adminEvaluateAnswer'}/>
          })
          }
          
    </div>

        </div>
</div>
    )
}

export default AdminEvaluation;