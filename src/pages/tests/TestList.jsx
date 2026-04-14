import { Search, Plus } from 'lucide-react';

export default function TestList() {
  const dummyTests = [
    { code: 'CBC', name: 'Complete Blood Count', category: 'Hematology', sample: 'Whole Blood', price: '₹400' },
    { code: 'LIPID', name: 'Lipid Profile', category: 'Biochemistry', sample: 'Serum', price: '₹800' },
    { code: 'URIN', name: 'Urine Routine', category: 'Clinical Pathology', sample: 'Urine', price: '₹150' },
  ];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center border-b-2 border-slate-400 pb-1">
        <h1 className="text-lg font-bold text-slate-800 uppercase tracking-wide">Master Tests List</h1>
        <button className="flex items-center gap-1 px-2 py-1 bg-primary-600 border border-primary-800 text-xs font-semibold text-white hover:bg-primary-700 rounded-none">
          <Plus className="w-3 h-3" /> Add Test
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
                <th scope="col" className="px-3 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">Code</th>
                <th scope="col" className="px-3 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">Test Name</th>
                <th scope="col" className="px-3 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">Category</th>
                <th scope="col" className="px-3 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">Sample</th>
                <th scope="col" className="px-3 py-1 border-r border-slate-400 text-left text-xs font-bold text-slate-800 uppercase">Price</th>
                <th scope="col" className="px-3 py-1 text-center text-xs font-bold text-slate-800 uppercase">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
              {dummyTests.map((test, idx) => (
                <tr key={idx} className="hover:bg-blue-50">
                  <td className="px-3 py-1 border-r border-slate-300 text-xs text-primary-800">{test.code}</td>
                  <td className="px-3 py-1 border-r border-slate-300 text-xs font-semibold text-slate-900">{test.name}</td>
                  <td className="px-3 py-1 border-r border-slate-300 text-xs text-slate-700">{test.category}</td>
                  <td className="px-3 py-1 border-r border-slate-300 text-xs text-slate-700">{test.sample}</td>
                  <td className="px-3 py-1 border-r border-slate-300 text-xs text-slate-900">{test.price}</td>
                  <td className="px-3 py-1 text-center text-xs">
                    <button className="text-primary-700 hover:text-primary-900 underline mr-2">Edit</button>
                    <button className="text-danger hover:text-red-900 underline">Configure</button>
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
