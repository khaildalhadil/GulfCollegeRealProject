// import Users from '../models/Users';
import User from '../models/User.js';
import bcrypt from 'bcrypt';
import {token} from '../util/token.js';

export async function register(req, res, next) {

  try {
    const {userName, password, email} = req.body;

    const existingUser = await User.findOne({email});

    if (existingUser) return res.json({error: 'User already exist'});

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = new User({
      userName,
      password: hashedPassword,
      email,
    })

    await newUser.save();

    const tokenu = token({userId: newUser._id});
    
    newUser.password = undefined;
    newUser.email =  undefined;
    // newUser._id =  undefined;
    
    res.status(201).json({status: 'success', token: tokenu, data: newUser});

  } catch(err) {
    res.status(400).json({status: 'fill', message: err.message, allError: err});
  }
}

export async function login(req, res, next) {

  try {

    const {email, password} = req.body;
    const findUser = await User.findOne({email});

    if (!findUser) return res.status(400).json({status: 'fill', message: 'email Or Password are wrong'});

    const resturnPassword = await bcrypt.compare(password, findUser.password);
    if (!resturnPassword) return res.status(401).json({status: 'fill', message: 'email Or Password are wrong'});
    
    const tokenu = token({userId: findUser._id});
    findUser.password = undefined;
    res.status(200).json({status: 'success', token: tokenu, data: findUser});

  } catch(err) {
    res.status(401).json({status: 'fill', message: "unauthorized accuss"});
  }
}

