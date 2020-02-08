import express from 'express';
import User from '../controllers/user';
import { isUserExist } from '../middleware/user';

const router = express.Router();

router.post('/signup', isUserExist, User.signup);

export default router;
