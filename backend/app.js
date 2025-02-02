import express from "express";
const app = express();

import dotenv from "dotenv"
dotenv.config();
import cors from 'cors';

app.use(cors({
  origin: '*',
}));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // allow all domains
  res.setHeader('Access-Control-Allow-Methods', 'DELETE, POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
  
  next();
}); 

app.use(express.json());
app.use(express.static('public'));

import userRegister from './routers/userRegisterRouter.js';
app.use('/api/register', userRegister);

import userLogin from './routers/userLoginRouter.js';
app.use('/api/login', userLogin);

import {checkToken} from './util/token.js';

import messageRouter from './routers/messageRouter.js';
app.use('/api/message', checkToken, messageRouter);

import actionRouter  from './routers/actionRouter.js';
app.use('/api/create-post', checkToken, actionRouter)

import getAllPost  from './routers/allPostRouter.js';
app.use('/api/get-post', getAllPost)

export default app;
