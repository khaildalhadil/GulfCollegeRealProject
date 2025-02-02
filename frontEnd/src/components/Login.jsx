import { useState } from "react"
import {toast} from 'react-toastify';
import axios from 'axios';
import { useMyContex } from "../../context/userInfo";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const {dispatch} = useMyContex();

  const [userData, setUserData] = useState({
    email: '',
    password: ''
  })

  let notifyError = (errorMessage) => toast.error(errorMessage);
  let notifyseccuss = (successMessage) => toast.success(successMessage);

    async function handleSendDataToDataBase() {
      // e.privateDefault();
      if ( emailIsValid || userData.email == '' || passwordIsValid || userData.password == '')
        return notifyError('Invlid email or password')
      
      try {
        const res = await axios.post("http://127.0.0.1:8000/api/login", userData);
        const data = await res.data;
        
        dispatch({type: 'add/user', userInfo: data});
        notifyseccuss("Login seccussfully");
        
        navigate('/')
      } catch(err) {
        notifyError('Invlid email or password')
        console.log(err.message, err);
      }
    }

  let emailIsValid = userData.email != '' && !userData.email.includes('@');
  let passwordIsValid = userData.password != '' && userData.password.length < 8;

  return(
  <div className="flex gap-5" >
    <div className="flex items-center gap-4" >
      <i className="fa-solid fa-envelope text-zinc-500 border-zinc-400 border bg-white p-3 rounded-full"></i>
      <input 
        name="email"
        value={userData.email}
        onChange={(e) => setUserData({...userData, email: e.target.value})}
        type="text" 
        placeholder="email"
        className={`w-60 h-10 text-lg rounded p-2 outline-none border-zinc-400 border
          ${emailIsValid && 'border-red-400 border-2 text-red-500'}`}
        />
    </div>
    <div className="flex items-center gap-4">
      <i 
      className="fa-solid fa-lock border-zinc-400 border text-zinc-500 bg-white p-3 rounded-full"
      ></i>
      <input
      name="password"
      value={userData.password}
      onChange={(e) => setUserData({...userData, password: e.target.value})}
      placeholder="Password"
      className={`w-60 h-10 rounded text-lg p-2 outline-none border-zinc-400 border
        ${passwordIsValid && 'border-red-400 border-2 text-red-500'}`} 
        type="password" />
    </div>
    <div>
        <button
        className="px-5 py-3 block bg-green-600 font-bold text-white rounded m-auto w-full"
        onClick={handleSendDataToDataBase}
        >Login</button>
      </div>
  </div>
  )
}