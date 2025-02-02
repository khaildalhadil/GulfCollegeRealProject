import { MyProviderContext } from "../context/userInfo";
import CreatePost from "./components/CreatePost";
// import Singlepost from "./components/Singlepost";
import Chat from "./pages/Chat";
import Home from "./pages/Home";
import Login from "./pages/OldLogin";
import Register from "./pages/OldRegister";
import AllPost from "./components/AllPost";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

export default function App() {

  return(
    <>
    <MyProviderContext >
      <BrowserRouter>
        <Routes>
          <Route path="/login-register" element={<Home />} />
          {/* <Route path="/chat" element={<Chat />} /> */}
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/" element={<AllPost />} />
          <Route path="*" element={<h1>Page Not found 404</h1>} />
        </Routes>
      </BrowserRouter>
    </MyProviderContext>
    </>
  )
}
      // <div className="h-screen w-screen bg-[url('/peakpx.jpg')]  bg-cover relative">
      //   {/* <Login /> */}
      //   {/* <Register /> */}
      // </div>
// 