import { combineReducers } from "redux";
import { QuestionReducer } from "./QuestionReducer";
import { ExamReducer } from "./ExamReducer";
import { UserReducer } from "./UserReducer";

export default combineReducers({
    QuestionStateData:QuestionReducer,
    ExamStateData:ExamReducer,
    UserStateData:UserReducer
})