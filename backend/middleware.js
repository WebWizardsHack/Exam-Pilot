const {generateQuestionsSchema} = require("./schema");

module.exports.isLoggedIn = (req,res,next) => {
    // try {
    //     if(!req.isAuthenticated()){
    //         return res.status(500).json({message: "You are not logged In"});
    //     }
    //     next();
    // } catch (error) {
    //     return res.status(500).json({message:"Authorization error" , error});
    // }
    next()
}

module.exports.validateQuestions = (req,res,next) => {
    // try {
    //     const { error } = generateQuestionsSchema.validate(req.body);
    //     if (error) {
    //         return res.status(500).json({message : `Validation Error: ${error}`});
    //     }
    //     next();
    // } catch (err) {
    //     console.log(err);
    //     return res.status(500).json({ message: `Internal Server Error ${err}` });
    // }
}

