import { Filter, Download } from 'lucide-react';
import clsx from 'clsx';

export default function TestBillList() {
  const dummyBills = [
    { sn: 1, bill: 'INV-2023-001', name: 'John Doe', dDate: '2023-11-01', dStatus: 'Delivered', pStatus: 'Paid', net: '₹1200', paid: '₹1200', due: '₹0', date: '2023-10-28' },
    { sn: 2, bill: 'INV-2023-002', name: 'Jane Smith', dDate: '2023-11-02', dStatus: 'Pending', pStatus: 'Due', net: '₹800', paid: '₹400', due: '₹400', date: '2023-10-29' },
    { sn: 3, bill: 'INV-2023-003', name: 'Robert King', dDate: '2023-11-01', dStatus: 'Delivered', pStatus: 'Due', net: '₹2500', paid: '₹0', due: '₹2500', date: '2023-10-30' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-800">Test Bills / Invoices</h1>
        <button className="flex items-center gap-2 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50">
          <Download className="w-4 h-4" /> Export Report
        </button>
      </div>

      <div className="bg-white shadow-sm border border-slate-200 rounded-lg overflow-hidden">
        <div className="p-4 border-b border-slate-200 flex gap-4 bg-slate-50">
          <div className="relative flex-1 max-w-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Filter className="h-4 w-4 text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Filter by bill no or patient..."
              className="pl-10 w-full border-slate-300 rounded-md shadow-sm sm:text-sm focus:ring-primary-500 focus:border-primary-500 border p-2"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase">Sl</th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase">Bill No</th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase">Patient Name</th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase">Del. Date</th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase">Del. Status</th>
                <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase">Pay Status</th>
                <th scope="col" className="px-4 py-3 text-right text-xs font-medium text-slate-500 uppercase">Net Payable</th>
                <th scope="col" className="px-4 py-3 text-right text-xs font-medium text-slate-500 uppercase">Paid</th>
                <th scope="col" className="px-4 py-3 text-right text-xs font-medium text-slate-500 uppercase whitespace-nowrap bg-red-50/50">Due</th>
                <th scope="col" className="px-4 py-3 text-right text-xs font-medium text-slate-500 uppercase">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
              {dummyBills.map((bill, idx) => (
                <tr key={idx} className="hover:bg-slate-50">
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-slate-500">{bill.sn}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-primary-600">{bill.bill}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-slate-900">{bill.name}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-slate-500">{bill.dDate}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-slate-500">{bill.dStatus}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">
                    <span className={clsx(
                      "px-2 inline-flex text-xs leading-5 font-semibold rounded-full border",
                      bill.pStatus === 'Paid' ? "bg-green-50 text-green-700 border-green-200" : "bg-red-50 text-red-700 border-red-200"
                    )}>
                      {bill.pStatus}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-right text-sm font-semibold text-slate-700">{bill.net}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-right text-sm text-green-600">{bill.paid}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-right text-sm font-bold text-red-600 bg-red-50/20">{bill.due}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">View</button>
                    <button className="text-primary-600 hover:text-primary-900">Print</button>
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
