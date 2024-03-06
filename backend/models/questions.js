const mongoose= require("mongoose");

const questionsSchema = new mongoose.Schema({
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
            }
        }
    ]
});

module.exports = mongoose.model("questions",questionsSchema);