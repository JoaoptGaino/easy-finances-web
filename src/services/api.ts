import config from "../config";
import axios from "axios";
export const api = axios.create({
  baseURL: config.baseURL,
  
});
export default api;
