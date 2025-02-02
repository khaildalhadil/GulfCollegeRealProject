import jwt from 'jsonwebtoken';

// it does't word 💥💥 
// const secretKey = process.env.SECRETKEY;
// console.log(process.env.SECRETKEY);

export const token = (payloadyBody)=> {
  const token = jwt.sign(payloadyBody, 'secretKey');
  return token;
}

export const checkToken = (req, res, next) => {
  try {
    // const token = req.header('Authorization')
    const {token} = req.body;
    const userToken = jwt.verify(token, 'secretKey')
    req.userId = userToken.userId;
    next();
  } catch(err) {
    res.status(401).json({staus: 'fill', message: err.message});
  }
}

// export default paylowd;