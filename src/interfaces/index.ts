export interface IProducts {
  id: number;
  name: string;
  amount: string;
  orderId?: number;
}

export interface IUser {
  id?: string;
  username: string;
  vocation: string;
  level: string;
  password: string;
}

export interface ILogin {
  username: string;
  password: string;
}