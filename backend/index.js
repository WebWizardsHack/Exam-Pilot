require('dotenv').config({ path: "../.env" });
const express = require('express');

const app = express();
const port = 3001;

const session=require("express-session");
const passport=require("passport");
const localStrategy = require("passport-local").Strategy;
const mongoose=require("mongoose");
const flash=require("connect-flash");
const cors=require("cors");

const userRouter = require("./routes/users");
const questionRouter=require("./routes/questions");
const examRouter = require("./routes/exams");

const User=require("./models/users");

// const apiKey = process.env.GEMINI_API_KEY; 
const mongoUrl="mongodb://127.0.0.1:27017/Exam-Pilot";

main().then(()=>{
    console.log("connected to DB");
}).catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect(mongoUrl);
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(flash());

const sessionOptions = {
  secret : "supersecret",
  resave : false,
  saveUninitialized : true,
  cookie : {
      expires : Date.now() + 7 * 24 * 60 * 60 * 1000,
      maxAge : 7 * 24 * 60 * 60 * 1000,
      httpOnly : true
  }
}

app.use(session(sessionOptions));

passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(passport.initialize());
app.use(passport.session());

app.use((err, req, res, next) => {
  console.error(err); 

  if (err.status) {
    res.status(err.status).json({ message: err.message }); 
  } else {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.use("/upcoming-exams",examRouter);
app.use("/generate-questions",questionRouter);
app.use("/",userRouter);

app.get("/",(req,res) => {
  res.send("Hello from the backend!");
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
