export default function AddBillOrder() {
  return (
    <div className="max-w-4xl space-y-2 pb-10">
      <div className="mb-2 flex items-center justify-between border-b-2 border-slate-400 pb-1">
        <h1 className="text-lg font-bold text-slate-800 uppercase tracking-wide">Test Order / Add Bill</h1>
      </div>

      <form className="border-2 border-slate-400 bg-slate-100 p-2 space-y-2">
        <div className="border border-slate-300 bg-white p-2 flex gap-4">
           {/* Form Left */}
           <div className="flex-1 space-y-2">
              <div className="flex items-center">
                <label className="w-32 text-xs font-semibold text-slate-700">Select Patient:</label>
                <input type="text" className="flex-1 text-xs border-slate-400 p-1 border focus:ring-0 rounded-none" placeholder="Search Patient Mobile/UID" />
                <button type="button" className="bg-primary-600 px-2 py-1 text-xs text-white border border-primary-800 ml-1">Find</button>
              </div>
              <div className="flex items-center">
                <label className="w-32 text-xs font-semibold text-slate-700">Referring Dr:</label>
                <input type="text" className="flex-1 text-xs border-slate-400 p-1 border focus:ring-0 rounded-none" placeholder="Type to search Directory" />
              </div>
              <div className="flex items-center">
                <label className="w-32 text-xs font-semibold text-slate-700">Search Test:</label>
                <div className="flex flex-1 gap-1">
                  <input type="text" className="flex-1 text-xs border-slate-400 p-1 border focus:ring-0 rounded-none bg-blue-50" placeholder="Type Test Code or Name" />
                  <button type="button" className="bg-slate-300 px-2 py-1 text-xs text-slate-800 border border-slate-500 font-bold">+</button>
                </div>
              </div>
           </div>
        </div>

        <div className="border border-slate-300 bg-white min-h-[150px]">
          <table className="min-w-full divide-y divide-slate-300 border-b border-slate-400">
            <thead className="bg-slate-300">
              <tr>
               <th className="px-2 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">Test Code</th>
               <th className="px-2 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">Test Name</th>
               <th className="px-2 py-1 border-r border-slate-400 text-right text-xs font-bold text-slate-800 uppercase">Price (₹)</th>
               <th className="px-2 py-1 text-center text-xs font-bold text-slate-800 uppercase w-10">Act</th>
              </tr>
            </thead>
            <tbody className="bg-slate-50 text-center">
               <tr><td colSpan="4" className="py-8 text-xs text-slate-500 italic">No tests added. Use 'Search Test' to build order.</td></tr>
            </tbody>
          </table>
          
          <div className="bg-slate-200 border-t border-slate-400 p-2 flex justify-end">
            <div className="text-right">
              <div className="text-xs font-bold text-slate-700">Net Total: <span className="text-lg">₹ 0.00</span></div>
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-2 border-t border-slate-300 mt-2 gap-2">
          <button type="button" className="bg-slate-300 px-4 py-1 text-xs font-bold text-slate-800 border border-slate-500 rounded-none w-24">Clear</button>
          <button type="button" className="bg-green-600 px-4 py-1 text-xs font-bold text-white border border-green-800 rounded-none w-32 hover:bg-green-700">Generate Bill</button>
        </div>
      </form>
    </div>
  )
}
