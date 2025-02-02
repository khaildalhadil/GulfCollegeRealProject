import mongoose from "mongoose";

const postSchima = new mongoose.Schema({
  authorId: {
    type: Object,
  },
  authorName: {
    type: String,
  },
  imgUrl: {
    type: String
  },
  bodyContent: {
    type: String,
    require: [true, 'you should add body Content...']
  },
  createDate: {
    type: Date,
    default: Date.now(),
  }
},
)

export default mongoose.model('Post', postSchima);