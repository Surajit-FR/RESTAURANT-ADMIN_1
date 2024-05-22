import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ADDCATEGORY, ADDPRODUCT, DELETECATEGORY, DELETEPRODUCT, GETALLCATEGORIES, GETALLPRODUCTS, GETPRODUCTDETAILS } from "../api/Api";
import { AddCategorySuccessResponse, AddProductSuccessResponse, FetchAllCategoryResponse, FetchAllProductResponse, FormValues_Props } from "../../config/DataTypes.config";
import toast from "react-hot-toast";

// addCategory thunk
export const addCategory = createAsyncThunk("/admin/api/add/new/category", async ({ data, page, pageSize, header }: FormValues_Props, { rejectWithValue, dispatch }): Promise<AddCategorySuccessResponse | any> => {
    try {
        const response = await ADDCATEGORY(data, header);
        const result: AddCategorySuccessResponse = response?.data;
        if (result?.success) {
            dispatch(getAllCategory({ page, pageSize, header }));
            return result
        };
    } catch (exc: any) {
        const err: any = rejectWithValue(exc.response.data);
        return err;
    }
});

// getAllCategory thunk
export const getAllCategory = createAsyncThunk("/admin/api/get/all/category", async ({ page, pageSize, header }: FormValues_Props, { rejectWithValue }): Promise<FetchAllCategoryResponse | any> => {
    try {
        const response = await GETALLCATEGORIES(page, pageSize, header);
        const result: FetchAllCategoryResponse = response?.data;
        if (result?.success) return result;
    } catch (exc: any) {
        const err: any = rejectWithValue(exc.response.data);
        return err;
    }
});

// deleteCategory thunk
export const deleteCategory = createAsyncThunk("/admin/api/delete/category", async ({ category_id, page, pageSize, header }: FormValues_Props, { rejectWithValue, dispatch }): Promise<FetchAllCategoryResponse | any> => {
    try {
        const response = await DELETECATEGORY(category_id, header);
        const result: FetchAllCategoryResponse = response?.data;
        if (result?.success) {
            dispatch(getAllCategory({ page, pageSize, header }));
            return result
        };
    } catch (exc: any) {
        const err: any = rejectWithValue(exc.response.data);
        return err;
    }
});

// addProduct thunk
export const addProduct = createAsyncThunk("/admin/api/add/new/product", async ({ data, header }: FormValues_Props, { rejectWithValue }): Promise<AddProductSuccessResponse | any> => {
    try {
        const response = await ADDPRODUCT(data, header);
        const result: AddProductSuccessResponse = response?.data;
        if (result?.success) {
            return result
        };
    } catch (exc: any) {
        const err: any = rejectWithValue(exc.response.data);
        return err;
    }
});

// getAllProduct thunk
export const getAllProduct = createAsyncThunk("/admin/api/get/all/product", async (params: FormValues_Props, { rejectWithValue }): Promise<FetchAllProductResponse | any> => {
    try {
        const { page, pageSize, search, category, header } = params;
        const response = await GETALLPRODUCTS({ page, pageSize, search, category }, header);
        const result: FetchAllProductResponse = response?.data;
        if (result?.success) {
            return result
        };
    } catch (exc: any) {
        const err: any = rejectWithValue(exc.response.data);
        if (err?.payload) {
            toast.error(err?.payload, {
                duration: 4000,
                style: {
                    background: "#000",
                    color: "#fff"
                },
                iconTheme: {
                    primary: "#f00",
                    secondary: "#fff"
                }
            });
        };
        return err;
    }
});

// getProductDetails thunk
export const getProductDetails = createAsyncThunk("/admin/api/get/product/details", async ({ product_id, header }: FormValues_Props, { rejectWithValue }): Promise<FetchAllProductResponse | any> => {
    try {
        const response = await GETPRODUCTDETAILS(product_id, header);
        const result: FetchAllProductResponse = response?.data;
        if (result?.success) {
            return result
        };
    } catch (exc: any) {
        const err: any = rejectWithValue(exc.response.data);
        return err;
    }
});

// deleteProduct thunk
export const deleteProduct = createAsyncThunk("/admin/api/delete/product", async (params: FormValues_Props, { rejectWithValue, dispatch }): Promise<AddProductSuccessResponse | any> => {
    try {
        const { page, pageSize, search, category, product_id, header } = params;
        const response = await DELETEPRODUCT(product_id, header);
        const result: AddProductSuccessResponse = response?.data;
        if (result?.success) {
            dispatch(getAllProduct({ page, pageSize, search, category, header }));
            return result
        };
    } catch (exc: any) {
        const err: any = rejectWithValue(exc.response.data);
        return err;
    }
});

