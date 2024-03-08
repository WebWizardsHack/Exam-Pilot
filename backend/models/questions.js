const mongoose= require("mongoose");

const questionsSchema = new mongoose.Schema({
    Name: {
        type : String,
        required : true,
    },
    requestId : {
        type : String,
        required : true,
    },
    timeAlloted : {
        type : Number,
        required : true,
    },
    scheduledTime : {
        type :Date,
        required : true,
    },
    questions: [
        {
            question :{
                type: String ,
                required : true,
            },
            optA : {
                type : String, 
                required: true,
            },
            optB :{
                type : String, 
                required: true,
            },
            optC :{
                type : String, 
                required: true,
            },
            optD :{
                type : String, 
                required: true,
            },
            ans: {
                type: String,
                required: true,
            }
        }
    ]
});

module.exports = mongoose.model("questions",questionsSchema);