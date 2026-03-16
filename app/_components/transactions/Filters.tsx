import ReportModal from "./ReportModal";


export default function Filters() {

  return (
    <div className="bg-[#EEECE8] rounded-md p-6 ">

      <h3 className="font-semibold mb-4 lufga_medium text-[18px] text-[#222222]">Filters</h3>

      <div className="flex gap-6  flex-wrap"> 

        <div className="text-[14px] border-r-1 border-[#D8D8D8] min-w-[200px]">
          <div>

            <span className="text-[#222222] lufga_medium text-[14px] ">From Date:</span>
            <span className="text-[#222222] ml-2 sf_pro_regular text-[14px] ">06/12/2024</span>
          </div>
          <div>
            <span className="text-[#222222] lufga_medium text-[14px] ">To Date:</span>
            <span className="text-[#222222] ml-2 sf_pro_regular text-[14px] ">06/12/2024</span>
          </div>

        </div>

        <div className="text-sm border-r-1 border-[#D8D8D8] min-w-[200px]">
          <div>

            <span className="text-[#222222] lufga_medium text-[14px]">Sender Location:</span>
            <span className="text-[#222222] ml-2 sf_pro_regular text-[14px]">All</span>
          </div>
          <div>
            <span className="text-[#222222] lufga_medium text-[14px]">State:</span>
            <span className="text-[#222222] ml-2 sf_pro_regular text-[14px]">All</span>
          </div>
        </div>

        <div className="text-sm  min-w-[180px]">
          <span className="text-[#222222] lufga_medium text-[14px]">Date Type:</span>
          <span className="text-[#222222] ml-2 sf_pro_regular text-[14px]">Created Date</span>
        </div>

        <ReportModal />


      </div>

    </div>
  )
}