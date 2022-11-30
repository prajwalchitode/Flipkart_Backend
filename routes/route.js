

import express from 'express';
import { userSignup , userLogIn } from '../controller/userController.js';
import { getProducts , getProductById} from '../controller/product-controller.js';
import { addPaymentGateway } from '../controller/payment_controller.js';
const router = express.Router();

router.post('/signup', userSignup);
router.post('/login', userLogIn);
router.get('/products', getProducts)
router.get('/product/:id', getProductById)

router.post('/payment', addPaymentGateway)

export default router;