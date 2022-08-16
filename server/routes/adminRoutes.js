const express=require("express");
const {getTests, createTest} = require('./../controllers/adminController');
const router=express.Router();

router.route('/tests').post(getTests);
router.route('/createTest').post(createTest);

module.exports = router;