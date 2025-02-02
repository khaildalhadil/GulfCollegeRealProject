import Messages from '../models/Message.js';
import User from '../models/User.js';

export async function message(req, res) {
  try{
    const targetIdSender = await User.findOne({_id: req.userId})
    const targetIdReceiver = await User.findOne({_id: "674598a6ed22f993871d8f84"})
  
    const {content} = req.body;
  
    const messgea = new Messages({
      content,
      senderId: targetIdSender,
      receiverId: targetIdReceiver,
    })
  
    await messgea.save();

    res.status(200).json(
      {status: 'success', message: messgea}
    )
  } catch(err) {
    res.status(401).json({status: 'fill', message: err.message});
  }

  // senderId
}
