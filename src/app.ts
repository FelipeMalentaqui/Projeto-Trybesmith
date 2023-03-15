import express from 'express';
import productRouter from './routers/products.routes';
import loginRouter from './routers/login.routes';
import userRouter from './routers/user.routes';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/login', loginRouter);

export default app;
