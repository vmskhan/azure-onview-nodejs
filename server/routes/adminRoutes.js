const express=require("express");

const { getQuestions, getQuestionById, createQuestion, updateQuestionById, deleteQuestionById, deleteSingleQuestionHandler } = require("../controllers/QuestionController");
const {getTests, createTest, getTestById, updateTestById, deleteTestById} = require('./../controllers/TestController');
const { getSubmission } = require("../controllers/submissionController");

const router=express.Router();

router.route('/tests/:uid').get(getTests);
router.route('/test/:tid').get(getTestById);
router.route('/test').post(createTest);
router.route('/test').put(updateTestById);
router.route('/test/:tid').delete(deleteTestById);

router.route('/questions/:tid').get(getQuestions);
// router.route('/question/:qid').get(getQuestionById);
router.route('/question').post(createQuestion);
router.route('/question').put(updateQuestionById);
router.route('/question/:qid').delete(deleteSingleQuestionHandler);


router.route('/submission/:tid').get(getSubmission);

module.exports = router;