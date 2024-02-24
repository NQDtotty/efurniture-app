import axios from "axios";
import ApiManager from "./ApiManager";

export const getUserByEmail = async email => {
  const url = `/account/get-one-with-email/${email}`; 
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