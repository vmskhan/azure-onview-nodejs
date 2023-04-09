import { userActions } from "./UserSlice";
import axios from "axios";

export const getQuestionsUser=(testId)=>{
    return async(dispatch)=>{
        const fetchHandler=async()=>{
            axios.get('/api/users/questions/'+testId)
            .then((res) => res.data)
              .then((data)=> {
                 dispatch(userActions.updateQuestions(data.resData));
                //  console.log(data.resData);
                 console.log(data);
              })
              .catch((error)=>{
                console.log(error);
              })
        }
        await fetchHandler();
    }
}

export const getUserTests=(userId)=>{
  return async(dispatch)=>{
      const fetchHandler=async()=>{
        fetch('/api/users/tests/'+userId,{

          method: "GET",
          headers: {
              "Content-type": "application/json; charset=UTF-8"
          }
      }).then((res) => res.json())
        .then((data)=> {
           dispatch(userActions.updateTests(data.resData));
           console.log(data.resData);
        })
      }
      await fetchHandler();
  }
}

export const createNewEmptySubmission=(tid,uid)=>{
  return async(dispatch)=>{
    const fetchHandler=async()=>{
      axios.post('/api/users/submission',{tid,uid})
      .then((res) => res.data)
        .then((data)=> {
           //dispatch(userActions.updateQuestions(data.resData));
          //  console.log(data.resData);
           console.log(data);
        })
        .catch((error)=>{
          console.log(error);
        });
    }
    await fetchHandler();
  }
}

export const updateSubmission=(data)=>{
  return async(dispatch)=>{
    const fetchHandler=async()=>{
      const {uid,question,choice}=data
      axios.put('/api/users/submission',{
        'tid':question.tid,uid,'qid':question._id,choice,'questionMarks':question.marks,rightAnswer:question.answerText,questionFormat:question.questionFormat
      })
      .then((res) => res.data)
        .then((data)=> {
           //dispatch(userActions.updateQuestions(data.resData));
          //  console.log(data.resData);
           console.log(data);
        })
        .catch((error)=>{
          console.log(error);
        });
    }
    await fetchHandler();
  }
}
export const endSubmission=(data)=>{
  return async(dispatch)=>{
    const fetchHandler=async()=>{
      const {tid,uid}=data
      axios.patch('/api/users/submission/state',{
        tid,uid
      })
      .then((res) => res.data)
        .then((data)=> {
           //dispatch(userActions.updateQuestions(data.resData));
          //  console.log(data.resData);
           console.log(data);
        })
        .catch((error)=>{
          console.log(error);
        });
    }
    await fetchHandler();
  }
}

// //fetch tests
// axios.get('/api/admin/test/'+testId,{
//   method: "GET",
//   // Adding headers to the request
//   headers: {
//       "Content-type": "application/json; charset=UTF-8"
//   }
// }).then((res) => res.data)
// .then((data)=> {
//   setTest(data.resData[0]);
//   console.log(data.resData[0]);
//   setLoading(false);
// })