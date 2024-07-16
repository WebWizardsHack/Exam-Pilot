import { all, call } from "redux-saga/effects";
import { questionSaga } from "./Questionsaga";
import { examSaga } from "./Examsaga.jsx";
import { USERSaga } from "./Usersaga.jsx";


export default function* rootSaga() {
    yield all([
        questionSaga(),
        examSaga(),
        USERSaga(),
    ])
}