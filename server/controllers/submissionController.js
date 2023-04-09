const Submission=require('./../models/submissionModel');
const asyncHandler=require('express-async-handler');
const evaluationHandlers=require('./EvaulationHandlers');
const EvaulationHandlers = require('./EvaulationHandlers');

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
    const {tid,uid,qid,choice,questionMarks,rightAnswer,questionFormat}=req.body;
    const userSubmission=await Submission.findOne({'tid':tid,'uid':uid});
    
    if(userSubmission)
    {
        let evaluationStatus="";
        let result=EvaulationHandlers[questionFormat](choice,rightAnswer);
        let marks=0;
        
        if(result==='correct')
        {
            marks=questionMarks;
            evaluationStatus="completed";
            userSubmission.totalMarks+=questionMarks;
        }
        else if(result==='false')
        {
            evaluationStatus="completed";
        }
        else if(result==='pending')
        {
            evaluationStatus="pending";
        }

        let newSubmission=userSubmission.submissions.concat({
            qid,choice,'marks':marks,rightAnswer,'evaluationStatus':evaluationStatus
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

module.exports={
    createSubmission,
    updateSubmission,
    changeSubmissionState,
    getSubmission
}