import { ResultSetHeader } from 'mysql2';
import { IUser } from '../interfaces';
// import { IProducts } from '../interfaces';
import connection from './connection';

const createUser = async (user:IUser): Promise<number> => {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES(?, ?, ?, ?)',
    [user.username, user.vocation, user.level, user.password],
  );
  console.log('model ', insertId);
  
  return insertId;
};

const userModel = { createUser };

export default userModel;
