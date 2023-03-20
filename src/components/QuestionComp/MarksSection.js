
const MarksSection=(props)=>{
    return(
        <>
        <div className="mb-4">
                <label htmlFor="mark" className="form-label">Mark</label>
                <input type="text"  className="form-control form-control-sm" name="mark" onChange={(e)=>props.setMarks(e.target.value)} />
            </div>
            <input type="hidden" name="questionFormat" value={props.qtype}/>
              <button type="button" className="btn bg-success text-white btn-sm px-5" onClick={(e)=>props.newQuestionHandler(e,props.qtype)}><i className="fas fa-save"></i> Save</button> 
              
        </>
    )
}

export default MarksSection;