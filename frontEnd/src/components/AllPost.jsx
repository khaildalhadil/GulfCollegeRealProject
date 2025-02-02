import { useEffect } from "react";
import Nav from "./Nav";
import { useMyContex } from "../../context/userInfo.jsx";
import Post from "./Post.jsx";
import LeftSide from "./LeftSide.jsx";
import RightSide from "./RightSide.jsx";

export default function Singlepost() {
  // posts

  const {dispatch, posts} = useMyContex();

  useEffect(()=> {
    async function getPost() {

      const res = await fetch('http://127.0.0.1:8000/api/get-post');
      const {allPost} = await res.json();
      const reversedPost = [...allPost].reverse();
      dispatch({type: 'get/post', allPost: reversedPost})
      console.log(reversedPost)
    }
    getPost()
  }, [])
  // console.log()
  
  return(
    <>
      <Nav />
      {/* <NavTo */}
      <div className="flex justify-center gap-5 bg-[#f4f2ee]">
        
        <LeftSide />

        {/* content all posts */}
        <div className="h-screen rounded mt-5 flex flex-col gap-5">
          {/* {} */}
          {/* single post  */}
          {
            posts.length <=0 ? <h1
            className="border-b-2 w-[580px] h-96 bg-white text-center pt-20 font-bold text-4xl"
            >we don't have any post yet</h1> : posts.map((data, i) => <Post key={i} data={data} />)
          }
        </div>

        <RightSide />

      </div>
    </>
  )
}