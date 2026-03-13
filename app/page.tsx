import Image from "next/image";
import Button from "./_components/ui/Button";
import Filters from "./_components/transactions/Filters";
import TransactionsTable from "./_components/transactions/TransactionsTable";
import FolderIcon from "./_components/transactions/FolderIcon";
import clsx from "clsx";
import { Download } from "lucide-react";
import ReportModal from "./_components/transactions/ReportModal";


export default function Home() {
  return (
    <div className="container-page py-10 px-18">

      <div className="flex justify-between items-center mb-6 px-2">

        <FolderIcon />

        <button
          className="cursor-pointer px-6 py-2 rounded-md text-sm font-medium text-white bg-gradient-to-b from-[#C7B29B] to-[#91775C] hover:opacity-90 transition flex items-center gap-3 lufga_semibold"
        >
          <img src="/images/download.png" alt="" />Download
        </button>

      </div>

      <Filters />

      <TransactionsTable />



    </div>
  );
}
