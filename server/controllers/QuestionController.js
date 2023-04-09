const Question=require('./../models/questionModel');
const asyncHandler=require('express-async-handler');
const url=require('url');

const getQuestions=asyncHandler(async(req,res) => {
    console.log('admin get tests method called');
    
    //console.log(req.query);
    const questions= await Question.find({'tid':req.params.tid});
    if(questions){
        res.json({
            'resData': questions
        });
        console.log('questions '+questions);
    }

});

const getQuestionById=asyncHandler(async(req,res) => {
    console.log('admin get test by id method called');
    console.log(req.params);
    const question= await Question.find({'_id':req.params.qid});
    if(question){
        res.json({
            'resData': question
        });
        console.log(question);
    }

});
const createQuestion=asyncHandler(async(req,res) => {
    // console.log('admin create tests method called');
    const {questionText,questionImage,options,answerText,answerImage,marks,idx,questionFormat,tid} =req.body;
    
    console.log("reached1");
    const newQuestion=await Question.create({
        questionText,questionImage,options,answerText,answerImage,marks,idx,questionFormat,tid
    });
    console.log('reached2')
    if(newQuestion){
        res.status(201).json({
            'resData': newQuestion,
        });
    }

});

const updateQuestionById=asyncHandler(async(req,res) => {
    // console.log('admin create tests method called');
    const {qid,questionText,questionImage,options,answerText,answerImage,marks,idx,questionFormat} =req.body;
    
    // console.log("test doenst exist already");
    await Question.findByIdAndUpdate(qid,{
        questionText,questionImage,options,answerText,answerImage,marks,idx,questionFormat
    });
    // console.log('test created')
    
        res.status(201).json({
            'resData': 'success',
        });

});
const deleteQuestionById=asyncHandler(async(req,res) => {
    // console.log('admin create tests method called');
    const qid =req.params.qid;
    
    // console.log("test doenst exist already");
    await Question.findByIdAndDelete(qid);
    // console.log('test created')
    
        res.status(201).json({
            'resData': 'success',
        });

});

module.exports={
    getQuestions,
    createQuestion,
    getQuestionById,
    updateQuestionById,
    deleteQuestionById,
}