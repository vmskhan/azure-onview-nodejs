const MultipleChoiceQuestion=(choice,rightAnswer)=>{

    if(choice===rightAnswer)
        return "correct";
    else
        return "false";
}

const MultipleSelectQuestion=(choice,rightAnswer)=>{
    let result='';
    choice=choice.replaceAll(',',' ').trim().split(' ').filter(element=>element);
    rightAnswer=rightAnswer.replaceAll(',',' ').trim().split(" ").filter(element=>element);
    // console.log(choice)
    // console.log(rightAnswer)
    // console.log(rightAnswer.length)
    // console.log('values:'+( rightAnswer.every((v)=>choice.find((ch)=>ch===v))));
    if(choice.length===rightAnswer.length && rightAnswer.every((v)=>choice.find((ch)=>ch===v)))
        result= "correct"
    else
        result= "false";
    // console.log('result:'+result);
    return result;
}

const SubjectiveQuestion=(choice,rightAnswer)=>{
    return "pending";
}

module.exports={
    'Objective Type-A':MultipleChoiceQuestion,
    'Objective Type-B':MultipleSelectQuestion,
    'Subjective Type-A':SubjectiveQuestion
}