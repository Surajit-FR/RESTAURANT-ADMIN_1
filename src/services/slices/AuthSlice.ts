import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LOGIN } from "../api/Api";
import { LoginSuccessResponse, UserAuth_Props } from "../../config/DataTypes.config";
import { EncryptData } from "../../helper/EncryptDecrypt";
import Cookies from 'js-cookie';

export const loginUser = createAsyncThunk("/api/login", async ({ data, navigate }: UserAuth_Props, { rejectWithValue }): Promise<LoginSuccessResponse | any> => {
    try {
        const response = await LOGIN(data);
        const result: LoginSuccessResponse = response?.data;
        if (result?.success) {
            if (result?.data?.remember_me === true) {
                const encUserData = EncryptData(data);
                Cookies.set('user', encUserData, {
                    expires: 7, // Cookie expiration (days)
                    sameSite: 'None', // Ensure the cookie is sent in all contexts
                });
            } else {
                Cookies.remove('user');
            }
            const user = EncryptData(result?.data);
            window.localStorage.setItem("token", JSON.stringify(result?.token));
            window.localStorage.setItem("user", user);
            navigate("/dashboard");
            return result;
        }
    } catch (exc: any) {
        const err: any = rejectWithValue(exc.response.data);
        return err;
    }
});

const AuthSlice = createSlice({
    name: "authSlice",
    initialState: {
        user_data: [],
        auth_loading: false,
        error: null
    },
    reducers: {
        logoutUser(state, { payload }) {
            window.localStorage.removeItem('token');
            window.localStorage.removeItem('user');
            state.user_data = [];
            payload('/admin/signin');
        },
        clearError(state) {
            state.error = null;
        }
    },
    extraReducers: builder => {
        builder.addCase(loginUser.pending, (state) => {
            state.auth_loading = true;
        })
        builder.addCase(loginUser.fulfilled, (state, { payload }) => {
            state.auth_loading = false;
            const user_data: any = payload;
            state.user_data = user_data;
        })
        builder.addCase(loginUser.rejected, (state, { payload }) => {
            state.auth_loading = false;
            const err: any | null = payload;
            state.error = err;
        })
    }
})


export const { logoutUser, clearError } = AuthSlice.actions;
export default AuthSlice.reducer;