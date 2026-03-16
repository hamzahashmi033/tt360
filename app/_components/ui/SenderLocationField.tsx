interface SenderLocationFieldProps {
  label: string;
  checkboxLabel: string;
}

export default function SenderLocationField({
  label,
  checkboxLabel,
}: SenderLocationFieldProps) {
  return (
    <div className="mb-6">

      <label className="block mb-2 lufga_medium text-[#222222] text-[15px]">
        {label}
      </label>

      <div className="flex items-center gap-4">

        <div className="relative flex-1">
          <select className="w-full p-3 pr-14 border-1 border-[#CCCCCC] p-3 pr-14 rounded-[4px] text-[15px] text-[#888888] bg-white appearance-none sf_pro_regular">
            <option>Select</option>
          </select>

          <div className="absolute right-0 top-0 h-full flex items-center px-3 border-l border-gray-300 pointer-events-none">
            <img src="/images/arrow-down.png" alt="" />
          </div>
        </div>

        <label className="flex items-center gap-3 cursor-pointer sf_pro_regular text-[#222222]">

          <div className="relative">
            <input type="checkbox" className="sr-only peer" />

            <div className="w-10 h-6 bg-[#C7B29B] rounded-[6px] peer-checked:bg-[#91775C] transition"></div>

            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-4"></div>
          </div>

          {checkboxLabel}

        </label>

      </div>

    </div>
  );
}