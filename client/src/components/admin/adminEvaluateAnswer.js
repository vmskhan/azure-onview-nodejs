const { default: AdminHeader } = require("./AdminHeader")

const AdminEvaluateAnswer = () => {
    return(
        <div>
            <AdminHeader/>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <div className="container-fluid">      
        <div className="px-5 mt-4">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item "><a href="/admin/adminEvaluation" className="decor-none">Pending</a></li>
              <li className="breadcrumb-item active" aria-current="page">Interview</li>
            </ol>
          </nav>
        </div>
        <div className="row mt-2 px-5">
            <div className="col-12">
                <div className="d-flex justify-content-between">
                  <div>
                    {/* <!-- <div className="h5 text-b">Interview : <span className="text-primary">${test.tname}</span> </div> --> */}
                    <small className="text-secondary">Evaluate answers of the Interviewee</small>
                  </div>
                  <div>
                     <div className="h5 text-b">Interviewee : <span className="text-primary">{/*${participant_name}*/}</span></div> 
                    <button className="btn bg-info fw-bolder"><a href="/admin/test/placeholder/finishEvaluation" /*${test.tid}*/ >Finish Evaluation</a></button>
                  </div>
                    
                </div>
            </div>
        </div>

        <div className="container-fluid">
            <div className="row mt-5 px-5">
              <div className="col-12">
                
                  
                  
                 {/* <c:forEach var="question" items="${Questions}" varStatus="loopvar">  */}
                  <div className="card w-100 px-2 py-3 border-dark border-5 d-flex">
                    {/* <!-- style="height:100vh;">--> */}
                  <div className="row">
                    
                    <div className="col-6 border-end border-5 border-success">
                      <div className="">
                        <div className="d-flex justify-content-between">
                          {/* <!-- <div className="h5 text-b">Question ${Integer.toString(question.idx)}</div> --> */}
                          {/* <!-- <p>Mark : <strong>${question.mark}</strong></p> --> */}
                        </div>
                        <div className="mt-2">
                          {/* <!-- <p>${question.questionText}</p> --> */}
                        </div>
                        
                        <div className="mt-2">
                          {/* <!-- <c:if test="${question.questionImage!=null}">
                          <img className="w-50" src="/img/qs${question.qid}.jpg">
                                </c:if> --> */}
                            </div>
                        </div> 

                        <div>
                          <div className="h5 text-b">Answer</div>
                          <div className="mt-2">
                            {/* <!-- <c:if test="${question.questionFormat.equals('obj-b')}">
                              <p>Correct Options are: ${question.answerText}</p>
                            </c:if>
                            <c:if test="${!question.questionFormat.equals('obj-b')}">
                              <p>${question.answerText}</p>
                            </c:if> --> */}
                          </div>
                          <div className="mt-2">
                            {/* <!-- <c:if test="${question.answerImage!=null}">
                            <img className="w-50" src="/img/as${question.qid}.jpg">
                          </c:if> --> */}
                          </div>
                        </div>

                      </div>
                    </div>
                    <div className="col-6 border-end border-dark" >
                      <div className="">
                        <div className="d-flex justify-content-between">
                          <div className="h5 text-b">Answer By Participant</div>
                        </div>
                        {/* <!-- <c:if test="${question.questionFormat.equals('obj-a')}"> */}
                           {/* <form className="mt-2" method="POST" action="/user/test/${tid}/qn" modelAttribute="opt"> --> */}
                            {/* <!-- <c:forEach items="${question.options}" var="option" varStatus="loop"> */}
                              <div className="card px-2 py-2 mb-2 border-danger">
                                <div className="form-check">
                                  {/* <c:if test="${submission.get(loopvar.index).choice.equals(option.answerText)}">
                                    <input className="form-check-input" type="radio"  id="${loop.index+1}" value="${option.answerText}" name="answerText" disabled checked/>
                                  </c:if>
                                  <c:if test="${!submission.get(loopvar.index).choice.equals(option.answerText)}">
                                    <input className="form-check-input" type="radio"  id="${loop.index+1}" value="${option.answerText}" name="answerText" disabled/>
                                  </c:if> */}
                                  <label className="form-check-label mb-2"> {/* for="${loop.index+1}">${option.answerText}*/} </label> 
                                  <div className="w-100"></div>
                                  {/* <c:if test="${option.answerImage!=null}">
                                  <img className="w-50" src="/img/os${option.oid}.jpg">
                                </c:if> */}
                                </div>
                              </div>
                            {/* </c:forEach> --> */}
                            {/* <!-- <input type="submit" className="btn btn-primary btn-sm mt-5 px-5" label="Next" /> --> */}
                          {/* <!-- <form> --> */}
                        {/* </c:if> */}
    
                        {/* <c:if test="${question.questionFormat.equals('obj-b')}"> */}
                          {/* <!-- <form className="mt-2" method="POST" action="/user/test/${tid}/qn" modelAttribute="opt"> --> */}
                            {/* <!-- <c:forEach items="${question.options}" var="option" varStatus="loop"> */}
                              <div className="card px-2 py-2 mb-2 border-danger">
                                <div className="form-check">
                                  {/* <c:if test="${submission.get(loopvar.index).choice.contains(option.answerText)}">
                                    <input className="form-check-input" type="checkbox"  id="${loop.index+1}" value="${option.answerText}" name="answerText" disabled checked/>
                                  </c:if>
                                  <c:if test="${!submission.get(loopvar.index).choice.contains(option.answerText)}">
                                    <input className="form-check-input" type="checkbox"  id="${loop.index+1}" value="${option.answerText}" name="answerText" disabled/>
                                  </c:if> */}
                                   <label className="form-check-label mb-2"> {/*for="${loop.index+1}">${option.answerText}*/}</label> 
                                  {/* <c:if test="${option.answerImage!=null}">
                                    
                                  <img className="w-100" src="/img/os${option.oid}.jpg">
                                </c:if> --> --> */}
                                {/* <!-- </div>
                              </div>
                            </c:forEach>
                            <input type="submit" className="btn btn-primary btn-sm mt-5 px-5" label="Next" /> -->
                          <!-- <form> -->
                        <!-- </c:if> -->
     -->
                        <!-- <c:if test="${question.questionFormat.equals('sub-a')}"> -->
                          <!-- <form className="mt-2" method="POST" action="/user/test/${tid}/qn" modelAttribute="opt" enctype="multipart/form-data"> -->
                             */}
                              <div className="card px-2 py-2 mb-2 border-danger">
                                <div className="form-check">
                                  <label className="form-check-label mb-2" htmlFor="ans">Answer: </label><br/>
                                  {/* <!-- <textarea className="form-control"  id="ans"  name="answerText" disabled>${submission.get(loopvar.index).choice}</textarea> --> */}
                                  <label className="form-check-label mb-2" htmlFor="fileupld">Upload files: </label>
                                  <input className="form-control" type="file" name="answerImage" id="fileupld"/>
                                  
                                </div>
                              </div>
                            
                            {/* <!-- <input type="submit" className="btn btn-primary btn-sm mt-5 px-5" label="Next" /> --> */}
                          {/* <!-- <form> --> */}
                        {/* </c:if> */}
                        {/* <!-- correct/wrong selection buttons --> */}
                        {/* <!-- <div className="mt-2 w-50 ms-auto">
                          <button className="btn btn-success my-2" onclick="changeAnswerToCorrect(${loopvar.index},${test.tid});">Correct Answer <i className="fas fa-check-circle"></i></button>
                          <button className="btn btn-danger my-2" onclick="changeAnswerToWrong(${loopvar.index},${test.tid});">Wrong Answer <i className="fas fa-times-circle"></i></button>
                        </div> --> */}
                      </div>
                    </div>    


                  </div>
                  
                  </div>{/*   <!--end card--> */}
                {/* <!-- <div className="bg-dark mx-0 my-2"><hr></div> --> */}
                <br/><br/>
                {/* </c:forEach> */}
    
                  
                </div>
              </div>
            </div>        
        </div>



       

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

{/* <!-- <script>
  function changeAnswerToCorrect(index,tid){
    $.ajax({
      type:"GET",
      url:"http://localhost:8080/admin/testevalsubmit/"+tid+"/"+index+"/correct",
      dataType:"text",
      success:function(data){
        alert("changes successful");
      }
    }); 
  }

  function changeAnswerToWrong(index,tid){
    $.ajax({
      type:"GET",
      url:"http://localhost:8080/admin/testevalsubmit/"+tid+"/"+index+"/wrong",
      success:function(){
        alert("changes successful");
      }
    });
}

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
    y.classNameList.toggle("d-none");
    y.removeAttribute("id");
    var label=y.querySelectorAll("label");
    label[0].setAttribute("htmlFor","option-"+counter);
    // label[1].setAttribute("htmlFor","image-"+counter);
    label[0].textContent="option "+counter;
    var inputTag=y.querySelectorAll("input");
    inputTag[0].setAttribute("name","options");//+counter);
    inputTag[1].setAttribute("name","images");//+counter);
    ele.parentElement.appendChild(y);
    var option=document.createElement("option");
    option.setAttribute("label",counter);
    option.setAttribute("value",counter-1);
    
    ele.parentElement.parentElement.getElementsByclassNameName("answer")[0].appendChild(option);
    console.log("successful");
    counter++;

  }

  function addOption1(ele)
  {
    
    console.log(counter1);
    var x=document.getElementById("templateOptionObject");
    var y=x.cloneNode(true);
    y.classNameList.toggle("d-none");
    y.removeAttribute("id");
    var label=y.querySelectorAll("label");
    label[0].setAttribute("htmlFor","option-"+counter1);
    // label[1].setAttribute("htmlFor","image-"+counter);
    label[0].textContent="option "+counter1;
    var inputTag=y.querySelectorAll("input");
    inputTag[0].setAttribute("name","options");
    inputTag[1].setAttribute("name","images");
    ele.parentElement.appendChild(y);
    var option=document.getElementById("templateCheckbox");
    var op=option.cloneNode(true);
    op.classNameList.toggle("d-none");
    op.classNameList.toggle("d-inline");
    op.removeAttribute("id");
    op.getElementsByTagName("label")[0].textContent=counter1;
    op.getElementsByTagName("input")[0].setAttribute("value",counter1-1);
    
    ele.parentElement.parentElement.getElementsByclassNameName("answer")[0].appendChild(op);
    console.log("successful");
    counter1++;

  }

  function toggleView(ele,type){
    var x=ele.parentElement.parentElement.querySelector(type);
    x.classNameList.toggle("d-none");
  }
</script> --> */}
</div>
        </div>
    )
}

export default AdminEvaluateAnswer;