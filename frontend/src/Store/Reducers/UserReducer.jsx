import { ADD_USERS_RED, DELETE_USERS_RED, GET_USERS, GET_USERS_RED, UPDATE_USERS_RED } from "../Constant";

export function UserReducer(state = [], action) {
    switch (action.type) {
        case ADD_USERS_RED:
            state.push(action.data);
            return state; // Use the spread operator to create a new array
            case GET_USERS_RED:
                state.push(action.data);
                console.log("reducers chala: ",action.data)
            return state
      
        default:
            return state;
    }
}