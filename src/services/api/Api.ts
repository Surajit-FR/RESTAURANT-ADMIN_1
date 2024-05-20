import axios from "axios";
import { CustomHeadersType, formValuesType, signinInputValues } from "../../config/DataTypes.config";
import { REACT_APP_BASE_URL } from "../../config/App.config";

export const API = axios.create({ baseURL: REACT_APP_BASE_URL });

// Login
export const LOGIN = (data: signinInputValues) => API.post("/api/login", data);
// Add category
export const ADDCATEGORY = (data: formValuesType | FormData | undefined, header: CustomHeadersType | undefined) => API.post("/admin/api/add/new/category", data, header);
// Get all categories
export const GETALLCATEGORIES = (page?: number | undefined, pageSize?: number | undefined, header?: CustomHeadersType | undefined) => API.get(`/admin/api/get/all/category?page=${page}&pageSize=${pageSize}`, header);
// Delete categories
export const DELETECATEGORY = (category_id: string | undefined, header: CustomHeadersType | undefined) => API.delete(`/admin/api/delete/category/${category_id}`, header);
// Add product
export const ADDPRODUCT = (data: formValuesType | FormData | undefined, header: CustomHeadersType | undefined) => API.post("/admin/api/add/new/product", data, header);
// Get all products
export const GETALLPRODUCTS = (page?: number | undefined, pageSize?: number | undefined, header?: CustomHeadersType | undefined) => API.get(`/admin/api/get/all/product?page=${page}&pageSize=${pageSize}`, header);