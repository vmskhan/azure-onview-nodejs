const Test=require('../models/testModel');
const asyncHandler=require('express-async-handler');
const url=require('url');

const getTests=asyncHandler(async(req,res) => {
    console.log('admin get tests method called');
    
    //console.log(req.query);
    const tests= await Test.find({'uid':req.params.uid});
    if(tests){
        res.json({
            'resData': tests
        });
        console.log('tests '+tests);

    }

});

const getTestById=asyncHandler(async(req,res) => {
    console.log('admin get test by id method called');
    console.log(req.params);
    const test= await Test.find({'_id':req.params.tid});
    if(test){
        res.json({
            'resData': test
        });
        console.log(test);
    }

});
const createTest=asyncHandler(async(req,res) => {
    console.log('admin create tests method called');
    const {tname,amount,date,duration,needPayment,start_time,pid,uid} =req.body;
    const testExists= await Test.findOne({'tname':req.body.uid});
    if(testExists){
        res.status(400);
        throw new Error("Test Name Already exists");
    }
    console.log("test doenst exist already");
    const newTest=await Test.create({
        tname,amount,date,duration,needPayment,start_time,state:'edit',totalMarks:0,pid,uid
    });
    console.log('test created')
    if(newTest){
        res.status(201).json({
            'resData': newTest
        });
    }

});

const updateTestById=asyncHandler(async(req,res) => {
    // console.log('admin create tests method called');
    const {_id,tname,amount,date,duration,needPayment,start_time,state,totalMarks,pid,uid} =req.body;
    //const testExists= await Test.findOne({'tname':req.body.uid});
    // console.log("test doenst exist already");
    await Test.findByIdAndUpdate(_id,{
        tname,amount,date,duration,needPayment,start_time,state,totalMarks,pid,uid
    });
    // console.log('test created')
    // if(newTest){
        res.status(201).json({
            // 'test': newTest
            'resData':"success",
        });
    // }

});

const deleteTestById=asyncHandler(async(req,res) => {
    // console.log('admin create tests method called');
    //const {tname,amount,date,duration,needPayment,start_time,state,totalMarks,pid,uid} =req.body;
    //const testExists= await Test.findOne({'tname':req.body.uid});
    
    //console.log("test doenst exist already");
    await Test.findByIdAndDelete(req.params.tid);
    // console.log('test created')
    // if(newTest){
        res.status(201).json({
            // 'test': newTest
            'resData':"success",
        });
    // }

});

const getTestByPid=asyncHandler(async(req,res) => {
    // console.log('admin get test by id method called');
    console.log(req.params);
    const test= await Test.find({'pid':req.params.pid});
    if(test){
        res.json({
            'resData': test
        });
        console.log(test);
    }

});

module.exports={
    getTests,
    createTest,
    getTestById,
    updateTestById,
    deleteTestById,
    getTestByPid,
}