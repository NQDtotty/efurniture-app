import axios from "axios";
import ApiManager from "./ApiManager";

export const getProductById = async productId => {
  const url = `/product/get-one/${productId}`; 
  try {
    const result = await ApiManager(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return result.data;
  } catch (error) {
    return error.response.data;
  }
}