import axios from "axios";
import { signinInputValues } from "../../config/DataTypes.config";
import { REACT_APP_BASE_URL } from "../../config/App.config";

export const API = axios.create({ baseURL: REACT_APP_BASE_URL });

// Login
export const LOGIN = (data: signinInputValues) => API.post("/api/login", data);