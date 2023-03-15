import { IProducts } from '../interfaces';
import productModel from '../models/products.model';

const getAll = async (): Promise<IProducts[]> => {
  const products = await productModel.getAll();

  return products;
};

// const createProduct = async () => {

// };

const productService = { getAll };

export default productService;