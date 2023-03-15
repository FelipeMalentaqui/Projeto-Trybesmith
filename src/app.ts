import express from 'express';
import productRouter from './routers/products.routes';

const app = express();

app.use(express.json());

app.use('./products', productRouter);

export default app;