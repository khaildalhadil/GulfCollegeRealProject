import {useState} from 'react';
import {toast, ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';

export default function Login() {
  
    const [userData, setUserData] = useState({
      email: '',
      password: ''
    })
    // let errorMessage = 'Invlid input...';
    let notifyError = (errorMessage) => toast.error(errorMessage);
    let notifyseccuss = (successMessage) => toast.success(successMessage);

    async function handleSendDataToDataBase() {
      // e.privateDefault();
      if ( emailIsValid || userData.email == '' || passwordIsValid || userData.password == '')
        return notifyError('Invlid email or password')
      
      try {
        const res = await axios.post("http://127.0.0.1:8000/api/login", userData);
        console.log(res.data);
        notifyseccuss("Login seccussfully");
      } catch(err) {
        notifyError('Invlid email or password')
        console.log(err.message, err);
      }
    }
  
    // let nameBlure = false;
    let emailIsValid = userData.email != '' && !userData.email.includes('@');
    let passwordIsValid = userData.password != '' && userData.password.length < 8;

  return(
    <>
    <div className="h-full w-full bg-slate-600 opacity-70" >
      <div className="absolute top-0 left-0">
        <ToastContainer />
      </div>
    </div>
    <div className="h-1/2 flex flex-col absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 ">
      <div className="p-10 bg-white text-white bg-opacity-15 " >
        <h1
        className="text-center text-5xl font-Sour"
        >تسجيل الدخول <br /> في شات تعب قلبي</h1>
      </div>
      <div className=" bg-white bg-opacity-85 text-slate-700" >
        <h2 className="text-center pt-3 text-2xl">USER LOGIN</h2>
        <div className="p-10 pt-5 flex flex-col gap-4"  >
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
              > register </span>
              if you don't have account</p>
          </div>
          <div>
            <button
            className="px-5 py-3 block bg-indigo-500 font-bold text-white rounded-full m-auto w-full"
            onClick={handleSendDataToDataBase}
            >Login</button>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}