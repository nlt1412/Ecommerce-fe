<<<<<<< HEAD
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
=======
const Order = require("../models/OrderProduct")
const Product = require("../models/ProductModel")
const EmailService = require("../services/EmailService")

const createOrder = (newOrder) => {
  return new Promise(async (resolve, reject) => {
    const { orderItems, paymentMethod, itemsPrice, shippingPrice, totalPrice, fullName, address, city, phone, user, isPaid, paidAt, email } = newOrder;
    try {
      const promises = orderItems.map(async (order) => {
        const productData = await Product.findOneAndUpdate(
          {
          _id: order.product,
          countInStock: {$gte: order.amount}
          },
          {$inc: {
              countInStock: -order.amount,
              selled: +order.amount
            }},
            {new: true}
        )
        if(productData) {
          return {
            status: "OK",
            message: "SUCCESS"
          }
        } else {
          return{
            status: "OK",
            message: "ERR",
            id: order.product
          }
        }
      })
      const results = await Promise.all(promises)
      const newData = results && results.filter((item) => item.id)
      if(newData.length) {
        const arrId = []
        newData.forEach((item) => {
          arrId.push(item.id)
        })
        resolve({
          status: 'ERR',
          message: `Sản phẩm với id: ${arrId.join(',')} không đủ hàng`
        })
      } else {
        const createdOrder = await Order.create({
          orderItems,
          shippingAddress: {
              fullName,
              address,
              city, phone
          },
          paymentMethod,
          itemsPrice,
          shippingPrice,
          totalPrice,
          user: user,
          isPaid: isPaid || false,
          paidAt: isPaid ? (paidAt || new Date()) : null
        })
        if (createdOrder) {
          await EmailService.sendEmailCreateOrder(email, orderItems)
            resolve({
              status: 'OK',
              message: 'SUCCESS'
            })
        }
      }
    } catch (e) {
      reject(e);
    }
  });
};

const getAllOrderDetails = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const order = await Order.find({
        user: id,
      });
      if (order === null) {
        resolve({
          status: "OK",
          message: "The order is not defined",
        });
      }

      resolve({
        status: "OK",
        message: "SUCCESS",
        data: order,
      });
    } catch (e) {
      reject(e);
    }
  });
};

const getOrderDetails = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const order = await Order.findById({
        _id: id,
      });
      if (order === null) {
        resolve({
          status: "OK",
          message: "The order is not defined",
        });
      }

      resolve({
        status: "OK",
        message: "SUCCESS",
        data: order,
      });
    } catch (e) {
      reject(e);
    }
  });
};

const cancelOrderDetails = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let order = []
      const promises = data.map(async (order) => {
        const productData = await Product.findOneAndUpdate(
          {
          _id: order.product,
          selled: {$gte: order.amount}
          },
          {$inc: {
              countInStock: +order.amount,
              selled: -order.amount
            }},
            {new: true}
        )
        if(productData) {
          order = await Order.findByIdAndDelete(id);
          if (order === null) {
            resolve({
              status: "OK",
              message: "The order is not defined",
            });
          }
      } else {
          return{
            status: "OK",
            message: "ERR",
            id: order.product
          }
        }
      })
      const results = await Promise.all(promises)
      const newData = results && results.filter((item) => item)
      if(newData.length) {
        resolve({
          status: 'ERR',
          message: `Sản phẩm với id${newData.join(',')} không tồn tại`
        })
      }
      resolve({
        status: 'OK',
        message: 'SUCCESS',
        data: order
      })
    } catch (e) {
      reject(e);
    }
  });
};

const getAllOrder = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const allOrder = await Order.find()
      resolve({
        status: "OK",
        message: "SUCCESS",
        data: allOrder
      });
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  createOrder,
  getAllOrderDetails,
  getOrderDetails,
  cancelOrderDetails,
  getAllOrder
};
>>>>>>> a043e0286a9e60b3252334033f59332ab987d9df
