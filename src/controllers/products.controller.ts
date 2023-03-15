import { Request, Response } from 'express';
import productService from '../services/products.service';

const create = async (req: Request, res: Response) => {
  const { name, amount } = req.body;

  const newProduct = await productService.create(name, amount);

  return res.status(201).json(newProduct);
};

const getAll = async (req: Request, res: Response) => {
  const products = await productService.getAll();

  return res.status(200).json(products);
};

export {
  create,
  getAll,
};