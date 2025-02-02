import express from 'express';
const router = express.Router();

import {login} from '../controllers/userControllers.js'

router
  .route('/')
  .post(login)
  

export default router;
