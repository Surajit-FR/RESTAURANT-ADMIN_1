import axios from "axios";
import { REACT_APP_BASE_URL } from "../../config/App.config";
import { TLoginCredentials, TRegisterCredentials } from "../../types/authTypes";
import { GetAllCategoryParams, TCategory } from "../../types/categoryTypes";
import { GetAllProductParams, TProduct } from "../../types/productTypes";

// Create axios instance
export const API = axios.create({ baseURL: REACT_APP_BASE_URL, withCredentials: true });

// Flag to control token refresh attempts
let isRefreshing = false;
let refreshSubscribers: ((token: string) => void)[] = [];

// Function to handle the refresh queue
const onRrefreshed = (token: string) => {
    refreshSubscribers.map((callback) => callback(token));
    refreshSubscribers = [];
};

// Function to add subscriber to the refresh queue
const addRefreshSubscriber = (callback: (token: string) => void) => {
    refreshSubscribers.push(callback);
};

// Request Interceptor
API.interceptors.request.use(
    (config) => {
        // If using cookies, you don't need to manually add tokens to headers
        return config;
    },
    (error) => Promise.reject(error)
);

// Response Interceptor
API.interceptors.response.use(
    (response) => response,
    async (error) => {
        const { config, response } = error;
        const originalRequest = config;

        // Check if the error is due to an expired token
        if (response?.status === 401 && !originalRequest._retry) {
            if (isRefreshing) {
                // Push the failed request to the subscribers' queue and return a promise
                return new Promise((resolve, reject) => {
                    addRefreshSubscriber((token) => {
                        originalRequest.headers.Authorization = `Bearer ${token}`;
                        resolve(API(originalRequest));
                    });
                });
            }

            originalRequest._retry = true;
            isRefreshing = true;

            try {
                // Call the refresh token API
                const refreshResponse = await API.post("/auth/refresh-token"); // No need to send token explicitly as it's in cookies
                const { accessToken } = refreshResponse.data.data;

                if (accessToken) {
                    onRrefreshed(accessToken);
                }

                isRefreshing = false;

                // Retry the original request with the new token
                originalRequest.headers.Authorization = `Bearer ${accessToken}`;
                return API(originalRequest);
            } catch (err: any) {
                isRefreshing = false;
                return Promise.reject(err);
            }
        }

        return Promise.reject(error);
    }
);

// Register
export const SIGNUP = (data: TRegisterCredentials) => API.post("/auth/signup", data);
// Login
export const LOGIN = (data: TLoginCredentials) => API.post("/auth/signin", data);
// Logout
export const LOGOUT = () => API.post("/auth/logout");
// Current user
export const CURRENTUSER = () => API.get("/user/current-user");

// Add category
export const ADDCATEGORY = (data: TCategory) => API.post("/category", data);
// All categories
export const ALLCATEGORIES = (params: GetAllCategoryParams) => {
    const queryString = new URLSearchParams(params as any).toString();
    return API.get(`/category?${queryString}`);
};
// Get a category
export const GETACATEGORY = (categoryId: string | undefined) => API.get(`/category/${categoryId}`);
// Update category
export const UPDATECATEGORY = (data: TCategory, categoryId: string | undefined) => API.patch(`/category/${categoryId}`, data);
// Delete category
export const DELETECATEGORY = (categoryId: string | undefined) => API.delete(`/category/${categoryId}`);

// Add product
export const ADDPRODUCT = (data: TProduct) => API.post("/product", data);
// All products
export const ALLPRODUCTS = (params: GetAllProductParams) => {
    const queryString = new URLSearchParams(params as any).toString();
    return API.get(`/product?${queryString}`);
};
// Get a product
export const GETAPRODUCT = (productId: string | undefined) => API.get(`/product/${productId}`);
// Update product
export const UPDATEPRODUCT = (data: TProduct, productId: string | undefined) => API.patch(`/product/${productId}`, data);
// Delete product
export const DELETEPRODUCT = (productId: string | undefined) => API.delete(`/product/${productId}`);