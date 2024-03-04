import ApiManager from "./ApiManager";

export const getOrderNeedToShipping = async token => {
  const url = '/dstaff/get-order-need-to-shipping'; 
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

export const getOrderDeliveredInMonth = async token => {
  const url = '/dstaff/check-order-delivered-in-month'; 
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

export const updateStatusOrderShipping = async (orderId, token) => {
  const url = `/dstaff/update-status-order-shipping/${orderId}`; 
  try {
    const result = await ApiManager(url, {
      method: 'POST',
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

export const updateStatusOrderDelivered = async (orderId, token) => {
  const url = `/dstaff/update-status-order-delivered/${orderId}`; 
  try {
    const result = await ApiManager(url, {
      method: 'POST',
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