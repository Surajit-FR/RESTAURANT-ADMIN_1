import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ADDCATEGORY, GETALLCATEGORIES } from "../api/Api";
import { AddCategorySuccessResponse, CustomHeadersType, FetchAllCategoryResponse, FormValues_Props } from "../../config/DataTypes.config";

// addCategory thunk
export const addCategory = createAsyncThunk("/admin/api/add/new/category", async ({ data, header }: FormValues_Props, { rejectWithValue, dispatch }): Promise<AddCategorySuccessResponse | any> => {
    try {
        const response = await ADDCATEGORY(data, header);
        const result: AddCategorySuccessResponse = response?.data;
        if (result?.success) {
            dispatch(getAllCategory(header));
            return result
        };
    } catch (exc: any) {
        const err: any = rejectWithValue(exc.response.data);
        return err;
    }
});

// getAllCategory thunk
export const getAllCategory = createAsyncThunk("/admin/api/get/all/category", async (header: CustomHeadersType | undefined, { rejectWithValue }): Promise<FetchAllCategoryResponse | any> => {
    try {
        const response = await GETALLCATEGORIES(header);
        const result: FetchAllCategoryResponse = response?.data;
        if (result?.success) return result;
    } catch (exc: any) {
        const err: any = rejectWithValue(exc.response.data);
        return err;
    }
});

const UtilitySlice = createSlice({
    name: "utilitySlice",
    initialState: {
        category_resp_data: null,
        category_data: [],
        loading: false,
        error: null
    },
    reducers: {
        clearCategoryRespData(state) {
            state.category_resp_data = null;
        },
        clearError(state) {
            state.error = null;
        }
    },
    extraReducers: builder => {
        // addCategory states
        builder.addCase(addCategory.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(addCategory.fulfilled, (state, { payload }) => {
            state.loading = false;
            const category_resp_data: any = payload;
            state.category_resp_data = category_resp_data;
        })
        builder.addCase(addCategory.rejected, (state, { payload }) => {
            state.loading = false;
            const err: any | null = payload;
            state.error = err;
        })

        // getAllCategory states
        builder.addCase(getAllCategory.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(getAllCategory.fulfilled, (state, { payload }) => {
            state.loading = false;
            const category_data: any = payload;
            state.category_data = category_data;
        })
        builder.addCase(getAllCategory.rejected, (state, { payload }) => {
            state.loading = false;
            const err: any | null = payload;
            state.error = err;
        })
    }
})


export const { clearCategoryRespData, clearError } = UtilitySlice.actions;
export default UtilitySlice.reducer;