import { put, takeEvery } from "redux-saga/effects"
import { ADD_QUESTIONS, ADD_QUESTIONS_RED, GET_QUESTIONS, GET_QUESTIONS_RED } from "../Constant"
import { createquestionApi, getquestionApi } from "../Services"


function* createQuestionSaga(action) {
            console.log("saga chala data",action)
    let response = yield createquestionApi(action.payload)
    
    yield put({type:ADD_QUESTIONS_RED,data:response})
}
function* getquestionSaga(action) {
    console.log("saga",action.payload)
    let response = yield getquestionApi(action.payload)
    yield put({type:GET_QUESTIONS_RED,data:response})
}

// function* updateQuestionSaga(action) {

//     let response = yield updatequestionApi(action.payload)
    
//     yield put({type:ADD_QUESTIONS_RED,data:response})
// }

// function* addQuestionSaga(action) {

//     let response = yield createquestionApi(action.payload)
    
//     yield put({type:ADD_QUESTIONS_RED,data:response})
// }

export function* questionSaga() {
    yield takeEvery(ADD_QUESTIONS,createQuestionSaga)
    yield takeEvery(GET_QUESTIONS,getquestionSaga)
} 