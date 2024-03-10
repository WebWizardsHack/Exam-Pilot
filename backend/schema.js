const Joi = require("joi");

module.exports.generateQuestionsSchema = Joi.object({
    name : Joi.string().required(),
    timeAllotted : Joi.number().required(),
    numQuestions : Joi.number().required(),
    scheduledTime : Joi.date().required(),
    requestId : Joi.string().required(),
    syllabusImage : Joi.string().optional(),
});