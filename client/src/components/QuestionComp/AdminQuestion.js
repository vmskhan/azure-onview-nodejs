import axios from "axios";
import { useEffect, useState } from "react";
import MarksSection from "./MarksSection";
import OffcanvasHeader from "./OffcanvasHeader";
import QuestionSection from "./QuestionSection";
import {
  fetchTest,
  fetchQuestions,
  addOption,
 toggleImage,
 changeOptionText,
 MultipleAnswerHandler,
 newQuestionHandler,
 changeTestState 
}  from "./AdminQuestionFunctions";

const { default: AdminHeader } = require("../admin/AdminHeader")

const AdminQuestion = () => {
 const [test,setTest]=useState({});
const [loading,setLoading]=useState(false);  
const [optionListTypeA,setOptionListTypeA]=useState([{hasText:true,hasImage:false,text:" "}]);
const [optionListTypeB,setOptionListTypeB]=useState([{hasText:true,hasImage:false,text:" "},]);
// const [optionListTypeC,setOptionListTypeC]=useState([{hasText:true,hasImage:false}]);
const [questionText,setQuestionText]=useState("");
const [marks,setMarks]=useState(0);
const [answerText,setAnswerText]=useState("");
const [questions,setQuestions]=useState([{}]);
const [userList,setUserList]=useState([{}]);
const testId=localStorage.getItem('currentTest');  

  useEffect(()=>{
    setLoading(true);
    // //fetch participants
    fetch('/api/users/getAllUsers').then((res)=>res.json())
    .then((data)=>setUserList(data.users))
    fetchTest();
  //console.log(tests);
  // console.log('fetched');
},[]);

// const fetchTest=async()=>{
//   //fetch tests
//   axios.get('/api/admin/test/'+testId,{
//     method: "GET",
//     // Adding headers to the request
//     headers: {
//         "Content-type": "application/json; charset=UTF-8"
//     }
//   }).then((res) => res.data)
//   .then((data)=> {
//     setTest(data.resData[0]);
//     console.log(data.resData[0]);
//     fetchQuestions();
//     setLoading(false);
//   })
// }
//   const fetchQuestions=()=>{
//     axios.get('/api/admin/questions/'+testId,{
//       method: "GET",
//       // Adding headers to the request
//       headers: {
//           "Content-type": "application/json; charset=UTF-8"
//       }
//   }).then((res) => res.data)
//     .then((data)=> {
//        setQuestions(data.resData);
//        console.log(data.resData);
//     })
//   }
// const addOption=(e,type)=>{
//   if(type==='obj-a')
//     setOptionListTypeA(optionListTypeA.concat({hasText:true,hasImage:false,text:" "}));
//   else if(type==='obj-b')
//     setOptionListTypeB(optionListTypeB.concat({hasText:true,hasImage:false,text:" "}));
//   }
//   const toggleText=(index,type)=>{
//     if(type==='obj-a')
//     {
//     let temp=[...optionListTypeA];
//     temp[index].hasText=!temp[index].hasText;
//     console.log(temp);
//     setOptionListTypeA(temp);
//     }
//     else if(type==='obj-b')
//     {
//       let temp=[...optionListTypeB];
//       temp[index].hasText=!temp[index].hasText;
//       console.log(temp);
//       setOptionListTypeB(temp);
//       }
//   }

// const toggleImage=(index,type)=>{
//   if(type==='obj-a')
//   {
//   let temp=[...optionListTypeA];
//   temp[index].hasImage=!temp[index].hasImage;
//   setOptionListTypeA(temp);
//   }
//   else if(type==='obj-b')
//   {
//     let temp=[...optionListTypeB];
//   temp[index].hasImage=!temp[index].hasImage;
//   setOptionListTypeB(temp);
//   }
// }
// const changeOptionText=(index,type,value)=>{
//   if(type==='obj-a')
//   {
//   let temp=[...optionListTypeA];
//   temp[index].text=value;
//   //console.log("option reached");
//   //console.log(temp);
//   setOptionListTypeA(temp);
//   }
//   else if(type==='obj-b')
//   {
//     let temp=[...optionListTypeB];
//   temp[index].text=value;
//   setOptionListTypeB(temp);
//   }
// }

// const MultipleAnswerHandler=(index)=>{
//   if(answerText.includes(index))
//   {
//     let newAnswerText=answerText.replace(index+",","");
//     setAnswerText(newAnswerText);
//   }
//   else
//   {
//     setAnswerText(answerText.concat(index+','));
//   }
// }

// const newQuestionHandler=(e,type)=>{
//   e.preventDefault();
//   let optionsData=[];
//   if(type==='obj-a')
//     optionsData=[...optionListTypeA];
//   else if(type==='obj-b')
//     optionsData=[...optionListTypeB];
//   else
//     optionsData=['empty'];
//   axios.post('/api/admin/question',{
//   questionText,questionImage:'0',options:optionsData,answerText,answerImage:'0',marks,idx:0,questionFormat:type,tid:testId
// },{
//   method: "POST",
//   headers:{
//     "Content-type": "application/json",
// },
// })
// .then((res)=>res.data)
// .then((data)=>{
//   console.log(data);
//   fetchQuestions();
// })
//   console.log(questionText);
// console.log(marks);
// if(type==='obj-a')
//   console.log(optionListTypeA);
// else if(type==='obj-b')
//   console.log(optionListTypeB);
//   console.log(answerText);
// }

// const changeTestState=(newState)=>{
//   let newTest=Object.assign({},test,{state:newState});
//   console.log(newTest);
//   axios.put('/api/admin/test',newTest,{
//     headers:{
//       "Content-type": "application/json",
//   },
//   }).then((res)=>res.data)
//   .then((data)=>{
//     console.log(data);
//     fetchTest();
//   })
// } 

  return(
        <div>
  <AdminHeader/>

    <div className="container-fluid">      
        <div className="px-5 mt-4">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item "><a href="/admin/adminDashboard" className="decor-none">Dashboard</a></li>
              <li className="breadcrumb-item active" aria-current="page">Interview</li>
            </ol>
          </nav>
        </div>
        <div className="row mt-2 px-5">
            <div className="col-12">
                <div className="d-flex justify-content-between">
                  <div>
                     <div className="h5 text-b">Interview : <span className="text-primary">{test.tname}</span></div> 
                    <small className="text-secondary">Create and edit questions for the Interview</small>
                  </div>
                    {test.state == 'edit' &&
                      <div>                         
                          <button className="btn bg-r text-white btn-sm" onClick={(e)=>changeTestState('start')}><i className="fab fa-cloudscale"></i> Start Interview</button>
                      </div>
                    }
                    {test.state == 'start' &&
                      <div>
                          <button className="btn bg-r text-white  btn-sm" onClick={(e)=>changeTestState('end')}><i className="fab fa-cloudscale"></i> End Interview</button>
                        <a href="/admin/startMeet">
                          <button className="btn bg-info text-white  btn-sm"><i className="far fa-handshake"></i> Start Zoom Meeting</button>
                        </a>
                      </div>  
                    }  
                </div>
            </div>
        </div>

        <div className="row mt-5 px-5">
            <div className="col-12">
                <div className="d-flex justify-content-between">
                    <div className="h5 text-b">Questions</div>
                    {test.state == 'edit' &&
                      <div><button className="btn text-white bg-success btn-sm" data-bs-toggle="offcanvas" data-bs-target="#qformat_a" aria-controls="offcanvasRight"> <i className="fas fa-plus"></i> Add Question</button></div>
                    }
                </div>
            </div>
        </div>

        <div className="row px-5">
            <div className="col-12">
                <table className="table table-striped">
                    <thead >
                      <tr >
                        <th scope="col" >S.No</th>
                        <th scope="col" >Question</th>
                        <th scope="col" className="w-25">Image</th>
                        <th scope="col" >Marks</th>
                        {test.state == 'edit' &&
                          <th scope="col" >Action</th>
                        }
                      </tr>
                    </thead>
                    <tbody>
                      { questions.map((question,index)=>{
                        return(<tr key={index}>
                          <td scope="row">
                            {index+1}
                          </td>
                          <td>{question.questionText}</td>
                          <td>
                            {question.questionImage!=null ?
                            (<img className="w-75" src="/img/qs${q.qid}.jpg"/>):(<p>No Image</p>)
                              }
                          </td>
                           <td>{question.marks}</td>
                          {test.state == 'edit' &&
                            <td colSpan="2" >
                              {/* <!-- <button className="btn btn-primary btn-sm "><i className="fas fa-edit"></i> edit</button> --> */}
                              <span className="px-2"></span>
  
                              <a href="/admin/test/placeolder1/qn/placeholder/d">{/*${q.qid}    ${test.tid}*/}
                                <button className="btn btn-link btn-sm text-r decor-none"><i className="fas fa-trash"></i> delete</button>
                              </a>
                            </td>  
                            }
                        </tr>
                        );
                      })
                    }
                    </tbody>
                </table>
            </div>
        </div>


        {/* <!-- MODAL MCQ-1 correct option --> */}
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="qformat_a" aria-labelledby="offcanvasRightLabel">
            <OffcanvasHeader title="Objective-Type A"/>
            <div className="offcanvas-body">
             
                    
                <form name="question" /*${test.tid} */ encType="multipart/form-data">
                {/* action="/admin/test/placholder/qn"  */}
                  
                    <QuestionSection setQuestionText={setQuestionText} questionText={questionText}/>
                    <div>
                      <button className="btn text-white bg-success btn-sm" type="button" onClick={(e)=>addOption(e,'obj-a')}>
                        <i className="fas fa-plus"></i> Add Option
                      </button>

                      {optionListTypeA.map((option,index)=>{
                        return(
                          <div className="mb-1" key={index}>
                          <label htmlFor={"option-"+(index+1)} className="form-label">Option {index+1}</label>
                          {option.hasText && 
                          <input type="text" className="form-control form-control-sm m-2" name="options" value={option.text} onChange={(e)=>changeOptionText(index,'obj-a',e.target.value)} />
                          }
                          {option.hasImage &&
                            <input className="form-control m-2" type="file" name="images"/>
                            }
                          <div>
                            <input type="checkbox" className="form-control-input mx-1" name="toggletext" defaultChecked onClick={()=>toggleText(index,'obj-a')}/>
                            <label className="form-control-label" htmlFor="toggle1">Text</label>
                            <input type="checkbox" className="form-control-input mx-1" name="Toggleimage" onClick={()=>toggleImage(index,'obj-a')}/>
                            <label className="form-control-label" htmlFor="Toggle2">Image</label>
                          </div>
                      </div>
                        );
                      })}

                  </div> 
                    
                    <div className="mb-3">
                      <label htmlFor="answer" className="form-label">Correct Option</label>
                        <select className="form-select form-control-sm answer" name="answerText" onChange={(e)=>setAnswerText(e.target.value)}>
                          <option label="select answer" key={0}/>
                          {optionListTypeA.map((option,index)=>{
                              return (<option key={index+1} value={index} label={index+1} />);
                          })
                          }
                        </select>
                        
                    </div>
                    <MarksSection qtype="obj-a" newQuestionHandler={newQuestionHandler} setMarks={setMarks}/>    
                  </form>
            </div>
          </div>
    </div>

    {/* <!-- MODAL MCQ-many correct option --> */}
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="qformat_b" aria-labelledby="offcanvasRightLabel">
    <OffcanvasHeader title="Objective-Type B"/>
      <div className="offcanvas-body">
        
          <form name="question"  /*${test.tid} */  encType="multipart/form-data">
          {/* action="/admin/test/placeholdder/qn" */}
            <QuestionSection setQuestionText={setQuestionText} questionText={questionText}/>
            <div>
              <button className="btn text-white bg-success btn-sm" type="button" onClick={(e)=>addOption(e,'obj-b')}>
                <i className="fas fa-plus"></i> Add Option
              </button>
              { optionListTypeB.map((option,index)=>{
               return(
               <div className="mb-1">
                  <label htmlFor={"option-"+(index+1)} className="form-label">Option {index+1}</label>
                  {option.hasText&& 
                  <input type="text" className="form-control form-control-sm m-2" name={"option-"+(index+1)} value={option.text} onChange={(e)=>changeOptionText(index,'obj-b',e.target.value)} />
              }
                { option.hasImage &&  
                  <input className="form-control m-2" type="file" name="images"/>
              }
                  <div className="">
                    <input type="checkbox" className="form-control-input mx-1" name="toggletext" defaultChecked onClick={()=>toggleText(index,'obj-b')}/>
                    <label className="form-control-label" htmlFor="toggle1">Text</label>
                    <input type="checkbox" className="form-control-input mx-1" name="Toggleimage" onClick={()=>toggleImage(index,'obj-b')}/>
                    <label className="form-control-label" htmlFor="Toggle2">Image</label>
                  </div>
              </div>
              );
              })
            }
          </div>
              <div className="answer mb-3">
                <label htmlFor="answer" className="form-label">Correct Options</label>
                <div className="d-inline">
                  { optionListTypeB.map((option,index)=>{
                return(
                  <>
                <input key={index} type="checkbox" className="mx-2" value={index} label={index+1} name="answerText" onChange={(e)=>MultipleAnswerHandler(index)}/>
                <label >{index+1}</label>
                </>
                )
              })}
              </div>
                
              </div> 
              
            <MarksSection qtype="obj-b" newQuestionHandler={newQuestionHandler} setMarks={setMarks} />    
            </form>
      </div>
    </div>

{/* <!-- Modal subjective-text answer --> */}
<div className="offcanvas offcanvas-end" tabIndex="-1" id="qformat_c" aria-labelledby="offcanvasRightLabel">
<OffcanvasHeader title="Subjective-Type A"/>
  <div className="offcanvas-body">
    
      <form name="question"  /*${test.tid}*/  encType="multipart/form-data"> 
      {/* action="/admin/test/placeholder/qn" */}
       
        <QuestionSection setQuestionText={setQuestionText} questionText={questionText}/>
          <div className="answer mb-3">
            <label htmlFor="answer" className="form-label">Correct answer</label>
            <textarea className="form-control form-control-sm" name="answerText" onChange={(e)=>setAnswerText(e.target.value)}></textarea>
            <div className="d-none">
              <input className="form-control m-2" type="file" name="images"/>
            </div>
            <div className="">
              <input type="checkbox" className="form-control-input mx-1" name="toggletext" defaultChecked onClick="toggleView(this,'textarea');"/>
              <label className="form-control-label" htmlFor="toggle1">Text</label>
              <input type="checkbox" className="form-control-input mx-1" name="Toggleimage" onClick="toggleView(this,'div');"/>
              <label className="form-control-label" htmlFor="Toggle2">Image</label>
            </div>            
          </div> 
          <MarksSection qtype="sub-a" newQuestionHandler={newQuestionHandler} setMarks={setMarks} />    
      </form>
  </div>
</div>
{/* </div> */}
      
        </div>
    );
}

export default AdminQuestion;