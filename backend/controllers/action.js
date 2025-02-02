import Post from "../models/post.js";
import User from '../models/User.js';

export async function createPost(req, res, next) {
  
  try {
    
    const {bodyContent} = req.body;
    const userId = req.userId;
    const {userName, imgUrl} = await User.findById({_id: userId})

    const newPost = await Post.create({
      bodyContent,
      authorId: userId,
      authorName: userName,
      imgUrl
    })

    await newPost.save();
    res.status(200).json({status: 'success', message: 'post added seccess', newPost})

  } catch(err) {
    res.json({status:'fall', message: err.message, allMessage: err})
  }
}

export async function getAllPost(req, res, next) {

  try {
    
    const allPost = await Post.find();
    res.status(200).json({status: 'success', allPost})

  } catch(err) {
    res.status(500).json({status: 'full', message: err.message, allError: err})
  }
}