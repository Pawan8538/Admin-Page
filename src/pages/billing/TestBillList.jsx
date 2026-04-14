import { Search, Download } from 'lucide-react';
import clsx from 'clsx';

export default function TestBillList() {
  const dummyBills = [
    { sn: 1, bill: 'INV-2023-001', name: 'John Doe', dDate: '23-11-01', dStatus: 'Delivered', pStatus: 'Paid', net: '1200', paid: '1200', due: '0', date: '23-10-28' },
    { sn: 2, bill: 'INV-2023-002', name: 'Jane Smith', dDate: '23-11-02', dStatus: 'Pending', pStatus: 'Due', net: '800', paid: '400', due: '400', date: '23-10-29' },
    { sn: 3, bill: 'INV-2023-003', name: 'Robert King', dDate: '23-11-01', dStatus: 'Delivered', pStatus: 'Due', net: '2500', paid: '0', due: '2500', date: '23-10-30' },
  ];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center border-b-2 border-slate-400 pb-1">
        <h1 className="text-lg font-bold text-slate-800 uppercase tracking-wide">Test Bills / Invoices</h1>
        <button className="flex items-center gap-1 px-2 py-1 bg-slate-200 border border-slate-500 text-xs font-semibold text-slate-800 hover:bg-slate-300 rounded-none">
          <Download className="w-3 h-3" /> Export Report
        </button>
      </div>

      <div className="bg-white border-2 border-slate-400 rounded-none">
        <div className="p-2 border-b-2 border-slate-400 flex gap-2 bg-slate-200">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-700">Filter:</span>
            <div className="relative w-64 border border-slate-400 bg-white">
              <Search className="h-3 w-3 text-slate-400 absolute left-2 top-1.5" />
              <input
                type="text"
                className="w-full text-xs py-1 pl-6 pr-2 rounded-none focus:ring-0 focus:outline-none border-none"
              />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-300">
            <thead className="bg-slate-300">
              <tr>
                <th scope="col" className="px-2 py-1 border-r border-slate-400 text-center text-xs font-bold text-slate-800 uppercase">Sl</th>
                <th scope="col" className="px-2 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">Bill No</th>
                <th scope="col" className="px-2 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">Patient</th>
                <th scope="col" className="px-2 py-1 border-r border-slate-400 text-center text-xs font-bold text-slate-800 uppercase">D. Date</th>
                <th scope="col" className="px-2 py-1 border-r border-slate-400 text-center text-xs font-bold text-slate-800 uppercase">D. Status</th>
                <th scope="col" className="px-2 py-1 border-r border-slate-400 text-center text-xs font-bold text-slate-800 uppercase">Pay Stat</th>
                <th scope="col" className="px-2 py-1 border-r border-slate-400 text-right text-xs font-bold text-slate-800 uppercase">Net (₹)</th>
                <th scope="col" className="px-2 py-1 border-r border-slate-400 text-right text-xs font-bold text-slate-800 uppercase">Paid (₹)</th>
                <th scope="col" className="px-2 py-1 border-r border-slate-400 text-right text-xs font-bold text-red-800 uppercase bg-red-200">Due (₹)</th>
                <th scope="col" className="px-2 py-1 text-center text-xs font-bold text-slate-800 uppercase">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
              {dummyBills.map((bill, idx) => (
                <tr key={idx} className="hover:bg-blue-50">
                  <td className="px-2 py-1 border-r border-slate-300 text-center text-xs text-slate-600">{bill.sn}</td>
                  <td className="px-2 py-1 border-r border-slate-300 text-xs font-semibold text-primary-800">{bill.bill}</td>
                  <td className="px-2 py-1 border-r border-slate-300 text-xs font-semibold text-slate-900">{bill.name}</td>
                  <td className="px-2 py-1 border-r border-slate-300 text-center text-xs text-slate-700">{bill.dDate}</td>
                  <td className="px-2 py-1 border-r border-slate-300 text-center text-xs text-slate-700">{bill.dStatus}</td>
                  <td className="px-2 py-1 border-r border-slate-300 text-center text-xs font-bold">
                    <span className={bill.pStatus === 'Paid' ? "text-green-700" : "text-red-700"}>{bill.pStatus}</span>
                  </td>
                  <td className="px-2 py-1 border-r border-slate-300 text-right text-xs text-slate-900">{bill.net}</td>
                  <td className="px-2 py-1 border-r border-slate-300 text-right text-xs text-green-700 font-semibold">{bill.paid}</td>
                  <td className="px-2 py-1 border-r border-slate-300 text-right text-xs font-bold text-red-700 bg-red-50">{bill.due}</td>
                  <td className="px-2 py-1 text-center text-xs">
                    <button className="text-blue-700 hover:underline mr-2">View</button>
                    <button className="text-slate-700 hover:underline">Print</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
