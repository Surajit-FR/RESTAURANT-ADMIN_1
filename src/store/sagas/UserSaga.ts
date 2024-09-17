import { call, put, takeLatest } from "redux-saga/effects";
import { ApiResponse, SagaGenerator } from "../../types/common";
import {
    CURRENTUSER,
} from "../api/Api";
import {
    getCurrentUserFailure,
    getCurrentUserSuccess,
} from "../reducers/UserReducers";
import { UserData } from "../../types/authTypes";


// getCurrentUserSaga generator function
export function* getCurrentUserSaga({ type }: { type: string }): SagaGenerator<{ data: ApiResponse<UserData> }> {
    try {
        const resp = yield call(CURRENTUSER);
        const result: ApiResponse<UserData> = resp?.data;
        if (result?.success) {
            yield put(getCurrentUserSuccess(result));
        };
    } catch (error: any) {
        yield put(getCurrentUserFailure(error?.response?.data?.message));
    };
};

// Watcher generator function
export default function* watchUser() {
    yield takeLatest('userSlice/getCurrentUserRequest', getCurrentUserSaga);
};