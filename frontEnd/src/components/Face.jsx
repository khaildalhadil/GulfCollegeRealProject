// import face from '../../../face/face-with-form/myface/main'

export default function Face() {
  return(
    <div className="flex-1" > 
      <h1
      className=" text-center text-6xl font-Sour"> شات تعب قلبي </h1>
      <p
      className=" text-end mt-5 text-3xl font-Sour"
      >
        صنع الموقع لغرض التعليم و التطبيق على الي تعلمته فكره الموقع مشابهه لفكره وتساب دردشه بين  
        
        الاشاخص مكونات الموقع 

      </p>
      <div className="flex flex-col gap-3 mt-3">
        <span
        className="block bg-green-700 w-fit m-auto px-2 rounded text-white"
        >React</span>
        <span
        className="block bg-blue-700 w-fit m-auto px-2 rounded text-white"
        >Node</span>
        <span
        className="block bg-red-700 w-fit m-auto px-2 rounded text-white"
        >mongoose</span>
        <span
        className="block bg-orange-600 w-fit m-auto px-2 rounded text-white"
        >Express</span>
        <span
        className="block bg-gray-800 w-fit m-auto px-2 rounded text-white"
        >Tailwind</span>

      </div>
    </div>
  )
}