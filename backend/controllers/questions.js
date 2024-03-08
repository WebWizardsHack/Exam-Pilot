const Questions = require("../models/questions");
const  generateRandomQuestions  = require("../ai_module/AI");

module.exports.generateQuestions = async (req, res) => {
    try {
        const numQuestions = req.body.numQuestions;
        const timeAlloted = req.body.timeAlloted;
        const scheduledTime = req.body.scheduledTime;
        const requestId = req.body.requestId;
        const Name = req.body.Name;

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

            temp = temp.replace(`**Q${cnt}`, "").replace(`**Q.`, "").replace("**A.", "").replace("**B.", "").replace("**C.", "").replace("**D.", "").replace("**Ans.","").replace("**Ans","").replace(`**Ans${cnt}.`,"").replace(`**Ans${cnt}`,"");

            if (!q) {
                questionArray[i] = { question: temp, optA: "", optB: "", optC: "", optD: "" , ans: ""};
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
            } else if(!d) {
                questionArray[i].optD = temp;
                d=true;
            }else{
                for(let j=0;j<temp.length;j++){
                    if(temp[j]=='A' || temp[j]=='B' || temp[j]== 'C' || temp[j]== 'D'){
                        questionArray[i].ans=temp[j];
                    }
                }
                q = false;
                a = false;
                b = false;
                c = false;
                d = false;
                cnt++;
                i++;
            }
        
            idx++;
        }
        
        const newQuestions = new Questions({
            requestId : requestId,
            Name : Name,
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

module.exports.fetchQuestions = async (req,res) => {
    try {
        const { requestId } = req.body;
        const questions = await Questions.findOne({requestId});
        if(questions) res.status(200).json({message : "Questions fetched successfully" , questions});
        else res.status(500).json({message:"Error in fetching questions from database with the corresponding request id"});
    } catch (error) {
        res.status(500).json({message:"Error in fetching questions" , error});
    }
}