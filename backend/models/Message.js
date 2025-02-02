import mongoose from "mongoose";

const MesageSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  seen: {
    type: Boolean,
    default: false,
  },
  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  receiverId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
}, {
  timestamps: true,
})

const Messages = mongoose.model('Message', MesageSchema);

export default Messages;