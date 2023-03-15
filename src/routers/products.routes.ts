import express from 'express';

// import { create, getAll } from '../controllers/products.controller'; // podemos faser desta forma tambem, que ja pega direto a função que queremos
import * as productController from '../controllers/products.controller';

const router = express.Router();

router.put('/', productController.create);
router.get('/', productController.getAll);

export default router;