import "./user.css"
const StartTest = () => {
    return(
        <div>
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
            <div className="me-auto"></div>
            <a href="/logout">
                <button className="btn btn-outline-light btn-sm" type="submit">Logout</button>
            </a>
          </div>
        </div>
    </nav>
    <div className="container-fluid px-5">
        <div className="mt-5 border-bottom pb-4 text-center h4 text-d">
            Read the instructions carefully.
        </div>
        <div className="row mt-5">
            <div className="col-7">
                <div className="text-b h5">Test Details</div>
                <div className="row mt-3">
                    <div className="col-3">Name</div>
                    <div className="col-3">Date</div>
                    <div className="col-3">Duration</div>
                    <div className="col-3">Total Marks</div>
                </div>
                <div className="row mt-3 text-b">
                     <div className="col-3">{/*${test.tname}*/}</div> 
                    <div className="col-3">{/*${test.date}*/}</div>
                    <div className="col-3">{/*${test.duration}*/}</div>
                    <div className="col-3">{/*${test.totalMarks}*/}</div>
                </div>
                <div className="text-b h5 mt-5">Test Specific Instructions</div>
                <div className="mt-3">
                    <p>* You cannot change your answer once submitted</p>
                    <p>* You can move to next question if and only if you completed current question</p>
                    <p>* If you lost network connectivity, you can resume the test once you reconnected</p>
                </div>
            </div>
            <div className="col-5">
                <div className="px-2 py-4 shadow text-center rounded">
                    You can start the test now. Wish you luck ;-)
                    <a href="/user/test/placeholder/start"> {/*${tid} */}
                        <div className="mt-3 d-grid">
                            <button className="btn btn-block bg-r text-white"><i className="fas fa-play px-2"></i> Start Test</button>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>


   
        </div>
    )
}

export default StartTest;