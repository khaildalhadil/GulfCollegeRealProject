import { Link } from "react-router-dom";
import { useMyContex } from "../../context/userInfo";
import { useState } from "react";
import CreatePost from "./CreatePost";

export default function WelcomeUser() {

  const {userInfo, dispatch, postOpen} = useMyContex();
  const [showDetails, setShowDetails] = useState(true);
  const profileImg = localStorage.getItem('imgUrl');

  function handleSendLogOut() {
    localStorage.removeItem('id')
    localStorage.removeItem('imgUrl')
    localStorage.removeItem('token')
    localStorage.removeItem('userName')
    dispatch({type: 'remove/user'})
  }

  return(
    <>
    {
      postOpen && <div 
      onClick={()=> dispatch({type: 'close/post'})}
      className="w-screen top-0 right-0 h-screen bg-slate-700 absolute bg-opacity-55"></div>}

      {postOpen && <CreatePost />}

    <div className="relative" >
      <input
      placeholder="search"
      className="py-2 w-96 border border-gray-400 rounded-full outline-none p-2 text-xl pl-10" 
      type="text" />
      <i className="fa-solid fa-magnifying-glass absolute left-3 top-4 text-gray-500"></i>
    </div>
    <div className="flex text-white items-center gap-4 ">
      <button 
        
        onClick={()=> dispatch({type: 'open/post'})}
        className="bg-indigo-600 px-2 py-1 rounded-full font-mono " >+ Create</button>
        <i className="fa-regular fa-comment-dots
        border p-2 rounded-full text-gray-800 border-gray-400"></i>
        <i className="fa-regular fa-bell
        border p-2 rounded-full text-gray-800 border-gray-400"></i>
        <div className="relative">
          <img 
            className="h-10 rounded-full w-10 object-cover cursor-pointer"
            src={userInfo.imgUrl} alt={"Parson Image"} 
            onClick={() => setShowDetails((show) => !show )}
            />
          {!showDetails && <div className="absolute w-60  bg-white  top-14 ml-4 right-0 shadow-md" > 
          <div className="flex items-center justify-between px-4 py-2 border-b-2 border-zinc-300 border hover:bg-zinc-100 cursor-pointer" > 
            <img 
            className="h-10 rounded-full"
            src={profileImg} alt="" />
            <p className="text-zinc-800 font-bold">{userInfo.userName}</p> 
          </div>
          <div 
          className=" px-4 py-2 border-b-2 border-zinc-300 bg-red-500 cursor-pointer hover:bg-red-600"
          onClick={handleSendLogOut}
          > 
            <p className="font-bold text-center text-white">Log Out</p> 
          </div>
        </div>}
        </div>
    </div>
  </>
  )
}
{/* <button>
  <i className="fa-solid fa-magnifying-glass" ></i>
</button>
<button>
  <i className="fa-brands fa-rocketchat" ></i>
</button>

<button 
  onClick={()=>dispatch({type: 'logout/user'})}
  className="bg-red-600 p-2 rounded font-mono text-xl " 
  >Log Out</button> */}
{/* <p>Welcome {userInfo.userName} </p> */}