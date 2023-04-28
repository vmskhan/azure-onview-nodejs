import { useEffect, useState } from "react";

const MultipleChoiceQuestion=(props)=>{
    const [optionListTypeA,setOptionListTypeA]=useState(
      [{
        id:1,
        text:" ",
        image:{
          preview:'',
          data:'',
        },
        hasText:true,
        hasImage:false,
        isSelected:false
      }]);
    const [answer,setAnswer]=useState(
      {
        text:0,
        hasText:true,
        hasImage:false,
      }
      );
    
    useEffect(()=>{
      if(props.dynamicComponentData!==null && props.mode==='edit')
      {
        setOptionListTypeA(props.dynamicComponentData.options);
        setAnswer(props.dynamicComponentData.answer)
      }
      // else
      // {
      //   setOptionListTypeA([{hasText:true,hasImage:false,text:" ",isSelected:false}]);
      // }
    },[props.question]);

    const addOption=()=>{
          setOptionListTypeA(optionListTypeA.concat(
            {
              id:optionListTypeA.length+1,
              text:"",
              image:{preview:'',data:''},
              hasText:true,
              hasImage:false,
              isSelected:false
            })
            );
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
          if(element.id===parseInt(value))
            element.isSelected=true;
          else
            element.isSelected=false;
        })
        setOptionListTypeA(temp);
        let temp2=Object.assign({},answer);
        temp2.text=value;
        setAnswer(temp2);
      }
      
     const ImageHandler=(index,e)=>{
      const data={
        preview:URL.createObjectURL(e.target.files[0]),
        data:e.target.files[0]
      };
      let temp=optionListTypeA.map(option=>({...option}));
        temp[index].image=data;
        setOptionListTypeA(temp);
     }

      useEffect(()=>{
        // console.log(optionListTypeA)
        props.setDynamicComponentData({options:optionListTypeA,answer:answer});
      },[optionListTypeA,answer]);

      // useEffect(()=>{
      //   console.log(answer)
      // },[answer]);


    //   const getSelectedValue=()=>{
    //     const option=optionListTypeA.filter((option)=>option.isSelected===true)
    //     if(option && option.length>0)
    //     {
    //       return option[0].text;
    //     }
    //     else
    //     {
    //       AnswerHandler(optionListTypeA[0].text);
    //       return optionListTypeA[0].text;
    //     }
    // }


      return(
        <div>

                    
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
                            <>
                            <input className="form-control m-2" type="file" name="images" onChange={(e)=>ImageHandler(index,e)}/>
                            {option.image.preview && 
                              <img src={option.image.preview} className="img-fluid"/>
                            }
                            </>
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
                    <button className="btn text-light bg-success btn-sm" type="button" onClick={addOption}>
                    <i className="bi bi-plus-circle"></i> Add Option
                    </button>
                  </div>

                    <div className="mb-3">
                      <label htmlFor="answer" className="form-label">Correct Option</label>
                       <select className="form-select form-control-sm answer" name="answerText" value={answer.text} onChange={(e)=>AnswerHandler(e.target.value)}>
                          <option label="select answer" key={0}/>
                          {optionListTypeA.map((option,index)=>{
                              return (<option key={index+1} value={option.id} label={index+1} />);
                          })
                          }
                        </select>
                        
                    </div>
                    
    </div>
);
}

export default MultipleChoiceQuestion;
