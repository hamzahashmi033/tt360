

export default function Filters(){

  return(
    <div className="bg-white rounded-md p-6 border border-[#EEECE8]">

      <h3 className="font-semibold mb-4">Filters</h3>

      <div className="flex gap-6 items-center flex-wrap">

        <div className="text-sm">
          <span className="text-gray-500">From Date:</span>
          <span className="ml-2">06/12/2024</span>
        </div>

        <div className="text-sm">
          <span className="text-gray-500">Sender Location:</span>
          <span className="ml-2">All</span>
        </div>

        <div className="text-sm">
          <span className="text-gray-500">Date Type:</span>
          <span className="ml-2">Created Date</span>
        </div>

        <button className="border px-4 py-2 rounded-md text-sm">
          Filter
        </button>

      </div>

    </div>
  )
}