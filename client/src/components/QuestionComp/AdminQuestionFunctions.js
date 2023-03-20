const fetchTest=async()=>{
    //fetch tests
    axios.get('/api/admin/test/'+testId,{
      method: "GET",
      // Adding headers to the request
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
    }).then((res) => res.data)
    .then((data)=> {
      setTest(data.resData[0]);
      console.log(data.resData[0]);
      fetchQuestions();
      setLoading(false);
    })
  }
    const fetchQuestions=()=>{
      axios.get('/api/admin/questions/'+testId,{
        method: "GET",
        // Adding headers to the request
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then((res) => res.data)
      .then((data)=> {
         setQuestions(data.resData);
         console.log(data.resData);
      })
    }
  const addOption=(e,type)=>{
    if(type==='obj-a')
      setOptionListTypeA(optionListTypeA.concat({hasText:true,hasImage:false,text:" "}));
    else if(type==='obj-b')
      setOptionListTypeB(optionListTypeB.concat({hasText:true,hasImage:false,text:" "}));
    }
    const toggleText=(index,type)=>{
      if(type==='obj-a')
      {
      let temp=[...optionListTypeA];
      temp[index].hasText=!temp[index].hasText;
      console.log(temp);
      setOptionListTypeA(temp);
      }
      else if(type==='obj-b')
      {
        let temp=[...optionListTypeB];
        temp[index].hasText=!temp[index].hasText;
        console.log(temp);
        setOptionListTypeB(temp);
        }
    }
  
  const toggleImage=(index,type)=>{
    if(type==='obj-a')
    {
    let temp=[...optionListTypeA];
    temp[index].hasImage=!temp[index].hasImage;
    setOptionListTypeA(temp);
    }
    else if(type==='obj-b')
    {
      let temp=[...optionListTypeB];
    temp[index].hasImage=!temp[index].hasImage;
    setOptionListTypeB(temp);
    }
  }
  const changeOptionText=(index,type,value)=>{
    if(type==='obj-a')
    {
    let temp=[...optionListTypeA];
    temp[index].text=value;
    //console.log("option reached");
    //console.log(temp);
    setOptionListTypeA(temp);
    }
    else if(type==='obj-b')
    {
      let temp=[...optionListTypeB];
    temp[index].text=value;
    setOptionListTypeB(temp);
    }
  }
  
  const MultipleAnswerHandler=(index)=>{
    if(answerText.includes(index))
    {
      let newAnswerText=answerText.replace(index+",","");
      setAnswerText(newAnswerText);
    }
    else
    {
      setAnswerText(answerText.concat(index+','));
    }
  }
  
  const newQuestionHandler=(e,type)=>{
    e.preventDefault();
    let optionsData=[];
    if(type==='obj-a')
      optionsData=[...optionListTypeA];
    else if(type==='obj-b')
      optionsData=[...optionListTypeB];
    else
      optionsData=['empty'];
    axios.post('/api/admin/question',{
    questionText,questionImage:'0',options:optionsData,answerText,answerImage:'0',marks,idx:0,questionFormat:type,tid:testId
  },{
    method: "POST",
    headers:{
      "Content-type": "application/json",
  },
  })
  .then((res)=>res.data)
  .then((data)=>{
    console.log(data);
    fetchQuestions();
  })
    console.log(questionText);
  console.log(marks);
  if(type==='obj-a')
    console.log(optionListTypeA);
  else if(type==='obj-b')
    console.log(optionListTypeB);
    console.log(answerText);
  }
  
  const changeTestState=(newState)=>{
    let newTest=Object.assign({},test,{state:newState});
    console.log(newTest);
    axios.put('/api/admin/test',newTest,{
      headers:{
        "Content-type": "application/json",
    },
    }).then((res)=>res.data)
    .then((data)=>{
      console.log(data);
      fetchTest();
    })
  } 

  exports.modules={
    fetchTest,
    fetchQuestions,
    addOption,
   toggleImage,
   changeOptionText,
   MultipleAnswerHandler,
   newQuestionHandler,
   changeTestState 
  }