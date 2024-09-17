import { createSlice } from "@reduxjs/toolkit";
import { DataState } from "../../types/common";

const initialState: DataState = {
    userData: {},
    error: null,
    type: ''
};

const UserSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        // Current user data
        getCurrentUserRequest: (state, { payload, type }) => {
            state.type = type;
        },
        getCurrentUserSuccess: (state, { payload, type }) => {
            state.type = type;
            state.userData = payload?.data;
        },
        getCurrentUserFailure: (state, { payload, type }) => {
            state.type = type;
            state.error = payload;
        },

        // Update theme
        updateThemeRequest: (state, { payload, type }) => {
            state.type = type;
        },
        updateThemeSuccess: (state, { payload, type }) => {
            state.type = type;
        },
        updateThemeFailure: (state, { payload, type }) => {
            state.type = type;
            state.error = payload;
        },
    }
});

export const {
    getCurrentUserRequest,
    getCurrentUserSuccess,
    getCurrentUserFailure,

    updateThemeRequest,
    updateThemeSuccess,
    updateThemeFailure,
} = UserSlice.actions;

export default UserSlice.reducer;