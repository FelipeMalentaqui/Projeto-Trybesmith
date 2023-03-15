import { RowDataPacket } from 'mysql2';
import { IProducts } from '../interfaces';
import connection from './connection';

const getAll = async (): Promise<IProducts[]> => {
  const [result] = await connection.execute<IProducts[] & RowDataPacket[]>(
    'SELECT * FROM Trybesmith.products',
  );

  return result;
};

const productModel = { getAll };

export default productModel;