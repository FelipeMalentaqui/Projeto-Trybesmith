import jwt, { SignOptions } from 'jsonwebtoken';
import { ILogin, IUser } from '../interfaces';
import loginModel from '../models/login.model';

const JWT_SECRET = process.env.JWT_SECRET || 'xablau';

const JWT_CONFIG: SignOptions = {
  algorithm: 'HS256',
  expiresIn: '10d',
};

const generateToken = (payload: IUser) => jwt.sign(payload, JWT_SECRET, JWT_CONFIG);

const login = async (loginU: ILogin) => {
  const users = await loginModel.login(loginU);

  if (users.length === 0 || users[0].password !== loginU.password) {
    return { type: 'INVALID', message: 'invalid email or password' };
  }

  return generateToken(users[0]);
};

const userService = { login };

export default userService;