const express = require("express");
const router = express.Router();
const questionsController = require("../controllers/questions");
const multer = require("multer");
const upload = multer({ dest: './uploads/' });
const {isLoggedIn , validateQuestions} = require ("../middleware");

router
    .route("/")
        .post(isLoggedIn, validateQuestions , upload.single("syllabusImage"),questionsController.generateQuestions)
        .get(isLoggedIn , questionsController.fetchQuestions);

module.exports = router;