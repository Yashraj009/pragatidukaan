//it contains all logic of orderRoutes.js
import asyncHandler from "../middleware/asyncHandler.js";
import Order from "../models/orderModel.js";

//@desc create new order
//@route POST /api/orders
//@access PRIVATE
const addOrderItems = asyncHandler(async (req, res) => {
  res.send("add order items");
});

//@desc get logged in user orders
//@route GET /api/orders/myorders
//@access PRIVATE
const getMyOrders = asyncHandler(async (req, res) => {
  res.send("get my orders");
});

//@desc get order by Id
//@route GET /api/orders/:id
//@access PRIVATE
const getOrderById = asyncHandler(async (req, res) => {
  res.send("get order by id");
});

//@desc update order to paid
//@route PUT /api/orders/:id/pay
//@access PRIVATE/Admin
const updateOrderToPaid = asyncHandler(async (req, res) => {
  res.send("update order to paid");
});

//@desc update order to delivered
//@route PUT /api/orders/:id/deliver
//@access PRIVATE/Admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
  res.send("update order to delivered");
});

//@desc get all orders
//@route GET /api/orders
//@access PRIVATE/Admin
const getOrders = asyncHandler(async (req, res) => {
  res.send("get all orders");
});

export {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders,
};
