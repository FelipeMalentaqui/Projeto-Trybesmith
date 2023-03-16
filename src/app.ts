import express from 'express';
import productRouter from './routers/products.routes';
import loginRouter from './routers/login.routes';
import userRouter from './routers/user.routes';
import ordersRouter from './routers/orders.routes';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/login', loginRouter);
app.use('/orders', ordersRouter);

export default app;
