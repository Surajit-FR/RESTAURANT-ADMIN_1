import { GetAPIParams, Pagination } from "./common";

export type TCategory = {
    categoryName: string;
    categoryDesc: string;
};

export type GetAllCategoryParams = GetAPIParams & {
    categoryId: string;
};

export type CategoryData = TCategory & {
    _id: string;
    categoryID: string;
    isDelete: boolean;
    createdAt: string;
    updateAt: string;
    __v: string;
};

export type CategoryResponse = {
    categories: Array<CategoryData>;
    pagination: Pagination
};

export type CategoryPayload = GetAPIParams & {
    data: TCategory;
    categoryId: string;
    resetForm: Function;
};