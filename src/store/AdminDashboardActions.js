import { adminDashboardActions } from "./AdminDashboardSlice"
import proxyAxios from "../axiosMiddleware";

export const getTests=(id)=>{
  console.log(id);
    return async(dispatch)=>{
        const fetchHandler=async()=>{
            proxyAxios.get('/api/admin/tests/'+id,{
                method: "GET",
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }).then((res) => res.data)
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
      proxyAxios.get('/api/users/getAllUsers').then((res)=>res.data)
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
      proxyAxios.get('/api/admin/questions/'+testId,{
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
      const {question,options,answer,marks,tid}=newQuestion;
      const formData=new FormData();
      
      formData.append('questionImage',question.image.data);
      if(answer.image)
      formData.append('answerImage',answer.image.data);
      options.forEach((opt=>{
        if(opt.hasImage)
          formData.append('optionImage-'+opt.id,opt.image.data);
      }));

      let newQues=Object.assign({},question);
      newQues.image='Nil';
      let newAnswer=Object.assign({},answer);
      newAnswer.image='Nil';

      // console.log(question);
      let newOptions=options.map(opt=>{
        opt.image='Nil';
        return opt;
      });

      formData.append('question',JSON.stringify(newQues));
      formData.append('options',JSON.stringify(newOptions));
      formData.append('answer',JSON.stringify(newAnswer));
      formData.append('marks',marks);
      formData.append('idx',0);
      formData.append('tid',tid);
      
 
      proxyAxios.post('/api/admin/question',formData)
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
      proxyAxios.put('/api/admin/test',newTest,{
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
      proxyAxios.put('/api/admin/question',{
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
      console.log('qid:'+qid);
      proxyAxios.delete('/api/admin/question/'+qid)
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
      proxyAxios.get('/api/admin/submission/'+tid)
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

export const deleteTestWithTid=(uid,tid)=>{
  return async(dispatch)=>{
    const fetchHandler=async()=>{
      proxyAxios.delete('/api/admin/test/'+tid)
      .then((res)=>res.data)
      .then((data)=>{
        console.log(data);
        dispatch(getTests(uid));
      })
      .catch((error)=>{
        console.log(error);
      });
    }
    await fetchHandler();
  }
}