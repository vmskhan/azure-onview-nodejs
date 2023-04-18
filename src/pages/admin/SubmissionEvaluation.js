import AdminHeader from "../../components/admin/AdminHeader";

const { default: AdminEvaluateAnswer } = require("../../components/admin/adminEvaluateAnswer")

const SubmissionEvaluation=()=>{
    return(
        <>
        <AdminHeader/>
        <AdminEvaluateAnswer/>
        </>
    );
}

export default SubmissionEvaluation;