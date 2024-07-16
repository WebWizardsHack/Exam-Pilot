import { put, takeEvery } from "redux-saga/effects"
import { ADD_USERS, ADD_USERS_RED, GET_USERS, GET_USERS_RED } from "../Constant"
import { createuserApi ,getuserApi} from "../Services"


function* createUSERSaga(action) {
            console.log("saga chala data",action)
    let response = yield createuserApi(action.payload)
    
    yield put({type:ADD_USERS_RED,data:response})
}
function* getUSERSaga(action) {
    console.log("saga",action.payload)
    let response = yield getuserApi(action.payload)
    yield put({type:GET_USERS_RED,data:response})
}

// function* updateUSERSaga(action) {

//     let response = yield updateUSERApi(action.payload)
    
//     yield put({type:ADD_USERS_RED,data:response})
// }

// function* addUSERSaga(action) {

//     let response = yield createUSERApi(action.payload)
    
//     yield put({type:ADD_USERS_RED,data:response})
// }

export function* USERSaga() {
    yield takeEvery(ADD_USERS,createUSERSaga)
    yield takeEvery(GET_USERS,getUSERSaga)
} 