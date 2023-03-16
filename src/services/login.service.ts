// import jwt, { SignOptions } from 'jsonwebtoken';
import { ILogin } from '../interfaces';
import loginModel from '../models/login.model';
import createToken from '../utils/createToken';

// const JWT_SECRET = process.env.JWT_SECRET || '';

// const JWT_CONFIG: SignOptions = {
//   algorithm: 'HS256',
//   expiresIn: '10d',
// };

// const generateToken = (payload: IUser) => jwt.sign(payload, JWT_SECRET, JWT_CONFIG);

const login = async (loginU: ILogin) => {
  const users = await loginModel.login(loginU);
  
  if (!users || users.password !== loginU.password) {
    return { type: 'INVALID', message: 'Username or password invalid' };
  }
  const token = createToken({ ...users });

  return { message: token };
};

const userService = { login };

export default userService;