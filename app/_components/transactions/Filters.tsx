import ReportModal from "./ReportModal";


export default function Filters() {

  return (
    <div className="bg-[#EEECE8] rounded-md p-6 ">

      <h3 className="font-semibold mb-4 lufga_medium text-[18px]">Filters</h3>

      <div className="flex gap-6 items-center flex-wrap">

        <div className="text-[14px] border-r-1 min-w-[220px]">
          <div>

            <span className="text-gray-500 lufga_regular">From Date:</span>
            <span className="ml-2 sf_pro_regular">06/12/2024</span>
          </div>
          <div>
            <span className="text-gray-500 lufga_regular">To Date:</span>
            <span className="ml-2 sf_pro_regular">06/12/2024</span>
          </div>

        </div>

        <div className="text-sm border-r-1 min-w-[220px]">
          <div>

            <span className="text-gray-500 lufga_regular">Sender Location:</span>
            <span className="ml-2 sf_pro_regular">All</span>
          </div>
          <div>
            <span className="text-gray-500 lufga_regular">State:</span>
            <span className="ml-2 sf_pro_regular">All</span>
          </div>
        </div>

        <div className="text-sm  min-w-[18 0px]">
          <span className="text-gray-500">Date Type:</span>
          <span className="ml-2">Created Date</span>
        </div>

        <ReportModal />


      </div>

    </div>
  )
}