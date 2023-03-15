import { RowDataPacket } from 'mysql2';
import { ILogin, IUser } from '../interfaces';
import connection from './connection';

const login = async (loginU: ILogin): Promise<IUser[]> => {
  const { username } = loginU;

  const [result] = await connection.execute<RowDataPacket[] & IUser[]>(`
  SELECT * FROM trybesmith.users WHERE username = ?;
  `, [username]);

  return result;
};

// getAll().then((products) => console.log(products));

const loginModel = { login };

export default loginModel;