const Participation=require('./../models/participationModel');
const asyncHandler=require('express-async-handler');
const url=require('url');

const getParticipationByTidandUid=asyncHandler(async(req,res) => {
    console.log('admin get tests method called');
    
    //console.log(req.query);
    const participation= await Participation.find({'tid':req.params.tid,'uid':req.params.uid});
    if(participation){
        res.json({
            'resData': participation
        });
        console.log('questions '+participation);
    }

});

// const getQuestionById=asyncHandler(async(req,res) => {
//     console.log('admin get test by id method called');
//     console.log(req.params);
//     const question= await Question.find({'_id':req.params.qid});
//     if(question){
//         res.json({
//             'resData': question
//         });
//         console.log(question);
//     }

// });
// const createQuestion=asyncHandler(async(req,res) => {
//     // console.log('admin create tests method called');
//     const {questionText,questionImage,options,answerText,answerImage,marks,idx,questionFormat,tid} =req.body;
    
//     console.log("reached1");
//     const newQuestion=await Question.create({
//         questionText,questionImage,options,answerText,answerImage,marks,idx,questionFormat,tid
//     });
//     console.log('reached2')
//     if(newQuestion){
//         res.status(201).json({
//             'resData': newQuestion,
//         });
//     }

// });

// const updateQuestionById=asyncHandler(async(req,res) => {
//     // console.log('admin create tests method called');
//     const {qid,questionText,questionImage,options,answerText,answerImage,marks,idx,questionFormat,tid} =req.body;
    
//     // console.log("test doenst exist already");
//     await Question.findByIdAndUpdate(qid,{
//         questionText,questionImage,options,answerText,answerImage,marks,idx,questionFormat,tid
//     });
//     // console.log('test created')
    
//         res.status(201).json({
//             'resData': 'success',
//         });

// });
// const deleteQuestionById=asyncHandler(async(req,res) => {
//     // console.log('admin create tests method called');
//     const qid =req.params.qid;
    
//     // console.log("test doenst exist already");
//     await Question.findByIdAndDelete(qid);
//     // console.log('test created')
    
//         res.status(201).json({
//             'resData': 'success',
//         });

// });

module.exports={
    // getQuestions,
    // createQuestion,
    // getQuestionById,
    // updateQuestionById,
    // deleteQuestionById,
    getParticipationByTidandUid,
}