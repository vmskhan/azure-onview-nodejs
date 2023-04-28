import { useEffect, useState } from "react";
// import _ from "lodash"

const QuestionSection=({questionObj,setQuestionObj,questionType})=>{
  
  
  const [question,setQuestion]=useState(
    {
      question:{
        text:"",
        image:{preview:'',data:''},
        format:questionType,
        hasText:true,
        hasImage:false,
        }
    });
  

  useEffect(()=>{
    // if(JSON.stringify(questionObj)!=="{}") //for empty json
    if(questionObj!==null)
    setQuestion(questionObj);
    // console.log(questionObj);
  },[]);

useEffect(()=>{
  // console.log(question);
  setQuestionObj(question);
},[question]);

useEffect(()=>{
  let temp=Object.assign({},question);
  temp.question.format=questionType;
  setQuestion(temp);
},[questionType]);

  const imageHandler=(e)=>{
    const temp=Object.assign({},question);
    let data={
      preview:URL.createObjectURL(e.target.files[0]),
      data:e.target.files[0],
    }
    temp.question.image=data;
    setQuestion(temp);
  }

  const setQuestionText=(e)=>{
    const temp=Object.assign({},question);
    temp.question.text=e.target.value;
    setQuestion(temp);
  }

  const toggleText=()=>{
    const temp=Object.assign({},question);
    temp.question.hasText=!temp.question.hasText;
    setQuestion(temp);
  }
  const toggleImage=()=>{
    const temp=Object.assign({},question);
    temp.question.hasImage=!temp.question.hasImage;
    setQuestion(temp);
  }
    return(
        <div className="mb-1">
          <label htmlFor="question" className="form-label">Question</label>
          {question.question.hasText&&
          <textarea className="form-control form-control-sm" name="questionText" onChange={(e)=>setQuestionText(e)} value={question.question.text}></textarea>
          }
          {question.question.hasImage&&
          <>
            <div className="">
              <input className="form-control m-2" type="file" name="questionImage" onChange={imageHandler}/>  
            </div>
            {question.question.image.preview!=='' &&
          <img src={question.question.image.preview} className="img-fluid"/>
          }
          </>
          }

          <div className="">
            <input type="checkbox" className="form-control-input mx-1" name="toggletext" onClick={()=>toggleText()} checked={question.question.hasText}/>
            <label className="form-control-label" htmlFor="toggle1">Text</label>
            <input type="checkbox" className="form-control-input mx-1" name="Toggleimage" onClick={()=>toggleImage()} checked={question.question.hasImage}/>
            <label className="form-control-label" htmlFor="Toggle2">Image</label>
          </div>
        </div>
    );
}

export default QuestionSection;