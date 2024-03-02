const express=require("express");
const router=express.Router();
const passport=require("passport");
const userController = require("../controllers/users");

router
    .route("/signup")
        .post(userController.signUp);


router
    .route("/login")
        .post(passport.authenticate("local") , userController.login);


router
    .route("/logout")
        .get(userController.logout);

        
module.exports=router;