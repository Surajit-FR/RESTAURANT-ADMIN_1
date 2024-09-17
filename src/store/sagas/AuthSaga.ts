import { call, put, takeLatest } from "redux-saga/effects";
import { ApiResponse, SagaGenerator } from "../../types/common";
import { LOGIN, LOGOUT, SIGNUP } from "../api/Api";
import {
    LoginFailure,
    LoginSuccess,
    LogoutFailure,
    LogoutSuccess,
    SignupFailure,
    SignupSuccess
} from "../reducers/AuthReducers";
import { TLoginCredentials, TRegisterCredentials, UserData } from "../../types/authTypes";
import { showToast } from "../../util/Toast";
import { NavigateFunction } from "react-router-dom";

// signupSaga generator function
export function* signupSaga({ payload, type }: { payload: { data: TRegisterCredentials, navigate: NavigateFunction }, type: string }): SagaGenerator<{ data: ApiResponse<UserData> }> {
    try {
        const resp = yield call(SIGNUP, payload?.data);
        const result: ApiResponse<UserData> = resp?.data;
        if (result?.success) {
            payload.navigate("/login");
            showToast({ message: result?.message || 'Signup Successfully.Please login to continue', type: 'success', durationTime: 3500, position: "top-center" });
            yield put(SignupSuccess(result));
        };
    } catch (error: any) {
        yield put(SignupFailure(error?.response?.data?.message));
        showToast({ message: error?.response?.data?.message || 'Signup failed.', type: 'error', durationTime: 3500, position: "bottom-center" });
    };
};

// loginSaga generator function
export function* loginSaga({ payload, type }: { payload: { data: TLoginCredentials, navigate: NavigateFunction }, type: string }): SagaGenerator<{ data: ApiResponse<UserData> }> {
    try {
        const resp = yield call(LOGIN, payload?.data);
        const result: ApiResponse<UserData> = resp?.data;
        if (result?.success) {
            payload.navigate("/");
            window.localStorage.setItem("accessToken", result?.data?.accessToken as string);
            window.localStorage.setItem("refreshToken", result?.data?.refreshToken as string);
            showToast({ message: result?.message || 'Login Successfully.', type: 'success', durationTime: 3500, position: "top-center" });
            yield put(LoginSuccess(result));
        };
    } catch (error: any) {
        yield put(LoginFailure(error?.response?.data?.message));
        showToast({ message: error?.response?.data?.message || 'Login failed.', type: 'error', durationTime: 3500, position: "bottom-center" });
    };
};

// logoutSaga generator function
export function* logoutSaga({ payload, type }: { payload: { navigate: NavigateFunction }, type: string }): SagaGenerator<{ data: ApiResponse<UserData> }> {
    try {
        const resp = yield call(LOGOUT);
        const result: ApiResponse<UserData> = resp?.data;
        if (result?.success) {
            payload.navigate("/login");
            window.localStorage.removeItem("accessToken");
            window.localStorage.removeItem("refreshToken");
            showToast({ message: result?.message || 'Logout Successfully.', type: 'success', durationTime: 3500, position: "top-center" });
            yield put(LogoutSuccess(result));
        };
    } catch (error: any) {
        yield put(LogoutFailure(error?.response?.data?.message));
        showToast({ message: error?.response?.data?.message || 'Logout failed.', type: 'error', durationTime: 3500, position: "bottom-center" });
    };
};

// Watcher generator function
export default function* watchAuth() {
    yield takeLatest('authSlice/SignupRequest', signupSaga);
    yield takeLatest('authSlice/LoginRequest', loginSaga);
    yield takeLatest('authSlice/LogoutRequest', logoutSaga);
};