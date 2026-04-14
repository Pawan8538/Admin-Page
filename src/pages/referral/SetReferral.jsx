export default function SetReferral() {
  return (
    <div className="max-w-4xl mx-auto space-y-2 pb-10">
      <div className="mb-2 flex items-center justify-between border-b-2 border-slate-400 pb-1">
        <h1 className="text-lg font-bold text-slate-800 uppercase tracking-wide">Set Referral Source</h1>
      </div>

      <form className="border-2 border-slate-400 bg-slate-100 p-2 space-y-2">
        <div className="border border-slate-300 bg-white p-2">
           <h3 className="text-sm font-bold text-slate-800 mb-2 border-b border-slate-300 pb-1">Referral Doctor / Clinic Details</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
             <div className="flex items-center col-span-1 md:col-span-2">
               <label className="w-32 text-xs font-semibold text-slate-700">Source Name:</label>
               <input type="text" className="flex-1 text-xs border-slate-400 p-1 border focus:ring-0 rounded-none" placeholder="Dr. John Doe / City Clinic" />
             </div>
             <div className="flex items-center">
               <label className="w-32 text-xs font-semibold text-slate-700">Specialization:</label>
               <input type="text" className="flex-1 text-xs border-slate-400 p-1 border focus:ring-0 rounded-none" />
             </div>
             <div className="flex items-center">
               <label className="w-32 text-xs font-semibold text-slate-700">Mobile:</label>
               <input type="text" className="flex-1 text-xs border-slate-400 p-1 border focus:ring-0 rounded-none" />
             </div>
           </div>
        </div>

        <div className="border border-slate-300 bg-white p-2">
           <h3 className="text-sm font-bold text-slate-800 mb-2 border-b border-slate-300 pb-1">Commission Details</h3>
           <div className="grid grid-cols-1 gap-2">
             <div className="flex items-center">
               <label className="w-48 text-xs font-semibold text-slate-700">Default Commission %:</label>
               <input type="number" className="w-24 text-xs border-slate-400 p-1 border focus:ring-0 rounded-none" placeholder="0%" />
             </div>
             <div className="flex items-center">
               <label className="w-48 text-xs font-semibold text-slate-700">Minimum Payout Threshold (₹):</label>
               <input type="number" className="w-24 text-xs border-slate-400 p-1 border focus:ring-0 rounded-none" placeholder="1000" />
             </div>
           </div>
        </div>

        <div className="flex justify-end pt-2 border-t border-slate-300 mt-2">
          <button type="button" className="bg-primary-600 px-4 py-1 text-xs font-bold text-white border border-primary-800 rounded-none w-32 hover:bg-primary-700">
            Save Provider
          </button>
        </div>
      </form>
    </div>
  )
}
