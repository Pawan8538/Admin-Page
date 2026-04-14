import { Search, Info } from 'lucide-react';

export default function LabTestConfig() {
  const dummyParams = [
    { name: 'Hemoglobin', unit: 'g/dL', ref: '13.0 - 17.0' },
    { name: 'RBC Count', unit: 'mill/mm3', ref: '4.5 - 5.5' },
    { name: 'WBC Count', unit: 'cells/cumm', ref: '4000 - 10000' },
    { name: 'Platelet Count', unit: 'lakhs/cumm', ref: '1.5 - 4.5' },
  ];

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Lab Test Parameters Configuration</h1>
        <p className="text-slate-500 mt-1">Select a master test to define its individual testing parameters.</p>
      </div>

      <div className="flex gap-6">
        {/* Left Side: Test List Selection */}
        <div className="w-1/3 bg-white shadow-sm border border-slate-200 rounded-lg overflow-hidden flex flex-col">
           <div className="p-3 border-b border-slate-200 bg-slate-50 relative">
             <Search className="h-4 w-4 text-slate-400 absolute left-5 top-1/2 -mt-2" />
             <input type="text" placeholder="Search test code..." className="w-full pl-8 pr-2 py-1 text-sm border border-slate-300 rounded focus:ring-primary-500 focus:border-primary-500" />
           </div>
           <div className="flex-1 overflow-y-auto p-2 space-y-1">
             <button className="w-full text-left p-3 rounded-md bg-primary-50 text-primary-700 font-medium text-sm flex justify-between">
               <span>CBC</span> <span className="text-xs bg-white px-2 py-0.5 rounded text-primary-600 font-bold border border-primary-100">Selected</span>
             </button>
             <button className="w-full text-left p-3 rounded-md hover:bg-slate-50 text-slate-700 text-sm">LIPID</button>
             <button className="w-full text-left p-3 rounded-md hover:bg-slate-50 text-slate-700 text-sm">URIN</button>
           </div>
        </div>

        {/* Right Side: Parameters Config */}
        <div className="w-2/3 bg-white shadow-sm border border-slate-200 rounded-lg flex flex-col">
           <div className="p-4 border-b border-slate-200 bg-slate-50 flex justify-between items-center">
             <h3 className="font-semibold text-slate-800 flex items-center gap-2">
               Parameters for: <span className="text-primary-600">Complete Blood Count (CBC)</span>
             </h3>
             <button className="text-sm bg-primary-600 text-white px-3 py-1.5 rounded hover:bg-primary-700">Add Parameter</button>
           </div>
           
           <table className="min-w-full divide-y divide-slate-200">
             <thead className="bg-white">
               <tr>
                 <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase">Parameter Name</th>
                 <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase">Unit</th>
                 <th className="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase">Ref. Range</th>
                 <th className="px-4 py-3 text-right text-xs font-medium text-slate-500 uppercase">Action</th>
               </tr>
             </thead>
             <tbody className="divide-y divide-slate-100">
               {dummyParams.map((p, idx) => (
                 <tr key={idx} className="hover:bg-slate-50">
                    <td className="px-4 py-3 text-sm font-medium text-slate-800">{p.name}</td>
                    <td className="px-4 py-3 text-sm text-slate-500">{p.unit}</td>
                    <td className="px-4 py-3 text-sm text-slate-500">{p.ref}</td>
                    <td className="px-4 py-3 text-right text-sm text-primary-600 hover:text-primary-800 cursor-pointer">Edit</td>
                 </tr>
               ))}
               <tr className="bg-slate-50/50">
                 <td className="px-4 py-3"><input type="text" placeholder="New Parameter" className="w-full border-slate-300 rounded text-sm p-1.5 border" /></td>
                 <td className="px-4 py-3"><input type="text" placeholder="Unit" className="w-full border-slate-300 rounded text-sm p-1.5 border" /></td>
                 <td className="px-4 py-3"><input type="text" placeholder="Range" className="w-full border-slate-300 rounded text-sm p-1.5 border" /></td>
                 <td className="px-4 py-3 text-right"><button className="text-sm font-medium text-primary-600">Save</button></td>
               </tr>
             </tbody>
           </table>
           <div className="p-4 bg-slate-50 text-xs text-slate-500 flex gap-2 items-center rounded-b-lg border-t border-slate-200">
             <Info className="w-4 h-4 text-slate-400" /> Changes made here reflect immediately on all new reporting formats.
           </div>
        </div>
      </div>
    </div>
  );
}
