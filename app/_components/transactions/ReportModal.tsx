"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { X } from "lucide-react";

export default function ReportModal() {

  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="inline-block p-[2px] rounded-md bg-gradient-to-b from-[#C7B29B] to-[#91775C]"
        onClick={() => setOpen(true)}
      >
        <button className="bg-[#EEECE8] px-8 py-1 rounded-md text-sm font-medium text-black cursor-pointer transition flex items-center gap-3 lufga_regular">
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

                <div className="flex items-center gap-3 bg-[#E1DED8] p-4 mx-1 rounded-tl-xl rounded-tr-xl mt-1">
                  <img src="/images/document.png" />
                  <h2 className="text-[24px] lufga_medium">Daily Reports</h2>
                </div>

                <div className="p-8">

                  <div className="mb-6">
                    <label className="block text-sm mb-2 lufga_medium">
                      Report Name
                    </label>
                    <select className="w-96 p-3 rounded-md bg-white">
                      <option>Shaka Compliance Report</option>
                    </select>
                  </div>

                  <h3 className="mb-3 lufga_medium text-[18px]">DATE RANGE</h3>

                  <div className="grid grid-cols-2 gap-6 mb-6">

                    <div>
                      <label className="block mb-2 lufga_medium">
                        Date Type
                      </label>
                      <select className="w-full p-3 rounded-md text-[15px] bg-white">
                        <option>Select</option>
                      </select>
                    </div>

                    <div>
                      <label className="block mb-2 text-[15px] lufga_medium">
                        Date Range
                      </label>
                      <input
                        type="text"
                        placeholder="Select"
                        className="w-full p-3 rounded-md bg-white"
                      />
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

                      <select className="flex-1 p-3 rounded-md bg-white">
                        <option>Select</option>
                      </select>

                      <label className="flex items-center gap-2 sf_pro_regular">
                        <input type="checkbox" />
                        include sub-locations
                      </label>

                    </div>

                  </div>

                  <div className="mb-8">

                    <label className="block mb-2 lufga_medium">State</label>

                    <select className="w-96 p-3 rounded-md bg-white">
                      <option>Select</option>
                    </select>

                  </div>

                  <div className="flex items-center gap-4">

                    <button
                      onClick={() => setOpen(false)}
                      className="px-6 py-3 rounded-md border border-gray-500 text-gray-600"
                    >
                      Cancel
                    </button>

                    <button className="flex-1 py-3 rounded-md bg-gradient-to-b from-[#C7B29B] to-[#91775C] text-white cursor-pointer flex items-center justify-center gap-2 lufga_semibold">
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