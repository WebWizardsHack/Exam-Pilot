import { all, call } from "redux-saga/effects";
import { questionSaga } from "./Questionsaga";


export default function* rootSaga() {
    yield all([
        questionSaga()
    ])
}