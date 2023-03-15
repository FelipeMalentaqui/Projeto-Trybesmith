// import { ResultSetHeader } from 'mysql2';
// // import { IProducts } from '../interfaces';
// import connection from './connection';

// const createUser = async (username: string, vocation: string, level: number, password: string): Promise<number> => {
//   const [{ insertId }] = await connection.execute<ResultSetHeader>(
//     'INSERT INTO Trybesmith.products (username, vocation, level, password) VALUES(?, ?, ?, ?)',
//     [username, vocation, level, password],
//   );
//   console.log('model ', insertId);
  
//   return insertId;
// };

// const userModel = { createUser };

// export default userModel;