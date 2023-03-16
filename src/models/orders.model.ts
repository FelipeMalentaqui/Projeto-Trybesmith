import { RowDataPacket } from 'mysql2';
import { IOrders } from '../interfaces';
import connection from './connection';

const getAllOrders = async (): Promise<IOrders> => {
  const [result] = await connection.execute<RowDataPacket[] & IOrders>(
    // 'SELECT * FROM Trybesmith.orders',
    `SELECT o.id, o.user_id as userId, JSON_ARRAYAGG(p.id) as productsIds
    FROM Trybesmith.orders AS o
    INNER JOIN Trybesmith.products AS p
    WHERE o.id = p.order_id
    GROUP BY o.id`,
  );
  console.log(result);
    
  return result;
};

const userModel = { getAllOrders };

export default userModel;