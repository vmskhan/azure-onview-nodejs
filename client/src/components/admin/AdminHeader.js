import "./admin.css";
import {useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";

const AdminHeader = () => {
    
  const [logout,setLogout]=useState(false);
  const navigate=useNavigate();
  useEffect(()=>{
    if(logout)
    {
    localStorage.removeItem("userInfo");
    navigate("/");
    }
  },[logout])

  return(
    <nav className="navbar navbar-expand-lg navbar-dark text-l bg-success  px-5">
        <div className="container-fluid">
          <a className="navbar-brand " href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-workspace" viewBox="0 0 16 16">
              <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
              <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z"/>
            </svg> Onview
        </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <span className="px-4"></span>
            <form className="d-flex px-5 w-100">
              <input className="form-control me-2" type="search" placeholder="Search Interviews" aria-label="Search"/>
              <button className="btn bg-success text-white btn-sm"  type="submit"><i className="fas fa-search"></i></button>
            </form>
            <div className="me-auto"></div>
            <ul className="navbar-nav mb-2 mb-lg-0 px-4">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/admin/adminDashboard">Dashboard</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/admin/adminEvaluation">Pending</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/admin/adminHistory">Completed</a>
              </li>
            </ul>
            
                <button className="btn btn-outline-light btn-sm" onClick={() => setLogout(true)}>Logout</button>
            
          </div>
        </div>
    </nav>
    );
}

export default AdminHeader;