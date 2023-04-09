import { adminDashboardActions } from "./AdminDashboardSlice"
import axios from "axios";

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
  
export const getQuestions=(testId)=>{
  return async(dispatch)=>{
    const fetchHandler=async()=>{
      axios.get('/api/admin/questions/'+testId,{
        method: "GET",
        // Adding headers to the request
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then((res) => res.data)
      .then((data)=> {
        dispatch(adminDashboardActions.updateQuestions(data.resData));
         console.log(data.resData);
      })
      .catch((error)=>{
        console.log(error);
      });
    }
    await fetchHandler();
  }
}

export const sendNewQuestion=(newQuestion)=>{
  return async(dispatch)=>{
    const fetchHandler=async()=>{
      const {questionText,options,answerText,marks,questionFormat,tid}=newQuestion;
      axios.post('/api/admin/question',{
        questionText,questionImage:'0',options,answerText,answerImage:'0',marks,idx:0,questionFormat,tid
      })
      //{
      //   method: "POST",
      //   headers:{
      //     "Content-type": "application/json",
      // },
      // }
      .then((res)=>res.data)
      .then((data)=>{
        console.log(data);
        dispatch(getQuestions(tid));
      })
      .catch((error)=>{
        console.log(error);
      });
    }
    await fetchHandler();
  }
}

export const updateTest=(newTest)=>{
  return async(dispatch)=>{
    const fetchHandler=async()=>{
      axios.put('/api/admin/test',newTest,{
        headers:{
          "Content-type": "application/json",
      },
      }).then((res)=>res.data)
      .then((data)=>{
        console.log(data);
        dispatch(getTests(newTest.uid));
      })
      .catch((error)=>{
        console.log(error);
      });
    }
    await fetchHandler();
  }
}
export const updateQuestion=(editQuestion)=>{
  return async(dispatch)=>{
    const fetchHandler=async()=>{
      const {_id,questionText,options,answerText,marks,questionFormat,tid}=editQuestion;
      axios.put('/api/admin/question',{
        qid:_id,questionText,questionImage:'0',options,answerText,answerImage:'0',marks,idx:0,questionFormat
      })
      .then((res)=>res.data)
      .then((data)=>{
        console.log(data);
        dispatch(getQuestions(tid));
      })
      .catch((error)=>{
        console.log(error);
      });
    }
    await fetchHandler();
  }
}

export const deleteQuestionWithGivenQid=(qid,tid)=>{
  return async(dispatch)=>{
    const fetchHandler=async()=>{
      axios.delete('/api/admin/question/'+qid)
      .then((res)=>res.data)
      .then((data)=>{
        console.log(data);
        dispatch(getQuestions(tid));
      })
      .catch((error)=>{
        console.log(error);
      });
    }
    await fetchHandler();
  }
}

export const getSubmissionForTid=(tid)=>{
  return async(dispatch)=>{
    const fetchHandler=async()=>{
      axios.get('/api/admin/submission/'+tid)
      .then((res)=>res.data)
      .then((data)=>{
        console.log(data);
        dispatch(adminDashboardActions.updateSubmissions(data.submissions));
      })
      .catch((error)=>{
        console.log(error);
      });
    }
    await fetchHandler();
  }
}