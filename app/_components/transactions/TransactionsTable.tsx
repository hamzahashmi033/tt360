
import Pagination from "../ui/Pagination"


const data = [
  {
    money: '-',
    agent: "Acme",
    invoice: "031606954233",
    status: "Transmitted to Payee",
    internal: '-',
    name: "John Smith",
    phone: "832-345-2351",
    city: "New York",
    state: "New York",
    zip: "10012"
  }
]

export default function TransactionsTable() {

  return (
    <div className="rounded-lg mt-6 overflow-hidden ">

      <div className="mb-4 flex justify-between items-center">
        <div className="min-w-[560px] flex relative">
          <input
            placeholder="Search"
            className="bg-white text-[#222222] placeholder-[#AAAAAA] sf_pro_regular border border-[#CCCCCC] rounded-md px-3 py-2 w-full"
          />
          <div className="p-2 flex items-center justify-center bg-[#E1DED8] absolute right-2 top-[4px] rounded-full cursor-pointer">
            <img src="/images/search.png" alt="" />
          </div>
        </div>


        <span className="text-[#222222] text-[18px] lufga_medium">50 Records</span>
      </div>
      <div className="w-full">
        <table className="w-full text-sm text-[#222222]">

          <thead className="text-[#222222] bg-[#E1DED8] text-left lufga_medium">
            <tr>
              <td className="p-3 rounded-tl-xl">MONEY TRANSMITTER CODE</td>
              <td>AGENT CODE</td>
              <td>INVOICE NO</td>
              <td>INVOICE STATUS</td>
              <td>SENDER INTERNAL CODE</td>
              <td>SENDER FULL NAME</td>
              <td>SENDER PHONE</td>
              <td>SENDER CITY</td>
              <td>SENDER STATE</td>
              <td className="rounded-tr-xl">SENDER ZIP CODE</td>
            </tr>
          </thead>

          <tbody>
            {Array(7).fill(data[0]).map((row, i) => (
              <tr
                key={i}
                className="border-t border-b border-[#ECEAE6] sf_pro_regular even:bg-[#FDFCF5] hover:bg-[#E1DED8]"
              >
                <td className="p-3">{row.money}</td>
                <td>{row.agent}</td>
                <td>{row.invoice}</td>
                <td>{row.status}</td>
                <td>{row.internal}</td>
                <td>{row.name}</td>
                <td>{row.phone}</td>
                <td>{row.city}</td>
                <td>{row.state}</td>
                <td>{row.zip}</td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

      <Pagination />

    </div>
  )
}