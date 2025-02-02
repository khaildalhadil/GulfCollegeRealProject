import { Link } from "react-router-dom"

export default function NavLoginOrRegister() {
  return(
    <div  className="flex gap-4 items-center" >
      <Link to="/login-register" >
        <p
        className="px-4 py-2 bg-red-500 rounded font-bold text-white cursor-pointer"
        >to create post login or register first</p>
      </Link>
      <div>
        <Link to="/login-register" >
          <button
            className="px-4 py-2 bg-blue-500 rounded font-bold text-white cursor-pointer"
            >Login
          </button>
        </Link>
      </div>
      <div>
      <Link to="/login-register" >
        <button
          className="px-4 py-2 bg-green-600 rounded font-bold text-white cursor-pointer"
        >Register</button>
      </Link>
      </div>
    </div>
  )
}