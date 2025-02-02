
export default function TopLeft() {
  return(
    <div className=" w-96" >
      {/* top card */}
      <div className="bg-white w-full mt-5 rounded p-5" >
        <h1
        className="font-bold text-xl border-b-2 border-zinc-300 pb-4"
        >Levels Chats in Gulf College</h1>
        <div className="flex flex-col gap-2" >
          <div 
            className="flex justify-between border-b-2 border-zinc-300 pb-3 mt-4
             hover:bg-zinc-100 p-2 rounded cursor-pointer
            " >
            <p className="font-bold font-Sour text-2xl" >level 3</p>
            <p>message ( 9 )</p>
          </div>
          <div className="flex justify-between border-b-2 border-zinc-300 pb-3 mt-4
          hover:bg-zinc-100 p-2 rounded cursor-pointer
          " >
            <p className="font-bold font-Sour text-2xl" >level 4</p>
            <p>message ( 2 )</p>
          </div>
          <div className="flex justify-between border-b-2 border-zinc-300 pb-3 mt-4
          hover:bg-zinc-100 p-2 rounded cursor-pointer
          " >
            <p className="font-bold font-Sour text-2xl" >level 5</p>
            <p>message ( 14 )</p>
          </div>
          <div className="flex justify-between border-b-2 border-zinc-300 pb-3 mt-4
          hover:bg-zinc-100 p-2 rounded cursor-pointer
          " >
            <p className="font-bold font-Sour text-2xl" >level 6</p>
            <p>message ( 1 )</p>
          </div>
        </div>
      </div>      
    </div>
  )
}