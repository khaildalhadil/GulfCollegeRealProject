import express from 'express';
const router = express.Router();

import {message} from '../controllers/messageController.js';

router
  .route('/')
  .post(message)

export default router;
