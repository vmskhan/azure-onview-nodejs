import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const SubjectiveQuestion=(props)=>{
  
  const [answer,setAnswer]=useState(
    {
      text:"",
      image:{
        preview:"",
        data:"",
      },
      hasText:true,
      hasImage:false,
    }
    );
    const changeAnswerText=(value)=>{
      let temp=Object.assign({},answer);
    temp.text=value;
    setAnswer(temp);
    }

    const toggleText=()=>{
      let temp=Object.assign({},answer);
        temp.hasText=!temp.hasText;
        // console.log(temp);
        setAnswer(temp);
    }
    
    const toggleImage=()=>{
      let temp=Object.assign({},answer);
    temp.hasImage=!temp.hasImage;
    setAnswer(temp);
    }
    const ImageHandler=(e)=>{
      const data={
        preview:URL.createObjectURL(e.target.files[0]),
        data:e.target.files[0]
      };
      let temp=Object.assign({},answer);
        temp.image=data;
        setAnswer(temp);
     }
useEffect(()=>{
  if(props.dynamicComponentData!==null && props.mode==='edit')
  {
    
    setAnswer(props.dynamicComponentData.answer)
  }
  // else
  // {
  //   setOptionListTypeA([{hasText:true,hasImage:false,text:" ",isSelected:false}]);
  // }
},[props.question]);

useEffect(()=>{
  // console.log(answer);
  props.setDynamicComponentData({options:[],answer:answer});
},[answer]);

    return( 
          <div className="answer mb-3">
            <label htmlFor="answer" className="form-label">Correct answer</label>
            { answer.hasText &&
            <textarea className="form-control form-control-sm" name="answerText" value={answer.text} onChange={(e)=>changeAnswerText(e.target.value)}></textarea>
            }
            {answer.hasImage &&
             <>
             <input className="form-control m-2" type="file" name="images" onChange={(e)=>ImageHandler(e)}/>
             {answer.image.preview && 
             <img src={answer.image.preview} className="img-fluid"/>
              }
             </>
            }
            <div className="">
              <input type="checkbox" className="form-control-input mx-1" name="toggletext" onClick={(e)=>toggleText()} checked={answer.hasText}/>
              <label className="form-control-label" htmlFor="toggle1">Text</label>
              <input type="checkbox" className="form-control-input mx-1" name="Toggleimage" onClick={(e)=>toggleImage()} checked={answer.hasImage}/>
              <label className="form-control-label" htmlFor="Toggle2">Image</label>
            </div>            
          </div>
    );
}

export default SubjectiveQuestion;