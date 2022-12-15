import axios from "axios";
import {useEffect, useRef, useState} from "react";
import ErrorMessage from "./ErrorMessage";
import Loading from "./Loading";
import { useNavigate } from "react-router";



const Login=() => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState("");
    const navigate=useNavigate();
    const userInfo=useRef("");
    const [authorized,setAuthorized]=useState(false)
    useEffect(() => {
        userInfo.current=localStorage.getItem("userInfo");
        if(userInfo.current){
            if(JSON.parse(userInfo.current).isAdmin)
                navigate("/admin/adminDashboard",{replace:true});
            else
                navigate("/user/userDashboard",{replace:true});
        }
        },[authorized]);

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(email,password);

        try {
            
            const config={
                headers:{
                    "Content-type": "application/json",
                },  
            };
            setLoading(true);
            const {data}=await axios.post(
                "/api/users/login",
                {
                    email,
                    password
                },
                config
            );
                console.log(data);
                localStorage.setItem("userInfo",JSON.stringify(data));
            setLoading(false);
                setError("");
                setAuthorized(true);
        } catch (error) {
            setLoading(false);
            setError(error.response.data.message);
        }
    };

    return(
        <div className="container-fluid">
<div className="row vh-100">
        <div className="col-6 auth-bg-left-img border-end border-5 border-success">
            <div className="container-fluid">
            <div className="row justify-content-center vh-100">
            <div className="col-9 align-self-center shadow rounded bg-white border border-success border-2 px-5 py-3">
                
                <div className="h3 mt-4 text-success text-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-workspace" viewBox="0 0 16 16">
                    <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                    <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z"/>
                  </svg> Onview</div>
                <div className="text-center"> 
                    <small className="text-secondary">An Online interview platform for great interviews</small>             
                </div>
                
                <div className="h5 mt-4 text-d text-center">L o g i n</div>     
                {error && <ErrorMessage message={error} />}
                <form className="mt-3" name="login" onSubmit={(e)=>submitHandler(e)}>
                    <div className="form-group">
                        <label htmlFor="email" className="mb-2 text-secondary">Email id</label>
                        <input type="email"  name="username" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="form-control" />
                    </div>
                    <div className="form-group mt-4">
                        <label htmlFor="password" className="mb-2 text-secondary">Password</label>
                        <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" />
                    </div>
                    {/* <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" /> */}
                    <div className="text-center mt-4">
                        <input className="btn bg-success text-white btn-sm px-5" type="submit" />
                    </div>
                    <div className="my-2 text-center text-danger">
                        {/* invalid credentials */}
                    </div>
                    <div className="mt-3 text-center">
                        <div className="text-secondary mb-2"> OR</div>
                        Don't have an account ? <a href="/registerUser" >Sign Up (for users)</a><br/>
                        <a href="/registerAdmin" >Sign Up (for admins)</a><br/>
                    </div>
            {/* spinner */}
                    {loading && <Loading/>}
                </form>
            </div>
            </div>
            
            
        </div>
        </div>
        <div className="col-6 text-center border-start border-success border-5 auth-bg-right-img">
            <div className="row justify-content-center">
                <div className="col-9 d-flex flex-wrap vh-100 text-center">
                    <h2 className="text-dark  flex-fill display-1"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-person-workspace" viewBox="0 0 16 16">
                        <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                        <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z"/>
                    </svg> Onview</h2>
                    <p className="text-dark fw-bolder flex-fill align-self-end mx-2">Onview is an Online Interview Platform designed to conduct interactive sessions between Interviewer and the Interviewee. It Provides various features to support a full fledged online assessment.
                        <br/><span className="text-secondary">&copy; Onview Pvt. Ltd.</span>
                    </p>
                </div> 
            </div>
        </div> 
        </div>  
    </div>
    
    )
}

export default Login;