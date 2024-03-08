const express = require("express");
const router = express.Router();

const examController = require("../controllers/exams");

router
    .route("/")
        .get(examController.getUpcomingExams);


module.exports=router;