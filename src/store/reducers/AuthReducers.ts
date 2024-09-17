import { createSlice } from "@reduxjs/toolkit";
import { DataState } from "../../types/common";

const initialState: DataState = {
    authData: {},
    error: null,
    type: ''
};

const AuthSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {
        // Signup
        SignupRequest: (state, { payload, type }) => {
            state.type = type;
        },
        SignupSuccess: (state, { payload, type }) => {
            state.type = type;
        },
        SignupFailure: (state, { payload, type }) => {
            state.type = type;
            state.error = payload;
        },

        // Login
        LoginRequest: (state, { payload, type }) => {
            state.type = type;
        },
        LoginSuccess: (state, { payload, type }) => {
            state.type = type;
        },
        LoginFailure: (state, { payload, type }) => {
            state.type = type;
            state.error = payload;
        },

        // Logout
        LogoutRequest: (state, { payload, type }) => {
            state.type = type;
        },
        LogoutSuccess: (state, { payload, type }) => {
            state.type = type;
        },
        LogoutFailure: (state, { payload, type }) => {
            state.type = type;
            state.error = payload;
        },
    }
});

export const {
    SignupRequest,
    SignupSuccess,
    SignupFailure,
    LoginRequest,
    LoginSuccess,
    LoginFailure,
    LogoutRequest,
    LogoutSuccess,
    LogoutFailure,
} = AuthSlice.actions;

export default AuthSlice.reducer;