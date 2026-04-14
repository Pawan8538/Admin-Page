export default function AddTests() {
  return (
    <div className="max-w-5xl mx-auto space-y-2 pb-10">
      <div className="mb-2 flex items-center justify-between border-b-2 border-slate-400 pb-1">
        <h1 className="text-lg font-bold text-slate-800 uppercase tracking-wide">Test Requisition / Add Tests</h1>
      </div>

      <form className="border-2 border-slate-400 bg-slate-100 p-2 space-y-3">
        {/* Patient Details Section */}
        <div className="border border-slate-300 bg-white p-2">
           <h3 className="text-sm font-bold text-slate-800 mb-2 border-b border-slate-300 pb-1 bg-slate-200 px-2">Patient Details</h3>
           <div className="flex flex-col gap-2">
             <div className="flex items-center">
               <label className="w-32 text-xs font-semibold text-slate-700">Search Patient:</label>
               <input type="text" className="flex-1 text-xs border-slate-400 p-1 border focus:ring-0 rounded-none bg-blue-50" placeholder="Search ID or Mobile..." />
               <button type="button" className="bg-primary-600 px-4 py-1 text-xs font-bold text-white border border-primary-800 ml-1 hover:bg-primary-700">Find</button>
             </div>
             
             {/* Selected Patient Read-Only Block */}
             <div className="grid grid-cols-2 md:grid-cols-4 gap-2 border border-slate-500 bg-slate-100 p-2">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-500 block leading-none">Patient ID</span>
                  <span className="text-xs font-bold text-slate-900">PT-00104</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-500 block leading-none">Patient Name</span>
                  <span className="text-xs font-bold text-slate-900">Jonathan Doe</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-500 block leading-none">Age / Gender</span>
                  <span className="text-xs font-bold text-slate-900">42Y / M</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-500 block leading-none">Contact</span>
                  <span className="text-xs font-bold text-slate-900">+1-555-0198</span>
                </div>
             </div>

             <div className="flex items-center mt-1">
               <label className="w-32 text-xs font-semibold text-slate-700">Referring Doctor:</label>
               <select className="flex-1 text-xs border-slate-400 py-1 px-2 border focus:ring-0 rounded-none">
                  <option>Self</option>
                  <option>Dr. Sarah Connor</option>
                  <option>City Central Referral</option>
               </select>
             </div>
           </div>
        </div>

        {/* Assign Tests Section */}
        <div className="border border-slate-300 bg-white p-2">
           <h3 className="text-sm font-bold text-slate-800 mb-2 border-b border-slate-300 pb-1 bg-slate-200 px-2">Assign Tests</h3>
           
           <div className="flex items-center mb-2">
              <label className="w-32 text-xs font-semibold text-slate-700">Search Test:</label>
              <input type="text" className="flex-1 text-xs border-slate-400 p-1 border focus:ring-0 rounded-none" placeholder="Select Test..." />
              <button type="button" className="bg-slate-300 px-4 py-1 text-xs font-bold text-slate-800 border border-slate-500 ml-1 hover:bg-slate-400">Add to List</button>
           </div>

           <div className="min-h-[150px] border border-slate-400">
             <table className="min-w-full divide-y divide-slate-300 border-b border-slate-400">
               <thead className="bg-slate-300">
                 <tr>
                  <th className="px-2 py-1 border-r border-slate-400 text-center text-xs font-bold text-slate-800 uppercase w-10">#</th>
                  <th className="px-2 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">Test Name</th>
                  <th className="px-2 py-1 border-r border-slate-400 text-right text-xs font-bold text-slate-800 uppercase">Price (₹)</th>
                  <th className="px-2 py-1 text-center text-xs font-bold text-slate-800 uppercase w-16">Action</th>
                 </tr>
               </thead>
               <tbody className="bg-slate-50 text-center">
                  <tr className="hover:bg-blue-50">
                    <td className="border-r border-slate-300 px-2 py-1 text-xs text-slate-600">1</td>
                    <td className="border-r border-slate-300 px-2 py-1 text-xs text-slate-900 font-bold text-left">Complete Blood Count (CBC)</td>
                    <td className="border-r border-slate-300 px-2 py-1 text-xs text-slate-900 text-right">400.00</td>
                    <td className="px-2 py-1 text-xs text-red-600 font-bold cursor-pointer hover:bg-red-200 border border-slate-50">X</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="border-r border-slate-300 px-2 py-1 text-xs text-slate-600">2</td>
                    <td className="border-r border-slate-300 px-2 py-1 text-xs text-slate-900 font-bold text-left">Lipid Profile</td>
                    <td className="border-r border-slate-300 px-2 py-1 text-xs text-slate-900 text-right">800.00</td>
                    <td className="px-2 py-1 text-xs text-red-600 font-bold cursor-pointer hover:bg-red-200 border border-slate-50">X</td>
                  </tr>
               </tbody>
             </table>
             
             <div className="bg-slate-200 p-2 flex justify-end">
               <div className="text-right">
                 <div className="text-xs font-bold text-slate-700">Total Amount: <span className="text-lg font-bold text-primary-900">₹ 1,200.00</span></div>
               </div>
             </div>
           </div>
        </div>

        {/* Global Action Footer */}
        <div className="flex justify-end pt-2 border-t border-slate-300 mt-2">
          <button type="button" className="bg-green-600 px-4 py-1.5 text-xs font-bold text-white border border-green-800 rounded-none hover:bg-green-700 uppercase tracking-widest">
            Proceed to Billing
          </button>
        </div>
      </form>
    </div>
  )
}
