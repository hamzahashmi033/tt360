"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function ReportModal() {
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
  const [startDate, endDate] = dateRange;
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="inline-block p-[2px] rounded-md bg-gradient-to-b from-[#C7B29B] to-[#91775C]"
        onClick={() => setOpen(true)}
      >
        <button className="bg-[#EEECE8] px-8 py-1 rounded-md text-sm font-medium text-black flex items-center gap-3 lufga_regular">
          <img src="/images/filter.png" alt="" />
          Filter
        </button>
      </div>

      <Transition show={open} as={Fragment}>
        <Dialog onClose={() => setOpen(false)} className="relative z-50">

        
          <Transition.Child
            as={Fragment}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/60" />
          </Transition.Child>

          <div className="fixed inset-0 flex items-start justify-center pt-20 p-4">

            <Transition.Child
              as={Fragment}
              enter="transition ease-out duration-300"
              enterFrom="-translate-y-10 opacity-0"
              enterTo="translate-y-0 opacity-100"
              leave="transition ease-in duration-200"
              leaveFrom="translate-y-0 opacity-100"
              leaveTo="-translate-y-10 opacity-0"
            >
              <Dialog.Panel className="w-full max-w-5xl rounded-xl bg-[#F8F8F8]">

                {/* Header */}
                <div className="flex items-center gap-3 bg-[#E1DED8] p-4 mx-1 rounded-tl-xl rounded-tr-xl mt-1">
                  <img src="/images/document.png" />
                  <h2 className="text-[24px] lufga_medium">Daily Reports</h2>
                </div>

                <div className="p-8">

                  {/* Report Name */}
                  <div className="mb-6">
                    <label className="block text-sm mb-2 lufga_medium">
                      Report Name
                    </label>

                    <div className="relative w-96">
                      <select className="w-full p-3 pr-10 rounded-md bg-white appearance-none">
                        <option>Shaka Compliance Report</option>
                      </select>

                      <div className="absolute right-0 top-0 h-full flex items-center px-3 border-l border-gray-300 pointer-events-none">
                        <img src="/images/arrow-down.png" alt="" />
                      </div>
                    </div>
                  </div>

                  {/* DATE RANGE */}
                  <h3 className="mb-3 lufga_medium text-[18px]">DATE RANGE</h3>

                  <div className="grid grid-cols-2 gap-6 mb-6">

                    {/* Date Type */}
                    <div>
                      <label className="block mb-2 lufga_medium">
                        Date Type
                      </label>

                      <div className="relative w-full">
                        <select className="w-full p-3 pr-14 rounded-md text-[15px] bg-white appearance-none">
                          <option>Select</option>
                        </select>

                        <div className="absolute right-0 top-0 h-full flex items-center px-3 border-l border-gray-300 pointer-events-none">
                          <img src="/images/arrow-down.png" alt="" />
                        </div>
                      </div>
                    </div>

                    {/* Date Range */}
                    <div>
                      <label className="block mb-2 text-[15px] lufga_medium">
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
                          className="w-full p-3 pr-16 rounded-md bg-white "
                          wrapperClassName="w-full"
                        />

                        <div className="absolute right-0 top-0 h-full flex items-center px-3 border-l border-gray-300 pointer-events-none z-10">
                          <img src="/images/calender.png" alt="calendar" className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr className="my-6 border-gray-400" />

             
                  <h3 className="font-semibold mb-4 text-[18px] lufga_medium">
                    LOCATION
                  </h3>

             
                  <div className="mb-6">

                    <label className="block mb-2 lufga_medium text-[15px]">
                      Sender Location
                    </label>

                    <div className="flex items-center gap-4">

                      <div className="relative flex-1">
                        <select className="w-full p-3 pr-14 rounded-md bg-white appearance-none">
                          <option>Select</option>
                        </select>

                        <div className="absolute right-0 top-0 h-full flex items-center px-3 border-l border-gray-300 pointer-events-none">
                          <img src="/images/arrow-down.png" alt="" />
                        </div>
                      </div>

                      
                      <label className="flex items-center gap-3 cursor-pointer sf_pro_regular">

                        <div className="relative">
                          <input type="checkbox" className="sr-only peer" />

                          <div className="w-10 h-6 bg-[#C7B29B] rounded-full peer-checked:bg-[#91775C] transition"></div>

                          <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-4"></div>
                        </div>

                        include sub-locations
                      </label>

                    </div>
                  </div>

               
                  <div className="mb-8">

                    <label className="block mb-2 lufga_medium">State</label>

                    <div className="relative w-96">
                      <select className="w-full p-3 pr-14 rounded-md bg-white appearance-none">
                        <option>Select</option>
                      </select>

                      <div className="absolute right-0 top-0 h-full flex items-center px-3 border-l border-gray-300 pointer-events-none">
                        <img src="/images/arrow-down.png" alt="" />
                      </div>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex items-center gap-4">

                    <button
                      onClick={() => setOpen(false)}
                      className="px-6 py-3 rounded-md border border-gray-500 text-gray-600"
                    >
                      Cancel
                    </button>

                    <button className="flex-1 py-3 rounded-md bg-gradient-to-b from-[#C7B29B] to-[#91775C] text-white flex items-center justify-center gap-2 lufga_semibold">
                      <img
                        src="/images/filter.png"
                        alt=""
                        className="invert brightness-0"
                      />
                      Apply Filters
                    </button>

                  </div>

                </div>

              </Dialog.Panel>
            </Transition.Child>

          </div>
        </Dialog>
      </Transition>
    </>
  );
}