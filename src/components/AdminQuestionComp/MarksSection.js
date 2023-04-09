
const MarksSection=(props)=>{
    return(
        <>
            <div className="mb-4">
                <label htmlFor="mark" className="form-label">Mark</label>
                <input type="text"  className="form-control form-control-sm" name="mark" value={props.marks} onChange={(e)=>props.setMarks(e.target.value)} />
            </div>     
        </>
    )
}

export default MarksSection;