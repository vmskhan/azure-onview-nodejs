const MultipleChoiceQuestion=(choice,rightAnswer)=>{

    if(choice===rightAnswer)
        return "correct";
    else
        return "false";
}

const MultipleSelectQuestion=(choice,rightAnswer)=>{
    choice=choice.replaceAll(',','').trim().split(' ').filter(element=>element);
    rightAnswer=rightAnswer.split(" ").filter(element=>element);
    console.log(choice)
    console.log(rightAnswer)
    if(choice.length===rightAnswer.length && rightAnswer.values===choice.values)
        return "correct"
    return "false";
}

const SubjectiveQuestion=(choice,rightAnswer)=>{
    return "pending";
}

module.exports={
    'Objective Type-A':MultipleChoiceQuestion,
    'Objective Type-B':MultipleSelectQuestion,
    'Subjective Type-A':SubjectiveQuestion
}