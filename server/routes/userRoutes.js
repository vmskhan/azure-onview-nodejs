const express=require("express");
const { getParticipationByTidandUid } = require("../controllers/participationController");
const { getTestByPid } = require("../controllers/TestController");
const { registerUser, authUser ,findAllUsers} = require("../controllers/userController");
const { getQuestions } = require("../controllers/QuestionController");
const { createSubmission, updateSubmission, changeSubmissionState, getUserSubmission } = require("../controllers/submissionController");
const router=express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(authUser);
router.route("/getAllUsers").get(findAllUsers);

router.route("/tests/:pid").get(getTestByPid);
router.route("/questions/:tid").get(getQuestions);

router.route('/participation/:tid/:uid').get(getParticipationByTidandUid);

router.route('/submission/:tid/:uid').get(getUserSubmission);
router.route("/submission").post(createSubmission);
router.route("/submission").put(updateSubmission);
router.route("/submission/state").patch(changeSubmissionState);
module.exports = router;