import { Request, Response } from 'express';
import { ILogin } from '../interfaces';
import loginService from '../services/login.service';

const login = async (req: Request<object, object, ILogin>, res: Response) => {
  const { body } = req;

  const token = await loginService.login(body);

  return res.status(200).json({ token });
};

export default login;