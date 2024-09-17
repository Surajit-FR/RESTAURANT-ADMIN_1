import { call, put, takeLatest } from "redux-saga/effects";
import { ApiResponse, GetAPIParams, SagaGenerator } from "../../types/common";
import { showToast } from "../../util/Toast";
import { ADDCATEGORY, ALLCATEGORIES, DELETECATEGORY, UPDATECATEGORY } from "../api/Api";
import {
    CategoryPayload,
    CategoryResponse,
    GetAllCategoryParams
} from "../../types/categoryTypes";
import {
    addCategoryFailure,
    addCategorySuccess,
    deleteCategoryFailure,
    deleteCategorySuccess,
    getAllCategoryFailure,
    getAllCategoryRequest,
    getAllCategorySuccess,
    updateCategoryFailure,
    updateCategorySuccess
} from "../reducers/CategoryReducers";

// addCategorySaga generator function
export function* addCategorySaga({ payload, type }: { payload: CategoryPayload, type: string }): SagaGenerator<{ data: ApiResponse<null> }> {
    try {
        const resp = yield call(ADDCATEGORY, payload?.data);
        const result: ApiResponse<null> = resp?.data;
        if (result?.success) {
            payload.resetForm();
            showToast({ message: result?.message || 'Category added successfully', type: 'success', durationTime: 3500, position: "top-center" });
            yield put(addCategorySuccess(result));

            const params: GetAPIParams = {
                page: payload?.page,
                limit: payload?.limit,
                query: payload?.query,
                sortBy: payload?.sortBy,
                sortType: payload?.sortType,
            };
            yield put(getAllCategoryRequest(params));
        };
    } catch (error: any) {
        yield put(addCategoryFailure(error?.response?.data?.message));
    };
};

// getCategorySaga generator function
export function* getCategorySaga({ payload, type }: { payload: GetAllCategoryParams, type: string }): SagaGenerator<{ data: ApiResponse<CategoryResponse> }> {
    try {
        const resp = yield call(ALLCATEGORIES, payload);
        const result: ApiResponse<CategoryResponse> = resp?.data;
        if (result?.success) {
            yield put(getAllCategorySuccess(result));
        };
    } catch (error: any) {
        yield put(getAllCategoryFailure(error?.response?.data?.message));
    };
};

// updateCategorySaga generator function
export function* updateCategorySaga({ payload, type }: { payload: CategoryPayload, type: string }): SagaGenerator<{ data: ApiResponse<null> }> {
    try {
        const resp = yield call(UPDATECATEGORY, payload?.data, payload?.categoryId);
        const result: ApiResponse<null> = resp?.data;
        if (result?.success) {
            payload.resetForm();
            showToast({ message: result?.message || 'Category updated successfully', type: 'success', durationTime: 3500, position: "top-center" });
            yield put(updateCategorySuccess(result));

            const params: GetAPIParams = {
                page: payload?.page,
                limit: payload?.limit,
                query: payload?.query,
                sortBy: payload?.sortBy,
                sortType: payload?.sortType,
            };
            yield put(getAllCategoryRequest(params));
        };
    } catch (error: any) {
        yield put(updateCategoryFailure(error?.response?.data?.message));
    };
};

// deleteCategorySaga generator function
export function* deleteCategorySaga({ payload, type }: { payload: CategoryPayload, type: string }): SagaGenerator<{ data: ApiResponse<null> }> {
    try {
        const resp = yield call(DELETECATEGORY, payload?.categoryId);
        const result: ApiResponse<null> = resp?.data;
        if (result?.success) {
            yield put(deleteCategorySuccess(result));
            showToast({ message: result?.message || 'Category deleted successfully', type: 'success', durationTime: 3500, position: "top-center" });

            const params: GetAPIParams = {
                page: payload?.page,
                limit: payload?.limit,
                query: payload?.query,
                sortBy: payload?.sortBy,
                sortType: payload?.sortType,
            };
            yield put(getAllCategoryRequest(params));
        };
    } catch (error: any) {
        yield put(deleteCategoryFailure(error?.response?.data?.message));
    };
};

// Watcher generator function
export default function* watchCategory() {
    yield takeLatest('categorySlice/addCategoryRequest', addCategorySaga);
    yield takeLatest('categorySlice/getAllCategoryRequest', getCategorySaga);
    yield takeLatest('categorySlice/updateCategoryRequest', updateCategorySaga);
    yield takeLatest('categorySlice/deleteCategoryRequest', deleteCategorySaga);
};