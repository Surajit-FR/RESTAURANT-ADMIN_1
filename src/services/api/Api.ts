import axios from "axios";
import { CustomHeadersType, formValuesType, signinInputValues } from "../../config/DataTypes.config";
import { REACT_APP_BASE_URL } from "../../config/App.config";

export const API = axios.create({ baseURL: REACT_APP_BASE_URL });

// Login
export const LOGIN = (data: signinInputValues) => API.post("/api/login", data);
// Add category
export const ADDCATEGORY = (data: formValuesType | undefined, header: CustomHeadersType | undefined) => API.post("/admin/api/add/new/category", data, header);
// Get all categories
export const GETALLCATEGORIES = (header: CustomHeadersType | undefined) => API.get("/admin/api/get/all/category", header);