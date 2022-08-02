import { useState } from 'react';
import ErrorMessage from '../Login/ErrorMessage';
import Loading from '../Login/Loading';
import './register.css';
import axios from 'axios';

const RegisterUser=() => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [pic,setPic]=useState(
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.pngitem.com%2Fpimgs%2Fm%2F522-5220445_anonymous-profile-grey-person-sticker-glitch-empty-profile.png&imgrefurl=https%3A%2F%2Fwww.pngitem.com%2Fmiddle%2FhmhxiJi_anonymous-profile-grey-person-sticker-glitch-empty-profile%2F&tbnid=GHbdym26eAzRCM&vet=12ahUKEwjd8N3N1qf5AhWyx6ACHdkCCOQQMygCegUIARDJAQ..i&docid=DW6FqC3PlmkyYM&w=860&h=706&q=empty%20profile%20pic%20icon&ved=2ahUKEwjd8N3N1qf5AhWyx6ACHdkCCOQQMygCegUIARDJAQ"
    );
    const [password,setPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");
    const [picMessage,setPicMessage]=useState(null);
    const [message,setMessage] = useState("");
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(false);

    const submitHandler = async(e) =>{
        e.preventDefault();

        if(confirmPassword !== password)
        {
            setMessage("Passwords do not match");
        }
        else{
            setMessage("");
            try{
                const config={
                headers:{
                    "Content-type": "application/json",
                },  
            };
            console.log(JSON.stringify({name,email,password,pic}));
            setLoading(true);
            const {data} = await axios.post(
                "/api/users/register",
                {name,email,password,pic,"isAdmin":false},
                config
            );
            console.log(data);
            localStorage.setItem("userInfo",JSON.stringify(data));
            setLoading(false);
        }
        catch(error){
            setLoading(false);
            setError(error.response.data.message);
        }
    }
};


    return(
    <div className="auth-bg-left-img d-flex flex-column">
        <div className="d-flex align-items-center justify-content-around">
            <div className="shadow rounded bg-white px-5 py-3 w-50 mt-3">      
                <div className="h3 mt-4 text-success text-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-workspace" viewBox="0 0 16 16">
                    <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                    <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z"/>
                  </svg> Onview</div>
                <div className="text-center"> 
                    <small className="text-secondary">A better way to Assess </small>             
                </div>
                {message && <ErrorMessage message={message}/>}
                {error && <ErrorMessage message= {error} />}
                <div className="h5 mt-4 text-success text-center">ADMIN Sign-Up </div>              
                <form className="mt-3" onSubmit={(e) => submitHandler(e)}>
                    <div className="form-group">
                        <label htmlFor="email" className="mb-2 text-secondary">Email id</label>
                        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="form-control" required/>
                    </div>
                    <div className="form-group mt-4">
                        <label htmlFor="name" className="mb-2 text-secondary">Name</label>
                        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" className="form-control" required/>
                    </div>
                    <div className="form-group mt-4">
                        <label htmlFor="password" className="mb-2 text-secondary">Password</label>
                        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="form-control" required/>
                    </div>
                    <div className="form-group mt-4">
                        <label htmlFor="Cpassword" className="mb-2 text-secondary">Confirm Password</label>
                        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="re-enter Password" className="form-control" required/>
                    </div>
                    {/* <div className="form-group mt-4">
                        <label htmlFor="DP" className="mb-2 text-secondary">Upload profile picture</label>
                        <input type="file" value={pic} onChange={(e) => setPic(e.target.files[0])}  className="form-control" />
                    </div> */}
                    <div className="text-center mt-4">
                        <input className="btn bg-success text-white btn-sm px-5" type="submit" />
                    </div>
                    <div className="my-2 text-center text-danger">
                        {/* user already exists */}
                    </div>
                    <div className="mt-3 text-center">
                        <div className="text-secondary mb-2"> OR</div>
                        Already have an account ? <a href="/" >Login</a><br/>
                    </div>
                    {loading && <Loading/>}
                </form>
            </div>
        </div>
    
    </div>
    
    )
}
export default RegisterUser;