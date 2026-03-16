interface SelectFieldProps {
  label: string;
  width?: string;
  children: React.ReactNode;
}

export default function SelectField({ label, width = "w-full", children }: SelectFieldProps) {
  return (
    <div className={width === "w-96" ? "mb-6" : ""}>
      <label className="block mb-2 lufga_medium text-[#222222] text-[15px]">
        {label}
      </label>

      <div className={`relative ${width}`}>
        <select className="w-full p-3 pr-14 border-1 border-[#CCCCCC] p-3 pr-14 rounded-[4px] text-[15px] text-[#888888] bg-white appearance-none sf_pro_regular">
          {children}
        </select>

        <div className="absolute right-0 top-0 h-full flex items-center px-3 border-l border-gray-300 pointer-events-none">
          <img src="/images/arrow-down.png" alt="" />
        </div>
      </div>
    </div>
  );
}