import { useState } from "react";
import {toast, ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import { useMyContex } from "../../context/userInfo";
import {useNavigate} from 'react-router-dom'

export default function SideBarSinUp() {

  const navigate = useNavigate();

  const {dispatch} = useMyContex();

  const [userData, setUserData] = useState({
    userName: '',
    email: '',
    password: ''
  })
  // let errorMessage = 'Invlid input...';
  let notifyError = (errorMessage) => toast.error(errorMessage);
  let notifyseccuss = (successMessage) => toast.success(successMessage);


  async function handleSendDataToDataBase(e) {
    e.preventDefault();
    if (
      userNameIsInValid || userData.userName == '' ||
      emailIsValid || userData.email == '' ||
      passwordIsValid || userData.password == '')
      return notifyError('Invlid input...')

    try {
      const res = await axios.post("http://127.0.0.1:8000/api/register", userData);
      const data = await res.data;
      console.log(data);
      if (data.error) throw new Error(data.error);
      dispatch({type: 'add/user', userInfo: data});
      notifyseccuss('reigser successfully');
      navigate('/');
    } catch(err) {
      notifyError(err.message);
      console.log(err, err.message)
    }
  }
  
  // let nameBlure = false;
  let userNameIsInValid = userData.userName != '' && userData.userName.length <= 2;
  let emailIsValid = userData.email != '' && !userData.email.includes('@');
  let passwordIsValid = userData.password != '' && userData.password.length < 8;
  
  return(
    <>
    <div>
      <ToastContainer  className=" absolute mt-20 "/>
    </div>
    {/* userName */}
    <form className="flex flex-col gap-6 flex-1 " > 
      <div className="flex items-center gap-4 relative flex-col" >
        <p
        className="w-full text-zinc-500 text-2xl"
        htmlFor="">User Name</p>
        <div className="w-full relative" >
          <i 
            className="fa-solid fa-user text-zinc-500 text-2xl absolute left-3 top-3 "
            ></i>
          <input 
            name="userName"
            value={userData.userName}
            onChange={(e) => setUserData({...userData, userName: e.target.value})}
            type="text" 
            className={`h-14 rounded pl-10 text-2xl outline-none text-zinc-500 border w-4/5
              ${ userNameIsInValid && 'border-red-400 border-2 text-red-500'} `}
              />
        </div>
      </div>
      <div className="flex items-center gap-4 flex-col " >
      <p
        className="w-full text-zinc-500 text-2xl"
        htmlFor="">Email</p>
        <div className="w-full relative">
          <i className="fa-solid fa-envelope text-zinc-500 rounded-full text-2xl absolute left-3 top-3 "></i>
          <input 
            name="email"
            value={userData.email}
            onChange={(e) => setUserData({...userData, email: e.target.value})}
            type="text" 
            className={` h-14 rounded p-2 pl-10 outline-none text-2xl text-zinc-500 border w-4/5
              ${emailIsValid && 'border-red-400 border-2 text-red-500'}`}
            />
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
      <p
        className="w-full text-zinc-500 text-2xl"
        htmlFor="">Password</p>
        <div className="w-full relative" >
          <i 
          className="fa-solid fa-lock text-zinc-500 rounded text-2xl absolute left-3 top-3 "
          ></i>
          <input
          name="password"
          value={userData.password}
          onChange={(e) => setUserData({...userData, password: e.target.value})}
          // placeholder="Password"
          className={` h-14 rounded p-2 pl-10 outline-none text-2xl text-zinc-500 border w-4/5
            ${passwordIsValid && 'border-red-400 border-2 text-red-500'}`} 
            type="password" />
        </div>
      </div>
      <div>
      <button
        // type="button"
        className="px-5 py-3 block bg-green-500 font-bold text-white rounded mt-10 w-4/5 "
        onClick={(e) => handleSendDataToDataBase(e)}>اضافه حساب</button>
      </div>
    </form>
    </>
  )
}