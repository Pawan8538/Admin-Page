export default function GenericReferralReport({ title, headers, items }) {
  return (
    <div className="space-y-2 pb-10">
      <div className="flex items-center justify-between border-b-2 border-slate-400 pb-1 mb-2">
        <h1 className="text-lg font-bold text-slate-800 uppercase tracking-wide">{title}</h1>
      </div>
      
      <div className="bg-slate-100 border-2 border-slate-400 p-2 flex gap-2 items-center mb-2">
         <span className="text-xs font-bold text-slate-700">Filters:</span>
         <select className="text-xs border-slate-400 py-0.5 px-1 border rounded-none"><option>All Referrals</option></select>
         <input type="date" className="text-xs border-slate-400 p-0.5 border rounded-none" />
         <button className="bg-primary-600 px-2 py-0.5 text-white border border-primary-800 text-xs hover:bg-primary-700">Search</button>
      </div>

      <div className="border-2 border-slate-400 bg-white">
        <table className="min-w-full divide-y divide-slate-300 border-b border-slate-400">
          <thead className="bg-slate-300">
            <tr>
              {headers.map((h, i) => (
               <th key={i} className="px-2 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {items.map((row, i) => (
               <tr key={i} className="hover:bg-slate-50">
                 {row.map((val, cellIdx) => (
                    <td key={cellIdx} className="px-2 py-1 border-r border-slate-300 text-xs text-slate-800 font-semibold">{val}</td>
                 ))}
               </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
