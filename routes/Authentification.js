import express from 'express';
const router = express.Router();
//middlewares
import { requireSignin, isAdmin } from '../middlewares/auth.js';
//controllers
import { login, register, secret } from '../controllers/Auth.js';
router.post('/register', register)
router.post("/login", login);
//testing et on use le middleware pour verifier le token
router.get('/secret', requireSignin, isAdmin, secret)

export default router;