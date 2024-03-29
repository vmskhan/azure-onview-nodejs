import "./user.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/AuthSlice";
import { userActions } from "../../store/UserSlice";
const UserHeader = () => {
  const searchValue=useSelector((state)=>state.user.searchValue);
  const dispatch=useDispatch();
const navigate=useNavigate();
const searchValueHandler=(value)=>{
  dispatch(userActions.updateSearchValue(value));
}
  return(
      
    <nav className="navbar navbar-expand-lg navbar-dark text-l px-5">
        <div className="container-fluid">
          <Link className="navbar-brand " to="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-workspace" viewBox="0 0 16 16">
              <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
              <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z"/>
            </svg> Onview
        </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <span className="px-4"></span>
            <div className="d-flex px-5 w-100">
              <input className="form-control me-2" type="search" placeholder="Search Interviews" aria-label="Search" value={searchValue} onChange={(e)=>searchValueHandler(e.target.value)}/>
              <button className="btn btn-outline-light border-0 btn-sm"  type="submit"><i className="bi bi-search"></i></button>
            </div>
            <div className="me-auto"></div>
            <ul className="navbar-nav mb-2 mb-lg-0 px-4">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/user/userDashboard">Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/user/userHistory">Completed</Link>
              </li>
            </ul>
            
                <button className="btn btn-outline-light btn-sm" onClick={() => {
                   dispatch(authActions.logout())
                   localStorage.removeItem("userInfo");
                   navigate('/');
                }}>Logout</button>
            
          </div>
        </div>
    </nav>
    )
}

export default UserHeader;