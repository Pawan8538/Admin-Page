export default function Reports() {
  const dummyReports = [
    { sample: 'SPL-001', datetime: '23-11-2026 10:30', test: 'Complete Blood Count', status: 'Pending' },
    { sample: 'SPL-002', datetime: '23-11-2026 11:15', test: 'Lipid Profile', status: 'Completed' },
  ];

  return (
    <div className="max-w-full space-y-2">
      <div className="mb-2 flex items-center justify-between border-b-2 border-slate-400 pb-1">
        <h1 className="text-lg font-bold text-slate-800 uppercase tracking-wide">Pathology Reports</h1>
      </div>

      <div className="bg-slate-100 border border-slate-400 p-2">
        <div className="font-bold text-sm text-slate-800 mb-2 border-b border-slate-300 pb-1">Filter Reports</div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="flex items-center">
            <label className="w-20 text-xs font-semibold text-slate-700">From Date:</label>
            <input type="date" className="flex-1 text-xs border-slate-400 p-1 border focus:ring-0 focus:border-primary-500 rounded-none" />
          </div>
          <div className="flex items-center">
            <label className="w-20 text-xs font-semibold text-slate-700">To Date:</label>
            <input type="date" className="flex-1 text-xs border-slate-400 p-1 border focus:ring-0 focus:border-primary-500 rounded-none" />
          </div>
          <div className="flex items-center">
             <label className="w-20 text-xs font-semibold text-slate-700">Status:</label>
             <select className="flex-1 text-xs border-slate-400 py-1 px-2 border focus:ring-0 focus:border-primary-500 rounded-none">
               <option>All</option><option>Pending</option><option>Completed</option>
             </select>
          </div>
          <div className="flex items-center">
            <label className="w-24 text-xs font-semibold text-slate-700">Patient ID/Name:</label>
            <input type="text" className="flex-1 text-xs border-slate-400 p-1 border focus:ring-0 focus:border-primary-500 rounded-none" />
          </div>
        </div>
        <div className="flex justify-end mt-2 pt-2 border-t border-slate-300">
           <button type="button" className="bg-primary-600 py-1 px-4 border border-primary-800 text-xs font-semibold text-white hover:bg-primary-700 rounded-none">
            Filter
          </button>
        </div>
      </div>

      <div className="bg-white border-2 border-slate-400 rounded-none">
        <div className="p-2 border-b-2 border-slate-400 bg-slate-200">
          <h3 className="text-sm font-bold text-slate-800">Reports List</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-300">
            <thead className="bg-slate-300">
              <tr>
                <th scope="col" className="px-2 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">Sample ID</th>
                <th scope="col" className="px-2 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">Date & Time</th>
                <th scope="col" className="px-2 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">Test Name</th>
                <th scope="col" className="px-2 py-1 border-r border-slate-400 text-center text-xs font-bold text-slate-800 uppercase">Status</th>
                <th scope="col" className="px-2 py-1 text-center text-xs font-bold text-slate-800 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
              {dummyReports.map((r, idx) => (
                <tr key={idx} className="hover:bg-blue-50">
                  <td className="px-2 py-1 border-r border-slate-300 text-xs font-semibold text-primary-800">{r.sample}</td>
                  <td className="px-2 py-1 border-r border-slate-300 text-xs text-slate-700">{r.datetime}</td>
                  <td className="px-2 py-1 border-r border-slate-300 text-xs font-semibold text-slate-900">{r.test}</td>
                  <td className="px-2 py-1 border-r border-slate-300 text-center text-xs font-bold">
                    <span className={r.status === 'Completed' ? "text-green-700" : "text-yellow-700"}>{r.status}</span>
                  </td>
                  <td className="px-2 py-1 text-center text-xs">
                    <button className="text-blue-700 hover:underline mr-2">Update</button>
                    <button className="text-slate-700 hover:underline">Print View</button>
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
