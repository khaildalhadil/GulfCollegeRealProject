
export default function Post({data}) {

  // console.log(data);
  const {authorName, bodyContent, createDate, imgUrl, _id, authorId} = data;

  const userIdFromLocleData = localStorage.getItem('id')
  // 1 currect
  // console.log(authorId, userIdFromLocleData)

  const newDate = createDate.split('T');

  return(
  <div id={_id}
    className="border-b-2 w-[580px] bg-white px-4 py-5 rounded">
    <div className="flex justify-between items-center" >
      <div className="flex gap-5 items-center" >
        <img
        className="h-14 w-14 rounded-full object-cover"
        src={imgUrl} alt="" />
        <p
        className="font-bold text-xl font-mono"
        >{authorName}</p>
        <p>{newDate[0]}</p>
      </div>
      <div>
      {/* authorId, userIdFromLocleData */}
        {/* if it is me it will 3 dotes */}
        {authorId == userIdFromLocleData ? 
        <div className=" hover:bg-slate-100 w-7 rounded-full flex justify-center items-center h-7 cursor-pointer" >
          <i className="fa-solid fa-ellipsis-vertical "></i>
        </div>
        :
        <button
        className="bg-indigo-600 text-white px-2 py-1 rounded-full font-mono"
        >+ follow </button>
      }
      </div>
    </div>
    <div>
      <p
      className="font-Sour text-2xl px-2 mt-5 mb-10"
      >{bodyContent}</p>
    </div>
    <div className=" flex items-center gap-4 border-t-2 justify-between" >
      <div className="flex  items-center gap-5 text-xl mt-3" >
        <div className="flex   px-2 py-1 items-center gap-2 rounded-full" >
          <button>
            <i className="fa-regular rounded-full fa-thumbs-up"></i>
          </button>
          <p>4</p>
        </div>
        <div className="flex   px-2 py-1 items-center gap-2 rounded-full" >
          <button>
            <i className="fa-regular rounded-full fa-thumbs-down"></i>
          </button>
          <p>2</p>
        </div>
        <div className="flex   px-2 py-1 items-center gap-2 rounded-full" >
          <button>
            <i className="fa-regular  rounded-full fa-comment"></i>
          </button>
          <p>10</p>
        </div>
      </div>
      <button className=" flex items-center gap-2  px-2 mt-3 rounded-full">
        <p>share</p>
        <i className="fa-regular fa-share-from-square"></i>
      </button>
    </div>
  </div>
  )
}