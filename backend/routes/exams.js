const express = require("express");
const router = express.Router();

const examController = require("../controllers/exams");
const {isLoggedIn} = require("../middleware");

router
    .route("/")
        .get(isLoggedIn,examController.getUpcomingExams);


module.exports=router;