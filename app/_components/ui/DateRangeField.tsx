import DatePicker from "react-datepicker";

interface DateRangeFieldProps {
  startDate: Date | null;
  endDate: Date | null;
  setDateRange: (date: [Date | null, Date | null]) => void;
}

export default function DateRangeField({
  startDate,
  endDate,
  setDateRange,
}: DateRangeFieldProps) {
  return (
    <div>
      <label className="block mb-2 text-[15px] text-[#222222] lufga_medium">
        Date Range
      </label>

      <div className="relative w-full">
        <DatePicker
          selectsRange
          startDate={startDate}
          endDate={endDate}
          onChange={(update) =>
            setDateRange(update as [Date | null, Date | null])
          }
          placeholderText="Select"
          className="w-full border-1 border-[#CCCCCC] p-3 pr-14 rounded-[4px] text-[15px] text-[#888888] bg-white appearance-none sf_pro_regular "
          wrapperClassName="w-full"
        />

        <div className="absolute right-0 top-0 h-full flex items-center px-3 border-l border-gray-300 pointer-events-none z-10">
          <img src="/images/calender.png" alt="calendar" className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}