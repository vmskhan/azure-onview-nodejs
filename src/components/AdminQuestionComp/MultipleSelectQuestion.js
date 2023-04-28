import { useState, useEffect } from "react";

const MultipleSelectQuestion=(props)=>{
    const [optionListTypeB,setOptionListTypeB]=useState([
      {
        id:1,
        text:" ",
        image:{
          data:'',
          preview:''
        },
        hasText:true,
        hasImage:false,
        isChecked:false,
      }]);
      const [answer,setAnswer]=useState(
        {
          text:"",
          hasText:true,
          hasImage:false,
        }
        );

    // useEffect(()=>{

    // },[props.mode])
    useEffect(()=>{
      if(props.dynamicComponentData!==null && props.mode==='edit')
      {
        setOptionListTypeB(props.dynamicComponentData.options);
        setAnswer(props.dynamicComponentData.answer)
      }
      // else
      // {
      //   setOptionListTypeA([{hasText:true,hasImage:false,text:" ",isSelected:false}]);
      // }
    },[props.question]);

    const addOption=(e,type)=>{
        setOptionListTypeB(optionListTypeB.concat(
          {
            id:optionListTypeB.length+1,
            text:" ",
            image:{
              data:"",
              preview:"",
            },
            hasText:true,
            hasImage:false,
            isChecked:false,
          }));
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
        let tempAns=Object.assign({},answer);
        temp[index].isChecked=state;
        if(state)
          tempAns.text=tempAns.text.concat(temp[index].id+",");
        else
          tempAns.text=tempAns.text.replace(temp[index].id+",","");
        setAnswer(tempAns);
        setOptionListTypeB(temp);
    }

    const ImageHandler=(index,e)=>{
      const data={
        preview:URL.createObjectURL(e.target.files[0]),
        data:e.target.files[0]
      };
      let temp=optionListTypeB.map(option=>({...option}));
        temp[index].image=data;
        setOptionListTypeB(temp);
     }

    useEffect(()=>{
      // console.log(optionListTypeB);
      // console.log(answer);
      props.setDynamicComponentData({options:optionListTypeB,answer:answer});
    },[optionListTypeB,answer]);

    return(
        <div>
            <div>
              
              { optionListTypeB.map((option,index)=>{
               return(
               <div className="mb-1">
                  <label htmlFor={"option-"+(index+1)} className="form-label">Option {index+1}</label>
                  {option.hasText&& 
                  <input type="text" className="form-control form-control-sm m-2" name={"option-"+(index+1)} value={option.text} onChange={(e)=>changeOptionText(index,'obj-b',e.target.value)} />
              }
                { option.hasImage &&  
                <>
                  <input className="form-control m-2" type="file" name="images" onChange={(e)=>ImageHandler(index,e)}/>
                  {option.image.preview && 
                  <img src={option.image.preview} className="img-fluid"/>
                  }
                  </>
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
            <div className="my-3 d-grid gap-2">
              <button className="btn text-light bg-success btn-sm" type="button" onClick={(e)=>addOption(e,'obj-b')}>
              <i className="bi bi-plus-circle"></i> Add Option
              </button>
            </div>
          </div>
              <div className="answer mb-3">
                <label htmlFor="answer" className="form-label">Correct Options</label>
                <div className="d-inline">
                  { optionListTypeB.map((option,index)=>{
                return(
                  <>
                  {option.isChecked===true?(
                <input key={index} type="checkbox" className="mx-2" value={option.value} label={index+1} name="answerText" onChange={(e)=>MultipleAnswerHandler(index,false)} defaultChecked/>
                  ):(
                  <input key={index} type="checkbox" className="mx-2" value={option.value} label={index+1} name="answerText" onChange={(e)=>MultipleAnswerHandler(index,true)}/>
                  )
                  }
                <label >{index+1}</label>
                </>
                )
              })}
              </div>
                
              </div> 
        </div>
    )
}

export default MultipleSelectQuestion;