const Test=require('./../models/testModel');
const asyncHandler=require('express-async-handler');

const getTests=asyncHandler(async(req,res) => {
    console.log('admin get tests method called');
    const tests= await Test.find({'uid':req.body.uid});
    if(tests){
        res.json({
            'tests': tests
        });
        console.log(tests);

    }

});

const createTest=asyncHandler(async(req,res) => {
    console.log('admin create tests method called');
    const {tname,amount,date,duration,needPayment,start_time,state,totalMarks,pid,uid} =req.body;
    const testExists= await Test.findOne({'tname':req.body.uid});
    if(testExists){
        res.status(400);
        throw new Error("Test Name Already exists");
    }
    console.log("test doenst exist already");
    const newTest=await Test.create({
        tname,amount,date,duration,needPayment,start_time,state,totalMarks,pid,uid
    });
    console.log('test created')
    if(newTest){
        res.status(201).json({
            'test': newTest
        });
    }

});


module.exports={
    getTests,
    createTest
}