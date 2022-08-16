const express=require("express");
const { registerUser, authUser ,findAllUsers} = require("../controllers/userController");
const router=express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(authUser);
router.route("/getAllUsers").get(findAllUsers);

module.exports = router;