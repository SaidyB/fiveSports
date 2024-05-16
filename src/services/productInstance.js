import axios from "axios";

export const productInstance = axios.create({
  baseURL: "http://localhost:5001/products",
});
