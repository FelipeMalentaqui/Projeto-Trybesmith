import express from 'express';

import { create, getAll } from '../controllers/products.controller'; // podemos fazer desta forma tambem, que ja pega direto a função que queremos
// import * as productController from '../controllers/products.controller';

const router = express.Router();

router.post('/', create);
router.get('/', getAll);

export default router;