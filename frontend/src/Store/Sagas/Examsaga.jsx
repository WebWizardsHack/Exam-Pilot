import { put, takeEvery } from "redux-saga/effects"
import { ADD_EXAMS, ADD_EXAMS_RED, GET_EXAMS, GET_EXAMS_RED } from "../Constant"
import { getUpcomingExamsApi} from "../Services"


// function* createExamSaga(action) {
//             console.log("saga chala data",action)
//     let response = yield getUpcomingExamsApi(action.payload)
    
//     yield put({type:ADD_EXAMS_RED,data:response})
// }
function* getquestionSaga() {
    let response = yield getUpcomingExamsApi()
    yield put({type:GET_EXAMS_RED,data:response})
}

// function* updateExamSaga(action) {

//     let response = yield updatequestionApi(action.payload)
    
//     yield put({type:ADD_EXAMS_RED,data:response})
// }

// function* addExamSaga(action) {

//     let response = yield getUpcomingExamsApi(action.payload)
    
//     yield put({type:ADD_EXAMS_RED,data:response})
// }

export function* examSaga() {
    // yield takeEvery(ADD_EXAMS,createExamSaga)
    yield takeEvery(GET_EXAMS,getquestionSaga)
} 