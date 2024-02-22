import axios from "axios";
import ApiManager from "./ApiManager";

export const loginWithEmail = async data => {
  try {
    // const result = await ApiManager('/auth/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   data: data
    // })
    axios.post('https://api.caucalamdev.io.vn/auth/login', data).then(res => console.log(res)).catch(err => console.log(err))
    return result;
  } catch (error) {
    console.info(error)
    throw error.message
  }
}