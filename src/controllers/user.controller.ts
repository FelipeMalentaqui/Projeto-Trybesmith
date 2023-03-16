import { Request, Response } from 'express';
import { IUser } from '../interfaces';
import userService from '../services/user.service';
import createToken from '../utils/createToken';

const createUser = async (req: Request, res: Response) => {
  const { username, vocation, level, password }:IUser = req.body;

  const newUser = await userService.createUser({ username, vocation, level, password });
  const token = createToken(newUser);
  return res.status(201).json({ token });
};

const userController = { createUser };

export default userController;