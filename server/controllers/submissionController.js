const Submission=require('./../models/submissionModel');
const asyncHandler=require('express-async-handler');
const evaluationHandlers=require('./EvaulationHandlers');


const createSubmission=asyncHandler(async(req,res)=>{

    console.log("create submission method");
    const {tid,uid}=req.body;
    const submissionExists=await Submission.findOne({'tid':tid,'uid':uid});
    if(submissionExists)
    {
        res.status(200).json({
            'message':"already exists"
        });
    }
    else
    {
        console.log('submision doesnt exist')
        const newSubmision=await Submission.create({
            tid,uid,'submissions':[],'totalMarks':0,'submissionState':'In Progress'
        })
        console.log('submission created')
        if(newSubmision)
        {
            res.status(200).json({
                'message':'submission created'
            });
        }
    }
})

const updateSubmission=asyncHandler(async(req,res)=>{
    console.log("update submission method called");
    try{
        const {tid,uid,qid,choice,questionMarks,rightAnswer,questionFormat}=req.body;
    const userSubmission=await Submission.findOne({'tid':tid,'uid':uid});
    
    if(userSubmission)
    {
        // console.log(questionFormat)
        // console.log(evaluationHandlers);
        let evaluationStatus="";
        let result=evaluationHandlers[questionFormat](choice,rightAnswer);
        let marks=0;
        // console.log(questionFormat+':'+result);
        let answerStatus='';
        if(result==='correct')
        {
            marks=questionMarks;
            evaluationStatus="completed";
            userSubmission.totalMarks+=questionMarks;
            answerStatus=result;
        }
        else if(result==='false')
        {
            evaluationStatus="completed";
            answerStatus='wrong'
        }
        else if(result==='pending')
        {
            evaluationStatus="pending";
            answerStatus=result;
        }

        let newSubmission=userSubmission.submissions.concat({
            qid,choice,'marks':marks,rightAnswer,'evaluationStatus':evaluationStatus,'answerStatus':answerStatus
        })
        
        
        const updatedSubmission=await Submission.findByIdAndUpdate(userSubmission._id,{
            'submissions':newSubmission,'totalMarks':userSubmission.totalMarks
        });
        if(updatedSubmission)
        {
            console.log('update successful');
            res.status(200).json({
                'message':'update successful',
                'data':updatedSubmission,
            })
        }
    }
}catch(err){
    console.log(err);
}
})
const changeSubmissionState=asyncHandler(async(req,res)=>{
    console.log("change submission state method called");
    const {tid,uid}=req.body;
    const userSubmission=await Submission.findOne({'tid':tid,'uid':uid});
    if(userSubmission)
    {
        let submissionState="completed";
        let pendinglist=userSubmission.submissions.filter((sub)=>sub.evaluationStatus==='pending');
        if(pendinglist.length>0)
            submissionState='pending'
        const updatedSubmission=await Submission.findByIdAndUpdate(userSubmission._id,{
            'submissionState':submissionState
        });
        if(updatedSubmission)
            res.status(200).json({
                'message':'submission state updated successfully'
            });
    }
})

const getSubmission=asyncHandler(async(req,res)=>{
    console.log('get submission methpod called')
    const subList=await Submission.find({'tid':req.params.tid});
    if(subList)
    {
        res.status(200).json({
            'submissions':subList
        });
    }
})


const getUserSubmission=asyncHandler(async(req,res)=>{
    console.log('get submission methpod called')
    const subList=await Submission.find({'tid':req.params.tid,'uid':req.params.uid});
    if(subList)
    {
        res.status(200).json({
            'submissions':subList
        });
    }
})

const deleteSubmission=asyncHandler(async(req,res)=>{
    console.log('get submission methpod called')
    const subList=await Submission.findByIdAndDelete({'_id':req.params.sid});
    if(subList)
    {
        res.status(200).json({
            'message':'submission deleted successfully',
        });
    }
})

const updateParticularSubmissionState=asyncHandler(async(req,res)=>{
    console.log("update particular submission state method called");
   try{ const {tid,uid,index,newState,questionMarks}=req.body;
    const userSubmission=await Submission.findOne({'tid':tid,'uid':uid});
    if(userSubmission)
    {
        // let submissionState="completed";
        let subm=userSubmission.submissions[index];
        let updatedSubmission=undefined;
        if(newState!==subm.answerStatus)
        {
            subm.evaluationStatus='completed';
            if(newState==='correct')
            {
                subm.marks=questionMarks;
                userSubmission.totalMarks+=questionMarks;
            }
            else if(newState==='wrong')
            {
                subm.marks=0;
                if(subm.answerStatus!=='pending')
                    userSubmission.totalMarks-=questionMarks;
            }
            subm.answerStatus=newState;
            userSubmission.submissions[index]=subm;
            if(userSubmission.submissions.filter((sub)=>sub.evaluationStatus==='pending').length>0)
                userSubmission.submissionState='pending'
            else
                userSubmission.submissionState='completed'
            updatedSubmission=await Submission.findByIdAndUpdate(userSubmission._id,{...userSubmission});
        }

        if(updatedSubmission)
            res.status(200).json({
                'message':'submission state updated successfully'
            });
        else
            res.status(200).json({
                'message':'submission state not updated'
            });
    }
}catch(error){
    console.log(error);
}
})

module.exports={
    createSubmission,
    updateSubmission,
    changeSubmissionState,
    getSubmission,
    getUserSubmission,
    updateParticularSubmissionState,
    deleteSubmission,
}