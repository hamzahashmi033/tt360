export default function Pagination(){

 return(

 <div className="flex justify-center items-center gap-3 p-6">

  <button>{"<"}</button>

  {[1,2,3,4,5,6,7,8,9].map(n=>(
    <button
     key={n}
     className={`w-8 h-8 rounded-full ${
      n===1 ? "bg-primary text-white":""
     }`}
    >
      {n}
    </button>
  ))}

  <button>{">"}</button>

 </div>

 )
}