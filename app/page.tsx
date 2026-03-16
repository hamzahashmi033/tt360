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

        <Button icon="/images/download.png">
          Download
        </Button>

      </div>

      <Filters />

      <TransactionsTable />
    </div>
  );
}
