import ordersModel from '../models/orders.model';

const getAllOrders = async () => {
  const result = await ordersModel.getAllOrders();

  return result;
};

const userService = { getAllOrders };

export default userService;