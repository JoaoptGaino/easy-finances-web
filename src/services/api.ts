import config from "../config";
import { create } from "apisauce";
export const restApi = create({
  baseURL: config.baseURL,
});
