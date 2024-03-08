const express = require("express");
const router = express.Router();
const questionsController = require("../controllers/questions");
const multer = require("multer");
const upload = multer({ dest: './uploads/' });

router
    .route("/")
        .post(upload.single("syllabusImage"),questionsController.generateQuestions)
        .get(questionsController.fetchQuestions);

module.exports = router;