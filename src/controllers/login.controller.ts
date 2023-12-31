import { Request, Response } from 'express';
import { ILogin } from '../interfaces';
import loginService from '../services/login.service';

const login = async (req: Request<object, object, ILogin>, res: Response) => {
  const { body } = req;

  const { type, message } = await loginService.login(body);

  if (type) return res.status(401).json({ message });

  return res.status(200).json({ token: message });
};

const userLogin = { login };

export default userLogin;