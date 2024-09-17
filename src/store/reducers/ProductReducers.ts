import { createSlice } from "@reduxjs/toolkit";
import { DataState } from "../../types/common";

const initialState: DataState = {
    productData: {},
    singleProductData: {},
    error: null,
    type: ''
};

const ProductSlice = createSlice({
    name: "productSlice",
    initialState,
    reducers: {
        // Add Product
        addProductRequest: (state, { payload, type }) => {
            state.type = type;
        },
        addProductSuccess: (state, { payload, type }) => {
            state.type = type;
        },
        addProductFailure: (state, { payload, type }) => {
            state.type = type;
            state.error = payload;
        },

        // Get Product
        getProductRequest: (state, { payload, type }) => {
            state.type = type;
        },
        getProductSuccess: (state, { payload, type }) => {
            state.type = type;
            state.singleProductData = payload?.data;
        },
        getProductFailure: (state, { payload, type }) => {
            state.type = type;
            state.error = payload;
        },

        // Get All Product
        getAllProductRequest: (state, { payload, type }) => {
            state.type = type;
        },
        getAllProductSuccess: (state, { payload, type }) => {
            state.type = type;
            state.productData = payload?.data;
        },
        getAllProductFailure: (state, { payload, type }) => {
            state.type = type;
            state.error = payload;
        },

        // Get Product
        updateProductRequest: (state, { payload, type }) => {
            state.type = type;
        },
        updateProductSuccess: (state, { payload, type }) => {
            state.type = type;
            state.productData = payload?.data;
        },
        updateProductFailure: (state, { payload, type }) => {
            state.type = type;
            state.error = payload;
        },

        // Delete Product
        deleteProductRequest: (state, { payload, type }) => {
            state.type = type;
        },
        deleteProductSuccess: (state, { payload, type }) => {
            state.type = type;
        },
        deleteProductFailure: (state, { payload, type }) => {
            state.type = type;
            state.error = payload;
        },
    }
});

export const {
    addProductRequest,
    addProductSuccess,
    addProductFailure,

    getProductRequest,
    getProductSuccess,
    getProductFailure,

    getAllProductRequest,
    getAllProductSuccess,
    getAllProductFailure,

    updateProductRequest,
    updateProductSuccess,
    updateProductFailure,

    deleteProductRequest,
    deleteProductSuccess,
    deleteProductFailure,
} = ProductSlice.actions;

export default ProductSlice.reducer;