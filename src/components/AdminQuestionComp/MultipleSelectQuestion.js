import { useState, useEffect } from "react";
import QuestionSection from "./QuestionSection";
import MarksSection from "./MarksSection";
import { useDispatch } from "react-redux";
import { sendNewQuestion, updateQuestion } from "../../store/AdminDashboardActions";

const MultipleSelectQuestion=(props)=>{
  const testId=localStorage.getItem('currentTest');
  const dispatch=useDispatch();
    const [questionText,setQuestionText]=useState("");
    const [marks,setMarks]=useState(0);
    const [optionListTypeB,setOptionListTypeB]=useState([{hasText:true,hasImage:false,text:" ",isChecked:false},]);

    useEffect(()=>{
      if(props.question!==null && props.mode==='edit')
      {
        setQuestionText(props.question.questionText);
        if(props.question.options[0].hasOwnProperty('isChecked'))
          setOptionListTypeB(props.question.options);
        else
          setOptionListTypeB(props.question.options.map((option)=>({...option,isChecked:false})));
        setMarks(props.question.marks);
      }
      else
      {
        setQuestionText("");
        setOptionListTypeB([{hasText:true,hasImage:false,text:" ",isChecked:false}]);
        setMarks(0);
      }
    },[props.mode])

useEffect(()=>{
  console.log(optionListTypeB);
},[optionListTypeB])

    const addOption=(e,type)=>{
        setOptionListTypeB(optionListTypeB.concat({hasText:true,hasImage:false,text:" "}));
        }
    const toggleText=(index,type)=>{
      let temp=optionListTypeB.map(option=>({...option}));
        temp[index].hasText=!temp[index].hasText;
        console.log(temp);
        setOptionListTypeB(temp);
    }
    
    const toggleImage=(index,type)=>{
      let temp=optionListTypeB.map(option=>({...option}));
    temp[index].hasImage=!temp[index].hasImage;
    setOptionListTypeB(temp);
    
    }
    const changeOptionText=(index,type,value)=>{
      let temp=optionListTypeB.map(option=>({...option}));
    temp[index].text=value;
    setOptionListTypeB(temp);
    }
    
    const MultipleAnswerHandler=(index,state)=>{
        let temp=optionListTypeB.map(option=>({...option}));
        temp[index].isChecked=state;
        setOptionListTypeB(temp);
    }
    
    const saveQuestionHandler=()=>{
      let answerText="";
      optionListTypeB.map((option)=>{
        if(option.isChecked)
          answerText+=option.text;
      })
      const data={
        questionText,
        options:optionListTypeB,
        answerText,
        marks,
        questionFormat:'Objective Type-B',
        tid:testId,
      }
      if(props.mode && props.mode==='new')
      dispatch(sendNewQuestion(data));
    else if(props.mode && props.mode==='edit')
    {
      data._id=props.question._id; 
      dispatch(updateQuestion(data));
    }
    }

    return(
        <div>

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
                  {option.isChecked===true &&
                <input key={index} type="checkbox" className="mx-2" value={option.value} label={index+1} name="answerText" onChange={(e)=>MultipleAnswerHandler(index,false)} defaultChecked/>
                  }
                  {option.isChecked!==true &&
                  <input key={index} type="checkbox" className="mx-2" value={option.value} label={index+1} name="answerText" onChange={(e)=>MultipleAnswerHandler(index,true)}/>
                  }
                <label >{index+1}</label>
                </>
                )
              })}
              </div>
                
              </div> 
              
            <MarksSection  marks={marks} setMarks={setMarks} />    
              <div className="d-grid gap-2">
                <button type="button" className="btn bg-success text-white btn-sm px-5" onClick={saveQuestionHandler} ><i className="fas fa-save"></i> Save</button> 
              </div>
        </div>
    )
}

export default MultipleSelectQuestion;