import { IProducts } from '../interfaces';
import productModel from '../models/products.model';

const getAll = async (): Promise<IProducts[]> => {
  const products = await productModel.getAll();

  return products;
};

const create = async (name: string, amount: string) => {
  const newProduct = await productModel.create(name, amount);
  console.log('>>>>>>>>>>', newProduct);
  
  return { id: newProduct, name, amount };
};

const productService = { getAll, create };

export default productService;