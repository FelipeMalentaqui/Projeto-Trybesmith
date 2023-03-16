import connection from './connection';

const getAllOrders = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM Trybesmith.orders',
  );

  return result;
};

const userModel = { getAllOrders };

export default userModel;