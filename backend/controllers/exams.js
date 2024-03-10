const Questions = require("../models/questions");

module.exports.getUpcomingExams = async (req, res) => {
  try {
    const upcomingExamsArray = await Questions.find({});
    console.log(upcomingExamsArray);

    const formattedExams = upcomingExamsArray.map((exam) => ({
        requestId: exam.requestId,
        numQuestions: exam.numQuestions,
        scheduledTime: exam.scheduledTime,
        timeAllotted: exam.timeAllotted,
        Name: exam.Name,
    }));

    if (formattedExams.length > 0) {
      res.status(200).json({ message: "Successfully retrieved all upcoming exams from the database", formattedExams });
    } else {
      res.status(500).json({ message: "No upcoming exams exist!" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error in fetching upcoming exams", error });
  }
}
