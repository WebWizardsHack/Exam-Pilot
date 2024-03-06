const { GoogleGenerativeAI } = require("@google/generative-ai");
const Tesseract = require('tesseract.js');

async function extractTextFromImage(imagePath) {
    try {
        const text = await Tesseract.recognize(imagePath, 'eng'); 
        return text.data.text;
    } catch (error) {
        console.error("Error extracting text from image:", error);
        return null;
    }
}

async function generateRandomQuestions(syllabusPath, numberOfQuestions) {
    const syllabusText = await extractTextFromImage(syllabusPath);
    const sampleQuestion = "**Q. A sample Question#\n**A. option A#\n**B. option B#\n**C. option C#\n**D. option D#";

    const apiKey=process.env.GEMINI_API_KEY;

    const genAI = new GoogleGenerativeAI(apiKey);
    
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});

    const prompt = `Generate a random Multiple Choice Question paper of ${numberOfQuestions} questions with 4 options A,B,C,D each based on the given syllabus:\n\n${syllabusText} \n\n The format of the MCQs should be like this \n Each Question should start with letter '**Q.' and each option A,B,C,D should be in separate lines, also '#' should be used to mark the end of question and each option like this : \n ${sampleQuestion}`;
    
    try {
      const result = await model.generateContent(prompt);
      const response = result.response;
      return response.text();
    } catch (error) {
        console.error("Error generating questions:", error);
    }
  }

module.exports = generateRandomQuestions;