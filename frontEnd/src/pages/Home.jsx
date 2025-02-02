import { useEffect, useState } from 'react';
import { useMyContex } from '../../context/userInfo.jsx';
import Face from '../components/Face.jsx';
import Nav from '../components/Nav.jsx';
import SideBarSinUp from '../components/sideBarSinUp.jsx';
import SignUp from '../components/SignUp.jsx';
import Chat from './Chat.jsx';
import Login from '../components/Login.jsx';
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
import WelcomeUser from '../components/WelcomeUser.jsx';

export default function Home() {

  const {userInfo, dispatch} = useMyContex();
  
  
  // if (token && userName && imgUrl) {
  //   // dispatch({type: 'add/user', userInfo: {data: {token, userName, imgUrl}}})
  // }

  return(
    <div className='bg-zinc-100 h-screen' >
      <div>
      <ToastContainer className=" absolute mt-20 "/>
    </div>
    <div className="flex bg-[#f9fbfc] items-center justify-between px-6 p-4 border-b-2" >
      <Link to="/" >
        <h1
          className="text-3xl font-Sour text-gray-800"
        > 💔شات تعب قلبي </h1>
      </Link>
      <Login />
    </div>
      <SignUp />
    </div>
  )
}