import { ADD_QUESTIONS, DELETE_QUESTIONS, GET_QUESTIONS, UPDATE_QUESTIONS } from "../Constant";


export function addquestion(data) {
    console.log("action:",data)
    return (
        {
            type: ADD_QUESTIONS,
            payload:data
        }
    )
}

export function getquestion(data) {
    // console.log(data)
    return (
        {
            type: GET_QUESTIONS,
            payload:data

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
