import { IUser } from '../interfaces';
import userModel from '../models/user.model';

const createUser = async (user:IUser): Promise<IUser> => {
  const newUser = await userModel.createUser(user);

  return { id: newUser, ...user };
};

const userService = { createUser };

export default userService;