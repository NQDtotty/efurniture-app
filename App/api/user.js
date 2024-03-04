import ApiManager from "./ApiManager";

export const getAccountById = async (userId, token) => {
  const url = `/account/${userId}`; 
  try {
    const result = await ApiManager(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })

    return result.data;
  } catch (error) {
    return error.response.data;
  }
}