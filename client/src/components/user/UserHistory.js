import { useEffect, useState } from "react";
import UserTestResultComp from "../test/UserTestResultComp";
import UserHeader from "./UserHeader"

const UserHistory = () =>{
  const [tests,setTests] = useState([]);
  const [uid,setUid]=useState("");
  const [loading,setLoading]=useState(false);
  const [fetchAgain,setFetchAgain] = useState(false);

  const user=JSON.parse(localStorage.getItem('userInfo'));
  useEffect(()=>{
    setLoading(true);
    fetch('/api/users/tests/'+user._id,{

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
            <UserHeader/>
            
      
    <div className="container-fluid mb-5">

        <div className="row mt-3 px-5">
            <div className="col-12">
                <div className="d-flex justify-content-between">
                    <div className="h5 text-b text-decoration-underline">Completed Interview</div>
                </div>
            </div>
        </div>

        <div className="row px-5">
          {tests.length === 0 &&
            <div className="text-center text-secondary mt-5">
              You don't have any completed Interviews.
            </div>
          }
          { tests.map((test,index)=>{
          if(test.state==='end')
          return <UserTestResultComp testobj={test} index={index} titleUrl={"/user/userResult"} /> 
        })
         }
        </div>
      </div>

        </div>
    )
}

export default UserHistory;