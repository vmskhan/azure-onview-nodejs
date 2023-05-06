const Question=require('./../models/questionModel');
const asyncHandler=require('express-async-handler');
const url=require('url');

const upload=require("./../middlewares/upload");
const fs=require("fs");
const path = require('path');
const Test = require('../models/testModel');
const uploadDir=path.join(__dirname,'./../storage/images/uploads/');

const getQuestions=asyncHandler(async(req,res) => {
    console.log('admin get questions method called');
    
    //console.log(req.query);
    const questions= await Question.find({'tid':req.params.tid});
    if(questions){
        res.json({
            'resData': questions
        });
        // console.log('questions '+questions);
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
    try{
    await upload(req,res);
    const {question,options,answer,marks,idx,tid} =req.body;
    // console.log(req.body);
    let newQues={
        question:JSON.parse(question),options:JSON.parse(options),answer:JSON.parse(answer),marks,idx,tid
    }
    // console.log(newQues);
    // console.log(req.files);
    // console.log("reached1");
    if(newQues.question.hasImage)
        newQues.question.image=req.files.filter(file=>file.fieldname==='questionImage')[0].filename;
    if(newQues.answer.hasImage)
        newQues.answer.image=req.files.filter(file=>file.fieldname==='answerImage')[0].filename;
    newQues.options.forEach(element => {
        if(element.hasImage)
            element.image=req.files.filter(file=>file.fieldname==='optionImage-'+element.id)[0].filename;
    });
    const newQuestion=await Question.create(newQues);
    // console.log('reached2')
    if(newQuestion){
        let mytest=await Test.findById({'_id':tid});
        mytest.totalMarks=parseInt(mytest.totalMarks)+parseInt(marks);
        const updatedTest=await Test.findByIdAndUpdate({'_id':tid},mytest);
        console.log(updatedTest)
        if(updatedTest)
        {
            res.status(201).json({
                'resData': newQuestion,
            });
        }
    }
    }
    catch(err){
        console.log(err);
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

const deleteSingleQuestionHandler=asyncHandler(async(req,res) => {
    // console.log('admin create tests method called');
    try{const qid =req.params.qid;
    console.log('qid:'+qid);
    // console.log("test doenst exist already");
   await deleteQuestionById(qid);    
    // console.log('test created')
    
        res.status(201).json({
            'resData': 'success',
        });
    }catch(err){
        console.log(err);
    }

});

const deleteAllQuestionsHandler=asyncHandler(async(req,res)=>{
    const tid=req.params.tid;

    await deleteAllQuestionsByTid(tid);
    res.status(201).json({
        'resData': 'success',
    });
});

const deleteQuestionById=asyncHandler(async(qid)=>{
    Question.findByIdAndDelete(qid)
    .then((ques,err)=>{
        if(err)
        {
            console.log(err);
        }
        if(ques)
        {
            Test.findById({'_id':ques.tid}).then((data)=>{
                // console.log(data);
                data.totalMarks=parseInt(data.totalMarks)-parseInt(ques.marks);
                // console.log(data);
                Test.findByIdAndUpdate({'_id':ques.tid},data).then((data2)=>{
                    // console.log(data2);
                });
            });
            // console.log(ques);
            // console.log('reached unlinking state');
            console.log(fs.existsSync(uploadDir+ques.question.image));
            if(fs.existsSync(uploadDir+ques.question.image))
            {
                fs.unlink(uploadDir+ques.question.image,(err)=>console.log(err))
                // console.log('ques unlinked');
            }
            if(fs.existsSync(uploadDir+ques.answer.image))
            {
                fs.unlink(uploadDir+ques.answer.image,(err)=>console.log(err))
                // console.log('answer unlinked');
            }
            ques.options.map((opt)=>{
                if(fs.existsSync(uploadDir+opt.image))
                    fs.unlink(uploadDir+opt.image,(err)=>console.log(err))
                    // console.log('options unlinked');
            });
        }
    });
});

const deleteAllQuestionsByTid=async(tid)=>{
    const questions=await Question.find({"tid":tid});
    questions.map((ques)=>{
        deleteQuestionById(ques._id);
    })
}


module.exports={
    getQuestions,
    createQuestion,
    getQuestionById,
    updateQuestionById,
    deleteSingleQuestionHandler,
    deleteAllQuestionsHandler,
    deleteAllQuestionsByTid
}