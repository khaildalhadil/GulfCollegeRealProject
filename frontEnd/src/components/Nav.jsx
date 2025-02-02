import {ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
// import Login from "./Login";
import { useMyContex } from '../../context/userInfo';
import WelcomeUser from './WelcomeUser';
import { Link } from 'react-router-dom';
import NavLoginOrRegister from './NavLoginOrRegister';

export default function Nav() {

  const {userInfo} = useMyContex();
  // console.log(userInfo.);
  return(
    <>
    <div>
      <ToastContainer className=" absolute mt-20 "/>
    </div>
    <div className="flex bg-[#f9fbfc] items-center justify-between px-6 p-4 border-b-2" >
      <Link to="/" >
        <h1
          className="text-3xl font-Sour text-gray-800"
        > 💔شات تعب قلبي </h1>
      </Link>
      {userInfo.userName ? <WelcomeUser/>: <NavLoginOrRegister />}
    </div>
  </>
  )
}