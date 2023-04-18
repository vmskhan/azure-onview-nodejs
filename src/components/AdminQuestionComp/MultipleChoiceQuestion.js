import { useEffect, useState } from "react";

import QuestionSection from "./QuestionSection";
import MarksSection from "./MarksSection";
import { useDispatch } from "react-redux";
import { adminDashboardActions } from "../../store/AdminDashboardSlice";
import { sendNewQuestion, updateQuestion } from "../../store/AdminDashboardActions";

const MultipleChoiceQuestion=(props)=>{
    const dispatch=useDispatch();
    const testId=localStorage.getItem('currentTest');
    const [optionListTypeA,setOptionListTypeA]=useState([{hasText:true,hasImage:false,text:" ",isSelected:false}]);
    const [questionText,setQuestionText]=useState("");
    const [marks,setMarks]=useState(0);
    const [questionImage,setQuestionImage]=useState({preview:'',data:''});
    
    

    const imageHandler=(e)=>{
      let data={
        preview:URL.createObjectURL(e.target.files[0]),
        data:e.target.files[0],
      }
      setQuestionImage(data);
    }

    const questionProps={
      'setQuestionText':setQuestionText,
      'questionText':questionText,
       'questionImage':questionImage ,
       'imageHandler':imageHandler
      };

    useEffect(()=>{
      if(props.question!==null && props.mode==='edit')
      {
        setQuestionText(props.question.questionText);
        setOptionListTypeA(props.question.options);
        setMarks(props.question.marks);
      }
      else
      {
        setQuestionText("");
        setOptionListTypeA([{hasText:true,hasImage:false,text:" ",isSelected:false}]);
        setMarks(0);
      }
    },[props.question]);

    const addOption=()=>{
          setOptionListTypeA(optionListTypeA.concat({hasText:true,hasImage:false,text:" ",isSelected:false}));
        }

        const toggleText=(index)=>{
          let temp=optionListTypeA.map(option=>({...option}));
          temp[index].hasText=!temp[index].hasText;
          setOptionListTypeA(temp);
        }
      
      const toggleImage=(index)=>{     
        let temp=optionListTypeA.map(option=>({...option}));
        temp[index].hasImage=!temp[index].hasImage;
        setOptionListTypeA(temp);
      }
      
      const changeOptionText=(index,value)=>{
        let temp=optionListTypeA.map(option=>({...option}));
        temp[index].text=value;
        setOptionListTypeA(temp);
      }

      const removeOption=(optionIndex)=>{
        let temp=optionListTypeA.map(option=>({...option}));
        temp=temp.filter((value,index)=>index!==optionIndex);
        setOptionListTypeA(temp);
      }
      const AnswerHandler=(value)=>{
        let temp=optionListTypeA.map(option=>({...option}));
        temp.forEach((element)=>{
          if(element.text===value)
            element.isSelected=true;
          else
            element.isSelected=false;
        })
        setOptionListTypeA(temp);
      }
      const getSelectedValue=()=>{
          const option=optionListTypeA.filter((option)=>option.isSelected===true)
          if(option && option.length>0)
          {
            return option[0].text;
          }
          else
          {
            AnswerHandler(optionListTypeA[0].text);
            return optionListTypeA[0].text;
          }
      }
      const saveQuestionHandler=()=>{
        let answerText=getSelectedValue();
        const data={
          questionText,
          options:optionListTypeA,
          answerText,
          marks,
          questionFormat:'Objective Type-A',
          tid:testId,
        }
        if(props.mode && props.mode==='new')
          dispatch(sendNewQuestion(data));
        else if(props.mode && props.mode==='edit')
        {
        console.log("edit question data")
        data._id=props.question._id;  
        console.log(data);
          dispatch(updateQuestion(data));
        }
      }

      useEffect(()=>{
        console.log(optionListTypeA)
      },[optionListTypeA])
    
      return(
        <div>

                    <QuestionSection {...questionProps} />
                    <div>
                      

                      {optionListTypeA.map((option,index)=>{
                        return(
                          <div className="mb-1" key={index}>
                          <label htmlFor={"option-"+(index+1)} className="form-label">Option {index+1}</label>
                          {option.hasText && 
                          <>
                          <div className="d-flex">
                            <input type="text" className="form-control form-control-sm m-2" name="options" value={option.text} onChange={(e)=>changeOptionText(index,e.target.value)} />
                            <button className="btn text-white bg-danger btn-sm" type="button" onClick={()=>removeOption(index)}><i className="bi bi-trash3" style={{fontSize: '1rem'}}></i></button>
                          </div>
                          </>
                          }
                          {option.hasImage &&
                            <input className="form-control m-2" type="file" name="images"/>
                            }
                          <div>
                            <input type="checkbox" className="form-control-input mx-1" name="toggletext" defaultChecked onClick={()=>toggleText(index)}/>
                            <label className="form-control-label" htmlFor="toggle1">Text</label>
                            <input type="checkbox" className="form-control-input mx-1" name="Toggleimage" onClick={()=>toggleImage(index)}/>
                            <label className="form-control-label" htmlFor="Toggle2">Image</label>
                          </div>
                      </div>
                        );
                      })}

                  </div>
                  
                  <div className="my-3 d-grid gap-2">
                    <button className="btn text-white bg-success btn-sm" type="button" onClick={addOption}>
                    <i className="bi bi-plus-circle"></i> Add Option
                    </button>
                  </div>

                    <div className="mb-3">
                      <label htmlFor="answer" className="form-label">Correct Option</label>
                       <select className="form-select form-control-sm answer" name="answerText" value={getSelectedValue()} onChange={(e)=>AnswerHandler(e.target.value)}>
                          <option label="select answer" key={0}/>
                          {optionListTypeA.map((option,index)=>{
                              return (<option key={index+1} value={option.text} label={index+1} />);
                          })
                          }
                        </select>
                        
                    </div>
                    <MarksSection marks={marks} setMarks={setMarks}/>    
                    <div className="d-grid gap-2">
                      <button type="button" className="btn bg-success text-white btn-sm px-5" onClick={saveQuestionHandler} ><i className="fas fa-save"></i> Save</button> 
                     </div>
    </div>
);
}

export default MultipleChoiceQuestion;
