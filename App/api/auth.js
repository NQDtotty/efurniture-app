import ApiManager from "./ApiManager";

export const loginWithEmail = async payload => {
  const url = '/auth/login'; 
  try {
    const result = await ApiManager(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      data: payload
    });

    return result.data;
  } catch (error) {
    return error.response.data;
  }
}