const UtilitySlice = createSlice({
    name: "utilitySlice",
    initialState: {
        category_resp_data: null,
        category_del_resp: null,
        category_data: [],
        add_product_resp_data: null,
        product_del_resp: null,
        products_data: [],
        products_details_data: [],
        utility_loading: false,
        error: null,
        del_error: null,
    },
    reducers: {
        clearCategoryRespData(state) {
            state.category_resp_data = null;
        },
        clearAddProductRespData(state) {
            state.add_product_resp_data = null;
        },
        clearCategoryDelResp(state) {
            state.category_del_resp = null;
        },
        clearProductDelResp(state) {
            state.product_del_resp = null;
        },
        clearError(state) {
            state.error = null;
        },
        clearDelError(state) {
            state.del_error = null;
        },
        clearProductsDetailsData(state) {
            state.products_details_data = [];
        },
    },
    extraReducers: builder => {
        // addCategory states
        builder.addCase(addCategory.pending, (state) => {
            state.utility_loading = true;
        })
        builder.addCase(addCategory.fulfilled, (state, { payload }) => {
            state.utility_loading = false;
            const category_resp_data: any = payload;
            state.category_resp_data = category_resp_data;
        })
        builder.addCase(addCategory.rejected, (state, { payload }) => {
            state.utility_loading = false;
            const err: any | null = payload;
            state.error = err;
        })

        // getAllCategory states
        builder.addCase(getAllCategory.pending, (state) => {
            state.utility_loading = true;
        })
        builder.addCase(getAllCategory.fulfilled, (state, { payload }) => {
            state.utility_loading = false;
            const category_data: any = payload;
            state.category_data = category_data;
        })
        builder.addCase(getAllCategory.rejected, (state, { payload }) => {
            state.utility_loading = false;
            const err: any | null = payload;
            state.error = err;
        })

        // deleteCategory states
        builder.addCase(deleteCategory.pending, (state) => {
            state.utility_loading = true;
        })
        builder.addCase(deleteCategory.fulfilled, (state, { payload }) => {
            state.utility_loading = false;
            const category_del_resp: any = payload;
            state.category_del_resp = category_del_resp;
        })
        builder.addCase(deleteCategory.rejected, (state, { payload }) => {
            state.utility_loading = false;
            const err: any | null = payload;
            state.del_error = err;
        })

        // addProduct states
        builder.addCase(addProduct.pending, (state) => {
            state.utility_loading = true;
        })
        builder.addCase(addProduct.fulfilled, (state, { payload }) => {
            state.utility_loading = false;
            const add_product_resp_data: any = payload;
            state.add_product_resp_data = add_product_resp_data;
        })
        builder.addCase(addProduct.rejected, (state, { payload }) => {
            state.utility_loading = false;
            const err: any | null = payload;
            state.error = err;
        })

        // getAllProduct states
        builder.addCase(getAllProduct.pending, (state) => {
            state.utility_loading = true;
        })
        builder.addCase(getAllProduct.fulfilled, (state, { payload }) => {
            state.utility_loading = false;
            const products_data: any = payload;
            state.products_data = products_data;
        })
        builder.addCase(getAllProduct.rejected, (state, { payload }) => {
            state.utility_loading = false;
            const err: any | null = payload;
            state.error = err;
        })

        // getProductDetails states
        builder.addCase(getProductDetails.pending, (state) => {
            state.utility_loading = true;
        })
        builder.addCase(getProductDetails.fulfilled, (state, { payload }) => {
            state.utility_loading = false;
            const products_details_data: any = payload;
            state.products_details_data = products_details_data;
        })
        builder.addCase(getProductDetails.rejected, (state, { payload }) => {
            state.utility_loading = false;
            const err: any | null = payload;
            state.error = err;
        })

        // deleteProduct states
        builder.addCase(deleteProduct.pending, (state) => {
            state.utility_loading = true;
        })
        builder.addCase(deleteProduct.fulfilled, (state, { payload }) => {
            state.utility_loading = false;
            const product_del_resp: any = payload;
            state.product_del_resp = product_del_resp;
        })
        builder.addCase(deleteProduct.rejected, (state, { payload }) => {
            state.utility_loading = false;
            const err: any | null = payload;
            state.del_error = err;
        })
    }
})


export const {
    clearCategoryRespData,
    clearAddProductRespData,
    clearCategoryDelResp,
    clearError,
    clearDelError,
    clearProductDelResp,
    clearProductsDetailsData,
} = UtilitySlice.actions;
export default UtilitySlice.reducer;