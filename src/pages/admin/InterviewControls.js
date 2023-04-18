import AdminHeader from "../../components/admin/AdminHeader";

const { default: AdminQuestion } = require("../../components/AdminQuestionComp/AdminQuestion")

const InterviewControls=()=>{
    return(
        <>
        <AdminHeader/>
        <AdminQuestion/>
        </>
    );
}

export default InterviewControls;