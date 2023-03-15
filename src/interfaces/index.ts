export interface IProducts {
  id: number;
  name: string;
  amount: string;
  orderId?: number;
}

export interface IUsers {
  id: number;
  username: string;
  vacation: string;
  level: number;
  password: string;
}

export interface ILogin {
  username: string;
  password: string;
}