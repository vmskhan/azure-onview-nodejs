import AdminHeader from "../../components/admin/AdminHeader";

const { default: AdminMeet } = require("../../components/admin/AdminMeet")

const Meeting=()=>{
    return(
        <>
        <AdminHeader/>
        <AdminMeet/>
        </>
    )
}

export default Meeting;