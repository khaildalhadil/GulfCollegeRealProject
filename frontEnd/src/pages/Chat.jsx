import { useMyContex } from "../../context/userInfo";

export default function Chat() {

  const {userInfo, token} = useMyContex();
  // console.log(userInfo, token)

  return(
    <div className="m-auto w-screen" >
      <p className="text-center mt-10 text-5xl font-bold" >
        Welcome {userInfo.userName}
      </p>
    </div>
  )
}