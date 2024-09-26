import { call, put, takeLatest } from "redux-saga/effects";
import { ApiResponse, GetAPIParams, SagaGenerator } from "../../types/common";
import { showToast } from "../../util/Toast";
import { ADDPRODUCT, ALLPRODUCTS, GETAPRODUCT, UPDATEPRODUCT, DELETEPRODUCT } from "../api/Api";
import { ProductResponse } from "../../config/DataTypes.config";
import {
    GetAllProductParams,
    ProductData,
    ProductPayload
} from "../../types/productTypes";
import {
    addProductFailure,
    addProductSuccess,
    getAllProductFailure,
    getAllProductRequest,
    getAllProductSuccess,
    getProductFailure,
    getProductSuccess,
    updateProductFailure,
    updateProductSuccess,
    deleteProductFailure,
    deleteProductSuccess,
} from "../reducers/ProductReducers";

// addProductSaga generator function
export function* addProductSaga({ payload, type }: { payload: ProductPayload, type: string }): SagaGenerator<{ data: ApiResponse<null> }> {
    try {
        const resp = yield call(ADDPRODUCT, payload?.data);
        const result: ApiResponse<null> = resp?.data;
        if (result?.success) {
            payload.resetForm();
            showToast({ message: result?.message || 'Product added successfully', type: 'success', durationTime: 6000, position: "top-center" });
            yield put(addProductSuccess(result));
        };
    } catch (error: any) {
        yield put(addProductFailure(error?.response?.data?.message));
    };
};

// getAllProductSaga generator function
export function* getAllProductSaga({ payload, type }: { payload: GetAllProductParams, type: string }): SagaGenerator<{ data: ApiResponse<ProductResponse> }> {
    try {
        const resp = yield call(ALLPRODUCTS, payload);
        const result: ApiResponse<ProductResponse> = resp?.data;
        if (result?.success) {
            yield put(getAllProductSuccess(result));
        };
    } catch (error: any) {
        yield put(getAllProductFailure(error?.response?.data?.message));
    };
};

// getProductSaga generator function
export function* getProductSaga({ payload, type }: { payload: { productId: string | undefined }, type: string }): SagaGenerator<{ data: ApiResponse<ProductData> }> {
    try {
        const resp = yield call(GETAPRODUCT, payload?.productId);
        const result: ApiResponse<ProductData> = resp?.data;
        if (result?.success) {
            yield put(getProductSuccess(result));
        };
    } catch (error: any) {
        yield put(getProductFailure(error?.response?.data?.message));
    };
};

// updateProductSaga generator function
export function* updateProductSaga({ payload, type }: { payload: ProductPayload, type: string }): SagaGenerator<{ data: ApiResponse<null> }> {
    try {
        const resp = yield call(UPDATEPRODUCT, payload?.data, payload?.productId);
        const result: ApiResponse<null> = resp?.data;
        
        if (result?.success) {
            payload.resetForm();
            showToast({ message: result?.message || 'Product updated successfully', type: 'success', durationTime: 6000, position: "top-center" });
            yield put(updateProductSuccess(result));
            
            const params: GetAPIParams = {
                page: payload?.page,
                limit: payload?.limit,
                query: payload?.query,
                sortBy: payload?.sortBy,
                sortType: payload?.sortType,
                filterId: payload?.selectedCategory
            };
            yield put(getAllProductRequest(params));
        };
    } catch (error: any) {
        yield put(updateProductFailure(error?.response?.data?.message));
    };
};

// deleteProductSaga generator function
export function* deleteProductSaga({ payload, type }: { payload: ProductPayload, type: string }): SagaGenerator<{ data: ApiResponse<null> }> {
    try {
        const resp = yield call(DELETEPRODUCT, payload?.productId);
        const result: ApiResponse<null> = resp?.data;
        if (result?.success) {
            yield put(deleteProductSuccess(result));
            showToast({ message: result?.message || 'Category deleted successfully', type: 'success', durationTime: 3500, position: "top-center" });

            const params: GetAPIParams = {
                page: payload?.page,
                limit: payload?.limit,
                query: payload?.query,
                sortBy: payload?.sortBy,
                sortType: payload?.sortType,
                filterId: payload?.selectedCategory
            };
            yield put(getAllProductRequest(params));
        };
    } catch (error: any) {
        yield put(deleteProductFailure(error?.response?.data?.message));
    };
};

// Watcher generator function
export default function* watchProduct() {
    yield takeLatest('productSlice/addProductRequest', addProductSaga);
    yield takeLatest('productSlice/getAllProductRequest', getAllProductSaga);
    yield takeLatest('productSlice/getProductRequest', getProductSaga);
    yield takeLatest('productSlice/updateProductRequest', updateProductSaga);
    yield takeLatest('productSlice/deleteProductRequest', deleteProductSaga);
};