import { ADD_EXAMS_RED, DELETE_EXAMS_RED, GET_EXAMS, GET_EXAMS_RED, UPDATE_EXAMS_RED } from "../Constant";

export function ExamReducer(state = [], action) {
    switch (action.type) {
        case ADD_EXAMS_RED:
            console.log("reducers chala: ",action)
            state.push(action.data);
            return state; // Use the spread operator to create a new array
        case GET_EXAMS_RED:
            state = action.data
            console.log("exam reducer",action)
            return state
        // case GET_EXAMS:
        //     console.log("getexam")
            // case UPDATE_EXAMS_RED:
            
            // var index = state.findIndex((item) =>  item.id === Number(action.data.id ))
           
            // state[index].name = action.data.name
            // return state
            // case DELETE_EXAMS_RED:
            //     var newState = state.filter((item)=>item.id!==action.data.id)
            //     return newState
        default:
            return state;
    }
}