import axios, { AxiosInstance } from "axios";
import { AxiosInstanceFunc } from "./types/InstanceTypes";

export const axiosInstance: AxiosInstanceFunc = (path) => {
    const instance: AxiosInstance = axios.create({
      baseURL: `https://jsonplaceholder.typicode.com${path}`,
    });
  
    return instance;
  };