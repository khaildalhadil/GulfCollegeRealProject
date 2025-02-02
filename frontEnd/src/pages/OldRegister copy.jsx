import { useState } from "react";
import {toast, ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';


export default function Register() {
  // toast.con

  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })
  // let errorMessage = 'Invlid input...';
  let notifyError = (errorMessage) => toast.error(errorMessage);
  let notifyseccuss = (successMessage) => toast.success(successMessage);


  async function handleSendDataToDataBase() {
    // e.privateDefault();
    if (
      firstNameIsInValid || userData.firstName == '' ||
      emailIsValid || userData.email == '' ||
      passwordIsValid || userData.password == '')
      return notifyError('Invlid input...')

    
    const res = await axios.post("http://127.0.0.1:8000/api/register", userData);
    const data = await res.data;
    if (data.error) {
      notifyError(data.error);
      return;
    }
    notifyseccuss('reigser successfully')
    console.log(data);
  }

  // let nameBlure = false;
  let firstNameIsInValid = userData.firstName != '' && userData.firstName.length <= 2;
  let emailIsValid = userData.email != '' && !userData.email.includes('@');
  let passwordIsValid = userData.password != '' && userData.password.length < 8;

  return(
    <>
    <div className="h-full w-full bg-slate-600 opacity-70 relative" >
      <div className="absolute top-0 left-0">
        <ToastContainer />
      </div>
    </div>
    <div className="h-1/2 flex flex-col absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 ">
      <div className="p-10 bg-white text-white bg-opacity-15 " >
        <h1
        className="text-center text-5xl font-Sour"
        >اضافه حساب<br /> في شات تعب قلبي</h1>
      </div>
      <div className=" bg-white bg-opacity-85 text-slate-700" >
        <h2 className="text-center pt-3 text-2xl">USER REGISTER</h2>
        <div className="p-10 pt-5 flex flex-col gap-5"  >
          <div className="flex items-center gap-4 relative" >
            <i 
              className="fa-solid fa-user text-zinc-500 bg-white p-3 rounded-full"
              ></i>
            <input 
              name="firstName"
              value={userData.firstName}
              onChange={(e) => setUserData({...userData, firstName: e.target.value})}
              type="text" 
              // onBlur={() => nameBlure = true}
              placeholder="First Name"
              className={`w-72 h-10 rounded-full p-2 outline-none text-zinc-500 border 
                ${ firstNameIsInValid && 'border-red-400 border-2 text-red-500'} `}
              />
          </div>
          <div className="flex items-center gap-4" >
          <i 
          className="fa-solid fa-user text-zinc-500 bg-white p-3 rounded-full"
          ></i>
          <input 
            name="lastName"
            value={userData.lastName}
            onChange={(e) => setUserData({...userData, lastName: e.target.value})}
            type="text" 
            placeholder="Last Name"
            className="w-72 h-10 rounded-full p-2 outline-none border text-zinc-500" 
            />
          </div>
          <div className="flex items-center gap-4" >
            <i className="fa-solid fa-envelope text-zinc-500 bg-white p-3 rounded-full"></i>
            <input 
              name="email"
              value={userData.email}
              onChange={(e) => setUserData({...userData, email: e.target.value})}
              type="text" 
              placeholder="email"
              className={`w-72 h-10 rounded-full p-2 outline-none text-zinc-500
                ${emailIsValid && 'border-red-400 border-2 text-red-500'}`}
              />
          </div>
          <div className="flex items-center gap-4">
            <i 
            className="fa-solid fa-lock text-zinc-500 bg-white p-3 rounded-full"
            ></i>
            <input
            name="password"
            value={userData.password}
            onChange={(e) => setUserData({...userData, password: e.target.value})}
            placeholder="Password"
            className={`w-72 h-10 rounded-full p-2 outline-none 
              ${passwordIsValid && 'border-red-400 border-2 text-red-500'}`} 
            type="password" />
          </div>
          <div>
            <p
            className="text-center"
            >Click 
              <span
              className="px-1 font-bold"
              > Login </span>
              if you have account</p>
          </div>
          <div>
            <button
            className="px-5 py-3 block bg-indigo-500 font-bold text-white rounded-full m-auto w-full"
            onClick={(e) => handleSendDataToDataBase(e)}>Register</button>
          </div>
          
        </div>
      </div>
    </div>
  </>
  )
}