import './register.css'

const RegisterAdmin=() => (
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
                <div className="h5 mt-4 text-success text-center">S i g n  U p</div>              
                <form className="mt-3" method="POST" action="/signup">
                    <div className="form-group">
                        <label htmlFor="email" className="mb-2 text-secondary">Email id</label>
                        <input type="email" placeholder="Email" className="form-control" />
                    </div>
                    <div className="form-group mt-4">
                        <label htmlFor="name" className="mb-2 text-secondary">Name</label>
                        <input type="text" placeholder="Your Name" className="form-control"/>
                    </div>
                    <div className="form-group mt-4">
                        <label htmlFor="password" className="mb-2 text-secondary">Password</label>
                        <input type="password" placeholder="Password" className="form-control" />
                    </div>
                    <div className="text-center mt-4">
                        <input className="btn bg-success text-white btn-sm px-5" type="submit" value="Sign Up" />
                    </div>
                    <div className="my-2 text-center text-danger">
                        {/* user already exists */}
                    </div>
                    <div className="mt-3 text-center">
                        <div className="text-secondary mb-2"> OR</div>
                        Already have an account ? <a href="/" >Login</a><br/>
                    </div>
                </form>
            </div>
        </div>
    
    </div>
    

)
export default RegisterAdmin;