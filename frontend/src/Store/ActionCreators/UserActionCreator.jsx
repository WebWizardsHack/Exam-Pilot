import { ADD_USERS, DELETE_USERS, GET_USERS, UPDATE_USERS } from "../Constant";


export function adduser(data) {
    console.log("action:",data)
    return (
        {
            type: ADD_USERS,
            payload:data
        }
    )
}

export function getuser(data) {
    return (
        {
            type: GET_USERS,
            payload:data
        }
    )
}


export function updateuser(data) {

    return (
        {

            type: UPDATE_USERS,
            payload:data
        }
    )
}

export function deleteuser(data) {
    return (
        {
            type: DELETE_USERS,
            payload:data
        }
    )
}
