const express=require("express");
var multer = require('multer');
const path=require('path');

const { getQuestions, getQuestionById, createQuestion, updateQuestionById, deleteQuestionById } = require("../controllers/QuestionController");
const {getTests, createTest, getTestById, updateTestById, deleteTestById} = require('./../controllers/TestController');
const { getSubmission } = require("../controllers/submissionController");

var upload1 = multer({
    storage:multer.diskStorage({
      destination:(req,file,cb)=>{
        cb(null,path.join(__dirname,'./../../client/build/images'));
      },
      filename:function(req,file,callback){
        callback(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname))
      }
    })
  
  }).fields(
    [
        {
            name:'profile',
            maxCount:1
        },
        {
            name: 'natid', maxCount:1
        },
        {
            name: 'certificate', maxCount:1
        }
    ]
);

  var upload2 = multer({
    storage:multer.diskStorage({
      destination:(req,file,cb)=>{
        cb(null,path.join(__dirname,'./../../client/public/images'));
      },
      filename:function(req,file,callback){
        callback(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname))
      }
    })
  
  });



const router=express.Router();

router.route('/tests/:uid').get(getTests);
router.route('/test/:tid').get(getTestById);
router.route('/test').post(createTest);
router.route('/test').put(updateTestById);
router.route('/test/:tid').delete(deleteTestById);

router.route('/questions/:tid').get(getQuestions);
router.route('/question/:qid').get(getQuestionById);
router.route('/question').post(createQuestion);
router.route('/question').put(updateQuestionById);
router.route('/question/:qid').delete(deleteQuestionById);

router.route('/submission/:tid').get(getSubmission);

module.exports = router;