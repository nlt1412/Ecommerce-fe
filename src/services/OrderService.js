import { axiosJWT } from "./UserService";

// export const createProduct = async (data) => {
//   const res = await axios.post(
//     `${process.env.REACT_APP_API_URL}/product/create`,
//     data
//   );
//   return res.data;
// };
// http://localhost:3001/api/order/get-order-details/67f39b93267d960d20021e5a
export const createOrder = async (data, access_token) => {
  try {
    const res = await axiosJWT.post(`${process.env.REACT_APP_API_URL}/order/create`, data, {
      headers: {
        token: `Bearer ${access_token}`,
      }
    });
    return res.data;
  } catch (error) {
    console.error("Order creation failed:", error.response?.data || error.message);
    throw error;
  }
};


  export const getOrderbyUserId = async (id,access_token) => {
    const res = await axiosJWT.get(`${process.env.REACT_APP_API_URL}/order/get-all-order/${id}`, {
        headers: {
          token: `Bearer ${access_token}`,
        }
      })
    return res.data;
  };

  export const getDetailsOrder = async (id,access_token) => {
    const res = await axiosJWT.get(`${process.env.REACT_APP_API_URL}/order/get-details-order/${id}`, {
        headers: {
          token: `Bearer ${access_token}`,
        }
      })
    return res.data;
  };

  export const cancelOrder = async (id, access_token, orderItems) => {
    const res = await axiosJWT.delete(`${process.env.REACT_APP_API_URL}/order/cancel-order/${id}`,{data: orderItems}, {
        headers: {
          token: `Bearer ${access_token}`,
        }
      })
    return res.data;
  };

  export const getAllOrder = async (access_token) => {
    const res = await axiosJWT.get(`${process.env.REACT_APP_API_URL}/order/get-all-order`, {
        headers: {
          token: `Bearer ${access_token}`,
        }
      })
    return res.data;
  };