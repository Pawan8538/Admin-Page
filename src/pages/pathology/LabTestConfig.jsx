import { Search } from 'lucide-react';

export default function LabTestConfig() {
  const dummyParams = [
    { name: 'Hemoglobin', unit: 'g/dL', ref: '13.0 - 17.0' },
    { name: 'RBC Count', unit: 'mill/mm3', ref: '4.5 - 5.5' },
    { name: 'WBC Count', unit: 'cells/cumm', ref: '4000 - 10000' },
    { name: 'Platelet Count', unit: 'lakhs/cumm', ref: '1.5 - 4.5' },
  ];

  return (
    <div className="max-w-5xl">
       <div className="mb-2 flex items-center justify-between border-b-2 border-slate-400 pb-1">
        <h1 className="text-lg font-bold text-slate-800 uppercase tracking-wide">Lab Test Config</h1>
      </div>

      <div className="flex gap-2">
        {/* Left Side: Test List Selection */}
        <div className="w-1/4 bg-white border-2 border-slate-400 flex flex-col rounded-none">
           <div className="p-1 border-b-2 border-slate-400 bg-slate-200">
             <div className="relative border border-slate-400 bg-white">
               <Search className="h-3 w-3 text-slate-400 absolute left-2 top-1.5" />
               <input type="text" placeholder="Search test..." className="w-full pl-6 pr-1 py-1 text-xs focus:ring-0 focus:outline-none border-none rounded-none" />
             </div>
           </div>
           <div className="flex-1 overflow-y-auto p-1 bg-white">
             <div className="w-full text-left p-1 text-xs font-bold bg-primary-600 text-white border border-primary-800 cursor-pointer mb-1">
               CBC
             </div>
             <div className="w-full text-left p-1 text-xs text-slate-800 border-b border-slate-200 hover:bg-slate-100 cursor-pointer mb-1">LIPID</div>
             <div className="w-full text-left p-1 text-xs text-slate-800 hover:bg-slate-100 cursor-pointer mb-1">URIN</div>
           </div>
        </div>

        {/* Right Side: Parameters Config */}
        <div className="w-3/4 bg-white border-2 border-slate-400 flex flex-col rounded-none">
           <div className="p-2 border-b-2 border-slate-400 bg-slate-200 flex justify-between items-center">
             <span className="text-xs font-bold text-slate-800 uppercase">
               Params: <span className="text-primary-800">Complete Blood Count (CBC)</span>
             </span>
           </div>
           
           <table className="min-w-full divide-y divide-slate-300">
             <thead className="bg-slate-300">
               <tr>
                 <th className="px-2 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">Name</th>
                 <th className="px-2 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">Unit</th>
                 <th className="px-2 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">Ref. Range</th>
                 <th className="px-2 py-1 text-center text-xs font-bold text-slate-800 uppercase">Action</th>
               </tr>
             </thead>
             <tbody className="divide-y divide-slate-200">
               {dummyParams.map((p, idx) => (
                 <tr key={idx} className="hover:bg-blue-50">
                    <td className="px-2 py-1 border-r border-slate-300 text-xs font-semibold text-slate-900">{p.name}</td>
                    <td className="px-2 py-1 border-r border-slate-300 text-xs text-slate-700">{p.unit}</td>
                    <td className="px-2 py-1 border-r border-slate-300 text-xs text-slate-700">{p.ref}</td>
                    <td className="px-2 py-1 text-center text-xs text-primary-700 underline cursor-pointer hover:text-primary-900">Edit</td>
                 </tr>
               ))}
               <tr className="bg-slate-100 border-t-2 border-slate-400">
                 <td className="px-1 py-1 border-r border-slate-300">
                    <input type="text" className="w-full text-xs p-1 border border-slate-400 rounded-none focus:ring-0 focus:border-primary-500" />
                 </td>
                 <td className="px-1 py-1 border-r border-slate-300">
                    <input type="text" className="w-full text-xs p-1 border border-slate-400 rounded-none focus:ring-0 focus:border-primary-500" />
                 </td>
                 <td className="px-1 py-1 border-r border-slate-300">
                    <input type="text" className="w-full text-xs p-1 border border-slate-400 rounded-none focus:ring-0 focus:border-primary-500" />
                 </td>
                 <td className="px-2 py-1 text-center">
                    <button className="bg-primary-600 px-2 py-0 border border-primary-800 text-xs text-white hover:bg-primary-700 rounded-none w-full">Add</button>
                 </td>
               </tr>
             </tbody>
           </table>
        </div>
      </div>
    </div>
  );
}
