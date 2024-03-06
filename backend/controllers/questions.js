const Questions = require("../models/questions");
const  generateRandomQuestions  = require("../ai_module/AI");

module.exports.generateQuestions = async (req, res) => {
    try {
        const numQuestions = req.body.numQuestions;
        const timeAlloted = req.body.timeAlloted;
        const scheduledTime = req.body.scheduledTime;

        const imagePath = req.file.path;

        const generatedQuestionsText = await generateRandomQuestions(imagePath, numQuestions);
        
        const questionArray = [];
        
        let cnt=1;
        let i = 0;
        let idx = 0;
        let q = false, a = false, b = false, c = false, d = false;
        
        while (idx < generatedQuestionsText.length) {
            let temp = "";
        
            while (generatedQuestionsText[idx] !== '#') {
                temp += generatedQuestionsText[idx];
                idx++;
            }

            temp = temp.trim();

            temp = temp.replace(`**Q${cnt}`, "").replace(`**Q.`, "").replace("**A.", "").replace("**B.", "").replace("**C.", "").replace("**D.", "");


            if (!q) {
                questionArray[i] = { question: temp, optA: "", optB: "", optC: "", optD: "" };
                q = true;
            } else if (!a) {
                questionArray[i].optA = temp;
                a = true;
            } else if (!b) {
                questionArray[i].optB = temp;
                b = true;
            } else if (!c) {
                questionArray[i].optC = temp;
                c = true;
            } else {
                questionArray[i].optD = temp;
                q = false;
                a = false;
                b = false;
                c = false;
                cnt++;
                i++;
            }
        
            idx++;
        }
        
         const newQuestions = new Questions({
            timeAlloted: timeAlloted,
            scheduledTime: scheduledTime,
            questions: questionArray,
        });

        await newQuestions.save();
        
        res.json({ message: "Questions generated successfully" }); 
        
    } catch (error) {
        console.error("Error generating questions:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};