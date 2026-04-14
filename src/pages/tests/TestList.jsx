import { Search, Plus } from 'lucide-react';

export default function TestList() {
  const dummyTests = [
    { code: 'CBC', name: 'Complete Blood Count', category: 'Hematology', sample: 'Whole Blood', price: '₹400' },
    { code: 'LIPID', name: 'Lipid Profile', category: 'Biochemistry', sample: 'Serum', price: '₹800' },
    { code: 'URIN', name: 'Urine Routine', category: 'Clinical Pathology', sample: 'Urine', price: '₹150' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-800">Master Tests List</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary-600 rounded-md text-sm font-medium text-white hover:bg-primary-700">
          <Plus className="w-4 h-4" /> Add Test
        </button>
      </div>

      <div className="bg-white shadow-sm border border-slate-200 rounded-lg overflow-hidden">
        <div className="p-4 border-b border-slate-200 flex gap-4 bg-slate-50">
          <div className="relative flex-1 max-w-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Search tests..."
              className="pl-10 w-full border-slate-300 rounded-md shadow-sm sm:text-sm focus:ring-primary-500 focus:border-primary-500 border p-2"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Code</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Test Name</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Category</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Sample</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Price (Base)</th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-slate-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
              {dummyTests.map((test, idx) => (
                <tr key={idx} className="hover:bg-slate-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary-600">{test.code}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">{test.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{test.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{test.sample}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">{test.price}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-primary-600 hover:text-primary-900 mr-3">Edit</button>
                    <button className="text-danger hover:text-red-900">Configure</button>
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
