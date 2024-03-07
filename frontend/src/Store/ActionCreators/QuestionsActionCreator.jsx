import { ADD_QUESTIONS, DELETE_QUESTIONS, GET_QUESTIONS, UPDATE_QUESTIONS } from "../Constant";


export function addquestion(data) {
    return (
        {
            type: ADD_QUESTIONS,
            payload:data
        }
    )
}

export function getquestion() {
    return (
        {
            type: GET_QUESTIONS
        }
    )
}


export function updatequestion(data) {
    return (
        {
            type: UPDATE_QUESTIONS,
            payload:data
        }
    )
}

export function deletequestion(data) {
    return (
        {
            type: DELETE_QUESTIONS,
            payload:data
        }
    )
}
