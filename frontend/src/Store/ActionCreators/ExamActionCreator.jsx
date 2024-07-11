import { ADD_EXAMS, DELETE_EXAMS, GET_EXAMS, UPDATE_EXAMS } from "../Constant";


export function addexam(data) {
    console.log("action:",data)
    return (
        {
            type: ADD_EXAMS,
            payload:data
        }
    )
}

export function getexam() {
    return (
        {
            type: GET_EXAMS
        }
    )
}


export function updateexam(data) {

    return (
        {

            type: UPDATE_EXAMS,
            payload:data
        }
    )
}

export function deleteexam(data) {
    return (
        {
            type: DELETE_EXAMS,
            payload:data
        }
    )
}
