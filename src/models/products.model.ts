import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { ILogin, IProducts } from '../interfaces';
import connection from './connection';

const getAll = async (): Promise<IProducts[]> => {
  const [result] = await connection.execute<IProducts[] & RowDataPacket[]>(
    'SELECT * FROM trybesmith.products',
  );

  return result;
};

const create = async (name: string, amount: string): Promise<number> => {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES(?, ?)',
    [name, amount],
  );
  return insertId;
};

const login = async (login: ILogin) => {
  const { username } = login;

  const [result] = await connection.execute(
    'SELECT * FROM trybesmith.users WHERE username = ?',
    [username],
  );

  return result;
};

// getAll().then((products) => console.log(products));

const productModel = { getAll, create, login };

export default productModel;