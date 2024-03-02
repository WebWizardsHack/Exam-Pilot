const mongoose=require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
    name :{
        type : String,
        required : true,
    },
    email :{
        type : String,
        required : true,
    },
    contact : {
        type : Number,
        required : true,
    },
    avgTime : {
        type : Number,
        default : 0,
    },
    examsGiven :{
        type :Number,
        default: 0,
    },
});

userSchema.plugin(passportLocalMongoose);

module.exports=mongoose.model("users",userSchema);

