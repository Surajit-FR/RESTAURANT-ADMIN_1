import { call, put, takeLatest } from "redux-saga/effects";
import { ApiResponse, SagaGenerator, WebThemeType } from "../../types/common";
import {
    CURRENTUSER,
    THEMEUPDATE,
} from "../api/Api";
import {
    getCurrentUserFailure,
    getCurrentUserRequest,
    getCurrentUserSuccess,
    updateThemeFailure,
    updateThemeSuccess,
} from "../reducers/UserReducers";
import { UserData } from "../../types/authTypes";
import { showToast } from "../../util/Toast";


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

// updateThemeSaga generator function
export function* updateThemeSaga({ payload, type }: { payload: { data: WebThemeType }, type: string }): SagaGenerator<{ data: ApiResponse<null> }> {
    try {
        const resp = yield call(THEMEUPDATE, payload?.data);
        const result: ApiResponse<null> = resp?.data;
        if (result?.success) {
            yield put(updateThemeSuccess(result));
            yield put(getCurrentUserRequest('userSlice/getCurrentUserRequest'));
            showToast({ message: result?.message, type: 'success', durationTime: 3500, position: "top-center" });
        };
    } catch (error: any) {
        yield put(updateThemeFailure(error?.response?.data?.message));
    };
};

// Watcher generator function
export default function* watchUser() {
    yield takeLatest('userSlice/getCurrentUserRequest', getCurrentUserSaga);
    yield takeLatest('userSlice/updateThemeRequest', updateThemeSaga);
};