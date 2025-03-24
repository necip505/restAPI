import express from 'express';

import { getAllUsers } from '../controllers/users';
import { isAtuhenticated } from '../middlewares';
const router = express.Router();
router.get('/users',isAtuhenticated,getAllUsers);

export default router;