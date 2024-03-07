import { ADD_QUESTIONS_RED, DELETE_QUESTIONS_RED, GET_QUESTIONS_RED, UPDATE_QUESTIONS_RED } from "../Constant";

export function QuestioReducer(state = [], action) {
    switch (action.type) {
        case ADD_QUESTIONS_RED:

            state.push(action.data);
            return state; // Use the spread operator to create a new array
        case GET_QUESTIONS_RED:
            state=action.data
            return state
        
            // case UPDATE_QUESTIONS_RED:
            
            // var index = state.findIndex((item) =>  item.id === Number(action.data.id ))
           
            // state[index].name = action.data.name
            // return state
            // case DELETE_QUESTIONS_RED:
            //     var newState = state.filter((item)=>item.id!==action.data.id)
            //     return newState
        default:
            return state;
    }
}