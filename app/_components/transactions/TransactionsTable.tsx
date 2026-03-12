import Pagination from "../ui/Pagination"


const data = [
 {
   agent:"Acme",
   invoice:"031606954233",
   status:"Transmitted to Payee",
   name:"John Smith",
   phone:"832-345-2351",
   city:"New York",
   state:"New York",
   zip:"10012"
 }
]

export default function TransactionsTable(){

 return(
   <div className="bg-white rounded-lg mt-6 overflow-hidden border">

     <div className="p-4 flex justify-between">
        <input
        placeholder="Search"
        className="border rounded-md px-3 py-2 w-60"
        />

        <span className="text-sm">50 Records</span>
     </div>

     <table className="w-full text-sm">

      <thead className="bg-[#EEECE8] text-left">
        <tr>
          <th className="p-3">AGENT CODE</th>
          <th>INVOICE NO</th>
          <th>INVOICE STATUS</th>
          <th>SENDER NAME</th>
          <th>SENDER PHONE</th>
          <th>CITY</th>
          <th>STATE</th>
          <th>ZIP</th>
        </tr>
      </thead>

      <tbody>
        {Array(7).fill(data[0]).map((row,i)=>(
          <tr key={i} className="border-t">
            <td className="p-3">{row.agent}</td>
            <td>{row.invoice}</td>
            <td>{row.status}</td>
            <td>{row.name}</td>
            <td>{row.phone}</td>
            <td>{row.city}</td>
            <td>{row.state}</td>
            <td>{row.zip}</td>
          </tr>
        ))}
      </tbody>

     </table>

     <Pagination/>

   </div>
 )
}