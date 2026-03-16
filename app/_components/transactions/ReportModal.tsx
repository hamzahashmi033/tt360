"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Button from "../ui/Button";
import SelectField from "../ui/SelectField";
import DateRangeField from "../ui/DateRangeField";
import SenderLocationField from "../ui/SenderLocationField";

export default function ReportModal() {
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
  const [startDate, endDate] = dateRange;
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="gradientBorder"
        icon="/images/filter.png"
        onClick={() => setOpen(true)}
      >
        Filter
      </Button>

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
                  <h2 className="text-[24px] lufga_medium text-[#222222]">Daily Reports</h2>
                </div>

                <div className="p-8">


                  <SelectField label="Report Name" width="w-96">
                    <option>Shaka Compliance Report</option>
                  </SelectField>


                  <h3 className="mb-3 lufga_medium text-[18px] text-[#222222] ">DATE RANGE</h3>

                  <div className="grid grid-cols-2 gap-6 mb-6">


                    <SelectField label="Date Type">
                      <option>Select</option>
                    </SelectField>

                    <DateRangeField
                      startDate={startDate}
                      endDate={endDate}
                      setDateRange={setDateRange}
                    />
                  </div>

                  <hr className="my-6 border-[#979797] border-[1px]" />


                  <h3 className="font-semibold mb-4 text-[18px] lufga_medium text-[#222222]">
                    LOCATION
                  </h3>


                  <div className="mb-6">

                    <SenderLocationField
                      label="Sender Location"
                      checkboxLabel="include sub-locations"
                    />
                  </div>


                  <SelectField label="State" width="w-96">
                    <option>Select</option>
                  </SelectField>


                  <div className="flex items-center gap-4">

                    <Button
                      variant="outline"
                      onClick={() => setOpen(false)}
                    >
                      Cancel
                    </Button>

                    <Button
                      variant="apply"
                      icon="/images/filter.png"
                    >
                      Apply Filters
                    </Button>

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