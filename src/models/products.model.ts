import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { IProducts } from '../interfaces';
import connection from './connection';

const getAll = async (): Promise<IProducts[]> => {
  const [result] = await connection.execute<IProducts[] & RowDataPacket[]>(
    'SELECT * FROM Trybesmith.products',
  );

  return result;
};

const create = async (name: string, amount: string): Promise<number> => {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES(?, ?)',
    [name, amount],
  );
  console.log('model ', insertId);
  
  return insertId;
};

// getAll().then((products) => console.log(products));

const productModel = { getAll, create };

export default productModel;