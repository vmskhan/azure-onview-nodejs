import React from "react"
import MultipleChoiceQuestion from "../TestQuestionComponents/MultipleChoiceQuestion"
import MultipleSelectQuestion from "../TestQuestionComponents/MultipleSelectQuestion"
import SubjectiveQuestion from "../TestQuestionComponents/SubjectiveQuestion"

export const userTestQuestionComponents={
    'Objective Type-A':MultipleChoiceQuestion,
    'Objective Type-B':MultipleSelectQuestion,
    'Subjective Type-A':SubjectiveQuestion
  }

  const UserDynamicComponent=(props)=>{
    const MyComp=userTestQuestionComponents[props.question.question.format];
    // const element=React.createElement(userTestQuestionComponents[props.questionType],props);
    console.log('new test question componenet created:'+props.question.question.format);
    // return element;
    console.log(props);
    return <MyComp {...props}/>
  }

  export default UserDynamicComponent;