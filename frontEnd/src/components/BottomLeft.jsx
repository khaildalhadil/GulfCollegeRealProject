

export default function BottomLeft() {
  return(
    <div className=" w-96" >
      {/* top card */}
      <div className="bg-white w-full mt-5 rounded p-5" >
        <h1
        className="font-bold text-xl border-b-2 border-zinc-300 pb-4 text-end"
        >سكنات قريبه الكلية</h1>
        <div className="flex flex-col gap-2" >
          <div 
            className="flex justify-between border-b-2 border-zinc-300 pb-3 mt-4
             hover:bg-zinc-100 p-2 rounded cursor-pointer items-center
            " >
            <img 
            className="h-11 w-11 rounded-full"
            src="./hotelimg/hotel1.png" alt="hotel" />
            <p
            className="font-bold"
            >سكن الاميرات</p>
          </div>
          <div 
            className="flex justify-between border-b-2 border-zinc-300 pb-3 mt-4
             hover:bg-zinc-100 p-2 rounded cursor-pointer items-center
            " >
            <img 
            className="h-11 w-11 rounded-full"
            src="./hotelimg/hotel2.png" alt="hotel" />
            <p
            className="font-bold"
            >سكن رام الخليج</p>
          </div>
          <div 
            className="flex justify-between border-b-2 border-zinc-300 pb-3 mt-4
             hover:bg-zinc-100 p-2 rounded cursor-pointer items-center
            " >
            <img 
            className="h-11 w-11 rounded-full"
            src="./hotelimg/hotel3.png" alt="hotel" />
            <p
            className="font-bold"
            >سكن المروج للطالبات</p>
          </div>
          <div 
            className="flex justify-between border-b-2 border-zinc-300 pb-3 mt-4
             hover:bg-zinc-100 p-2 rounded cursor-pointer items-center
            " >
            <img 
            className="h-11 w-11 rounded-full"
            src="./hotelimg/hotel4.png" alt="hotel" />
            <p
            className="font-bold"
            >سكن عثمان</p>
          </div>

        </div>
      </div>      
    </div>
  )
}