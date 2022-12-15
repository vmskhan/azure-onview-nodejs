const express=require("express");
const { getParticipationByTidandUid } = require("../controllers/participationController");
const { getTestByPid } = require("../controllers/TestController");
const { registerUser, authUser ,findAllUsers} = require("../controllers/userController");
const router=express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(authUser);
router.route("/getAllUsers").get(findAllUsers);

router.route("/tests/:pid").get(getTestByPid);

router.route('/participation/:tid/:uid').get(getParticipationByTidandUid);
module.exports = router;