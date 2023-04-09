import { useState } from "react";
import { useEffect } from "react";
import QuestionSection from "./QuestionSection";
import MarksSection from "./MarksSection";
import { useDispatch } from "react-redux";
import { sendNewQuestion, updateQuestion } from "../../store/AdminDashboardActions";

const SubjectiveQuestion=(props)=>{
  const testId=localStorage.getItem('currentTest');
  const dispatch=useDispatch();
    const [questionText,setQuestionText]=useState("");
const [marks,setMarks]=useState(0);
const [answerText,setAnswerText]=useState("");

useEffect(()=>{
  if(props.question!==null && props.mode==='edit')
  {
    setQuestionText(props.question.questionText);
    setMarks(props.question.marks);
    setAnswerText(props.question.answerText);
  }
  else
  {
    setQuestionText("");
    setMarks(0);
    setAnswerText("");
  }
},[props.mode])


const saveQuestionHandler=()=>{
  const data={
    questionText,
    options:[],
    answerText,
    marks,
    questionFormat:'Subjective Type-A',
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
          <div className="answer mb-3">
            <label htmlFor="answer" className="form-label">Correct answer</label>
            <textarea className="form-control form-control-sm" name="answerText" value={answerText} onChange={(e)=>setAnswerText(e.target.value)}></textarea>
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
          <MarksSection  marks={marks} setMarks={setMarks} />    
          <div className="d-grid gap-2">
            <button type="button" className="btn bg-success text-white btn-sm px-5" onClick={saveQuestionHandler} ><i className="fas fa-save"></i> Save</button> 
          </div>
 
        </div>
    );
}

export default SubjectiveQuestion;