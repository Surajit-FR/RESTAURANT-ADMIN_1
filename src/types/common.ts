import { CallEffect, PutEffect, SelectEffect, TakeEffect } from "redux-saga/effects";
import { UserData } from "./authTypes";
import { CategoryData, CategoryResponse } from "./categoryTypes";
import { ProductData, ProductResponse } from "./productTypes";

export type UseOutsideClickReturn<T> = {
    ref: React.RefObject<T>,
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
};

export type ChannelStats = {
    totalViews: number,
    totalVideos: number,
    totalSubscribers: number,
    totalLikes: number
};

export type DataState = {
    authData?: Partial<UserData>,
    userData?: Partial<UserData>,
    categoryData?: Partial<CategoryResponse>,
    productData?: Partial<ProductResponse>,
    singleProductData?: Partial<ProductData>,
    error: string | null,
    type: string,
};

export type SagaGenerator<Y, R = void> = Generator<CallEffect<Y> | PutEffect | SelectEffect | TakeEffect, R, Y>;

export type CommonResponse = {
    statusCode: number,
    message: string,
    success: boolean,
};

export type ApiResponse<T> = CommonResponse & {
    data?: T;
};

export type GetAPIParams = {
    page?: number,
    limit?: number,
    query?: string,
    sortBy?: string,
    sortType?: 'asc' | 'desc',
};

export type Pagination = {
    totalVideos: number,
    totalPages: number,
    currentPage: number,
    limit: number,
};

export type Pagination_PropsType = {
    pageCount: number;
    pageNumber: number;
    changePage: (data: { selected: number }) => void;
};