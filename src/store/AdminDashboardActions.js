import { adminDashboardActions } from "./AdminDashboardSlice"

export const getTests=(id)=>{
  console.log(id);
    return async(dispatch)=>{
        const fetchHandler=async()=>{
            fetch('/api/admin/tests/'+id,{
                method: "GET",
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }).then((res) => res.json())
              .then((data)=> {
                //  setTests(data.resData);
                 console.log(data.resData);
                // console.log(tests);
                dispatch(adminDashboardActions.updateTests(data.resData));
              })
              .catch((error)=>{
                console.log(error);
              })
        }
        await fetchHandler();
    }
}

export const getUsers=()=>{
  return async(dispatch)=>{
    const fetchHandler=async()=>{
      fetch('/api/users/getAllUsers').then((res)=>res.json())
      .then((data)=>{
        dispatch(adminDashboardActions.updateUsers(data.users));
        console.log(data.users);
        console.log("uesrs fetched")
      })
      .catch((error)=>{
        console.log(error);
      });
    }
    await fetchHandler();
  }
}
  