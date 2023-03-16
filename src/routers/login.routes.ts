import express from 'express';
import validateLogin from '../middlewares/validateLogin';

// import { create, getAll } from '../controllers/products.controller'; // podemos faser desta forma tambem, que ja pega direto a função que queremos
import loginController from '../controllers/login.controller';

const router = express.Router();

router.post('/', validateLogin, loginController.login);

export default router;