import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./reducers/AuthReducers";
import UserSlice from "./reducers/UserReducers";
import CategorySlice from "./reducers/CategoryReducers";
import ProductSlice from "./reducers/ProductReducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = configureStore({
    reducer: {
        authSlice: AuthSlice,
        userSlice: UserSlice,
        categorySlice: CategorySlice,
        productSlice: ProductSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(middleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;