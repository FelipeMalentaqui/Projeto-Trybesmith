import express from 'express';

// import { create, getAll } from '../controllers/products.controller'; // podemos faser desta forma tambem, que ja pega direto a função que queremos
import loginController from '../controllers/login.controller';

const router = express.Router();

router.post('/', loginController.login);

export default router;