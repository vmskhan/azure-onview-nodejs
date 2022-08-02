const { default: AdminHeader } = require("./AdminHeader")

const AdminQuestion = () => {
    return(
        <div>
  <AdminHeader/>

    <div className="container-fluid">      
        <div className="px-5 mt-4">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item "><a href="/admin/dashboard" className="decor-none">Dashboard</a></li>
              <li className="breadcrumb-item active" aria-current="page">Interview</li>
            </ol>
          </nav>
        </div>
        <div className="row mt-2 px-5">
            <div className="col-12">
                <div className="d-flex justify-content-between">
                  <div>
                     <div className="h5 text-b">Interview : <span className="text-primary">{/*${test.tname}*/}</span></div> 
                    <small className="text-secondary">Create and edit questions for the Interview</small>
                  </div>
                    {/* <c:if test="${test.state == 'edit'}"> */}
                      <div>
                         <a href="/admin/test/placeholder/start">{/*${test.tid}  */}
                          <button className="btn bg-r text-white btn-sm"><i className="fab fa-cloudscale"></i> Start Interview</button>
                        </a>
                      </div>
                    {/* </c:if> */}
                    {/* <c:if test="${test.state == 'start'}"> */}
                      <div>
                        <a href="/admin/test/placeholder/end">{/*${test.tid} */}
                          <button className="btn bg-r text-white  btn-sm"><i className="fab fa-cloudscale"></i> End Interview</button>
                        </a>
                        <a href="/admin/startMeet">
                          <button className="btn bg-info text-white  btn-sm"><i className="far fa-handshake"></i> Start Zoom Meeting</button>
                        </a>
                      </div>
                    {/* </c:if> */}
                </div>
            </div>
        </div>

        <div className="row mt-5 px-5">
            <div className="col-12">
                <div className="d-flex justify-content-between">
                    <div className="h5 text-b">Questions</div>
                    {/* <c:if test="${test.state == 'edit'}"> */}
                      <div><button className="btn text-white bg-success btn-sm" data-bs-toggle="offcanvas" data-bs-target="#qformat_a" aria-controls="offcanvasRight"> <i className="fas fa-plus"></i> Add Question</button></div>
                    {/* </c:if> */}
                </div>
            </div>
        </div>

        <div className="row px-5">
            <div className="col-12">
                <table className="table table-striped">
                    <thead >
                      <tr >
                        <th scope="col" >S.No</th>
                        <th scope="col" >Question</th>
                        <th scope="col" className="w-25">Image</th>
                        <th scope="col" >Marks</th>
                        {/* <c:if test="${test.state == 'edit'}"> */}
                          <th scope="col" >Action</th>
                        {/* </c:if> */}
                      </tr>
                    </thead>
                    <tbody>
                      {/* <c:forEach items="${questions}" var="q" varStatus="loop" > */}
                        <tr >
                          <td scope="row" >
                            {/* ${loop.index+1} */}
                          </td>
                          {/* <td >${q.questionText}</td> */}
                          <td>
                            {/* <c:choose> */}
                            {/* <c:when test="${q.questionImage!=null}"> */}
                            {/* <img className="w-75" src="/img/qs${q.qid}.jpg"/> */}
                          {/* </c:when> */}
                          {/* <c:otherwise> */}
                            No Image
                          {/* </c:otherwise> */}
                        {/* </c:choose> */}
                          </td>
                           <td >{/*${q.mark} */}</td>
                          {/* <c:if test="${test.state == 'edit'}"> */}
                            <td colspan="2" >
                              {/* <!-- <button className="btn btn-primary btn-sm "><i className="fas fa-edit"></i> edit</button> --> */}
                              <span className="px-2"></span>
  
                              <a href="/admin/test/placeolder1/qn/placeholder/d">{/*${q.qid}    ${test.tid}*/}
                                <button className="btn btn-link btn-sm text-r decor-none"><i className="fas fa-trash"></i> delete</button>
                              </a>
                            </td>  
                          {/* </c:if> */}
                        </tr>
                      {/* </c:forEach> */}
                    </tbody>
                </table>
            </div>
        </div>


        {/* <!-- MODAL MCQ-1 correct option --> */}
        <div className="offcanvas offcanvas-end" tabindex="-1" id="qformat_a" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header flex-wrap">
               
              <div className="navbar navbar-dark bg-success container-fluid justify-content-between mb-2">
                <button className="btn text-white btn-sm" data-bs-toggle="offcanvas" data-bs-target="#qformat_a" aria-controls="offcanvasRight"> 
                   Objective-a
                </button>
                <div className="vr text-white"></div>
                  <button className="btn text-white btn-sm" data-bs-toggle="offcanvas" data-bs-target="#qformat_b" aria-controls="offcanvasRight"> 
                     Objective-b
                  </button>
                  <div className="vr text-white"></div>
                  <button className="btn text-white btn-sm" data-bs-toggle="offcanvas" data-bs-target="#qformat_c" aria-controls="offcanvasRight"> 
                    subjective-a
                 </button>
              </div>
              <h5 id="offcanvasRightLabel text-b">Add Objective-Type A</h5>
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" ></button>
            </div>
            <div className="offcanvas-body">
             
                    
                <form name="question" method="POST" action="/admin/test/placholder/qn" /*${test.tid} */ enctype="multipart/form-data">
                  
                    <div className="mb-1">
                      <label htmlFor="question" className="form-label">Question</label>
                      <textarea className="form-control form-control-sm" name="questionText"></textarea>
                      <div className="d-none">
                        <input className="form-control m-2" type="file" name="images"/>
                      </div>
                      <div className="">
                        <input type="checkbox" className="form-control-input mx-1" name="toggletext" checked onClick="toggleView(this,'textarea');"/>
                        <label className="form-control-label" htmlFor="toggle1">Text</label>
                        <input type="checkbox" className="form-control-input mx-1" name="Toggleimage" onClick="toggleView(this,'div');"/>
                        <label className="form-control-label" htmlFor="Toggle2">Image</label>
                      </div>
                    </div>
                    <div>
                      <button className="btn text-white bg-success btn-sm" type="button" onClick="addOption(this);">
                        <i className="fas fa-plus"></i> Add Option
                      </button>
                       <div className="mb-1">
                          <label htmlFor="option-1" className="form-label">Option 1</label>
                          <input type="text" className="form-control form-control-sm m-2" name="options" />
                          <div className="d-none">
                            <input className="form-control m-2" type="file" name="images"/>
                          </div>
                          <div className="">
                            <input type="checkbox" className="form-control-input mx-1" name="toggletext" checked onClick="toggleView(this,'input');"/>
                            <label className="form-control-label" htmlFor="toggle1">Text</label>
                            <input type="checkbox" className="form-control-input mx-1" name="Toggleimage" onClick="toggleView(this,'div');"/>
                            <label className="form-control-label" htmlFor="Toggle2">Image</label>
                          </div>
                      </div>
                  </div> 
                    
                    <div className="mb-3">
                      <label htmlFor="answer" className="form-label">Correct Option</label>
                        <select className="form-select form-control-sm answer" name="answerText">
                            <option value="0" label="1" />
                        </select>
                        
                    </div>
                    <div className="mb-4">
                      <label htmlFor="mark" className="form-label">Mark</label>
                      <input type="text" className="form-control form-control-sm" name="mark" />
                  </div>
                    <input type="hidden" name="questionFormat" value="obj-a"/>
                    <button type="submit" className="btn bg-success text-white btn-sm px-5" onclick="resetCounter();"><i className="fas fa-save"></i> Save</button>
                  </form>
            </div>
          </div>
    </div>

    {/* <!-- MODAL MCQ-many correct option --> */}
    <div className="offcanvas offcanvas-end" tabindex="-1" id="qformat_b" aria-labelledby="offcanvasRightLabel">
      <div className="offcanvas-header flex-wrap">
        <div className="navbar navbar-dark bg-success container-fluid justify-content-between mb-2">
          <button className="btn text-white btn-sm" data-bs-toggle="offcanvas" data-bs-target="#qformat_a" aria-controls="offcanvasRight"> 
             Objective-a
          </button>
          <div className="vr text-white"></div>
            <button className="btn text-white btn-sm" data-bs-toggle="offcanvas" data-bs-target="#qformat_b" aria-controls="offcanvasRight"> 
               Objective-b
            </button>
            <div className="vr text-white"></div>
            <button className="btn text-white btn-sm" data-bs-toggle="offcanvas" data-bs-target="#qformat_c" aria-controls="offcanvasRight"> 
              subjective-a
           </button>
        </div>
        <h5 id="offcanvasRightLabel text-b">Add Objective-Type B</h5>
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        
          <form name="question" method="POST" action="/admin/test/placeholdder/qn" /*${test.tid} */  enctype="multipart/form-data">
            <div className="mb-1">
              <label htmlFor="question" className="form-label">Question</label>
              <textarea className="form-control form-control-sm" name="questionText"></textarea>
              <div className="d-none">
                <input className="form-control m-2" type="file" name="images"/>
              </div>
              <div className="">
                <input type="checkbox" className="form-control-input mx-1" name="toggletext" checked onClick="toggleView(this,'textarea');"/>
                <label className="form-control-label" htmlFor="toggle1">Text</label>
                <input type="checkbox" className="form-control-input mx-1" name="Toggleimage" onClick="toggleView(this,'div');"/>
                <label className="form-control-label" htmlFor="Toggle2">Image</label>
              </div>
            </div>
            <div>
              <button className="btn text-white bg-success btn-sm" type="button" onClick="addOption1(this);">
                <i className="fas fa-plus"></i> Add Option
              </button>
               <div className="mb-1">
                  <label htmlFor="option-1" className="form-label">Option 1</label>
                  <input type="text" className="form-control form-control-sm m-2" name="options" />
                  <div className="d-none">
                  <input className="form-control m-2" type="file" name="images"/>
                </div>
                  <div className="">
                    <input type="checkbox" className="form-control-input mx-1" name="toggletext" checked onClick="toggleView(this,'input');"/>
                    <label className="form-control-label" htmlFor="toggle1">Text</label>
                    <input type="checkbox" className="form-control-input mx-1" name="Toggleimage" onClick="toggleView(this,'div');"/>
                    <label className="form-control-label" htmlFor="Toggle2">Image</label>
                  </div>
              </div>
          </div>
              <div className="answer mb-3">
                <label htmlFor="answer" className="form-label">Correct Options</label>
                <div className="d-inline">
                <input type="checkbox" className="mx-2" value="0" label="1" name="answerText" />
                <label>1</label>
              </div>
                
              </div> 
              <div className="mb-4">
                <label htmlFor="mark" className="form-label">Mark</label>
                <input type="text"  className="form-control form-control-sm" name="mark" />
            </div>
            <input type="hidden" name="questionFormat" value="obj-b"/>
              <button type="submit" className="btn bg-success text-white btn-sm px-5" onclick="resetCounter1();"><i className="fas fa-save"></i> Save</button>
            </form>
      </div>
    </div>

{/* <!-- Modal subjective-text answer --> */}
<div className="offcanvas offcanvas-end" tabindex="-1" id="qformat_c" aria-labelledby="offcanvasRightLabel">
  <div className="offcanvas-header flex-wrap">
    <div className="navbar navbar-dark bg-success container-fluid justify-content-between mb-2">
      <button className="btn text-white btn-sm" data-bs-toggle="offcanvas" data-bs-target="#qformat_a" aria-controls="offcanvasRight"> 
         Objective-a
      </button>
      <div className="vr text-white"></div>
        <button className="btn text-white btn-sm" data-bs-toggle="offcanvas" data-bs-target="#qformat_b" aria-controls="offcanvasRight"> 
           Objective-b
        </button>
        <div className="vr text-white"></div>
        <button className="btn text-white btn-sm" data-bs-toggle="offcanvas" data-bs-target="#qformat_c" aria-controls="offcanvasRight"> 
          subjective-a
       </button>
    </div>
    <h5 id="offcanvasRightLabel text-b">Add Subjective-Type A</h5>
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    
      <form name="question" method="POST" action="/admin/test/placeholder/qn" /*${test.tid}*/ modelAttribute="question" enctype="multipart/form-data">
        <div className="mb-1">
          <label htmlFor="question" className="form-label">Question</label>
          <textarea className="form-control form-control-sm" name="questionText"></textarea>
          <div className="d-none">
            <input className="form-control m-2" type="file" name="images"/>
          </div>
          <div className="">
            <input type="checkbox" className="form-control-input mx-1" name="toggletext" checked onClick="toggleView(this,'textarea');" />
            <label className="form-control-label" htmlFor="toggle1">Text</label>
            <input type="checkbox" className="form-control-input mx-1" name="Toggleimage" onClick="toggleView(this,'div');" />
            <label className="form-control-label" htmlFor="Toggle2">Image</label>
          </div>
        </div>
          <div className="answer mb-3">
            <label htmlFor="answer" className="form-label">Correct answer</label>
            <textarea className="form-control form-control-sm" name="answerText"></textarea>
            <div className="d-none">
              <input className="form-control m-2" type="file" name="images"/>
            </div>
            <div className="">
              <input type="checkbox" className="form-control-input mx-1" name="toggletext" checked onClick="toggleView(this,'textarea');"/>
              <label className="form-control-label" htmlFor="toggle1">Text</label>
              <input type="checkbox" className="form-control-input mx-1" name="Toggleimage" onClick="toggleView(this,'div');"/>
              <label className="form-control-label" htmlFor="Toggle2">Image</label>
            </div>            
          </div> 
          <div className="mb-4">
            <label htmlFor="mark" className="form-label">Mark</label>
            <input type="text"  className="form-control form-control-sm" name="mark" />
        </div>
          <input type="hidden" name="questionFormat" value="sub-a"/>
          <button type="submit" className="btn bg-success text-white btn-sm px-5"><i className="fas fa-save"></i> Save</button>
      </form>
  </div>
</div>
{/* </div> */}


{/* <!-- template object --> */}
<div className="mb-1 d-none" id="templateOptionObject">
  <label htmlFor="option-x" className="form-label">Option x</label>
  <input type="text" className="form-control form-control-sm m-2" name="options" />
  <div className="d-none">
  <input className="form-control m-2"type="file" name="images"/>
  {/* <!-- <label  htmlFor="image-x">Choose Image</label> --> */}
  </div>
  <div className="">
    <input type="checkbox" className="form-control-input mx-1" name="toggletext" checked onClick="toggleView(this,'input');"/>
    <label className="form-control-label" htmlFor="toggletext">Text</label>
    <input type="checkbox" className="form-control-input mx-1" name="Toggleimage" onClick="toggleView(this,'div');"/>
    <label className="form-control-label" htmlFor="Toggleimage">Image</label>
  </div>
</div>
{/* <!--option label--> */}
<div className="d-none" id="templateCheckbox"> 
  <input type="checkbox" className="mx-2" value="0" name="answerText"/>
  <label>x</label>
</div>

{/* <script>
  var counter=2,counter1=2;
  function resetCounter(){
    counter=2;
  }
  function resetCounter1()
  {
    counter1=2;
  }
  function addOption(ele)
  {
    
    console.log(counter);
    var x=document.getElementById("templateOptionObject");
    var y=x.cloneNode(true);
    y.classList.toggle("d-none");
    y.removeAttribute("id");
    var label=y.querySelectorAll("label");
    label[0].setAttribute("for","option-"+counter);
    // label[1].setAttribute("for","image-"+counter);
    label[0].textContent="option "+counter;
    var inputTag=y.querySelectorAll("input");
    inputTag[0].setAttribute("name","options");//+counter);
    inputTag[1].setAttribute("name","images");//+counter);
    ele.parentElement.appendChild(y);
    var option=document.createElement("option");
    option.setAttribute("label",counter);
    option.setAttribute("value",counter-1);
    
    ele.parentElement.parentElement.getElementsByClassName("answer")[0].appendChild(option);
    console.log("successful");
    counter++;

  }

  function addOption1(ele)
  {
    
    console.log(counter1);
    var x=document.getElementById("templateOptionObject");
    var y=x.cloneNode(true);
    y.classList.toggle("d-none");
    y.removeAttribute("id");
    var label=y.querySelectorAll("label");
    label[0].setAttribute("for","option-"+counter1);
    // label[1].setAttribute("for","image-"+counter);
    label[0].textContent="option "+counter1;
    var inputTag=y.querySelectorAll("input");
    inputTag[0].setAttribute("name","options");
    inputTag[1].setAttribute("name","images");
    ele.parentElement.appendChild(y);
    var option=document.getElementById("templateCheckbox");
    var op=option.cloneNode(true);
    op.classList.toggle("d-none");
    op.classList.toggle("d-inline");
    op.removeAttribute("id");
    op.getElementsByTagName("label")[0].textContent=counter1;
    op.getElementsByTagName("input")[0].setAttribute("value",counter1-1);
    
    ele.parentElement.parentElement.getElementsByClassName("answer")[0].appendChild(op);
    console.log("successful");
    counter1++;

  }

  function toggleView(ele,type){
    var x=ele.parentElement.parentElement.querySelector(type);
    x.classList.toggle("d-none");
  }
</script> */}

        </div>
    )
}

export default AdminQuestion;