const QuestionSection=(props)=>{
    return(
        <div className="mb-1">
          <label htmlFor="question" className="form-label">Question</label>
          <textarea className="form-control form-control-sm" name="questionText" onChange={(e)=>props.setQuestionText(e.target.value)} value={props.questionText}></textarea>
          <div className="d-none">
            <input className="form-control m-2" type="file" name="images"/>
          </div>
          <div className="">
            <input type="checkbox" className="form-control-input mx-1" name="toggletext" defaultChecked onClick="toggleView(this,'textarea');" />
            <label className="form-control-label" htmlFor="toggle1">Text</label>
            <input type="checkbox" className="form-control-input mx-1" name="Toggleimage" onClick="toggleView(this,'div');" />
            <label className="form-control-label" htmlFor="Toggle2">Image</label>
          </div>
        </div>
    );
}

export default QuestionSection;