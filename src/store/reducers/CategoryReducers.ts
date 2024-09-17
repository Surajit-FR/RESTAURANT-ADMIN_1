import { createSlice } from "@reduxjs/toolkit";
import { DataState } from "../../types/common";

const initialState: DataState = {
    categoryData: {},
    error: null,
    type: ''
};

const CategorySlice = createSlice({
    name: "categorySlice",
    initialState,
    reducers: {
        // Add category
        addCategoryRequest: (state, { payload, type }) => {
            state.type = type;
        },
        addCategorySuccess: (state, { payload, type }) => {
            state.type = type;
        },
        addCategoryFailure: (state, { payload, type }) => {
            state.type = type;
            state.error = payload;
        },

        // Get category
        getAllCategoryRequest: (state, { payload, type }) => {
            state.type = type;
        },
        getAllCategorySuccess: (state, { payload, type }) => {
            state.type = type;
            state.categoryData = payload?.data;
        },
        getAllCategoryFailure: (state, { payload, type }) => {
            state.type = type;
            state.error = payload;
        },

        // Get category
        updateCategoryRequest: (state, { payload, type }) => {
            state.type = type;
        },
        updateCategorySuccess: (state, { payload, type }) => {
            state.type = type;
            state.categoryData = payload?.data;
        },
        updateCategoryFailure: (state, { payload, type }) => {
            state.type = type;
            state.error = payload;
        },

        // Delete category
        deleteCategoryRequest: (state, { payload, type }) => {
            state.type = type;
        },
        deleteCategorySuccess: (state, { payload, type }) => {
            state.type = type;
        },
        deleteCategoryFailure: (state, { payload, type }) => {
            state.type = type;
            state.error = payload;
        },
    }
});

export const {
    addCategoryRequest,
    addCategorySuccess,
    addCategoryFailure,

    getAllCategoryRequest,
    getAllCategorySuccess,
    getAllCategoryFailure,

    updateCategoryRequest,
    updateCategorySuccess,
    updateCategoryFailure,

    deleteCategoryRequest,
    deleteCategorySuccess,
    deleteCategoryFailure,
} = CategorySlice.actions;

export default CategorySlice.reducer;