import MultipleChoiceQuestion from "../AdminQuestionComp/MultipleChoiceQuestion"
import MultipleSelectQuestion from "../AdminQuestionComp/MultipleSelectQuestion"
import SubjectiveQuestion from "../AdminQuestionComp/SubjectiveQuestion"

export const adminQuestionComponents={
    'Objective Type-A':MultipleChoiceQuestion,
    'Objective Type-B':MultipleSelectQuestion,
    'Subjective Type-A':SubjectiveQuestion
  }

  const AdminDynamicComponent=(props)=>{
    const MyComp=adminQuestionComponents[props.questionType];
    return <MyComp {...props}/>
  }

  export default AdminDynamicComponent;
