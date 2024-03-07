import { combineReducers } from "redux";
import { QuestioReducer } from "./QuestionReducer";

export default combineReducers({
    QuestionStateData:QuestioReducer
})