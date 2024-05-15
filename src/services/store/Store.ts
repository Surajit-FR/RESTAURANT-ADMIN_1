import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../slices/AuthSlice";

export const Store = configureStore({
    reducer: {
        authSlice: AuthSlice,
    },
    middleware: (getDefaultMiddleware: any) => getDefaultMiddleware({ serializableCheck: false })
});