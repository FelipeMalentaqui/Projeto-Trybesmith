import { Request, Response } from 'express';
import { IUser } from '../interfaces';
import userService from '../services/user.service';

const createUser = async (req: Request, res: Response) => {
  const { username, vocation, level, password }:IUser = req.body;

  const newUser = await userService.createUser({ username, vocation, level, password });

  return res.status(201).json(newUser);
};

const userController = { createUser };

export default userController;