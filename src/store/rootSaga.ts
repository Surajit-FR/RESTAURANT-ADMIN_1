import { all } from "redux-saga/effects";

import watchAuth from "./sagas/AuthSaga";
import watchCategory from "./sagas/CategorySaga";
import watchUser from "./sagas/UserSaga";
import watchProduct from "./sagas/ProductSaga";

export default function* rootSaga() {
    yield all([
        watchAuth(),
        watchUser(),
        watchCategory(),
        watchProduct(),
    ])
}