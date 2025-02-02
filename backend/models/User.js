import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    maxLength: 20,
  },
  password: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    maxLength: 100,
  },
  email: {
    type: String,
    required: [true, "You have an account !!"],
    unique: true,
  },
  imgUrl: {
    type: String,
    default: "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg",
  },
}, {
  timestamps: true,
})

const User = mongoose.model('Users', UserSchema);

export default User;