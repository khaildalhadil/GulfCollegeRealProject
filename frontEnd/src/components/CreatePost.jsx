import Nav from "./Nav";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useMyContex } from "../../context/userInfo";
// import Linkify from "linkify-react";


export default function CreatePost() {

  // const navigate = useNavigate();
  const{dispatch, posts, userInfo} = useMyContex();
  let notifyError = (errorMessage) => toast.error(errorMessage);
  let notifyseccuss = (successMessage) => toast.success(successMessage);

  const [bodyContent, setBodyContent] = useState("");

  async function handelAddPost() {
    if (setBodyContent == '') {
      notifyError('you should write something..')
      return
    }
    
    const token = localStorage.getItem('token');

    try {
      const res = await axios.post("http://127.0.0.1:8000/api/create-post", {
        bodyContent,
        token
      });

      const data = res.data;
      // console.log();
      notifyseccuss('post added successfully')
      dispatch({type: 'close/post'})
      
      const newPostAdded = [data.newPost, ...posts]
      console.log(newPostAdded);
      dispatch({type: 'get/post', allPost: newPostAdded})

    } catch(err) {

      console.log(err.response);
      notifyError('Plase login again...')

    }
  }

  // <Linkify>

  // </Linkify>

  return(
    <div className="w-1/3 bg-white absolute z-10 top-1/3 right-1/2 translate-x-1/2 -translate-y-1/2 
    rounded pb-5
    ">
      <div className="flex justify-between p-3 border-b-slate-400 border" >
        <div></div>
        <p className="font-bold font-mono">Create Post</p>
        <button 
        onClick={()=> dispatch({type: 'close/post'})}
        className="font-bold hover:bg-slate-200 px-2 rounded-full cursor-pointer">X</button>
      </div>
      <div>
        <div className="w-4/5 m-auto mt-10">
          <div className="flex items-center gap-3 " >

            <img 
            className="h-12 w-12 rounded-full"
            src={userInfo.imgUrl} alt="" />
            <p className="font-bold text-lg" >{userInfo.userName}</p>

          </div>

          <textarea 
            placeholder="What do you want to talk about? "
            className=" w-full h-28 mt-6 outline-none text-2xl font-Sour "
            value={bodyContent}
            onChange={(e) => setBodyContent(e.target.value)}
            type="text" />
          
          <button 
            onClick={handelAddPost}
            className="bg-indigo-600 px-4 py-1 rounded-full font-mono text-white "  >
            post
          </button>

        </div>
      </div>
    </div>
  )
}