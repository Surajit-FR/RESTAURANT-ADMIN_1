import { CategoryData } from "./categoryTypes";
import { GetAPIParams, Pagination } from "./common";

export type TProduct = {
    productTitle: string;
    offer: 'true' | 'false';
    offerPercentage?: string;
    coverImage: string;
    productImages: Array<string>;
    productDescription?: string;
    price: string;
    availability: 'in_stock' | 'out_of_stock' | 'pre_order';
    visibility: 'public' | 'private';
    category: CategoryData;
    tags?: Array<string>;
    sku?: string;
};

export type GetAllProductParams = GetAPIParams & {
    productId: string;
};

export type ProductData = TProduct & {
    _id: string;
    isDelete: boolean;
    createdAt: string;
    updateAt: string;
    __v: string;
};

export type ProductResponse = {
    products: Array<ProductData>;
    pagination: Pagination
};

export type ProductPayload = GetAPIParams & {
    data: TProduct;
    productId: string;
    selectedCategory: string;
    resetForm: Function;
};