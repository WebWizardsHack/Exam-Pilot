import { all } from "axios";
import { questionSaga } from "./Questionsaga";


export default function* rootSaga() {
    yield all([
        questionSaga()
    ])
}