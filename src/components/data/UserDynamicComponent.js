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
    const MyComp=userTestQuestionComponents[props.questionType];
    const element=React.createElement(userTestQuestionComponents[props.questionType],props);
    console.log('new test question componenet created');
    return element;
    // <MyComp {...props}/>
  }

  export default UserDynamicComponent;